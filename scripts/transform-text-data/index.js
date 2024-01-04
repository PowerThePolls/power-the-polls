const { load, write } = require("csvdata");

function mapResponse(answer, responseMappings) {
   for (const response of responseMappings) {
      if (answer.startsWith(response.startsWith)) {
         return response.response;
      }
   }
   //throw new Error("response not mapped!");
}

function mapResponses(rows, fieldName, responseMapping) {
   return rows
      .filter((row) => row[fieldName] && row[fieldName] !== "[other]")
      .map((row) => {
         const { user_id } = row;
         const answer = row[fieldName];
         const action_applied_2022 = mapResponse(answer, responseMapping);
         return {
            user_id,
            action_applied_2022,
         };
      });
}

const contacted2022ResponseMapping = [
   {
      startsWith: "[1.Yes]Great!",
      response: "Yes, I have received my assignment",
   },
   {
      startsWith: "[2.Yes]Your",
      response:
         "Yes, I’ve heard from my elections office, but I do not have an assignment yet.",
   },
   {
      startsWith: "[3.No]Your",
      response: "No, I have not heard from them.",
   },
];

const assignment2022ResponseMapping = [
   {
      startsWith: "[1.Yes]Fantastic!",
      response: "I’ve been assigned a shift as a poll worker.",
   },
   {
      startsWith: "[2.No]Your",
      response: "No I do not have assignment.",
   },
   {
      startsWith: "[3.No]Thanks",
      response: "I am no longer serving as a poll worker.",
   },
];

const adminPlacementeday2022ResponseMapping = [
   {
      startsWith: "Yes, I have received my assignment",
      response: "Yes, I have received my assignment",
   },
   {
      startsWith: "Yes, but I have not received my assignment",
      response: "Yes, but I have not received my assignment",
   },
   {
      startsWith: "No, I have not heard from them.",
      response: "No, I have not heard from them.",
   },
];

const waitlist2022ResponseMapping = [
   {
      startsWith: "[1 yes]",
      response: "Yes",
   },
   {
      startsWith: "[2 no]",
      response: "No",
   },
];

const active2022ResponseMapping = [
   {
      startsWith: "[yes]",
      response: "I have completed my application",
   },
   {
      startsWith: "[not yet]",
      response: "I have not completed my application",
   },
   {
      startsWith: "[not interested]",
      response: "I have decided to not complete my application",
   },
];

const applied2020ResponseMapping = [
   {
      startsWith: "[1 yes]",
      response: "I have completed my application",
   },
   {
      startsWith: "[2 not yet]",
      response: "I have not completed my application",
   },
];

const surveyResponseMapping = [
   {
      startsWith: "Yes",
      response: "Yes",
   },
   {
      startsWith: " ",
      response: "Yes",
   },
];

async function process() {
   // files from text campaign
   const files = {
      contactedData2022: "ubercampaign.csv",
   };

   const loadOpts = {
      delimiter: ",",
      encoding: "utf8",
      log: false,
      parse: true,
      stream: false,
   };

   const rawAssignment2022 = await load(files.contactedData2022, loadOpts);
   const assignment2022 = mapResponses(
      rawAssignment2022,
      "QT1",
      assignment2022ResponseMapping,
   );

   const rawWaitlist2022 = await load(files.contactedData2022, loadOpts);
   const waitlist2022 = mapResponses(
      rawWaitlist2022,
      "QT3",
      waitlist2022ResponseMapping,
   );

   const output = [...assignment2022, ...waitlist2022];

   await write("./output.csv", output, {
      header: "user_id,action_applied_2022",
      log: false,
   });
}

process()
   .then(() => console.log("Done Processing"))
   .catch((err) => console.error(err));
