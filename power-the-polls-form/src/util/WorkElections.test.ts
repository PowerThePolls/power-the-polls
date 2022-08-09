import { findJurisdictionId } from "./WorkElections";

test("Austin City, Travis County", () => {
    const actual = findJurisdictionId("TX", "Travis", "Austin");
    expect(actual).toBe(9873);
});

test("Baltimore City, Baltimore County", () => {
    const actual = findJurisdictionId("MD", "Baltimore", "Baltimore");
    expect(actual).toBe(7310);
});
