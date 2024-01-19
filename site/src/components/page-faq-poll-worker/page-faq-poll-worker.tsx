import { Component, h, Host, Prop } from "@stencil/core";

@Component({
   tag: "page-faq-poll-worker",
   styleUrl: "page-faq-poll-worker.scss",
   shadow: false,
})
export class PageFaqPollWorker {
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
      <h1>POLL WORKER FAQS</h1>
      <h2>Poll worker responsibilities</h2>
            <details class="accordion">
               <summary class="accordion__title">WHAT DO POLL WORKERS DO?</summary>
               <div class="accordion__content">
                  <p>
                    There are many kinds of jobs for poll workers to do, including helping voters check in, managing
                    voter lines, troubleshooting equipment, and providing directions and assistance. Poll workers may
                    also assist with various office duties. To learn more, check out our resource
                    <a href="https://www.powerthepolls.org/assets/documents/a-day-in-the-life.pdf"> “A day in the life of a poll worker.”</a>
                </p>
               </div>
               </details>
               <details class="accordion">
               <summary class="accordion__title">IS A POLL WORKER THE SAME AS A POLL WATCHER?</summary>
               <div class="accordion__content">
                  <p>
                    No, these are different roles. Poll workers work
                    for election administrators to help administer
                    the election. They do things like set up the
                    polling location, check in voters, assist
                    voters with questions, and troubleshoot any other
                    issues. Poll watchers, which are sometimes also
                    known as poll observers or poll monitors, are
                    volunteers or staff from an outside organization,
                    political party, or campaign who are certified to
                    observe and monitor election administration. Power
                    the Polls only recruits poll workers.
                </p>
               </div>
            </details>
            <details class="accordion">
               <summary class="accordion__title">IF I’M WORKING THE POLLS, WHEN DO I VOTE</summary>
               <div class="accordion__content">
                  <p>
                    Poll workers usually cast their votes early or by
                    mail, but some cast their votes on Election Day.
                    Certain jurisdictions may require poll workers to
                    vote early or via absentee ballot. Your local
                    election official can provide details about how
                    poll workers cast their ballots.
                </p>
               </div>
            </details>
            <h2>Poll worker training</h2>
            <details class="accordion">
               <summary class="accordion__title">DO POLL WORKERS NEED TRAINING?</summary>
               <div class="accordion__content">
                  <p>
                    Yes. Prior to Election Day, local
                    jurisdictions host training and provide poll
                    workers with all the necessary information and
                    skills they need to be successful and help their
                    neighbors vote.
                </p>
               </div>
            </details>
                        <details class="accordion">
               <summary class="accordion__title">WHEN WILL THE TRAINING START?</summary>
               <div class="accordion__content">
                  <p>
                    Check to see if your local administrator has
                    posted new training information. In some places,
                    there are online trainings you can start immediately,
                    though many may not be scheduled until closer to the
                    election. If there is no information about training
                    online, reach out to your election administrator directly
                    to ask when training is and how to schedule yourself to
                    attend.
                    <br/>
                    In the meantime, check out our <a href="https://www.powerthepolls.org/resources" target="_self">
                    Resources</a> page to learn
                    more about what to expect at your training and at the
                    polls.
                </p>
               </div>
            </details>
            <h2>Compensation and safety</h2>
            <details class="accordion">
               <summary class="accordion__title">ARE POLL WORKERS PAID?</summary>
               <div class="accordion__content">
                  <p>
                    Local jurisdictions will often pay poll workers a
                    stipend for their participation. In most cases, you
                    will be paid with a check for a day’s worth of work.
                    In some cases, poll working may be voluntary and not
                    paid. You can find out more about pay in your
                    jurisdiction by reaching out directly to the local
                    elections office or typing in your zip code at <stencil-route-link
                    url="/search">http://www.powerthepolls.org/search</stencil-route-link>.
                </p>
               </div>
            </details>
            <details class="accordion">
               <summary class="accordion__title">I HAVE A DISABILITY. WHAT ACCOMODATIONS ARE BEING PROVIDED?</summary>
               <div class="accordion__content">
                  <p>
                    Accommodations vary state to state, so the best place to find information is by contacting your
                    local election administrator directly. You can find their info <stencil-route-link
                    url="/search">here</stencil-route-link>.
                </p>
               </div>
            </details>
            <details class="accordion">
               <summary class="accordion__title">I DON'T WANT TO BE PAID TO BE A POLL WORKER.</summary>
               <div class="accordion__content">
                  <p>
                    If you are not interested in being paid, you can ask your administrator about waiving your wages. If
                    that is not possible, you can choose to donate it to a charity.
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
            href="https://www.powerthepolls.org/faq-application-status"
            target="_self"
         >
            {" "}
            Application Status FAQs
         </a>
      </p>
   </Host>
);
   }
}
