import { MultiPolygon } from "geojson";

import { States } from "../data";
import { JurisdictionInfo, JurisdictionShort, Slugs, StateInfo } from "../data/States";

/**
 * Asynchronous function for returning data from WE
 */
const fetchFromWE = async (path: string) => {
   const data = await fetch(`https://workelections.powerthepolls.org${path}`);
   return await data.json();
};

export const fetchStateInfo = async (stateId: number): Promise<StateInfo> => {
   const { id, slug, acf } = await fetchFromWE(`/wp-json/wp/v2/state/${stateId}/`);

   return {
      id,
      slug,
      ...acf,
   };
};

export const fetchJurisdictionInfo = async (
   jurisdictionId: number | string,
): Promise<JurisdictionInfo> => {
   const { id, slug, acf, link, title: { rendered } } = await fetchFromWE(`/wp-json/wp/v2/jurisdiction/${jurisdictionId}/`);

   const alpha = link.replace("https://workelections.org/jurisdiction/", "").toUpperCase().split("/")[0];

   return {
      id,
      slug,
      ...acf,
      name: rendered,
      state: { alpha },
   };
};
export const fetchStateJurisdictionsList = (
   stateId: number,
): Promise<JurisdictionInfo[]> => {
   return fetchFromWE(`/jurisdictions/?summary=true&state_id=${stateId}`);
};

/**
 * Currently unsupported by the API
 **/
export const fetchJurisdictionGeoJson = (
   jurisdictionId: number | string,
): Promise<MultiPolygon> => {
   return fetchFromWE(`/jurisdictions/${jurisdictionId}/geojson/`);
};

/**
 * Return the URL of the Work Election's jurisdiction
 **/
export const findJurisdictionId = (
   state: string,
   county?: string,
   city?: string,
): number | null => {
   const stateData = States[state];
   if (stateData) {
      const found = [
         `${city} charter township, ${county} County`,
         `${city} township, ${county} County`,
         `${city} town, ${county} County`,
         `${city} village, ${county} County`,
         `${city} city, ${county} County`,
         `${city} (City)`,
         `${city} (Town)`,
         `${city} (Township)`,
         `${city} City`,
         `${city}, ${county} County`,
         `${city} Village, ${county} County`,
         `${city} Township, ${county} County`,
         `${city} (City), ${county} County`,
         `${city} (Town), ${county} County`,
         `${county} County`,
         `${county} Parish`,
         `${county} Plantation`,
         `${city}`,
         `${county}`,
      ].find((type) => stateData.jurisdictions[type]);

      if (found) {
         return stateData.jurisdictions[found].id;
      }
   }
   return null;
};

/**
 * Return the id for the URL of the Work Election's state
 **/
export const findStateId = (state: string): number | null => {
   const stateData = States[state];
   return stateData ? stateData.id : null;
};
/**
 * Return the jurisdictions for the Work Election's State
 **/
export const findStateJurisdictionsList = (state: string): JurisdictionShort[] => {
   const stateData = States[state];
   return stateData ? Object.values(stateData.jurisdictions) : [];
};

/**
 * Return the jurisdiction for a given slug
 **/
export const idFromSlug = (slugOrId: string | number | undefined): string | number | undefined => (
   (slugOrId && Slugs[slugOrId]) || slugOrId
);
