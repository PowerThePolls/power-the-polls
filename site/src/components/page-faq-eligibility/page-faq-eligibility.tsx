import { Component, h, Host, Prop} from "@stencil/core";

@Component( {
   tag: "page-faq-eligibility",
   styleUrl: "page-faq-eligibility.scss",
   shadow: false,
} )
export class PageFaqEligibility {
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
         <h1>ELIGIBILITY FAQS</h1>
         {data.map(({sectionTitle, questions}) => (
                    <question-section
                        key={sectionTitle}
                        sectionTitle={sectionTitle}
                        questions={questions}
                    />
                ))}
         <a href="https://www.powerthepolls.org/faq-application-status" target="_self"> Application Status FAQs</a>
         <a href="https://www.powerthepolls.org/faq-poll-worker" target="_self"> Poll Worker FAQs</a>
      </Host > );
   }
}
