import { Component, Fragment, h, Prop, State } from "@stencil/core";

/**
 * Contact form holds the form inputs for the faq contact modal
 * Has logic to validate input and display input forms correctly
 */
const emailValidRegex =
   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
   tag: "contact-form",
   styleUrl: "contact-form.scss",
   shadow: false,
})
export class ContactForm {
   @Prop()
   public submitForm?: (e: Event) => void;

   @Prop()
   public formError: boolean = false;

   @State()
   private fieldValidState = {
      name: true,
      email: true,
      subject: true,
      questionType: true,
      message: true,
   };

   public render() {
      const inputValidator = (e: Event) => {
         const target = e.target as HTMLInputElement;
         const isEmpty = target.value.trim() === "";

         switch (target.name) {
            case "name":
               this.fieldValidState = isEmpty
                  ? { ...this.fieldValidState, name: false }
                  : { ...this.fieldValidState, name: true };
               break;
            case "email":
               if (!emailValidRegex.test(target.value) || isEmpty) {
                  this.fieldValidState = {
                     ...this.fieldValidState,
                     email: false,
                  };
               } else {
                  this.fieldValidState = {
                     ...this.fieldValidState,
                     email: true,
                  };
               }
               break;
            case "subject":
               this.fieldValidState = isEmpty
                  ? { ...this.fieldValidState, subject: false }
                  : { ...this.fieldValidState, subject: true };
               break;
         }
      };

      const textAreaValidator = (e: Event) => {
         const target = e.target as HTMLTextAreaElement;
         this.fieldValidState =
            target.value.trim() === ""
               ? { ...this.fieldValidState, message: false }
               : { ...this.fieldValidState, message: true };
      };

      const dropdownValidator = (e: Event) => {
         const target = e.target as HTMLSelectElement;
         this.fieldValidState =
            target.value === "invalidVal"
               ? { ...this.fieldValidState, questionType: false }
               : { ...this.fieldValidState, questionType: true };
      };

      const issueCategories = [
         { title: "Please select a category", value: "invalidVal" },
         { title: "Application question", value: "app-question" },
         { title: "Compensation", value: "compensation" },
         { title: "Withdrawing application", value: "withdrew-app" },
         { title: "Application rejects/waitlisted", value: "rejected-app" },
         { title: "Tech issue", value: "tech" },
         { title: "Partnerships", value: "partnerships" },
         { title: "Other", value: "question" },
      ];

      const isValid =
         this.fieldValidState.email &&
         this.fieldValidState.name &&
         this.fieldValidState.questionType &&
         this.fieldValidState.message;

      return (
         <Fragment>
            <form
               class="contact-form"
               onSubmit={this.submitForm && this.submitForm}
            >
               <label>
                  Name*
                  <input
                     class={this.fieldValidState.name ? "valid" : undefined}
                     type="name"
                     required
                     name="name"
                     onChange={inputValidator}
                  />
                  <span class="input-error">
                     {!this.fieldValidState.name && "Please enter a valid name"}
                  </span>
               </label>
               <label>
                  Email Address*
                  <input
                     class={this.fieldValidState.email ? "valid" : undefined}
                     type="email"
                     required
                     name="email"
                     onChange={inputValidator}
                  />
                  {!this.fieldValidState.email && (
                     <span class="input-error">Please enter a valid email</span>
                  )}
               </label>
               <label>
                  Message Subject*
                  <input
                     class={this.fieldValidState.subject ? "valid" : undefined}
                     type="subject"
                     required
                     name="subject"
                     onChange={inputValidator}
                  />
                  {!this.fieldValidState.subject && (
                     <span class="input-error">
                        Please enter a valid subject
                     </span>
                  )}
               </label>
               <label>
                  Issue Category*
                  <select
                     name="issue-category"
                     onChange={dropdownValidator}
                     class={
                        this.fieldValidState.questionType ? "valid" : undefined
                     }
                  >
                     {issueCategories.map(({ title, value }) => (
                        <option value={value}>{title}</option>
                     ))}
                  </select>
                  {!this.fieldValidState.questionType && (
                     <span class="input-error">
                        Please select a valid category
                     </span>
                  )}
               </label>
               <label>
                  Describe the issue*
                  <textarea
                     onChange={textAreaValidator}
                     required
                     name="message"
                     rows={5}
                     class={this.fieldValidState.message ? "valid" : undefined}
                  />
                  {!this.fieldValidState.message && (
                     <span class="input-error">
                        Please enter a valid message
                     </span>
                  )}
               </label>
               <div class="button-container">
                  <button disabled={!isValid} type="submit">
                     Send Message
                  </button>
               </div>
            </form>
         </Fragment>
      );
   }
}
