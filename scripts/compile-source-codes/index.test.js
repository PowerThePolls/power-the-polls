test("Partner List loads correctly", () => {
   const partnerList = require("../../site/src/data/PartnerList.json");
   expect(partnerList.length).not.toBe(0);
});

const getSourceCodes = (partnerList) => {
   return partnerList.reduce((result, partner) => {
      if (partner.additionalVanityUrls) {
         return [
            ...result,
            partner.partnerId,
            ...partner.additionalVanityUrls,
         ];
      } else {
         return [...result, partner.partnerId];
      }
   }, []);
};

test("Partner List does not have duplicate source codes", () => {
   const partnerList = require("../../site/src/data/PartnerList.json");
   const sourceCodes = getSourceCodes(partnerList);
   const lowerSourceCodes = sourceCodes.map((sourceCodes) => sourceCodes.toLowerCase())
   const findDuplicates = (array) => array.filter((item, index) => array.indexOf(item) != index)
   const duplicateElements = findDuplicates(lowerSourceCodes)
   expect(duplicateElements).toHaveLength(0)
});

