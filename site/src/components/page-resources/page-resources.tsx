import { Component, h, Host } from "@stencil/core";

import { ResourceChecklistText } from "../../data";

@Component({
   tag: "page-resources",
   styleUrl: "page-resources.scss",
   shadow: false,
})
export class PageResources {
   public render() {
      return (
         <Host>
            <h1>Resources</h1>
            <h2>
               You’ve signed up to be a poll worker! Now it’s time to do some
               homework so you’re ready to serve!
            </h2>
            <hr />
            <div class="checklist">
               <h4>Election Day Poll Worker Checklist</h4>
               {ResourceChecklistText.map((info, index) => (
                  <div class="checklist-item" key={`checklist-item-${index}`}>
                     <div class="number">
                        {index + 1 < 10 ? "0" : ""}
                        {index + 1}
                     </div>
                     {info}
                  </div>
               ))}
            </div>
            <hr />
            <h4>Additional Resources</h4>
            <p>
               Our partners at the Fair Elections Center have put together
               <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.fairelectionscenter.org/state-specific-resources"
               >
                  {" "}
                  voting guides for every state.
               </a>{" "}
               Brush up on your local laws so you feel more confident about how
               to answer common voter questions on Election Day.
            </p>
         </Host>
      );
   }
}
