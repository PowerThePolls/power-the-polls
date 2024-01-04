import { Component, h } from "@stencil/core";

import { parseQueryString } from "../../util";

/**
 * Render poll worker info for the jurisdiction as parsed from the querystring or hash
 */
@Component({
    tag: "page-info",
    shadow: false,
})
export class PageInfo {
    public render() {
        const query = parseQueryString();
        const { state, county, city, city_town_village_suffix } = query;

        return !state ? (
            // if we still have no state value provided, redirect to the search page
            <stencil-router-redirect url="/search" />
        ) : (
            <ptp-info-poll-worker
                city={city}
                county={county}
                state={state}
                cityTownVillageSuffix={city_town_village_suffix}
            />
        );
    }
}
