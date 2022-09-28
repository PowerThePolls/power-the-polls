import fetch, { Headers } from "node-fetch";
import Airtable from "airtable";

const getApprovedRecords = async () => {
   const { AIRTABLE_PARTNERS_BASE } = process.env;
   const base = new Airtable().base(AIRTABLE_PARTNERS_BASE);
   const filterByFormula = "{report_status} = 'Approved'";
   const fields = [
      "organization",
      "report_type",
      "report_emails",
      "report_frequency",
      "source_code",
   ];
   return base("Partners").select({ filterByFormula, fields }).all();
};

const actionKitURL = "https://ptp.actionkit.com";

const getActionKitHeaders = () => {
   const { ACTION_KIT_USERNAME, ACTION_KIT_PASSWORD } = process.env;
   const headers = new Headers();
   const encodedCredentials = Buffer.from(
      `${ACTION_KIT_USERNAME}:${ACTION_KIT_PASSWORD}`
   ).toString("base64");
   headers.set("Authorization", `Basic ${encodedCredentials}`);
   headers.set("Content-Type", "application/json");
   return headers;
};

const checkStatus = async (res) => {
   if (!res.ok) {
      const body = await res.text();
      throw new Error(
         `HTTP Error Response: ${res.status} ${res.statusText}. Body: ${body}`
      );
   }
};

const getPartnerReportList = async () => {
   const headers = getActionKitHeaders();
   const url = `${actionKitURL}/rest/v1/queryreport?categories__name=partners&_limit=100`;
   let res = await fetch(url, { headers });

   await checkStatus(res);

   let jsonResponse = await res.json();
   let reportList = jsonResponse.objects;

   while (jsonResponse.meta.next) {
      res = await fetch(`${actionKitURL}${jsonResponse.meta.next}`, {
         headers,
      });
      await checkStatus(res);
      jsonResponse = await res.json();
      reportList = reportList.concat(jsonResponse.objects);
   }

   return reportList;
};

const convertArray = (array) =>
   array.map((code) => `'${code.toLowerCase()}'`).join(",");

const getSQL = (sourceCodes, isAggregate) => {
   // language=MySQL
   return isAggregate
      ? `SELECT count(1) AS signups
              , 'ALL' AS state
              , 'ALL' AS city
              , sign_ups.source
         FROM core_user
         JOIN (SELECT user_id
                    , source
                    , min(created_at) AS created_at
               FROM core_action
               WHERE lower(source) IN (${convertArray(sourceCodes)})
                 AND created_at > date('2020-12-31')
               GROUP BY user_id, source) sign_ups
         ON core_user.id = sign_ups.user_id
         UNION
         (SELECT count(1) AS signups
               , core_user.state
               , core_user.city
               , sign_ups.source
          FROM core_user
          JOIN (SELECT user_id
                     , source
                     , min(created_at) AS created_at
                FROM core_action
                WHERE lower(source) IN (${convertArray(sourceCodes)})
                  AND created_at > date('2020-12-31')
                GROUP BY user_id, source) sign_ups
          ON core_user.id = sign_ups.user_id
          GROUP BY core_user.state, core_user.city, sign_ups.source
          ORDER BY core_user.state, core_user.city, sign_ups.source)`
      : `SELECT sign_ups.created_at AS date_joined
              , core_user.first_name
              , core_user.last_name
              , core_user.email
              , (SELECT coalesce(
                                group_concat(
                                        phone ORDER BY core_phone.id DESC SEPARATOR ', '
                                    ),
                                ''
                            )
                 FROM core_phone
                 WHERE core_phone.user_id = core_user.id) AS phone
              , core_user.city
              , core_user.state
              , if(core_user.zip,
                   concat_ws('-', core_user.zip,
                             if(length(core_user.plus4), core_user.plus4, NULL)),
                   core_user.postal) AS zip
              , (SELECT group_concat(core_userfield.value SEPARATOR ', ')
                 FROM core_userfield
                 WHERE core_userfield.parent_id = core_user.id
                   AND core_userfield.name = 'county') AS county
              , sign_ups.source
              , (SELECT group_concat(core_userfield.value SEPARATOR ', ')
                 FROM core_userfield
                 WHERE core_userfield.parent_id = core_user.id
                   AND core_userfield.name = 'partner_field') AS partner_field
         FROM core_user
         JOIN (SELECT user_id
                    , source
                    , min(created_at) AS created_at
               FROM core_action
               WHERE lower(source) IN (${convertArray(sourceCodes)})
                 AND created_at > date('2020-12-31')
               GROUP BY user_id, source) sign_ups
         ON core_user.id = sign_ups.user_id
         ORDER BY date_joined`;
};

const isAggregate = (partner) => !partner.get("report_type").startsWith("List");

const getFrequency = (partner) => partner.get("report_frequency").toLowerCase();

const hasReportEmails = (partner) =>
   partner.get("report_emails").replace(/ /g, "").length;

const sanitizeEmails = (emails) => emails.replace(/\n/g, "").replace(/ /g, "");

const getBody = ({
   organization,
   sourceCodes,
   isAggregate,
   frequency,
   emails,
}) => {
   return {
      name: `Power The Polls Report: ${organization}`,
      short_name: `PowerThePolls-${sourceCodes[0]}`,
      description: sourceCodes[0],
      sql: getSQL(sourceCodes, isAggregate),
      run_every: frequency,
      to_emails: emails.replace(/ /g, ""),
      email_always_csv: true,
      send_if_no_rows: false,
      categories: ["/rest/v1/reportcategory/18/"],
   };
};

const createReport = async (reportConfig) => {
   const headers = getActionKitHeaders();
   const body = JSON.stringify(getBody(reportConfig));
   const res = await fetch(`${actionKitURL}/rest/v1/queryreport/`, {
      method: "post",
      headers,
      body,
   });
   await checkStatus(res);
};

const getReportConfig = (partner) => ({
   organization: partner.get("organization").trim(),
   sourceCodes: [partner.get("source_code").trim()],
   isAggregate: isAggregate(partner),
   frequency: getFrequency(partner),
   emails: sanitizeEmails(partner.get("report_emails")),
});

const logPartners = (partners) => {
   console.log(
      JSON.stringify(
         partners.map((partner) => partner.get("source_code")),
         null,
         2
      )
   );
};

const createNewReports = async (approvedPartners, reportList) => {
   let errorThrown = false;

   const newPartners = approvedPartners.filter((partner) => {
      const found = reportList.find(
         (report) => report.description === partner.get("source_code")
      );
      return !found;
   });

   console.log("New Reports:");
   logPartners(newPartners);

   for (const partner of newPartners) {
      // create report for new partners
      if (hasReportEmails(partner)) {
         try {
            await createReport(getReportConfig(partner));
            console.log("Report created for: ", partner.get("organization"));
         } catch (e) {
            errorThrown = true;
            console.log("Error processing: ", partner.get("organization"));
            console.error(e);
         }
      } else {
         console.log(
            "No report emails found for: ",
            partner.get("organization")
         );
      }
   }
   return errorThrown;
};

const isModified = (partner, report) => {
   const body = getBody(getReportConfig(partner));

   const {
      name,
      short_name,
      description,
      sql,
      run_every,
      to_emails,
      email_always_csv,
      send_if_no_rows,
      categories,
   } = report;

   const reportBody = {
      name,
      short_name,
      description,
      sql,
      run_every,
      to_emails,
      email_always_csv,
      send_if_no_rows,
      categories,
   };
   return JSON.stringify(body) !== JSON.stringify(reportBody);
};

const updateReport = async (reportId, reportConfig) => {
   const headers = getActionKitHeaders();
   const body = getBody(reportConfig);
   const res = await fetch(`${actionKitURL}/rest/v1/queryreport/${reportId}`, {
      method: "patch",
      headers,
      body: JSON.stringify(body),
   });

   await checkStatus(res);
};

const updateModifiedReports = async (approvedPartners, reportList) => {
   let errorThrown = false;

   const modifiedPartners = approvedPartners.reduce((modified, partner) => {
      const report = reportList.find(
         (report) => report.description === partner.get("source_code")
      );
      if (!report || !isModified(partner, report)) {
         return modified;
      }
      partner.report_id = report.id;
      return [...modified, partner];
   }, []);

   console.log("Modified Reports:");
   logPartners(modifiedPartners);

   for (const partner of modifiedPartners) {
      try {
         await updateReport(partner.report_id, getReportConfig(partner));
      } catch (e) {
         errorThrown = true;
         console.error(e);
      }
   }

   return errorThrown;
};

const run = async () => {
   // get all approved partners from airtable
   const approvedRecords = await getApprovedRecords();

   // get partner reports from ActionKit
   const reportList = await getPartnerReportList();

   // create new reports
   const creatErrorThrown = await createNewReports(approvedRecords, reportList);

   // update modified reports
   const updateErrorThrown = await updateModifiedReports(
      approvedRecords,
      reportList
   );

   if (creatErrorThrown || updateErrorThrown) {
      throw new Error("Error during report sync!");
   }
};

run()
   .then(() => {
      console.log("Done creating reports");
      process.exit(0);
   })
   .catch((err) => {
      console.error(err);
      process.exit(11);
   });
