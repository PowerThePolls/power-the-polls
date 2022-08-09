import fetch, { Headers } from "node-fetch";

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
   const fixTitle = (title) =>
      title
         .replace(/\&\#8211\;/g, "-")
         .replace(new RegExp(`(${cities.join("|")})`, "gi"), "")
         .replace(/\s\(\)/gi, "");

   const states = await fetchWe(`/state?per_page=100`);

   let jurisdictions = [];
   let batch = [];

   while (batch.length > 0 || jurisdictions.length == 0) {
      batch = await fetchWe(
         `/jurisdiction?per_page=100&offset=${jurisdictions.length}`
      );
      jurisdictions = jurisdictions.concat(batch);
   }

   return states
      .reverse()
      .reduce((collected, { acf, id, title: { rendered } }) => {
         const state_alpha_code = acf["alpha-2_code"];
         collected[state_alpha_code] = {
            id,
            name: rendered,
            jurisdictions: jurisdictions
               .filter(({ acf: { state } }) => state === id)
               .reduce(
                  (mapped, jurisdiction) => {
                     const {
                        title: { rendered },
                        acf: { is_the_jurisdiction_a_city: city },
                        id,
                        slug,
                     } = jurisdiction;
                     const name = fixTitle(rendered);
                     if (city && !mapped.cities[fixTitle(name)]) {
                        mapped.cities[fixTitle(name)] = {
                           id,
                           name,
                           slug,
                        };
                     } else if (!city && !mapped.counties[fixTitle(name)]) {
                        mapped.counties[fixTitle(name)] = {
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
};

scrapeSite()
   .then((states) => console.log(JSON.stringify(states, null, 2)))
   .catch((err) => console.error(err));
