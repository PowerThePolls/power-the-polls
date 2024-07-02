const fs = require("fs");
const fsPromises = require("fs/promises");
const Airtable = require("airtable");
const axios = require("axios");
const path = require("path");

// Function to download an image with retry logic
const downloadImage = async (url, filepath, retries = 3, delay = 1000) => {
   for (let attempt = 1; attempt <= retries; attempt++) {
      try {
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
      } catch (error) {
         if (attempt < retries) {
            console.log(
               `Retry ${attempt}/${retries} failed for ${url}. Retrying in ${delay}ms...`
            );
            await new Promise((resolve) => setTimeout(resolve, delay));
         } else {
            console.error(
               `Failed to download logo from ${url} after ${retries} attempts.`
            );
            return null;
         }
      }
   }
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
   if (!partner.partnerId) {
      return [];
   }
   return (
      partner.additionalVanityUrls
         ? [partner.partnerId, ...partner.additionalVanityUrls]
         : [partner.partnerId]
   ).map((code) => code.toLowerCase());
};

const writeFile = async (partnerList) => {
   try {
      await fsPromises.writeFile(
         "../../site/src/data/PartnerList.json",
         JSON.stringify(partnerList, null, 2)
      );
      console.log("PartnerList.json file has been written successfully.");
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
         const downloadResult = await downloadImage(logoUrl, filePath);
         if (downloadResult) {
            console.log(`Successfully downloaded logo for ${sourceCode}`);
            return sourceCode;
         }
      }
      return null;
   });

   const downloadedLogos = await Promise.all(downloadPromises);
   return downloadedLogos.filter(Boolean); // Filter out null values
};

const run = async () => {
   try {
      // get approved source codes from AirTable
      const approvedRecords = await getApprovedRecords();

      // get source codes from JSON
      const partnerList = require("../../site/src/data/PartnerList.json");
      const existingSourceCodesSet = new Set(
         partnerList.flatMap(getSourceCodes)
      );

      // logics for adding new records or updating existing ones
      let isUpdated = false;
      const updatedPartnerList = await Promise.all(
         partnerList.map(async (existingPartner) => {
            const existingSourceCodes = getSourceCodes(existingPartner);
            const matchingRecord = approvedRecords.find((record) =>
               existingSourceCodes.includes(
                  record.get("source_code").toLowerCase()
               )
            );

            if (matchingRecord) {
               isUpdated = true;
               const sourceCode = matchingRecord
                  .get("source_code")
                  .toLowerCase();
               const newPartner = {
                  ...existingPartner,
                  partnerId: sourceCode,
                  name: matchingRecord.get("organization"),
               };
               const downloadedLogos = await downloadLogos([matchingRecord]);
               if (downloadedLogos.includes(sourceCode)) {
                  newPartner.logo = `${sourceCode}.png`;
               }
               return newPartner;
            } else {
               return existingPartner;
            }
         })
      );

      // Add new records from approvedRecords that are not in the existing list
      const newRecords = approvedRecords
         .filter(
            (record) =>
               !existingSourceCodesSet.has(
                  record.get("source_code").toLowerCase()
               )
         )
         .map((record) => ({
            partnerId: record.get("source_code").toLowerCase(),
            name: record.get("organization"),
            ...(record.get("logo") && record.get("logo").length > 0
               ? { logo: `${record.get("source_code").toLowerCase()}.png` }
               : {}),
         }));

      const finalPartnerList = [...updatedPartnerList, ...newRecords];

      // Write the final partner list
      await writeFile(finalPartnerList);

      console.log("Script completed successfully.");
   } catch (error) {
      console.error("Script encountered an error:", error);
   }
};

run().catch((err) => console.error(err));
