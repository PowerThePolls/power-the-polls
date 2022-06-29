const Airtable = require("airtable");
const base = new Airtable().base("appc14jHeQ2v7FhU9");

const getApprovedRecords = async () => {
  // const filterByFormula = "{status} = 'Approved'"
  // const fields = ["organization", "source_code", "status"];
  // return base("Partners").select({ filterByFormula, fields }).all();
  return Promise.resolve(
    [{
      fields: {
        organization: "billy test org",
        source_code: "billy",
        status: "Approved"
      }
    }]
  )
}

const getSourceCodes = (partner) => {
  return partner.additionalVanityUrls ?
    [partner.partnerId, ...partner.additionalVanityUrls] :
    [partner.partnerId]
}

const findDuplicates = (records, partnerList) => {
  return records.reduce((result, record) => {
    const duplicate = partnerList.find((partner) => getSourceCodes(partner).includes(record.fields.source_code))
    return duplicate ? [
      ...result,
      duplicate,
    ] : result
  }, []);
}

const removeDuplicates = (records, duplicates) => {
  return records.filter((record) => {
    return !duplicates.find((duplicate) => getSourceCodes(duplicate).includes(record.fields.source_code))
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

run().catch((err => console.error(err)));
