import { Component, Fragment, h, Prop, State } from "@stencil/core";

/**
* Component to take groups of faq questions and display them.
* Also holds logic to toggle section open and closed
*/
@Component( {
   tag: "question-section",
   styleUrl: "question-section.scss",
   shadow: false,
} )
export class QuestionSection {

   @Prop() public sectionTitle?: string;
   @Prop() public questions?: { question: string, answer: () => string }[];

   @State() private isOpen: boolean = false;

   constructor() {
      this.isOpen = false;
   }

   public render() {
      const sectionTitle = this.sectionTitle || "";
      const questions = this.questions || [];
      const isOpen = this.isOpen;

      return (
         <Fragment>
            <div>
               <hr />
               <header>
                  <a class="header-click-wrapper" onClick={() => this.isOpen = !this.isOpen}>
                     <h2 class="section-title">
                        {sectionTitle}
                     </h2>
                     <div class="icon-wrapper">
                        <img
                           class={isOpen ? "open" : "close"}
                           alt={`toggle ${isOpen ? "open" : "close"}`}
                           src="/assets/images/icon_arrow-up.svg"
                           width="25" />
                     </div>
                  </a>
               </header>
               <section class={isOpen ? "open" : "close"}>
                  {questions.map( ( { question, answer } ) => (
                     <div class="subquestion">
                        <h4 class="subquestion-title">{question}</h4>
                        <p>{answer()}</p>
                     </div>
                  ) )
                  }
               </section>
            </div>
         </Fragment>
      );
   }
}
