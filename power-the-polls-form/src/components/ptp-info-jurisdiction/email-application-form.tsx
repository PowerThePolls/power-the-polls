import {
   Component,
   Event,
   EventEmitter,
   Fragment,
   h,
   Prop,
   State,
} from "@stencil/core";

import { JurisdictionInfo } from "../../data/States";
import { PtpFormData, TextInput } from "../../util";

type validationOptions = {
   [key: string]: boolean;
};

const emailValidationRegex = RegExp(
   '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$',
);
const phoneValidationRegex = RegExp(
   "(?:\\+1)?[-.\\s]?\\(?([0-9]{3})\\)?[-.\\s]?[0-9]{3}[-.\\s]?[0-9]{4}",
);

/**
 * Email application that will only render if there is no application link for the jurisdiction
 */

@Component({
   tag: "email-application-form",
   shadow: false,
})
export class EmailApplicationForm {
   @Prop()
   public jurisdiction?: JurisdictionInfo;

   @Prop()
   public data: PtpFormData;

   @Event({ cancelable: false })
   public submitted!: EventEmitter;

   @State()
   private fieldValidState: validationOptions = {
      name: true,
      email: true,
      county: true,
      phone: true,
      city: true,
      languages: true,
      ages: false,
   };

   @State()
   private isFormValid: boolean = false;

   constructor() {
      this.data = {};
   }

   public render() {
      if (!!!this.jurisdiction) {
         return;
      }

      const j = this.jurisdiction;
      const isEmpty = (inputVal: string) => inputVal.trim() === "";

      const findIfFormIsValid = (
         fieldValidState: validationOptions,
         fieldVal: string,
         newValue: boolean,
      ) => {
         const copy = { ...fieldValidState };
         copy[fieldVal] = newValue;
         return Object.values(copy).every((value) => value === true);
      };

      if (
         // if jurisdiction has no email, do not show the e-mail form
         j?.email == null ||
         j.email === ""
      ) {
         return;
      }

      const validateEmail = (e: Event) => {
         const inputValue = (e.target as HTMLInputElement).value;
         const isValid =
            emailValidationRegex.test(inputValue) && !isEmpty(inputValue);
         this.fieldValidState.email = isValid;
         this.isFormValid = findIfFormIsValid(
            this.fieldValidState,
            "email",
            isValid,
         );
      };

      const validateAge = (e: Event) => {
         const inputValue = (e.target as HTMLSelectElement).value;
         const isValid = inputValue !== "Please select";
         this.fieldValidState.ages = isValid;
         this.isFormValid = findIfFormIsValid(
            this.fieldValidState,
            "age",
            isValid,
         );
      };

      const validatePhone = (e: Event) => {
         const inputValue = (e.target as HTMLInputElement).value;
         const isValid =
            phoneValidationRegex.test(inputValue) && !isEmpty(inputValue);
         this.fieldValidState.email = isValid;
         this.isFormValid = findIfFormIsValid(
            this.fieldValidState,
            "phone",
            isValid,
         );
      };

      const validateNotEmpty = (e: Event, fieldName: string) => {
         const inputValue = (e.target as HTMLInputElement).value;
         const isValid = !isEmpty(inputValue);
         this.fieldValidState[fieldName] = isValid;
         this.isFormValid = findIfFormIsValid(
            this.fieldValidState,
            fieldName,
            isValid,
         );
      };

      const submitForm = (e: Event) => {
         try {
            fetch("https://smartystreet.powerthepolls.org/dev/electmail", {
               method: "POST",
               body: JSON.stringify(this.data),
               headers: {
                  "Content-Type": "application/json",
               },
            })
               .then((result) => {
                  console.log(
                     `Email sending ${result.statusText} (${result.status})`,
                  );
                  this.submitted.emit();
               })
               .catch((err) => console.error(err));
         } finally {
            e.preventDefault();
            return false;
         }
      };

      const ages = [
         "18 and under",
         "19 to 25",
         "26 to 35",
         "36 to 50",
         "51 to 64",
         "65 and older",
      ];

      return (
         <Fragment>
            <h3>Send statement of interest</h3>
            <p>
               You need to email your local jurisdiction directly in order to
               apply to be a poll worker. This form generates an email that is
               sent to your local election administrator on your behalf.
            </p>
            <form onSubmit={submitForm} style={{ padding: "0" }}>
               <label>
                  Name
                  <TextInput
                     data={this.data}
                     field="name"
                     required
                     onChange={(e: Event) => validateNotEmpty(e, "name")}
                  />
               </label>
               {!this.fieldValidState.name && (
                  <span class="invalid">Please fill out required field</span>
               )}
               <label>
                  City
                  <TextInput
                     data={this.data}
                     field="city"
                     required
                     onChange={(e: Event) => validateNotEmpty(e, "city")}
                  />
               </label>
               {!this.fieldValidState.city && (
                  <span class="invalid">Please fill out required field</span>
               )}
               <label>
                  County
                  <TextInput
                     data={this.data}
                     field="county"
                     required
                     onChange={(e: Event) => validateNotEmpty(e, "county")}
                  />
               </label>
               {!this.fieldValidState.county && (
                  <span class="invalid">Please fill out required field</span>
               )}
               <label>
                  Email
                  <TextInput
                     data={this.data}
                     field="email"
                     required
                     onChange={validateEmail}
                  />
               </label>
               {!this.fieldValidState.email && (
                  <span class="invalid">Please enter valid email address</span>
               )}
               <label>
                  Phone Number
                  <TextInput
                     data={this.data}
                     field="phone"
                     required
                     onChange={validatePhone}
                  />
               </label>
               {!this.fieldValidState.phone && (
                  <span class="invalid">Please enter valid phone number</span>
               )}
               <label>
                  What languages do you speak other than English?
                  <TextInput
                     data={this.data}
                     field="languages"
                     initialValue="English only"
                     required
                     onChange={(e: Event) => validateNotEmpty(e, "languages")}
                  />
               </label>
               {!this.fieldValidState.languages && (
                  <span class="invalid">Please fill out required field</span>
               )}
               <label>
                  Age
                  <select name="age" required onChange={validateAge}>
                     <option>Please select</option>
                     {ages.map((a) => (
                        <option value={a} selected={this.data.age === a}>
                           {a}
                        </option>
                     ))}
                  </select>
                  {!this.fieldValidState.ages && (
                     <span class="invalid">Please fill out required field</span>
                  )}
               </label>

               <input type="hidden" value={this.data.state} name="state" />

               <button
                  disabled={!this.isFormValid}
                  type="submit"
                  class="button"
               >
                  Send statement of interest
               </button>
               <p>Please fill out the required information</p>
            </form>

            <p>
               Or you can send an email yourself to{" "}
               <a
                  href={`mailto:${j.email}?subject=Becoming%20a%20Poll%20Worker`}
                  target="_blank"
               >
                  {j.email}
               </a>
               . Be sure to include your first and last name, city and county of
               residence, email, phone number, age, and any additional languages
               you speak other than English.
            </p>
            <a
               class="poll-worker-action"
               href={`mailto:${j.email}?subject=Becoming%20a%20Poll%20Worker`}
               target="_blank"
            >
               Email your election office directly
            </a>

            <hr />
         </Fragment>
      );
   }
}
