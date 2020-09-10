import { util } from "@ptp-us/power-the-polls-form";
import { Component, h, Prop } from "@stencil/core";
import { RouterHistory } from "@stencil/router";

/**
 * Component to render local info about how to be a poll worker.
 */
@Component( {
   tag: "page-search",
   styleUrl: "page-search.scss",
   shadow: false,
} )
export class PageSearch {

   @Prop() public history?: RouterHistory;

   public render() {
      const submitForm = ( e: Event ) => {
         const form = e.target as HTMLFormElement;

         const [city, county, state] = ["city", "user_county", "state"].map( attr => {
            const input = form.querySelector( `[name=${attr}]` ) as HTMLFormElement;
            return input ? input.value : null;
         } );

         this.history!.push( "/redirector?" + util.toQueryString( { city, county, state } ) );

         e.preventDefault();
         return false;
      };

      return (
         <form onSubmit={submitForm}>
            <h1>Find My Local Info</h1>
            <p>Need more info about poll working in your local jurisdiction? Look it up here.</p>
            <p><strong>And don't forget to <stencil-route-link url="/#form">SIGN UP</stencil-route-link> to be a poll worker in your jurisdiction!</strong></p>
            <address-input />
            <button type="submit" class="button">Lookup</button>
         </form>
      );
   }
}
