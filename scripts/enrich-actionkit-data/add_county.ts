import * as csv from "@fast-csv/parse";
import * as fs from "fs";
import * as path from "path";
import { stdout } from "process";

import CsvRow, { formatRow, Header } from "./CsvRow";

const fetch = require("node-fetch");

const authId = "";
const authToken = "";

const toQueryString = (data: any) => {
   return Object.keys(data)
      .map(
         (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(data[key] + ""),
      )
      .join("&");
};

let s_multipleCounties = 0;
/**
 * Try to get more detailed street data given the user's selection
 */
function getCounty(zipcode: string, id?: string) {
   const url =
      "https://us-zipcode.api.smartystreets.com/lookup?" +
      toQueryString({
         "auth-token": authToken,
         "auth-id": authId,
         zipcode: zipcode,
      });
   // console.log( `Looking up county for user ${id}: ${url}` );
   return fetch(url, {
      method: "GET",
      headers: {},
   }).then((response) => {
      if (response.status === 200) {
         return response
            .json()
            .then((data: any[]) => {
               if (data[0]?.zipcodes[0]?.alternate_counties?.length > 0) {
                  s_multipleCounties += 1;
                  console.log(
                     "Multiple counties for user " + id,
                     data[0]?.zipcodes[0],
                  );
                  return "";
               }
               return data[0]?.zipcodes[0]?.county_name || "";
            })
            .catch((err) => console.log("smartystreets JSON parse error", err));
      } else {
         console.log(url);
         console.log(response.headers.raw());
         response.body.pipe(stdout);
         throw new Error(response.statusText);
      }
   });
}

const run = () => {
   const file = path.resolve(__dirname, "data1.csv");
   const writeStream = fs.createWriteStream(
      path.resolve(__dirname, "output1.csv"),
   );
   writeStream.write(Header);
   const readStream = fs.createReadStream(file);
   console.log(file);
   let rows = 0;
   let missingCountyRows = 0;
   const csvStream = csv
      .parse({ headers: true })
      .transform((row: CsvRow, cb) => {
         let county = row.county;
         if (county != null && county.indexOf(",") !== -1) {
            county = county.split(",")[0];
         }
         if (county === "" && row.zipcode !== "") {
            getCounty(row.zipcode, row.user_id)
               .then((foundCounty: string) => {
                  if (foundCounty == null || foundCounty === "") {
                     cb(null, row);
                  } else {
                     console.log(
                        `Found county ${foundCounty} for user ${row.user_id}`,
                     );
                     const res: CsvRow = {
                        user_id: row.user_id,
                        state: row.state,
                        city: row.city,
                        county: foundCounty,
                        zipcode: row.zipcode,
                        jurisdiction_id: row.jurisdiction_id,
                     };
                     cb(null, res);
                  }
               })
               .catch((e) => console.log(e));
         } else if (county !== row.county) {
            // if county is a concatenated list: "County, County, County, County"
            const res: CsvRow = {
               user_id: row.user_id,
               state: row.state,
               city: row.city,
               county: county,
               zipcode: row.zipcode,
               jurisdiction_id: row.jurisdiction_id,
            };
            cb(null, res);
         } else {
            return cb(null, row);
         }
      })
      .on("error", (error) => console.error(error))
      .on("data", (row: CsvRow) => {
         rows += 1;
         if (row.county === "" || row.county == null) {
            missingCountyRows += 1;
         }
         writeStream.write(formatRow(row));
      })
      .on("end", (rowCount: number) => {
         console.log(
            `Parsed ${rowCount} rows. ${missingCountyRows}, or ${Math.round(
               (missingCountyRows / rows) * 100,
            )}%, are missing a county.`,
         );
         if (s_multipleCounties > 0) {
            console.log(
               `There were also ${s_multipleCounties} users that had a zipcode match multiple counties`,
            );
         }
      });

   readStream.pipe(csvStream);
};

run();
