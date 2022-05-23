import { StateCode, USZipCode } from "./SmartyStreets";

export interface ZipGeocodingResult {
   zip: string;
   cities: Set<string>;
   counties: Set<string>;
   states: Map<StateCode, string>;
}

export interface ZipGeocodingError {
   error: string;
}

export default async (
   zipcode: string,
): Promise<ZipGeocodingResult | ZipGeocodingError> => {
   const url = new URL("https://smartystreet.powerthepolls.org/dev/zip");
   url.searchParams.append("zipcode", zipcode);
   return fetch(url.toString())
      .then(
         (response) => response.json(),
         (error) => console.log("SmartyStreets Error:", error),
      )
      .then((response: USZipCode.QueryResult) => {
         let result: USZipCode.QueryResultItem = response[0];

         if (result.reason) {
            return { error: result.reason };
         }

         let cities = new Set<string>();
         let counties = new Set<string>();
         let states = new Map<StateCode, string>(); // Abbreviation to full name

         let defaultCityState = (result.zipcodes as USZipCode.ZipCode[])[0];

         if (result.city_states) {
            result.city_states.forEach((city: USZipCode.CityState) =>
               cities.add(city.city),
            );
         }

         counties.add(defaultCityState.county_name);
         states.set(
            defaultCityState.state_abbreviation,
            defaultCityState.state,
         );

         if (defaultCityState.alternate_counties) {
            defaultCityState.alternate_counties.forEach(
               (county: USZipCode.AlternateCounty) => {
                  counties.add(county.county_name);
                  states.set(county.state_abbreviation, county.state);
               },
            );
         }

         return {
            zip: defaultCityState.zipcode,
            cities: cities,
            counties: counties,
            states: states,
         };
      });
};
