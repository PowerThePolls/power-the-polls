import fetch, { Headers } from "node-fetch";
import Airtable from "airtable";

const base = new Airtable().base("appc14jHeQ2v7FhU9");
const actionKitURL = "https://ptp.actionkit.com/rest";
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

const getActionKitReportList = async () => {
   const headers = new Headers();
   headers.set(
      "Authorization",
      `Basic ${Buffer.from(
         `${ACTION_KIT_USERNAME}:${ACTION_KIT_PASSWORD}`
      ).toString("base64")}`
   );

   const res = await fetch(
      `${actionKitURL}/v1/queryreport?categories__name=partners&_limit=100`,
      {
         headers,
      }
   );

   if (!res.ok) {
      throw new Error(
         `HTTP Error Response: ${response.status} ${response.statusText}`
      );
   }

   const response = await res.json();
   if (response.meta.next) {
      throw new Error("More than 100 reports returned!!!");
   }

   return response.objects;
};

const run = async () => {
   // get all approved partners
   // const approvedRecords = await getApprovedRecords();
   // console.log(approvedRecords.map(({ fields }) => fields));

   // get partner reports from ActionKit
   const reportList = await getActionKitReportList();

   // find new partners

   // create report for new partners
};

run().catch((err) => console.error(err));
