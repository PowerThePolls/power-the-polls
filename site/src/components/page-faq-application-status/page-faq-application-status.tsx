import { Component, h, Host, Prop} from "@stencil/core";

@Component( {
   tag: "page-faq-application-status",
   styleUrl: "page-faq-application-status.scss",
   shadow: false,
} )
export class PageFaqApplicationStatus {
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
         <h1>APPLICATION & PLACEMENT STATUS FAQS</h1>
         {data.map(({sectionTitle, questions}) => (
                    <question-section
                        key={sectionTitle}
                        sectionTitle={sectionTitle}
                        questions={questions}
                    />
                ))}
      </Host > );
   }
}
