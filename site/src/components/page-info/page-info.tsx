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
      // we previously used the hash value, so still check it as a fall-back so those links don't break.
      // TODO: If used after the Nov 2020 election, remove the hash part and only use the querystring value
      const hash = document.location.hash?.replace("#", "") || "";
      let [state, county, city] = hash
         .split("?")[0]
         .split("-")
         .map((x) => unescape(x));
      if (!state) {
         state = query.state;
         county = query.county;
         city = query.city;
      }

      return !state ? (
         // if we still have no state value provided, redirect to the search page
         <stencil-router-redirect url="/search" />
      ) : (
         <ptp-info-poll-worker city={city} county={county} state={state} />
      );
   }
}
