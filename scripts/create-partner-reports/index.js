import fetch, { Headers } from "node-fetch";
import Airtable from "airtable";

async function getApprovedRecords() {
   const base = new Airtable().base("appc14jHeQ2v7FhU9");
   // add filter for 2024 reports
   const filterByFormula = "{2024_reports_enabled} = 'Approved'";
   const fields = [
      "organization",
      "report_type",
      "report_emails",
      "report_frequency",
      "source_code",
   ];
   return base("Partners").select({ filterByFormula, fields }).all();
}

const actionKitURL = "https://ptp.actionkit.com";

function getActionKitHeaders() {
   const { ACTION_KIT_USERNAME, ACTION_KIT_PASSWORD } = process.env;
   const headers = new Headers();
   const encodedCredentials = Buffer.from(
      `${ACTION_KIT_USERNAME}:${ACTION_KIT_PASSWORD}`,
   ).toString("base64");
   headers.set("Authorization", `Basic ${encodedCredentials}`);
   headers.set("Content-Type", "application/json");
   return headers;
}

async function checkStatus(res) {
   if (!res.ok) {
      const body = await res.text();
      throw new Error(
         `HTTP Error Response: ${res.status} ${res.statusText}. Body: ${body}`,
      );
   }
}

async function callActionKit(path, method = "get", body) {
   const headers = getActionKitHeaders();
   const url = `${actionKitURL}${path}`;
   const res = await fetch(url, { headers, method, body });
   await checkStatus(res);
   return method === "get" ? res.json() : {};
}

function getParams() {
   const params = new URLSearchParams();
   params.set("_limit", "100");
   params.set("categories__name", "partners");
   return params.toString();
}

async function getPartnerReportList() {
   let response = await callActionKit(`/rest/v1/queryreport?${getParams()}`);
   let reportList = response.objects;
   while (response.meta.next) {
      response = await callActionKit(response.meta.next);
      reportList = reportList.concat(response.objects);
   }
   return reportList;
}

function getSQL(sourceCodes, isAggregate) {
   // language=MySQL
   return isAggregate
      ? `SELECT count(1) AS signups
              , 'ALL' AS state
              , sign_ups.source
         FROM core_user
         JOIN (SELECT user_id
                    , source
                    , min(created_at) AS created_at
               FROM core_action
               WHERE lower(source) IN (${convertArray(sourceCodes)})
                 AND created_at > date('2019-12-31')
               GROUP BY user_id, source) sign_ups
         ON core_user.id = sign_ups.user_id
         UNION
         (SELECT count(1) AS signups
               , core_user.state
               , sign_ups.source
          FROM core_user
          JOIN (SELECT user_id
                     , source
                     , min(created_at) AS created_at
                FROM core_action
                WHERE lower(source) IN (${convertArray(sourceCodes)})
                  AND created_at > date('2019-12-31')
                GROUP BY user_id, source) sign_ups
          ON core_user.id = sign_ups.user_id
          GROUP BY core_user.state, sign_ups.source
          ORDER BY core_user.state, sign_ups.source)
ORDER BY
case when state = 'ALL' then 0 else 1 end,
  state;`
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
           , (SELECT max(core_action.created_at)
               from core_action
             join core_page on core_action.page_id = core_page.id
             where core_action.status = 'complete' and core_page.type not in ('Import') AND user_id = core_user.id) AS latest_action
, (SELECT(IF(core_user.subscription_status = "subscribed", "Yes", "No"))) as currently_subscribed
              , (SELECT(IF(completed.user_id IS NOT NULL, "Yes", "No"))) as completed_poll_worker_application
        FROM core_user
      LEFT JOIN (
              SELECT DISTINCT user_id
              FROM core_action
              JOIN core_actionfield ca ON core_action.id = ca.parent_id
              WHERE core_action.status = 'complete' AND (page_id = 143) OR (page_id = 141)) as completed ON core_user.id = completed.user_id
      LEFT JOIN (
              SELECT DISTINCT core_user_groups.user_id
              FROM core_user_groups
              WHERE core_user_groups.usergroup_id in ( 22 )) as hostile ON core_user.id = hostile.user_id
         JOIN (SELECT user_id
                    , source
                    , min(created_at) AS created_at
               FROM core_action
               WHERE lower(source) IN (${convertArray(sourceCodes)})
                 AND created_at > date('2019-12-31')
               GROUP BY user_id, source) sign_ups
         ON core_user.id = sign_ups.user_id
WHERE hostile.user_id IS NULL
         ORDER BY date_joined DESC`;
}

function convertArray(array) {
   return array.map((code) => `'${code.toLowerCase()}'`).join(",");
}

function isAggregate(partner) {
   return !partner.get("report_type").startsWith("List");
}

function getFrequency(partner) {
   return partner.get("report_frequency").toLowerCase();
}

function hasReportEmails(partner) {
   return partner.get("report_emails").replace(/ /g, "").length;
}

function sanitizeEmails(emails) {
   return emails.replace(/\n/g, "").replace(/ /g, "");
}

function getBody({
   organization,
   sourceCodes,
   isAggregate,
   frequency,
   emails,
}) {
   return {
      name: `Power the Polls Report 2024: ${organization}`,
      short_name: `PowerThePolls-${sourceCodes[0]}-report-2024`,
      description: sourceCodes[0],
      sql: getSQL(sourceCodes, isAggregate),
      run_every: frequency,
      to_emails: emails.replace(/ /g, ""),
      email_always_csv: true,
      send_if_no_rows: false,
      categories: ["/rest/v1/reportcategory/18/"],
   };
}

async function createReport(reportConfig) {
   const body = getBody(reportConfig);
   await callActionKit("/rest/v1/queryreport/", "post", JSON.stringify(body));
}

function getReportConfig(partner) {
   return {
      organization: partner.get("organization").trim(),
      sourceCodes: [partner.get("source_code").trim()],
      isAggregate: isAggregate(partner),
      frequency: getFrequency(partner),
      emails: sanitizeEmails(partner.get("report_emails")),
   };
}

function logPartners(partners) {
   const sourceCodes = partners.map((partner) => partner.get("source_code"));
   console.log(JSON.stringify(sourceCodes, null, 2));
}

async function createNewReports(approvedPartners, reportList) {
   let errorThrown = false;

   const newPartners = approvedPartners.filter((partner) => {
      const found = reportList.find(
         (report) => report.description === partner.get("source_code"),
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
            partner.get("organization"),
         );
      }
   }
   return errorThrown;
}

function isModified(partner, report) {
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
}

async function updateReport(reportId, reportConfig) {
   const body = getBody(reportConfig);
   await callActionKit(
      `/rest/v1/queryreport/${reportId}`,
      "patch",
      JSON.stringify(body),
   );
}

async function updateModifiedReports(approvedPartners, reportList) {
   let errorThrown = false;

   const modifiedPartners = approvedPartners.reduce((modified, partner) => {
      const report = reportList.find(
         (report) => report.description === partner.get("source_code"),
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
}

async function run() {
   // get all approved partners from airtable
   const approvedRecords = await getApprovedRecords();

   // get partner reports from ActionKit
   const reportList = await getPartnerReportList();

   // create new reports
   const creatErrorThrown = await createNewReports(approvedRecords, reportList);

   // update modified reports
   const updateErrorThrown = await updateModifiedReports(
      approvedRecords,
      reportList,
   );

   if (creatErrorThrown || updateErrorThrown) {
      throw new Error("Error during report sync!");
   }
}

try {
   await run();
   console.log("Done creating reports");
   process.exit(0);
} catch (e) {
   console.error(e);
   process.exit(11);
}
