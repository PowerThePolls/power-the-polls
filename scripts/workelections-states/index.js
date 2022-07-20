import fetch, { Headers } from "node-fetch";

const scrapeSite = async () => {
   const fetchWe = async (path) => {
      const base = "https://workelections.powerthepolls.org/wp-json/wp/v2";
      const headers = new Headers({
         "Content-Type": "application/json",
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
         collected[acf["alpha-2_code"]] = {
            id,
            name: rendered,
            jurisdictions: jurisdictions
               .filter(({ acf: { state } }) => state === id)
               .reduce((mapped, { title: { rendered }, id: juriId, slug }) => {
                  mapped[fixTitle(rendered)] = {
                     id: juriId,
                     name: rendered,
                     slug,
                  };
                  return mapped;
               }, {}),
         };
         return collected;
      }, {});
};

scrapeSite()
   .then(states => console.log(JSON.stringify(states, null, 2)))
   .catch((err) => console.error(err));
