import { Component, h, Host, Prop } from "@stencil/core";

@Component({
   tag: "page-faq-eligibility",
   styleUrl: "page-faq-eligibility.scss",
   shadow: false,
})
export class PageFaqEligibility {
   /**
    * A list of entries to display in the FAQ
    * see: FaqData.ts
    * see: app-root.tsx
    */
   @Prop() public data?: {
      sectionTitle: string;
      questions: { question: string; answer: () => string }[];
   }[];

   public render() {
      // TODO: fix data rendering (if still relevant after FAQ redesign)
      return (
         <Host>
            <a href="/faq">
               <button class="back-button">Back</button>
            </a>
            <h1>ELIGIBILITY FAQS</h1>
            <h2>Requirements for being a poll worker</h2>
            <details class="accordion">
               <summary class="accordion__title">WHAT ARE THE REQUIREMENTS FOR BEING A POLL WORKER?</summary>
               <div class="accordion__content">
                  <p>
                    Qualifications vary by jurisdictions. Most states require
                    poll workers to live in or be registered to vote in the
                    state or their local jurisdiction. Some local election
                    offices have student poll worker programs for younger
                    people who aren’t yet eligible to vote but would like
                    to play an important part of the democratic process.
                </p>
               </div>
               </details>
               <details class="accordion">
               <summary class="accordion__title">CAN I BE A POLL WORKER IN ANOTHER STATE?</summary>
               <div class="accordion__content">
                  <p>
                    Individuals are generally only allowed to serve in the state where they reside/vote, though there
                    may be exceptions to this in select jurisdictions.
                </p>
               </div>
            </details>
            <details class="accordion">
               <summary class="accordion__title">ARE THERE CITIZENSHIP REQUIREMENTS TO BE A POLL WORKER?</summary>
               <div class="accordion__content">
                  <p>
                    Most states require that poll workers are U.S. citizens. The best way to find this information is
                     by looking up your zip code at <stencil-route-link
                    url="/search">
                     https://www.powerthepolls.org/search</stencil-route-link> or reaching out to your local
                     election office.
                </p>
               </div>
            </details>
            <details class="accordion">
               <summary class="accordion__title">I’M UNDER 18. CAN I STILL HELP?</summary>
               <div class="accordion__content">
                  <p>
                    Many states allow individuals under 18 to be poll workers, but each state has its own requirements,
                    and sometimes these can vary depending on which part of the state you are in. The best way to find this information is
                     by looking up your zip code at <stencil-route-link
                    url="/search">
                     http://www.powerthepolls.org/search</stencil-route-link> or reaching out to your local
                     election office.
                </p>
               </div>
            </details>
                        <details class="accordion">
               <summary class="accordion__title">DO I REALLY HAVE TO WORK THE FULL DAY OR CAN I SIGN UP FOR SHORTER SHIFT?</summary>
               <div class="accordion__content">
                  <p>
                    Some jurisdictions allow workers to sign up for shifts, while others require you to work full
                    days. Hours also often vary for early voting work versus Election Day. If you’re concerned about
                    the hours, you should submit your application and let your election officials know about your
                    availability. If your jurisdiction requires a full day of work and you can’t make those hours
                    but still want to help, think about recruiting other people you know to be a poll worker and can
                    serve for the full time needed.
                </p>
               </div>
            </details>
            <details class="accordion">
               <summary class="accordion__title">DOES IT MATTER IF I’M A REPUBLICAN, DEMOCRAT, OR INDEPENDENT?</summary>
               <div class="accordion__content">
                  <p>
                    Poll working is usually a non-partisan activity and your party affiliation does not matter, but in
                    some states poll workers are matched to locations in pairs based on their party registration. This
                    is sometimes done to ensure party balance among poll workers at every polling location. Applications
                    in some jurisdictions may ask you for party registration information for this purpose.
                </p>
               </div>
            </details>
            <p>
               <a
                  href="https://www.powerthepolls.org/faq-application-status"
                  target="_self"
               >
                  {" "}
                  Application Status FAQs
               </a>
            </p>
            <p>
               <a
                  href="https://www.powerthepolls.org/faq-poll-worker"
                  target="_self"
               >
                  {" "}
                  Poll Worker FAQs
               </a>
            </p>
         </Host>
      );
   }
}
