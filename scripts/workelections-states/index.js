import fetch, { Headers } from "node-fetch";
import fs from "fs/promises";

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

   const cities = ["Manhattan", "Staten Island", "Brooklyn"];
   const duplicateJurisdictions = [
      "St. Albans",
      "Rutland",
      "Newport",
      "Barre",
      "Beaver Dam, Dodge County",
      "Beloit, Rock County",
      "Brookfield, Waukesha County",
      "Cedarburg, Ozaukee County",
      "Cottage Grove, Dane County",
      "Delafield, Waukesha County",
      "Delavan, Walworth County",
      "East Troy, Walworth County",
      "Fond du Lac, Fond du Lac County",
      "Grafton, Ozaukee County",
      "Hudson, St. Croix County",
      "Jackson, Washington County",
      "Janesville, Rock County",
      "Lodi, Columbia County",
      "Madison, Dane County",
      "Medford, Taylor County",
      "Menomonie, Dunn County",
      "Merrill, Lincoln County",
      "Merton, Waukesha County",
      "Middleton, Dane County",
      "Milton, Rock County",
      "Neenah, Winnebago County",
      "Neenahnnebago County",
      "Oconomowoc, Waukesha County",
      "Onalaska, La Crosse County",
      "Oregon, Dane County",
      "Osceola, Polk County",
      "Peshtigo, Marinette County",
      "Pewaukee, Waukesha County",
      "Plymouth, Sheboygan County",
      "Rice Lake, Barron County",
      "Sheboygan, Sheboygan County",
      "Somerset, St. Croix County",
      "Sparta, Monroe County",
      "Waterford, Racine County",
      "Waukesha, Waukesha County",
      "West Bend, Washington County",
   ];

   const fixTitle = (title, suffix, state_alpha_code) => {
      const cleanTitle = title
         .replace(/&#8211;/g, "-")
         .replace(/&#8217;/g, "")
         .replace(new RegExp(`(${cities.join("|")})`, "gi"), "")
         .replace(/\s\(\)/gi, "");
      if ((state_alpha_code === "WI" || state_alpha_code === "VT") && duplicateJurisdictions.includes(title)) {
         return `${title} (${suffix})`
      }
      return cleanTitle;
   };

   const writeFile = async (stateInfo) => {
      try {
         await fs.writeFile("States.json", JSON.stringify(stateInfo, null, 2));
      } catch (err) {
         console.error(err);
      }
   };

   const states = await fetchWe(`/state?per_page=100`);

   let jurisdictions = [];
   let batch = [];

   while (batch.length > 0 || jurisdictions.length === 0) {
      batch = await fetchWe(
         `/jurisdiction?per_page=100&offset=${jurisdictions.length}`
      );
      jurisdictions = jurisdictions.concat(batch);
   }

   const stateInfo = states
      .reverse()
      .reduce((collected, { acf, id, title: { rendered } }) => {
         const state_alpha_code = acf["alpha-2_code"];
         const { has_all_mail_elections, subdivision_name } =
            acf;

         collected[state_alpha_code] = {
            id,
            name: rendered,
            has_all_mail_elections,
            subdivision_name,
            jurisdictions: jurisdictions
               .filter(
                  ({ acf: { state: jurisdiction_state_id } }) =>
                     jurisdiction_state_id === id
               )
               .reduce(
                  (mapped, jurisdiction) => {
                     const {
                        title: { rendered },
                        acf: {
                           is_the_jurisdiction_a_city: city,
                           local_government_unit: suffix,
                        },
                        id,
                        slug,
                     } = jurisdiction;
                     const name = fixTitle(rendered, suffix, state_alpha_code);
                     if (city && !mapped.cities[name]) {
                        mapped.cities[name] = {
                           id,
                           name,
                           slug,
                        };
                     } else if (!city && !mapped.counties[name]) {
                        mapped.counties[name] = {
                           id,
                           name,
                           slug,
                        };
                     } else {
                        console.log(
                           `found dupe ${
                              city ? "city" : "county"
                           }: ${name}, ${state_alpha_code}`
                        );
                     }
                     return mapped;
                  },
                  { cities: {}, counties: {} }
               ),
         };
         return collected;
      }, {});
   await writeFile(stateInfo);
};

scrapeSite()
   .then(() => console.log("done"))
   .catch((err) => console.error(err));
