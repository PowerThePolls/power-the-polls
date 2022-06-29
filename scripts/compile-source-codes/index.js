const Airtable = require("airtable");
const base = new Airtable().base("appc14jHeQ2v7FhU9");

const getApprovedRecords = async () => {
  const filterByFormula = "{status} = 'Approved'"
  const fields = ["organization", "source_code", "status"];
  return base("Partners").select({ filterByFormula, fields }).all();
}

const getSourceCodes = (partner) => {
  return partner.additionalVanityUrls ?
    [partner.partnerId, ...partner.additionalVanityUrls] :
    [partner.partnerId]
}

const findDuplicates = (records, partnerList) => {
  return records.reduce((result, record) => {
    return [
      ...result, partnerList.find((partner) => getSourceCodes(partner).includes(record.fields.source_code))
    ]
  }, []);
}

const removeDuplicates = (records, duplicates) => {
  return records.filter((record) => {
    return duplicates.find((duplicate) => {
      return getSourceCodes(duplicate).includes(record.fields.source_code)
    }).length === 0
  })
}
const run = async () => {
  // get approved source codes from AirTable
  const approvedRecords = await getApprovedRecords()

  // get source codes from JSON
  const partnerList = require("../../site/src/data/PartnerList.json");

  // log duplicates and other errors
  const duplicates = findDuplicates(approvedRecords, partnerList)
  if (duplicates.length) {
    console.log("Duplicates found: ")
    console.log(duplicates);
  }

  // remove duplicates
  const newRecords = removeDuplicates(approvedRecords, duplicates)
  console.log(newRecords);

  // add new source codes to JSON
};

run().catch((err => console.log(err)));
