const Airtable = require('airtable');

// get source codes from JSON
const partnerList = require("../../site/src/data/PartnerList.json");

const getAirTableSourceCodes = async () => {
  const base = new Airtable().base('appc14jHeQ2v7FhU9');
  return base("Partners").select().all()
    .then(function(records) {
      records
        .filter((record) => record.fields.status === "Approved")
        .forEach(function(record) {
          console.log(`${record.fields.organization}: ${record.fields.source_code}`)
        })
    });
};

const findDuplicates = async (sourceCodes, partnerList) => {
  return [];
};

const run = async () => {
  // get source codes from AirTable
  const sourceCodes = getAirTableSourceCodes()
  // log duplicates and other errors
  const duplicates = findDuplicates(sourceCodes, partnerList)
  // add new source codes to JSON
};

run();
