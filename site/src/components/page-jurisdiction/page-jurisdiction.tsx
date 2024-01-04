import { Component, h, Prop } from "@stencil/core";
import { MatchResults } from "@stencil/router";

/**
 * Directly match a jurisdiction ID
 */
@Component({
   tag: "page-jurisdiction",
   styleUrl: "page-jurisdiction.scss",
   shadow: false,
})
export class PageJurisdiction {
   @Prop() public match?: MatchResults;

   public render() {
      const id = this.match ? this.match.params.id : null;
      return !id ? (
         <stencil-router-redirect url="/search" />
      ) : (
         <ptp-info-poll-worker jurisdictionIdOrSlug={id} />
      );
   }
}
