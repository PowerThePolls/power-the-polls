const fs = require("fs");
const fsPromises = require("fs/promises");
const Airtable = require("airtable");
const axios = require("axios");
const path = require("path");

// Function to download an image
const downloadImage = async (url, filepath) => {
   const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
   });
   return new Promise((resolve, reject) => {
      const writer = fs.createWriteStream(filepath);
      response.data.pipe(writer);
      writer.on("finish", resolve);
      writer.on("error", reject);
   });
};

const getApprovedRecords = async () => {
   const base = new Airtable().base("appc14jHeQ2v7FhU9");

   const filterByFormula = "{source_code_enabled} = 'Approved'";
   const fields = [
      "organization",
      "source_code",
      "source_code_enabled",
      "logo",
   ];

   return base("Partners").select({ filterByFormula, fields }).all();
};

const getSourceCodes = (partner) => {
   return (
      partner.additionalVanityUrls
         ? [partner.partnerId, ...partner.additionalVanityUrls]
         : [partner.partnerId]
   ).map((code) => code.toLowerCase());
};

const findDuplicates = (records, partnerList) => {
   return records.reduce((result, record) => {
      const duplicate = partnerList.find((partner) =>
         getSourceCodes(partner).includes(
            record.get("source_code").toLowerCase()
         )
      );
      return duplicate ? [...result, duplicate] : result;
   }, []);
};

const removeDuplicates = (records, duplicates) => {
   return records.filter((record) => {
      return !duplicates.find((duplicate) =>
         getSourceCodes(duplicate).includes(
            record.get("source_code").toLowerCase()
         )
      );
   });
};

const writeFile = async (partnerList) => {
   try {
      await fsPromises.writeFile(
         "../../site/src/data/PartnerList.json",
         JSON.stringify(partnerList, null, 2)
      );
   } catch (err) {
      console.error(err);
   }
};

const downloadLogos = async (records) => {
   const downloadDir = "../../site/public/assets/images/partners";
   await fsPromises.mkdir(downloadDir, { recursive: true });

   const downloadPromises = records.map(async (record) => {
      const logoField = record.get("logo");
      if (logoField && logoField.length > 0) {
         const logoUrl = logoField[0].url;
         const sourceCode = record.get("source_code").toLowerCase();
         const filePath = path.join(downloadDir, `${sourceCode}.png`);
         try {
            await downloadImage(logoUrl, filePath);
            return sourceCode; // Return source code if download is successful
         } catch (error) {
            console.error(`Failed to download logo for ${sourceCode}:`, error);
            return null;
         }
      }
      return null;
   });

   const downloadedLogos = await Promise.all(downloadPromises);
   return downloadedLogos.filter(Boolean); // Filter out null values
};

const run = async () => {
   // get approved source codes from AirTable
   const approvedRecords = await getApprovedRecords();

   // get source codes from JSON
   const partnerList = require("../../site/src/data/PartnerList.json");

   // log duplicates and other errors
   const duplicates = findDuplicates(approvedRecords, partnerList);
   if (duplicates.length) {
      console.log("Duplicates found: ");
      console.log(duplicates);
   }

   // find new records
   const newRecords = removeDuplicates(approvedRecords, duplicates);
   if (newRecords.length) {
      console.log("New records:");
      console.log(newRecords.map(({ fields }) => fields));

      // download logos for new records
      const downloadedLogos = await downloadLogos(newRecords);

      // add new source codes to JSON
      const newPartnerList = [
         ...partnerList,
         ...newRecords.map((record) => {
            const sourceCode = record.get("source_code").toLowerCase();
            const newPartner = {
               partnerId: sourceCode,
               name: record.get("organization"),
            };
            if (downloadedLogos.includes(sourceCode)) {
               newPartner.logo = `${sourceCode}.png`;
            }
            return newPartner;
         }),
      ];

      // write the updated partner list to file once
      await writeFile(newPartnerList);
   }
};

run().catch((err) => console.error(err));
