const { load, write } = require("csvdata");

function mapResponse(answer, responseMappings) {
   for (const response of responseMappings) {
      if (answer.startsWith(response.startsWith)) {
         return response.response;
      }
   }
   throw new Error("response not mapped!");
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

async function process() {
   // files from text campaign
   const files = {
      active2022: "campaign_databack_BFS00727.csv",
      applied2020: "campaign_databack_BFS00729.csv",
   };

   const loadOpts = {
      delimiter: ",",
      encoding: "utf8",
      log: false,
      parse: true,
      stream: false,
   };

   const rawApplied2020 = await load(files.applied2020, loadOpts);
   const applied2020 = mapResponses(
      rawApplied2020,
      "QT2",
      applied2020ResponseMapping
   );

   const rawActive2022 = await load(files.active2022, loadOpts);
   const active2022 = mapResponses(
      rawActive2022,
      "QT1",
      active2022ResponseMapping
   );

   const output = [...applied2020, ...active2022];

   await write("./output.csv", output, {
      header: "user_id,action_applied_2022",
      log: false,
   });
}

process()
   .then(() => console.log("Done Processing"))
   .catch((err) => console.error(err));
