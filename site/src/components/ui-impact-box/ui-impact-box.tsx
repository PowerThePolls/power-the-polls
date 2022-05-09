import { Component, h, Host } from "@stencil/core";

@Component({
   tag: "ui-impact-box",
   styleUrl: "ui-impact-box.scss",
   shadow: false,
})
export class ImpactBox {
   public render() {
      return (
         <Host>
            <slot />
         </Host>
      );
   }
}
