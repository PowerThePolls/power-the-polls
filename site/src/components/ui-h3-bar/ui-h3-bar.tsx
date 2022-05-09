import { Component, h, Host } from "@stencil/core";

/**
 * h3 with a hr directly above it and more top padding above the hr.
 */
@Component({
   tag: "ui-h3-bar",
   styleUrl: "ui-h3-bar.scss",
   shadow: false,
})
export class H3Bar {
   public render() {
      return (
         <Host>
            <hr />
            <h3>
               <slot />
            </h3>
         </Host>
      );
   }
}
