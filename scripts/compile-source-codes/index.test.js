test("Partner List loads correctly", () => {
   const partnerList = require("../../site/src/data/PartnerList.json");
   expect(partnerList.length).not.toBe(0);
});

test("Partner List does not have duplicate source codes", () => {
   const partnerList = require("../../site/src/data/PartnerList.json")
   const findDuplicateSourceCode = () => {

   }
})

test("Partner List does not have duplicate org names", () => {
   const partnerList = require("../../site/src/data/PartnerList.json")
   const findDuplicateOrgNames = () => {

   }
})
