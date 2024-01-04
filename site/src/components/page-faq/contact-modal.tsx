import {
   Component,
   Event,
   EventEmitter,
   Fragment,
   h,
   Listen,
   Prop,
   State,
} from "@stencil/core";

import { submitToHelpScout } from "./helpscout-webhook";

/**
 * Contact Modal is parent to the contact form
 * Contains logic to submit form information to helpscout via webhook
 * Also has logic to show the message submit state and change content based on submit state
 */
@Component({
   tag: "contact-modal",
   styleUrl: "contact-modal.scss",
   shadow: false,
})
export class ContactModal {
   @Prop()
   public isOpen: boolean = false;

   @Event({
      eventName: "close",
      composed: true,
      cancelable: false,
   })
   public onClose!: EventEmitter;

   @State()
   private submittedState:
      | "NOT_SUBMITTED"
      | "SUBMITTING"
      | "SUBMIT_SUCCESS"
      | "SUBMIT_FAILURE" = "NOT_SUBMITTED";

   @Listen("keyup", { target: "document" })
   public onKeyPress(ev: KeyboardEvent) {
      if (ev.key === "Escape") {
         this.onClose.emit();
      }
   }

   public render() {
      const submitForm = (e: Event) => {
         this.submittedState = "SUBMITTING";
         const form = e.target as HTMLFormElement;
         const elements = [
            ...form.getElementsByTagName("input"),
            ...form.getElementsByTagName("select"),
            ...form.getElementsByTagName("textarea"),
         ];
         const data: any = elements.reduce((x, el) => {
            x[el.name] = el.value;
            return x;
         }, {} as any);

         try {
            submitToHelpScout(data)
               .then((response) => {
                  this.submittedState =
                     response === true ? "SUBMIT_SUCCESS" : "SUBMIT_FAILURE";
               })
               .catch((err) => {
                  console.warn("Error submitting faq form", err);
                  this.submittedState = "SUBMIT_FAILURE";
               });
         } catch (e) {
            this.submittedState = "SUBMIT_FAILURE";
         } finally {
            e.preventDefault();
         }
      };

      return (
         <Fragment>
            <div
               class={this.isOpen ? "modal-wrapper visible" : "modal-wrapper"}
            >
               <div class="modal">
                  <button
                     class="close-button"
                     onClick={() => this.onClose.emit()}
                  >
                     <img
                        alt="Close"
                        src="/assets/images/icon-close.svg"
                        width="25"
                     />
                  </button>
                  {this.submittedState === "SUBMIT_SUCCESS" ? (
                     <div>
                        <h3>Your Message was sent</h3>
                        <div>
                           Thank you for your email! While we can’t guarantee a
                           response to every email due to volume, we will try to
                           get back to you as soon as possible. For a faster
                           response, please review our{" "}
                           <a href="#" onClick={() => this.onClose.emit()}>
                              FAQ
                           </a>{" "}
                           or contact your{" "}
                           <stencil-route-link url="/search">
                              local election administrator directly
                           </stencil-route-link>
                           .
                        </div>
                     </div>
                  ) : this.submittedState === "SUBMIT_FAILURE" ? (
                     <div>
                        <h3>Uh oh!</h3>
                        <div>
                           We're unable to process your request. Please email us
                           at{" "}
                           <a href="mailto:info@powerthepolls.org">
                              info@powerthepolls.org
                           </a>
                           , or{" "}
                           <stencil-route-link url="/search">
                              contact your local election administrator directly
                           </stencil-route-link>
                           .
                        </div>
                     </div>
                  ) : (
                     <div>
                        <h3>Contact us</h3>
                        <p>
                           For Press inquiries, contact us at{" "}
                           <a href="mailto:press@powerthepolls.org">
                              press@powerthepolls.org
                           </a>
                           . For all other inquiries, please select the
                           appropriate category below.
                        </p>
                        <div>
                           <contact-form submitForm={(e) => submitForm(e)} />
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </Fragment>
      );
   }
}
