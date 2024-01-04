import fetch, { Headers } from "node-fetch";
import Airtable from "airtable";

async function getApprovedRecords() {
   const { AIRTABLE_PARTNERS_BASE } = process.env;
   const base = new Airtable().base("appc14jHeQ2v7FhU9");
   const fields = [
      "organization",
      "report_type",
      "report_emails",
      "report_frequency",
      "source_code",
   ];
   return base("Election Administrators").select({ fields }).all();
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
   params.set("categories__name", "ea_reports");
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

const getSql = (State, Jurisdiction, JurisdictionType) => {
   if (JurisdictionType === "County") {
      qaS;
      const county = Jurisdiction.replace(" County", "");
      return `SELECT
   *
FROM
(
SELECT u.first_name
     , u.last_name
     , u.email
     , (SELECT coalesce(group_concat(phone ORDER BY core_phone.id DESC SEPARATOR ', '), '')
        FROM core_phone
        WHERE core_phone.user_id = u.id) AS phone
     , u.city
     , uf.value AS county
     , u.state
     , u.zip
     , coalesce((SELECT coalesce(group_concat(DISTINCT trim(value) ORDER BY value SEPARATOR ', '), '')
                 FROM core_action a
                 JOIN core_actionfield af ON a.id = af.parent_id
                 WHERE af.name = 'waitlist'
                   AND a.user_id = u.id), '') AS waitlist
     , coalesce((SELECT coalesce(group_concat(DISTINCT trim(value) ORDER BY value SEPARATOR ', '), '')
                 FROM core_action a
                 JOIN core_actionfield af ON a.id = af.parent_id
                 WHERE af.name = 'language'
                   AND a.user_id = u.id), '') AS languages
     , coalesce((SELECT max(DISTINCT uf.value)
                 FROM core_userfield uf
                 WHERE uf.name = 'tech_skills'
                   AND uf.parent_id = u.id), '') AS tech_skills
     , (SELECT coalesce(group_concat(DISTINCT trim(value) ORDER BY value SEPARATOR ', '), '')
        FROM core_action a
        JOIN core_actionfield af ON a.id = af.parent_id
        WHERE (af.name = 'travel' AND a.user_id = u.id)
        ) AS willing_to_travel
     , (SELECT coalesce(group_concat(DISTINCT trim(value) ORDER BY value SEPARATOR ', '), '')
        FROM core_action a
        JOIN core_actionfield af ON a.id = af.parent_id
        WHERE (af.name= 'travel_distance' AND a.user_id = u.id)) AS potential_travel_distance
     , (SELECT max(created_at)
        FROM core_action
        WHERE user_id = u.id) AS latest_action
     , (SELECT max(created_at)
        FROM core_action
        WHERE user_id = u.id
          AND page_id = 12) AS latest_signup
      FROM core_user AS u
      JOIN core_userfield uf ON u.id = uf.parent_id
      WHERE lower(u.state) = lower('${State}') AND uf.name = 'county' AND lower(uf.value) = lower('${county}')
      ORDER BY waitlist DESC, latest_signup DESC
) as innerTable WHERE waitlist = "Yes"`;
   }
   if (JurisdictionType === "City") {
      const city = Jurisdiction.replace(" (City)", "").replace(" (city)", "");
      return `SELECT
   *
FROM
(
SELECT u.first_name
     , u.last_name
     , u.email
     , (SELECT coalesce(group_concat(phone ORDER BY core_phone.id DESC SEPARATOR ', '), '')
        FROM core_phone
        WHERE core_phone.user_id = u.id) AS phone
     , u.city
     , uf.value AS county
     , u.state
     , u.zip
     , coalesce((SELECT coalesce(group_concat(DISTINCT trim(value) ORDER BY value SEPARATOR ', '), '')
                 FROM core_action a
                 JOIN core_actionfield af ON a.id = af.parent_id
                 WHERE af.name = 'waitlist'
                   AND a.user_id = u.id), '') AS waitlist
     , coalesce((SELECT coalesce(group_concat(DISTINCT trim(value) ORDER BY value SEPARATOR ', '), '')
                 FROM core_action a
                 JOIN core_actionfield af ON a.id = af.parent_id
                 WHERE af.name = 'language'
                   AND a.user_id = u.id), '') AS languages
     , coalesce((SELECT max(DISTINCT uf.value)
                 FROM core_userfield uf
                 WHERE uf.name = 'tech_skills'
                   AND uf.parent_id = u.id), '') AS tech_skills
     , (SELECT coalesce(group_concat(DISTINCT trim(value) ORDER BY value SEPARATOR ', '), '')
        FROM core_action a
        JOIN core_actionfield af ON a.id = af.parent_id
        WHERE (af.name = 'travel' AND a.user_id = u.id)
        ) AS willing_to_travel
     , (SELECT coalesce(group_concat(DISTINCT trim(value) ORDER BY value SEPARATOR ', '), '')
        FROM core_action a
        JOIN core_actionfield af ON a.id = af.parent_id
        WHERE (af.name= 'travel_distance' AND a.user_id = u.id)) AS potential_travel_distance
     , (SELECT max(created_at)
        FROM core_action
        WHERE user_id = u.id) AS latest_action
     , (SELECT max(created_at)
        FROM core_action
        WHERE user_id = u.id
          AND page_id = 12) AS latest_signup
      FROM core_user AS u
      JOIN core_userfield uf ON u.id = uf.parent_id
      WHERE lower(u.state) = lower('${State}') AND uf.name = 'county' AND lower(u.city) = lower('${city}')
      ORDER BY waitlist DESC, latest_signup DESC
) as innerTable WHERE waitlist = "Yes"`;
   }
   if (JurisdictionType === "State") {
      return `SELECT
   *
FROM
(
SELECT u.first_name
     , u.last_name
     , u.email
     , (SELECT coalesce(group_concat(phone ORDER BY core_phone.id DESC SEPARATOR ', '), '')
        FROM core_phone
        WHERE core_phone.user_id = u.id) AS phone
     , u.city
     , uf.value AS county
     , u.state
     , u.zip
     , coalesce((SELECT coalesce(group_concat(DISTINCT trim(value) ORDER BY value SEPARATOR ', '), '')
                 FROM core_action a
                 JOIN core_actionfield af ON a.id = af.parent_id
                 WHERE af.name = 'waitlist'
                   AND a.user_id = u.id), '') AS waitlist
     , coalesce((SELECT coalesce(group_concat(DISTINCT trim(value) ORDER BY value SEPARATOR ', '), '')
                 FROM core_action a
                 JOIN core_actionfield af ON a.id = af.parent_id
                 WHERE af.name = 'language'
                   AND a.user_id = u.id), '') AS languages
     , coalesce((SELECT max(DISTINCT uf.value)
                 FROM core_userfield uf
                 WHERE uf.name = 'tech_skills'
                   AND uf.parent_id = u.id), '') AS tech_skills
     , (SELECT coalesce(group_concat(DISTINCT trim(value) ORDER BY value SEPARATOR ', '), '')
        FROM core_action a
        JOIN core_actionfield af ON a.id = af.parent_id
        WHERE (af.name = 'travel' AND a.user_id = u.id)
        ) AS willing_to_travel
     , (SELECT coalesce(group_concat(DISTINCT trim(value) ORDER BY value SEPARATOR ', '), '')
        FROM core_action a
        JOIN core_actionfield af ON a.id = af.parent_id
        WHERE (af.name= 'travel_distance' AND a.user_id = u.id)) AS potential_travel_distance
     , (SELECT max(created_at)
        FROM core_action
        WHERE user_id = u.id) AS latest_action
     , (SELECT max(created_at)
        FROM core_action
        WHERE user_id = u.id
          AND page_id = 12) AS latest_signup
      FROM core_user AS u
      JOIN core_userfield uf ON u.id = uf.parent_id
      WHERE lower(u.state) = lower('${State}') AND uf.name = 'county'
      ORDER BY waitlist DESC, latest_signup DESC
) as innerTable WHERE waitlist = "Yes"`;
   }
   return "";
};

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
      name: `Power the Polls Report 2023: ${organization}`,
      short_name: `PowerThePolls-${sourceCodes[0]}-report-updated-fix-2023`,
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
