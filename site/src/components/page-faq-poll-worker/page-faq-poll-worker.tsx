import { Component, h, Host, Prop } from "@stencil/core";

@Component( {
   tag: "page-faq-poll-worker",
   styleUrl: "page-faq-poll-worker.scss",
   shadow: false,
} )
export class PageFaqPollWorker {
   /**
     * A list of entries to display in the FAQ
     * see: FaqData.ts
     * see: app-root.tsx
     */
    @Prop() public data?: { sectionTitle: string, questions: { question: string, answer: () => string }[] }[];

   public render() {
      const data = this.data || [];
      return ( <Host>
         <a href="/faq"><button class= "back-button">Back</button></a>
         <h1>POLL WORKER FAQS</h1>
         {data.map(({sectionTitle, questions}) => (
                    <question-section
                        key={sectionTitle}
                        sectionTitle={sectionTitle}
                        questions={questions}
                    />
                ))};
         <p><a href="https://www.powerthepolls.org/faq-eligibility" target="_self"> Eligibility FAQs</a><p>
         <p><a href="https://www.powerthepolls.org/faq-application-status" target="_self"> Application Status FAQs</a><p>
      </Host > );
   }
}
