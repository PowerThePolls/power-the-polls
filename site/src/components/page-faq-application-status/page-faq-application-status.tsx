import { Component, h, Host, Prop } from "@stencil/core";

@Component({
   tag: "page-faq-application-status",
   styleUrl: "page-faq-application-status.scss",
   shadow: false,
})
export class PageFaqApplicationStatus {
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
      return (
         <Host>
            <a href="/faq">
               <button class="back-button">Back</button>
            </a>
            <h1>APPLICATION & PLACEMENT STATUS FAQS</h1>
            <h2>Submitting your poll worker application</h2>
            <details class="accordion">
               <summary class="accordion__title">ONCE I SUBMIT MY NAME AND EMAIL TO POWER THE POLLS, IS MY APPLICATION COMPLETE?</summary>
               <div class="accordion__content">
                  <p>
                    No! Once you sign up with us, we immediately direct you to a page with your local
                    elections office information. You must fill out an official application and/or
                    provide information to your local elections office. Your local elections office
                    manages everything related to poll worker applications, selection, training, and
                    placement. Completing an official application with your local elections office is
                    the most important step towards becoming a poll worker.
                </p>
               </div>
               </details>
               <details class="accordion">
               <summary class="accordion__title">WHAT’S THE DEADLINE TO APPLY?</summary>
               <div class="accordion__content">
                  <p>
                    Most election administrators accept applications on a rolling basis,
                    so we do not have a set deadline nationwide or even state-by-state.
                    However, getting applications in as early as possible is important
                    to help administrators in their planning. If you’re ready to get started,
                    please look up your application here and submit it today!
                </p>
               </div>
            </details>
            <details class="accordion">
               <summary class="accordion__title">I APPLIED OR SERVED AS A POLL WORKER IN 2020 AND/OR 2022. DO I NEED TO APPLY AGAIN?</summary>
               <div class="accordion__content">
                  <p>
                    We encourage you to apply again so your local election officials know that you’re available
                    again for the upcoming election. It’s also possible that there is a new application form,
                    so we suggest you err on the side of completing a new application. You can do so
                     <stencil-route-link
                    url="/signup#form">here.</stencil-route-link>
                </p>
               </div>
            </details>
            <details class="accordion">
               <summary class="accordion__title">CAN YOU MAIL ME AN APPLICATION?</summary>
               <div class="accordion__content">
                  <p>
                    Unfortunately, Power the Polls can’t mail
                    you an application, but many applications are
                    available online. You can get more information
                    when you sign up <stencil-route-link
                    url="/signup#form">here.</stencil-route-link>
                </p>
               </div>
            </details>
            <h2>After you apply to be a poll worker</h2>
            <details class="accordion">
               <summary class="accordion__title">WHAT DO I DO AFTER I COMPLETE MY APPLICATION?</summary>
               <div class="accordion__content">
                  <p>
                    Be on the lookout for any communication from your local
                    election administrators! Once they reach out to you,
                    make sure you sign up for any training or mandatory
                    information sessions.
                    <br/>
                    If you haven’t heard anything for awhile after submitting
                    your application, it’s okay to reach out to your local
                    elections office to follow up on the status of your
                    application.
                </p>
               </div>
            </details>
            <details class="accordion">
               <summary class="accordion__title">I APPLIED, BUT I HAVEN’T HEARD BACK FROM MY ELECTION ADMINISTRATOR</summary>
               <div class="accordion__content">
                  <p>
                    Election administrators are doing the best they can to
                    prepare to run elections smoothly—and that includes
                    processing poll worker applications. While some election
                    administrators wait to reach out to poll worker applicants
                    until closer to Election Day, some reach out earlier.
                    You can always be proactive and reach out to your local
                    elections office to check in on the status of your
                    application. These offices tend to be busier the
                    closer it gets to Election Day, so be patient as
                    you await a reply.
                </p>
               </div>
            </details>
            <details class="accordion">
               <summary class="accordion__title">I APPLIED, BUT I HAVEN’T HEARD BACK FROM MY ELECTION ADMINISTRATOR</summary>
               <div class="accordion__content">
                  <p>
                    Election administrators are doing the best they can to
                    prepare to run elections smoothly—and that includes
                    processing poll worker applications. While some election
                    administrators wait to reach out to poll worker applicants
                    until closer to Election Day, some reach out earlier.
                    You can always be proactive and reach out to your local
                    elections office to check in on the status of your
                    application. These offices tend to be busier the
                    closer it gets to Election Day, so be patient as
                    you await a reply.
                </p>
               </div>
            </details>
            <details class="accordion">
               <summary class="accordion__title">I NEED TO WITHDRAW MY APPLICATION. HOW CAN I STILL HELP?</summary>
               <div class="accordion__content">
                  <p>
                    We understand that plans change. If you can no longer
                    be a poll worker, we encourage you to recruit your
                    friends, family and neighbors to replace you this
                    year to help keep polling places open!
                </p>
               </div>
            </details>
            <h2>Technical issues</h2>
            <details class="accordion">
               <summary class="accordion__title">I HIT THE “COMPLETE YOUR APPLICATION” BUTTON, BUT IT BROUGHT ME TO A BLANK EMAIL. WHAT NEXT?</summary>
               <div class="accordion__content">
                  <p>
                    If the "Complete Your Application!" prompt leads you to a blank email, that means that you need to
                    email your local election administrator directly to apply.
                </p>
               </div>
            </details>
            <details class="accordion">
               <summary class="accordion__title">I’M EXPERIENCING A TECHNICAL ERROR WHILE TRYING TO ACCESS YOUR SITE/I FOUND AN ERROR ON YOUR SITE</summary>
               <div class="accordion__content">
                  <p>
                    Please email <a href="mailto:info@powerthepolls.org">info@powerthepolls.org</a> to report the issue.
                    Be sure to include a screenshot and the zip code you used to sign up.
                </p>
               </div>
            </details>
            <p>
               <a
                  href="https://www.powerthepolls.org/faq-eligibility"
                  target="_self"
               >
                  {" "}
                  Eligibility FAQs
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
