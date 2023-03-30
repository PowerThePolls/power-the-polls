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
         <p>Power the Polls works with a diverse coalition of nonprofit
          and business partners to help recruit potential poll workers
          across the country. </p>
         <p>
            Partners support poll worker recruitment in many ways, including:
         </p>
         <ul>
            <li>Educating their audiences about the importance of poll workers in ensuring safe, fair, accessible elections</li>
            <li>Encouraging their audiences to sign up as potential poll workers and serve on Election Day</li>
            <li>Working with Power the Polls to respond to specific election administrator requests, e.g. for
             bilingual or tech-savvy poll workers, or poll workers in a specific geographic area </li>
            <li>For businesses, giving employees time off on Election Day so they can serve as poll workers</li>
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
