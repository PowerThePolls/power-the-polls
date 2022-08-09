import {findJurisdictionId} from "./WorkElections";

// To find jurisdiction IDs for expect use https://workelections.org
// and find the jurisdiction you are looking for, then in chrome debugger
// look at source for the main page (like austin or austin-2) and then
// search for `post_id`. It should be a 4 digit number.

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
