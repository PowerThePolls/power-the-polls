import {
    findJurisdictionId,
    findVariants,
    hasTownVillageCityVariant,
} from "./WorkElections";

// To find jurisdiction IDs for expect use https://workelections.org
// and find the jurisdiction you are looking for, then in chrome debugger
// look at source for the main page (like austin or austin-2) and then
// search for `post_id`. It should be a 4-5 digit number.

test("Austin, TX, Travis County", () => {
    const actual = findJurisdictionId("TX", "Travis", "Austin");
    expect(actual).toBe(9873);
});

test("Baltimore, MD, Baltimore County", () => {
    const actual = findJurisdictionId("MD", "Baltimore", "Baltimore");
    expect(actual).toBe(7310);
});

test("Lincoln, NE, Lancaster County", () => {
    const actual = findJurisdictionId("NE", "Lancaster", "Lincoln");
    expect(actual).toBe(8716);
});

test("Seminole, FL, Pinellas County", () => {
    const actual = findJurisdictionId("FL", "Pinellas", "Seminole");
    expect(actual).toBe(6109);
});

test("Atlanta, GA is not a variant", () => {
    const actual = hasTownVillageCityVariant("GA", "Fulton", "Atlanta");
    expect(actual).toBe(false);
});

test("St. Albans, VT is a variant", () => {
    const actual = hasTownVillageCityVariant("VT", "", "St. Albans");
    expect(actual).toBe(true);
});

test("Find St. Albans, VT variants", () => {
    const actual = findVariants("VT", "", "St. Albans");
    expect(actual).toEqual(["St. Albans (City)", "St. Albans (Town)"]);
});

test("Beaver Dam, Dodge County, WI is a variant", () => {
    const actual = hasTownVillageCityVariant("WI", "Dodge", "Beaver Dam");
    expect(actual).toBe(true);
});

test("Find Beaver Dam, Dodge County, WI variants", () => {
    const actual = findVariants("WI", "Dodge", "Beaver Dam");
    expect(actual).toEqual([
        "Beaver Dam, Dodge County (City)",
        "Beaver Dam, Dodge County (Town)",
    ]);
});

test("Grafton, Ozaukee County County, WI is a variant", () => {
    const actual = hasTownVillageCityVariant("WI", "Ozaukee", "Grafton");
    expect(actual).toBe(true);
});

test("Grafton, Ozaukee County, WI variants", () => {
    const actual = findVariants("WI", "Ozaukee", "Grafton");
    expect(actual).toEqual([
        "Grafton, Ozaukee County (Town)",
        "Grafton, Ozaukee County (Village)",
    ]);
});
