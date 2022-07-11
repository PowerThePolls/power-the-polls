import fetch, { Headers } from "node-fetch";
import Airtable from "airtable";

const base = new Airtable().base("appc14jHeQ2v7FhU9");
const actionKitURL = "https://ptp.actionkit.com";
const { ACTION_KIT_USERNAME, ACTION_KIT_PASSWORD } = process.env;

const getApprovedRecords = async () => {
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

const getPartnerReportList = async () => {
   const headers = new Headers();
   const encodedCredentials = Buffer.from(
      `${ACTION_KIT_USERNAME}:${ACTION_KIT_PASSWORD}`
   ).toString("base64");
   headers.set("Authorization", `Basic ${encodedCredentials}`);

   const url = `${actionKitURL}/rest/v1/queryreport?categories__name=partners&_limit=100`;
   let res = await fetch(url, { headers });

   if (!res.ok) {
      throw new Error(
         `HTTP Error Response: ${res.status} ${res.statusText}`
      );
   }

   let jsonResponse = await res.json();
   let reportList = jsonResponse.objects;

   while (jsonResponse.meta.next) {
      res = await fetch(`${actionKitURL}${jsonResponse.meta.next}`, {
         headers,
      });
      if (!res.ok) {
         throw new Error(
            `HTTP Error Response: ${res.status} ${res.statusText}`
         );
      }
      jsonResponse = await res.json();
      reportList = reportList.concat(jsonResponse.objects);
   }

   return reportList;
};

const run = async () => {
   // get all approved partners
   const approvedRecords = await getApprovedRecords();

   // approvedRecords.forEach(({ fields }) =>
   //    console.log(JSON.stringify(fields, null, 2))
   // );

   // get partner reports from ActionKit
   const reportList = await getPartnerReportList();

   // find new partners


   // create report for new partners
};

run().catch((err) => console.error(err));
