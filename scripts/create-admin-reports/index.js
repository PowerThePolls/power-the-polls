import fetch, { Headers } from "node-fetch";
import Airtable from "airtable";

async function getApprovedRecords() {
   const base = new Airtable().base("appwfzqCbSifnwrme");
   const fields = [
      "State",
      "Jurisdiction Name",
      "Jurisdiction Type",
      "Emails",
      "report_frequency",
      "Report Requested",
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
   params.set("categories__name", "election admin");
   return params.toString();
}

async function getAdminReportList() {
   let response = await callActionKit(`/rest/v1/queryreport?${getParams()}`);
   let reportList = response.objects;
   while (response.meta.next) {
      response = await callActionKit(response.meta.next);
      reportList = reportList.concat(response.objects);
   }
   return reportList;
}

function getSQL(jurisdictionName, state, jurisdictionType) {
   // language=MySQL
   if (jurisdictionType == "County") {
      return `SELECT u.first_name
     , u.last_name
     , u.email
     , (SELECT coalesce(group_concat(phone ORDER BY core_phone.id DESC SEPARATOR ', '), '')
        FROM core_phone
        WHERE core_phone.user_id = u.id) AS phone
     , u.city
     , uf.value as county
     , u.state
     , u.zip
     , coalesce((SELECT coalesce(group_concat(DISTINCT TRIM(value) ORDER BY value SEPARATOR ', '), '')
                 FROM core_action a
                 JOIN core_actionfield af ON a.id = af.parent_id
                 WHERE af.name = 'language'
                   AND a.user_id = u.id), '') AS languages
     , coalesce((SELECT max(DISTINCT uf.value)
                 FROM core_userfield uf
                 WHERE uf.name = 'tech_skills'
                   AND uf.parent_id = u.id), '') AS tech_skills
    , (SELECT CAST(max(created_at) AS DATE)
        FROM core_action
        WHERE user_id = u.id
          AND page_id = 12) AS signup_date
FROM core_user AS u
JOIN core_userfield uf ON u.id = uf.parent_id
WHERE lower(u.state) = lower(\"${state}\") AND uf.name = 'county' AND lower(uf.value) = lower(\"${jurisdictionName}\") AND date_sub(current_timestamp(), interval 1 week) <= u.created_at
ORDER BY signup_date DESC`;
   } else if (jurisdictionType == "City") {
      return `SELECT u.first_name
     , u.last_name
     , u.email
     , (SELECT coalesce(group_concat(phone ORDER BY core_phone.id DESC SEPARATOR ', '), '')
        FROM core_phone
        WHERE core_phone.user_id = u.id) AS phone
     , u.city
     , uf.value as county
     , u.state
     , u.zip
     , coalesce((SELECT coalesce(group_concat(DISTINCT TRIM(value) ORDER BY value SEPARATOR ', '), '')
                 FROM core_action a
                 JOIN core_actionfield af ON a.id = af.parent_id
                 WHERE af.name = 'language'
                   AND a.user_id = u.id), '') AS languages
     , coalesce((SELECT max(DISTINCT uf.value)
                 FROM core_userfield uf
                 WHERE uf.name = 'tech_skills'
                   AND uf.parent_id = u.id), '') AS tech_skills
    , (SELECT CAST(max(created_at) AS DATE)
        FROM core_action
        WHERE user_id = u.id
          AND page_id = 12) AS signup_date
FROM core_user AS u
JOIN core_userfield uf ON u.id = uf.parent_id
WHERE uf.name = 'county' AND lower(u.state) = lower(\"${state}\") AND lower(u.city) = lower(\"${jurisdictionName}\") AND date_sub(current_timestamp(), interval 1 week) <= u.created_at
ORDER BY signup_date DESC`;
   } else {
      return `SELECT u.first_name
     , u.last_name
     , u.email
     , (SELECT coalesce(group_concat(phone ORDER BY core_phone.id DESC SEPARATOR ', '), '')
        FROM core_phone
        WHERE core_phone.user_id = u.id) AS phone
     , u.city
     , uf.value as county
     , u.state
     , u.zip
     , coalesce((SELECT coalesce(group_concat(DISTINCT TRIM(value) ORDER BY value SEPARATOR ', '), '')
                 FROM core_action a
                 JOIN core_actionfield af ON a.id = af.parent_id
                 WHERE af.name = 'language'
                   AND a.user_id = u.id), '') AS languages
     , coalesce((SELECT max(DISTINCT uf.value)
                 FROM core_userfield uf
                 WHERE uf.name = 'tech_skills'
                   AND uf.parent_id = u.id), '') AS tech_skills
    , (SELECT CAST(max(created_at) AS DATE)
        FROM core_action
        WHERE user_id = u.id
          AND page_id = 12) AS signup_date
FROM core_user AS u
JOIN core_userfield uf ON u.id = uf.parent_id
WHERE lower(u.state) = lower(\"${state}\") AND uf.name = 'county' AND date_sub(current_timestamp(), interval 1 week) <= u.created_at
ORDER BY signup_date DESC`;
   }
}

function convertArray(array) {
   return array.map((code) => `'${code.toLowerCase()}'`).join(",");
}

function getFrequency(admin) {
   return admin.get("report_frequency").toLowerCase();
}

function hasReportEmails(admin) {
   return admin.get("Emails").replace(/ /g, "").length;
}

function sanitizeEmails(emails) {
   return emails.replace(/\n/g, "").replace(/ /g, "");
}

function getBody({
   state,
   jurisdictionName,
   jurisdictionType,
   frequency,
   emails,
}) {
   var name;
   var description;
   var shortName;

   if (jurisdictionType == "State") {
      name = `Power the Polls Election Admin Report: ${state}`;
      description = `election admin report for ${state}`;
      shortName = `election-admin-report-2024-${state}`;
   } else {
      name = `Power the Polls Election Admin Report: ${jurisdictionName} ${jurisdictionType}`;
      description = `election admin report for ${jurisdictionName} ${jurisdictionType}`;
      shortName = `election-admin-report-2024-${jurisdictionName.replace(
         /\s/g,
         "",
      )}-${jurisdictionType}`;
   }
   return {
      name: name,
      short_name: shortName,
      description: description,
      sql: getSQL(jurisdictionName, state, jurisdictionType),
      run_every: frequency,
      to_emails: emails.replace(/ /g, ""),
      email_always_csv: true,
      send_if_no_rows: false,
      categories: ["/rest/v1/reportcategory/22/", "/rest/v1/reportcategory/24/"],
   };
}

async function createReport(reportConfig) {
   const body = getBody(reportConfig);
   await callActionKit("/rest/v1/queryreport/", "post", JSON.stringify(body));
}

function getReportConfig(admin) {
   return {
      state: admin.get("State"),
      jurisdictionName: admin.get("Jurisdiction Name"),
      jurisdictionType: admin.get("Jurisdiction Type"),
      frequency: getFrequency(admin),
      emails: sanitizeEmails(admin.get("Emails")),
   };
}

function logAdmins(admin) {
   const sourceCodes = admin.map((admin) => admin.get("Jurisdiction Name"));
   console.log(JSON.stringify(sourceCodes, null, 2));
}

async function createNewReports(approvedAdmins, reportList) {
   let errorThrown = false;

   const newAdmins = approvedAdmins.filter((admin) => {
      const found = reportList.find(
         (report) => report.description === admin.get("Jurisdiction Name"),
      );
      return !found;
   });

   console.log("New Reports:");
   logAdmins(newAdmins);

   for (const admin of newAdmins) {
      // create report for new admins
      if (hasReportEmails(admin)) {
         try {
            await createReport(getReportConfig(admin));
            console.log("Report created for: ", admin.get("Jurisdiction Name"));
         } catch (e) {
            errorThrown = true;
            console.log("Error processing: ", admin.get("Jurisdiction Name"));
            console.error(e);
         }
      } else {
         console.log("No report emails found for: ", admin.get("Jurisdiction Name"));
      }
   }
   return errorThrown;
}

function isModified(admin, report) {
   const body1 = getBody(getReportConfig(admin));
   const body2 = getBody(report);
   return JSON.stringify(body1) !== JSON.stringify(body2);
}

async function updateReport(reportId, reportConfig) {
   const body = getBody(reportConfig);
   await callActionKit(
      `/rest/v1/queryreport/${reportId}`,
      "patch",
      JSON.stringify(body),
   );
}

async function updateModifiedReports(approvedAdmins, reportList) {
   let errorThrown = false;

   const modifiedAdmins = approvedAdmins.reduce((modified, admin) => {
      const report = reportList.find(
         (report) => report.description === admin.get("Jurisdiction Name"),
      );
      if (!report || !isModified(admin, report)) {
         return modified;
      }
      admin.report_id = report.id;
      return [...modified, admin];
   }, []);

   console.log("Modified Reports:");
   logAdmins(modifiedAdmins);

   for (const admin of modifiedAdmins) {
      try {
         await updateReport(admin.report_id, getReportConfig(admin));
      } catch (e) {
         errorThrown = true;
         console.error(e);
      }
   }

   return errorThrown;
}

async function run() {
   // get all approved admins from airtable
   const approvedRecords = await getApprovedRecords();

   // get admin reports from ActionKit
   const reportList = await getAdminReportList();

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
