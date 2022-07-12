import fetch, { Headers } from "node-fetch";
import Airtable from "airtable";

const getApprovedRecords = async () => {
   const base = new Airtable().base("appc14jHeQ2v7FhU9");
   const filterByFormula = "{status} = 'Approved'";
   const fields = [
      "organization",
      "report_type",
      "report_emails",
      "report_frequency",
      "source_code",
      "status",
   ];
   return base("Partners").select({ filterByFormula, fields }).all();
};

const actionKitURL = "https://ptp.actionkit.com";
const { ACTION_KIT_USERNAME, ACTION_KIT_PASSWORD } = process.env;

const getActionKitHeaders = () => {
   const headers = new Headers();
   const encodedCredentials = Buffer.from(
      `${ACTION_KIT_USERNAME}:${ACTION_KIT_PASSWORD}`
   ).toString("base64");
   headers.set("Authorization", `Basic ${encodedCredentials}`);
   headers.set("Content-Type", "application/json");
   return headers;
};

const checkStatus = (res) => {
   if (!res.ok) {
      throw new Error(`HTTP Error Response: ${res.status} ${res.statusText}`);
   }
};

const getPartnerReportList = async () => {
   const headers = getActionKitHeaders();
   const url = `${actionKitURL}/rest/v1/queryreport?categories__name=partners&_limit=100`;
   let res = await fetch(url, { headers });

   checkStatus(res);

   let jsonResponse = await res.json();
   let reportList = jsonResponse.objects;

   while (jsonResponse.meta.next) {
      res = await fetch(`${actionKitURL}${jsonResponse.meta.next}`, {
         headers,
      });
      checkStatus(res);
      jsonResponse = await res.json();
      reportList = reportList.concat(jsonResponse.objects);
   }

   return reportList;
};

const convertArray = (array) => array.map((code) => `'${code}'`).join(",");

const getSQL = (sourceCodes, isAggregate) => {
   // TODO: add aggregate report
   return isAggregate
      ? ``
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
         ORDER BY date_joined ASC`;
};

const createReport = async (
   organization,
   sourceCodes,
   isAggregate,
   frequency,
   emails
) => {
   const headers = getActionKitHeaders();

   const body = {
      name: organization,
      short_name: sourceCodes[0],
      description: sourceCodes[0],
      sql: getSQL(sourceCodes, isAggregate),
      categories: ["/rest/v1/reportcategory/18/"],
      email_always_csv: true,
      run_every: frequency,
      to_emails: emails.replace(" ", ""),
   };

   const res = await fetch(`${actionKitURL}/rest/v1/queryreport/`, {
      headers,
      method: "post",
      body: JSON.stringify(body),
   });

   checkStatus(res);
};

const run = async () => {
   // get all approved partners from airtable
   const approvedRecords = await getApprovedRecords();

   // get partner reports from ActionKit
   const reportList = await getPartnerReportList();

   // the reports use the primary source code in the description,
   // so we know which reports have already been created and avoid
   // duplicate reports.

   // TODO: find new partners

   // create report for new partners
   try {
      await createReport(
         "billy2",
         ["billy2"],
         false,
         "daily",
         "billy.laing@trestle.us, blaing@blaing.io"
      );
   } catch (e) {
      console.error(e);
   }

   console.log("done!");
};

run().catch((err) => console.error(err));
