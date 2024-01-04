/**
 * This page will be diffrent from the regular faq until we can get the translations back
 */

import { Component, Fragment, h, Host, Prop } from "@stencil/core";

@Component({
   tag: "page-faq-es",
   styleUrl: "page-faq-es.scss",
   shadow: false,
})
export class PageFaqES {
   /**
    * A list of entries to display in the FAQ
    * see: FaqData.ts
    * see: app-root.tsx
    */
   @Prop() public data?: { question: string; answer: string }[];

   /**
    * The page's title
    */
   @Prop() public pageTitle?: string;

   public render() {
      const data = this.data || [];
      return (
         <Host>
            <h1>{this.pageTitle || ""}</h1>
            <p>
               <stencil-route-link url="/faq">English</stencil-route-link>
               {" / "}
               <stencil-route-link url="/faq-es">Español</stencil-route-link>
            </p>
            {data.map((item, index) => (
               <Fragment>
                  <div class="number">
                     {index + 1 < 10 ? "0" : ""}
                     {index + 1}
                  </div>
                  <h3>{item.question}</h3>
                  <hr />
                  <p>{item.answer}</p>
               </Fragment>
            ))}
         </Host>
      );
   }
}
