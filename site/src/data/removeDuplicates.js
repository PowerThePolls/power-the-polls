const fs = require("fs");
const partnerList = require("./partnerList.json");

// Function to remove duplicates
const removeDuplicates = (array, key) => {
   return array.filter(
      (obj, index, self) =>
         index === self.findIndex((el) => el[key] === obj[key])
   );
};

// Remove duplicates based on partnerId
const uniquePartnerList = removeDuplicates(partnerList, "partnerId");

// Write the unique partners back to the file
fs.writeFileSync(
   "./partnerList.json",
   JSON.stringify(uniquePartnerList, null, 2)
);
console.log("Duplicates removed. Updated partnerList.json");
