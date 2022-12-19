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

const assignment2022ResponseMapping = [
   {
      startsWith: "[1. Yes]",
      response: "Yes, I have received my assignment",
   },
   {
      startsWith: "[2. Yes]",
      response: "Yes, but I have not received my assignment",
   },
   {
      startsWith: "[3. No]",
      response: "No, I have not heard from them.",
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
      startsWith:"No, I have not heard from them.",
      response:"No, I have not heard from them.",
   }
];

const waitlist2022ResponseMapping = [
   {
      startsWith: "Yes",
      response: "Yes",
   },
   {
      startsWith: "No",
      response: "No",
   }
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
]

async function process() {
   // files from text campaign
   const files = {
      halloweendata2022: "halloweenData.csv",
   };

   const loadOpts = {
      delimiter: ",",
      encoding: "utf8",
      log: false,
      parse: true,
      stream: false,
   };

   const rawAssignment2022 = await load(files.halloweendata2022, loadOpts);
   const assignment2022 = mapResponses(
      rawAssignment2022,
      "QT1",
      assignment2022ResponseMapping
   );

   const rawWaitlist2022 = await load(files.halloweendata2022, loadOpts);
   const waitlist2022 = mapResponses(
      rawWaitlist2022,
      "waitlist",
      waitlist2022ResponseMapping
   );

   const rawAdminPlacementeday2022 = await load(files.halloweendata2022, loadOpts);
   const adminPlacementeday2022 = mapResponses(
      rawAdminPlacementeday2022,
      "QT2",
      adminPlacementeday2022ResponseMapping
   );

   const rawSurvey = await load(files.halloweendata2022, loadOpts);
   const survey = mapResponses(
      rawSurvey,
      "clicked_survey",
      surveyResponseMapping
   );



   const output = [...assignment2022, ...waitlist2022, ...adminPlacementeday2022, ...survey];

   await write("./output.csv", output, {
      header: "user_id,action_applied_2022",
      log: false,
   });
}

process()
   .then(() => console.log("Done Processing"))
   .catch((err) => console.error(err));
