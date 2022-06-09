import { Component, h, Host, Listen, Prop, State } from "@stencil/core";

import { Partner } from "../../data/types";

@Component( {
   tag: "page-partners",
   styleUrl: "page-partners.scss",
   shadow: false,
} )
export class PagePartners {

   /**
    * List of all the partner logos to display
    */
   @Prop() public partners?: Partner[];

   @State() private highlightedPartner?: string;

   @Listen( "hashchange", { target: "window" } )
   public hashChanged() {
      this.highlightedPartner = window.location.hash.replace( "#", "" ) || "";
   }

   public connectedCallback() {
      this.highlightedPartner = window.location.hash.replace( "#", "" ) || "";
   }

   public render() {
      const partners = ( this.partners || [] );
      const { highlightedPartner } = this;
      return ( <Host>
         <h1>Power the Polls Partners</h1>
         <p>
            Power the Polls unites nonprofits and businesses to help recruit and support these workers by:
         </p>
         <ul>
            <li>Educating potential voters about the opportunity to work Election Day polling places.</li>
            <li>Creating efficient and effective programming that ensures poll workers sign up and then show up when they’re needed.</li>
            <li>Activating businesses to give their workers Election Day off so they can serve.</li>
         </ul>
         <p>
            If you’d like to become a campaign partner, please reach out to: <a href="mailto:partners@powerthepolls.org">partners@powerthepolls.org</a>.
         </p>

         <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
         <blockquote class="twitter-tweet" data-dnt="true" data-theme="dark">
            <p lang="en" dir="ltr">
               America is facing a nationwide poll worker shortage, but you can
               help by going to <a href="https://t.co/70gHiVzDaT">https://t.co/70gHiVzDaT</a>
               <a href="https://t.co/qBJbcmVpVp">pic.twitter.com/qBJbcmVpVp</a>
            </p>&mdash; The Daily Show (@TheDailyShow)&nbsp;
            <a href="https://twitter.com/TheDailyShow/status/1283099189568626690?ref_src=twsrc%5Etfw">July 14, 2020</a>
         </blockquote>

         <ui-h3-bar>Founding Partners</ui-h3-bar>
         <p>
            Power the Polls is a collaboration between nonprofit organizations and businesses:
         </p>
         <div class="partner-logos">
            {partners.map( partner => ( partner.isFoundingPartner && !partner.excludeFromPartnerList && partner.logo && (
               <ui-partner-image partner={partner} chosenPartnerId={highlightedPartner} />
            ) ) )}
         </div>

         <ui-h3-bar>Past & Present Partners</ui-h3-bar>
         <div class="partner-logos">
            {partners.map( partner => ( !partner.isFoundingPartner && !partner.excludeFromPartnerList && partner.logo && (
               <ui-partner-image partner={partner} chosenPartnerId={highlightedPartner} />
            ) ) )}
         </div>
      </Host > );
   }
}
