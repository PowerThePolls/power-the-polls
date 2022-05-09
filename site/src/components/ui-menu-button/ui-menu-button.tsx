import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";

@Component({
   tag: "ui-menu-button",
   styleUrl: "ui-menu-button.scss",
   shadow: true,
})
export class UiMenuButton {
   @Prop() public isActive?: boolean;

   /**
    * aria-label
    */
   @Prop() public label?: string;

   @Event() public toggle!: EventEmitter<UiMenuButton>;

   public render() {
      const toggle = (_: MouseEvent) => {
         const evt = this.toggle.emit(this);
         if (!evt.defaultPrevented) {
            this.isActive = !this.isActive;
         }
      };
      return (
         <button
            class={{
               hamburger: true,
               "hamburger--spin": true,
               "is-active": this.isActive || false,
            }}
            type="button"
            onClick={toggle}
            aria-label={this.label}
         >
            <span class="hamburger-box">
               <span class="hamburger-inner"></span>
            </span>
         </button>
      );
   }
}
