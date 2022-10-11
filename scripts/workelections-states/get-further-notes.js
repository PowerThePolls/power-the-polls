import fetch, { Headers } from "node-fetch";
import fs from "fs/promises";

// THIS WAS A ONE TIME HELPER SCRIPT TO PULL ALL THE "FURTHER NOTES" / "NOTES"!
// This is not production code...

const scrapeSite = async () => {
   const fetchWe = async (path) => {
      const { WORK_ELECTIONS_TOKEN } = process.env;
      const base = "https://workelections.org/wp-json/wp/v2";
      const headers = new Headers({
         "Content-Type": "application/json",
         Authorization: `Bearer ${WORK_ELECTIONS_TOKEN}`,
      });
      const resp = await fetch(`${base}${path}`, { headers });

      return await resp.json();
   };

   const writeFile = async (stateInfo) => {
      try {
         await fs.writeFile(
            "FurtherNotes.json",
            JSON.stringify(stateInfo, null, 2)
         );
      } catch (err) {
         console.error(err);
      }
   };

   let jurisdictions = [];
   let batch = [];

   while (batch.length > 0 || jurisdictions.length === 0) {
      batch = await fetchWe(
         `/jurisdiction?per_page=100&offset=${jurisdictions.length}`
      );
      jurisdictions = jurisdictions.concat(batch);
   }

   const furtherNotesArray = jurisdictions
      .map(({ id, acf: { further_notes, notes } }) => ({
         id,
         further_notes,
         notes,
      }))
      .filter(({ further_notes, notes }) => further_notes || notes);

   await writeFile(furtherNotesArray);
};

scrapeSite()
   .then(() => console.log("done"))
   .catch((err) => console.error(err));
