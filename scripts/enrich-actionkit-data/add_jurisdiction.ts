import * as csv from "@fast-csv/parse";
import * as fs from "fs";
import * as path from "path";

import { findJurisdiction } from "../../power-the-polls-form/src/util/WorkElections";

import CsvRow, { formatRow, Header } from "./CsvRow";

const run = () => {
   const file = path.resolve(__dirname, "data2.csv");
   const writeStream = fs.createWriteStream(
      path.resolve(__dirname, "output2.csv"),
   );
   writeStream.write(Header);
   const readStream = fs.createReadStream(file);
   console.log(file);
   let rows = 0;
   let missingDataRowsEarlier = 0;
   let missingDataRowsLater = 0;
   let missingCountyRowsEarlier = 0;
   let missingCountyRowsLater = 0;
   const csvStream = csv
      .parse({ headers: true })
      .transform((row: CsvRow, cb) => {
         const j = row.jurisdiction_id;
         if (j === "") {
            const res = {
               user_id: row.user_id,
               state: row.state,
               city: row.city,
               county: row.county,
               zipcode: row.zipcode,
               jurisdiction_id:
                  findJurisdiction(row.state, row.county, row.city) || "",
            };
            return cb(null, res);
         } else {
            return cb(null, row);
         }
      })
      .on("error", (error) => console.error(error))
      .on("data", (row: CsvRow) => {
         rows += 1;
         if (row.jurisdiction_id === "" || row.jurisdiction_id == null) {
            if (rows < 5000) {
               missingDataRowsEarlier += 1;
            } else {
               missingDataRowsLater += 1;
            }
         }
         if (row.county === "" || row.county == null) {
            if (rows < 5000) {
               missingCountyRowsEarlier += 1;
            } else {
               missingCountyRowsLater += 1;
            }
         }
         writeStream.write(formatRow(row));
      })
      .on("end", (rowCount: number) => {
         console.log(`Parsed ${rowCount} rows.`);
         console.log(
            `${missingCountyRowsEarlier} of the first 5000 entries, or ${Math.round(
               (missingCountyRowsEarlier / 5000) * 100,
            )}%, are missing a county.`,
         );
         console.log(
            `${missingCountyRowsLater} of the remaining entries, or ${Math.round(
               (missingCountyRowsLater / (rows - 5000)) * 100,
            )}%, are missing a county.`,
         );
         console.log(
            `${missingDataRowsEarlier} of the first 5000 entries, or ${Math.round(
               (missingDataRowsEarlier / 5000) * 100,
            )}%, are missing a jurisdiction.`,
         );
         console.log(
            `${missingDataRowsLater} of the remaining entries, or ${Math.round(
               (missingDataRowsLater / (rows - 5000)) * 100,
            )}%, are missing a jurisdiction.`,
         );
      });

   readStream.pipe(csvStream);
};

run();
