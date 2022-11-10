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

const addEmail = (Emails) =>
   `${sanitizeEmails(Emails)},kay@powerthepolls.org,sage@powerthepolls.org`;

const getSql = (State, Jurisdiction, JurisdictionType) => {
   if (JurisdictionType === "County") {
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

const getBody = ({ State, Jurisdiction, JurisdictionType, Emails }) => {
   // unique key for report!
   const slug = `${Jurisdiction.replace("(City)", "")
      .replace("(city)", "")
      .replace(/ /g, "")}${State}`;

   // "admin reports" category
   const categories = ["/rest/v1/reportcategory/19/"];

   // sql for report
   const sql = getSql(State, Jurisdiction, JurisdictionType);

   return {
      name: `Power The Polls Report: Waitlist for ${Jurisdiction}, ${State}`,
      short_name: `PowerThePolls-admin-waitlist-${slug}`,
      description: slug,
      to_emails: addEmail(Emails),
      email_always_csv: true,
      send_if_no_rows: false,
      run_every: "weekly",
      run_weekday: 5, // Friday
      run_hour: 11, // 11GMT -> 7AM Eastern
      categories,
      sql,
   };
};

const createReport = async (reportConfig) => {
   const headers = getActionKitHeaders();
   const body = getBody(reportConfig);
   const res = await fetch(`${ACTION_KIT_URL}/rest/v1/queryreport/`, {
      body: JSON.stringify(body),
      headers,
      method: "post",
   });
   await checkStatus(res);
};

const getReportConfig = (report) => report.fields;

const getWeeklyReports = async () => {
   const { AIRTABLE_ADMIN_REPORTS_BASE } = process.env;
   const base = new Airtable().base(AIRTABLE_ADMIN_REPORTS_BASE);
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
         await createReport(report);
         console.log(`created report for ${report.Jurisdiction}`);
      } catch (e) {
         console.error(e);
      }
   }
};

try {
   await run();
   console.log("Done creating admin reports");
   process.exit(0);
} catch (e) {
   console.error(e);
   process.exit(11);
}