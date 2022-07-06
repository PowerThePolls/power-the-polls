const Airtable = require("airtable");
const base = new Airtable().base("appc14jHeQ2v7FhU9");

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
   return [];
};

const run = async () => {
   // get all approved partners
   const approvedRecords = await getApprovedRecords();
   console.log(approvedRecords.map(({ fields }) => fields));

   // get partner reports from ActionKit
   const reportList = await getActionKitReportList();

   // find new partners

   // create report for new partners
};

run().catch((err) => console.error(err));
