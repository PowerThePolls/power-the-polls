import fetch, { Headers } from "node-fetch";
import Airtable from "airtable";

const ACTION_KIT_URL = "https://ptp.actionkit.com";

let AK_HEADERS_CACHE;

const getActionKitHeaders = () => {
   if (!AK_HEADERS_CACHE) {
      AK_HEADERS_CACHE = new Headers();
      const { ACTION_KIT_USERNAME, ACTION_KIT_PASSWORD } = process.env;
      const encodedCredentials = Buffer.from(
         `${ACTION_KIT_USERNAME}:${ACTION_KIT_PASSWORD}`
      ).toString("base64");
      AK_HEADERS_CACHE.set("Authorization", `Basic ${encodedCredentials}`);
      AK_HEADERS_CACHE.set("Content-Type", "application/json");
   }
   return AK_HEADERS_CACHE;
};

const checkStatus = async (res) => {
   if (!res.ok) {
      const body = await res.text();
      throw new Error(
         `HTTP Error Response: ${res.status} ${res.statusText}. Body: ${body}`
      );
   }
};

const sanitizeEmails = (emails) => emails.replace(/\n/g, "").replace(/ /g, "");

const addEmail = (Emails) => `${sanitizeEmails(Emails)},kalynn@powerthepolls.org`;

const getSql = (State, Jurisdiction, JurisdictionType) => {
   if (JurisdictionType === "County") {
      const county = Jurisdiction.replace(" County", "")
      return `SELECT u.first_name
     , u.last_name
     , u.email
     , (SELECT coalesce(group_concat(phone ORDER BY core_phone.id DESC SEPARATOR ', '), '')
        FROM core_phone
        WHERE core_phone.user_id = u.id) AS phone
     , u.city
     , uf.value AS county
     , u.state
     , u.zip
     , if((SELECT DISTINCT user_id
           FROM core_action
           LEFT JOIN core_actionfield ca ON core_action.id = ca.parent_id
           WHERE user_id = u.id AND (page_id = 72
              OR (page_id = 80 AND ca.name = 'applied_2022' AND ca.value = 'I have completed my application'))) IS NOT NULL, 'Yes', '') AS applied_2022
     , if((SELECT value
           FROM core_userfield
           WHERE name = 'applied_2020'
             AND parent_id = u.id
             AND value = 'true')='true', 'Yes', '') AS applied_2020
     , coalesce((SELECT coalesce(group_concat(DISTINCT trim(value) ORDER BY value SEPARATOR ', '), '')
                 FROM core_action a
                 JOIN core_actionfield af ON a.id = af.parent_id
                 WHERE af.name = 'language'
                   AND a.user_id = u.id), '') AS languages
     , coalesce((SELECT max(DISTINCT uf.value)
                 FROM core_userfield uf
                 WHERE uf.name = 'tech_skills'
                   AND uf.parent_id = u.id), '') AS tech_skills
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
      ORDER BY latest_signup DESC`;
   }
   if (JurisdictionType === "City") {
      const city = Jurisdiction.replace(" (City)", "").replace(" (city)", "");
      return `SELECT u.first_name
     , u.last_name
     , u.email
     , (SELECT coalesce(group_concat(phone ORDER BY core_phone.id DESC SEPARATOR ', '), '')
        FROM core_phone
        WHERE core_phone.user_id = u.id) AS phone
     , u.city
     , uf.value AS county
     , u.state
     , u.zip
     , if((SELECT DISTINCT user_id
           FROM core_action
           LEFT JOIN core_actionfield ca ON core_action.id = ca.parent_id
           WHERE user_id = u.id AND (page_id = 72
              OR (page_id = 80 AND ca.name = 'applied_2022' AND ca.value = 'I have completed my application'))) IS NOT NULL, 'Yes', '') AS applied_2022
     , if((SELECT value
           FROM core_userfield
           WHERE name = 'applied_2020'
             AND parent_id = u.id
             AND value = 'true')='true', 'Yes', '') AS applied_2020
     , coalesce((SELECT coalesce(group_concat(DISTINCT trim(value) ORDER BY value SEPARATOR ', '), '')
                 FROM core_action a
                 JOIN core_actionfield af ON a.id = af.parent_id
                 WHERE af.name = 'language'
                   AND a.user_id = u.id), '') AS languages
     , coalesce((SELECT max(DISTINCT uf.value)
                 FROM core_userfield uf
                 WHERE uf.name = 'tech_skills'
                   AND uf.parent_id = u.id), '') AS tech_skills
     , (SELECT max(created_at)
        FROM core_action
        WHERE user_id = u.id) AS latest_action
     , (SELECT max(created_at)
        FROM core_action
        WHERE user_id = u.id
          AND page_id = 12) AS latest_signup
      FROM core_user AS u
      JOIN core_userfield uf ON u.id = uf.parent_id
      WHERE uf.name = 'county' AND lower(u.state) = lower('${State}') AND lower(u.city) = lower('${city}') 
      ORDER BY latest_signup DESC;`;
   }
   if (JurisdictionType === "State") {
      return `SELECT u.first_name
     , u.last_name
     , u.email
     , (SELECT coalesce(group_concat(phone ORDER BY core_phone.id DESC SEPARATOR ', '), '')
        FROM core_phone
        WHERE core_phone.user_id = u.id) AS phone
     , u.city
     , uf.value AS county
     , u.state
     , u.zip
     , if((SELECT DISTINCT user_id
           FROM core_action
           LEFT JOIN core_actionfield ca ON core_action.id = ca.parent_id
           WHERE user_id = u.id AND (page_id = 72
              OR (page_id = 80 AND ca.name = 'applied_2022' AND ca.value = 'I have completed my application'))) IS NOT NULL, 'Yes', '') AS applied_2022
     , if((SELECT value
           FROM core_userfield
           WHERE name = 'applied_2020'
             AND parent_id = u.id
             AND value = 'true')='true', 'Yes', '') AS applied_2020
     , coalesce((SELECT coalesce(group_concat(DISTINCT trim(value) ORDER BY value SEPARATOR ', '), '')
                 FROM core_action a
                 JOIN core_actionfield af ON a.id = af.parent_id
                 WHERE af.name = 'language'
                   AND a.user_id = u.id), '') AS languages
     , coalesce((SELECT max(DISTINCT uf.value)
                 FROM core_userfield uf
                 WHERE uf.name = 'tech_skills'
                   AND uf.parent_id = u.id), '') AS tech_skills
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
      ORDER BY latest_signup DESC
      `;
   }
   return "";
};

const getBody = ({ State, Jurisdiction, JurisdictionType, Emails }) => {
   // unique key for report!
   const slug = `${Jurisdiction.replace("(City)", "").replace("(city)", "").replace(/ /g, "")}${State}`;

   // "admin reports" category
   const categories = ["/rest/v1/reportcategory/19/"];

   // sql for report
   const sql = getSql(State, Jurisdiction, JurisdictionType);

   return {
      name: `Power The Polls Report: ${Jurisdiction}, ${State}`,
      short_name: `PowerThePolls-${slug}`,
      description: slug,
      to_emails: addEmail(Emails),
      emails_always_csv: true,
      send_if_no_rows: false,
      run_every: "weekly",
      run_weekday: 5, // friday
      run_hour: 14, // 1430 GMT so 1030 EST
      categories,
      sql,
   };
};

const createReport = async (body) => {
   const headers = getActionKitHeaders();
   const res = await fetch(`${ACTION_KIT_URL}/rest/v1/queryreport/`, {
      body: JSON.stringify(body),
      headers,
      method: "post",
   });
   await checkStatus(res);
};

const getReportConfig = (report) => report.fields;

const getWeeklyReports = async () => {
   const { AIRTABLE_PARTNERS_BASE } = process.env;
   const base = new Airtable().base(AIRTABLE_PARTNERS_BASE);
   return base("Admin Reports")
      .select({
         filterByFormula: "{ReportRequested}",
         fields: ["State", "Jurisdiction", "JurisdictionType", "Emails"],
      })
      .all();
};

const run = async () => {
   // get list of weekly reports
   const rawReports = await getWeeklyReports();
   const reports = rawReports.map(getReportConfig);
   console.log(JSON.stringify(reports, null, 2));

   // iterate over reports and create in actionkit
   for (const report of reports) {
      try {
         await createReport(getBody(report));
      } catch (e) {
         console.error(e);
      }
   }
};

run()
   .then(() => {
      console.log("Done creating admin reports");
      process.exit(0);
   })
   .catch((e) => {
      console.error(e);
      process.exit(11);
   });
