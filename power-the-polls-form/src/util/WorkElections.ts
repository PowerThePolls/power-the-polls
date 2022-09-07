import {MultiPolygon} from "geojson";

import {DuplicateJurisdictions, States} from "../data";
import {JurisdictionInfo, JurisdictionShort, Slugs, StateInfo} from "../data/States";

/**
 * Asynchronous function for returning data from WE
 */
const fetchFromWE = async (path: string) => {
    const data = await fetch(`https://workelections.powerthepolls.org${path}`);
    return await data.json();
};

export const fetchStateInfo = async (stateId: number): Promise<StateInfo> => {
    const {id, slug, acf} = await fetchFromWE(`/wp-json/wp/v2/state/${stateId}/`);

    return {
        id,
        slug,
        ...acf,
    };
};

export const fetchJurisdictionInfo = async (
    jurisdictionId: number | string,
): Promise<JurisdictionInfo> => {
    const {
        id,
        slug,
        acf,
        link,
        title: {rendered},
    } = await fetchFromWE(`/wp-json/wp/v2/jurisdiction/${jurisdictionId}/`);

    const alpha = link.replace("https://workelections.org/jurisdiction/", "").toUpperCase().split("/")[0];

    return {
        id,
        slug,
        ...acf,
        name: rendered,
        state: {alpha},
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
    cityTownVillage?: string,
): number | null => {
    const stateData = States[state];
    if (stateData) {
        if (city) {
            const cityString = cityTownVillage ? `${city} (${cityTownVillage})` : city;
            const cityInfo = stateData.jurisdictions.cities[cityString];
            if (cityInfo) {
                return cityInfo.id;
            }
        }
        if (county) {
            const countyInfo = stateData.jurisdictions.counties[`${county}`];
            if (countyInfo) {
                return countyInfo.id;
            }
        }
        // special case for MI and WI where the county name is appended to the rendered name from Work Elections
        if ((state === "MI" || state === "WI") && city && county) {
            const cityString = cityTownVillage ?
                `${city}, ${county} County (${cityTownVillage})` : `${city}, ${county} County`;
            const cityInfo = stateData.jurisdictions.cities[cityString];
            if (cityInfo) {
                return cityInfo.id;
            }
        }
    }
    return null;
};

export const hasTownVillageCityVariant = (
    state: string,
    county?: string,
    city?: string,
): boolean => {
    if (state === "WI") {
        return DuplicateJurisdictions.includes(`${city}, ${county} County`);
    }
    if (state === "VT") {
        return DuplicateJurisdictions.includes(city || "");
    }
    return false;
};

export const getCityTownVillageSuffix = (variant: string): string => {
    if (variant.endsWith("(City)")) {
        return "City";
    } else if (variant.endsWith("(Town)")) {
        return "Town";
    } else if (variant.endsWith("(Village)")) {
        return "Village";
    }
    return "";
};

export const findVariants = (
    state: string,
    county?: string,
    city?: string,
): string[] => {
    const stateData = States[state];
    let cityTownVillage: string[] = [];
    if (state === "WI") {
        [
            `${city}, ${county} County (City)`,
            `${city}, ${county} County (Town)`,
            `${city}, ${county} County (Village)`,
        ].forEach((variant: string) => {
            const info = stateData.jurisdictions.cities[variant];
            if (info) {
                cityTownVillage = [...cityTownVillage, variant];
            }
        });
    }
    if (state === "VT") {
        [
            `${city} (City)`,
            `${city} (Town)`,
            `${city} (Village)`,
        ].forEach((variant: string) => {
            const info = stateData.jurisdictions.cities[variant];
            if (info) {
                cityTownVillage = [...cityTownVillage, variant];
            }
        });
    }
    return cityTownVillage.sort();
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
    return stateData ? [
            ...Object.values(stateData.jurisdictions.cities),
            ...Object.values(stateData.jurisdictions.counties)]
        : [];
};

/**
 * Return the jurisdiction for a given slug
 **/
export const idFromSlug = (slugOrId: string | number | undefined): string | number | undefined => (
    (slugOrId && Slugs[slugOrId]) || slugOrId
);
