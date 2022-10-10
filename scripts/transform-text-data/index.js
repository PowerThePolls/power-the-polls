const { load, write } = require("csvdata");

function transformActive2022(rows) {
   const active2022ResponseMappings = [
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

   return rows
      .filter((row) => row["QT1"] && row["QT1"] !== "[other]")
      .map((row) => {
         const { user_id, QT1 } = row;

         let action_applied_2022;
         for (const response of active2022ResponseMappings) {
            if (QT1.startsWith(response.startsWith)) {
               action_applied_2022 = response.response;
               break;
            }
         }

         return {
            user_id,
            action_applied_2022,
         };
      });
}

function transformApplied2020(rows) {
   const applied2020ResponseMappings = [
      {
         startsWith: "[1 yes]",
         response: "I have completed my application",
      },
      {
         startsWith: "[2 not yet]",
         response: "I have not completed my application",
      },
   ];

   return rows
      .filter((row) => row["QT2"] && row["QT2"] !== "[other]")
      .map((row) => {
         const { user_id, QT2 } = row;

         let action_applied_2022;
         for (const response of applied2020ResponseMappings) {
            if (QT2.startsWith(response.startsWith)) {
               action_applied_2022 = response.response;
               break;
            }
         }

         return {
            user_id,
            action_applied_2022,
         };
      });
}

async function process() {
   // files from text campaign
   const files = {
      active2022: "campaign_databack_BFS00727.csv",
      applied2020: "campaign_databack_BFS00729.csv",
   };

   // csv load options
   const loadOpts = {
      delimiter: ",",
      encoding: "utf8",
      log: false,
      parse: true,
      stream: false,
   };

   const rawApplied2020 = await load(files.applied2020, loadOpts);
   const applied2020 = transformApplied2020(rawApplied2020);

   const rawActive2022 = await load(files.active2022, loadOpts);
   const active2022 = transformActive2022(rawActive2022);

   const output = [...applied2020, ...active2022];

   const header = "user_id,action_applied_2022";
   await write("./output.csv", output, { header, log: false });
}

process()
   .then(() => console.log("Done Processing"))
   .catch((err) => console.error(err));
