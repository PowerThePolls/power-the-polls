import {
   Component,
   Event,
   EventEmitter,
   h,
   Host,
   Method,
   State,
} from "@stencil/core";

import {
   findVariants,
   hasTownVillageCityVariant,
} from "../../util/WorkElections";

import ZipGeocode from "./zipGeocoding";

/**
 * An input and (optional) select element for a US postal address and state which will look up address values based on
 * the user's input to allow the user to select from.
 */
@Component({
   tag: "input-address",
   shadow: false,
})
export class AddressInput {
   @Event({
      eventName: "lookup",
      composed: true,
      cancelable: false,
   })
   public onLookup!: EventEmitter<"STARTED" | "COMPLETED">;

   @State() private cityValue: string;
   @State() private cityTownVillageValue: string;
   @State() private countyValue: string;
   @State() private stateValue: string;
   @State() private zipValue: string;
   @State() private cityOptions: Set<string>;
   @State() private cityTownVillageOptions: Set<string>;
   @State() private countyOptions: Set<string>;
   @State() private stateOptions: Map<string, string>;
   private m_state: "STARTED" | "COMPLETED" = "COMPLETED";

   constructor() {
      this.zipValue = "";
      this.cityValue = "";
      this.cityTownVillageValue = "";
      this.countyValue = "";
      this.stateValue = "";
      this.cityOptions = new Set();
      this.cityTownVillageOptions = new Set();
      this.countyOptions = new Set();
      this.stateOptions = new Map();
   }

   @Method()
   public state() {
      return Promise.resolve(this.m_state);
   }

   public render() {
      const zipValidationRegex = /^\d{5}$/;

      const onZipInputChange = (event: Event) => {
         this.zipValue = (event.target as HTMLInputElement).value;
         if (zipValidationRegex.test(this.zipValue)) {
            this.m_state = "STARTED";
            this.onLookup.emit(this.m_state);
            ZipGeocode(this.zipValue).then((result) => {
               if ("error" in result) {
                  console.log(result.error);
               } else {
                  this.cityOptions = result.cities;
                  this.cityValue = this.cityOptions.values().next().value;
                  this.countyOptions = result.counties;
                  this.countyValue = this.countyOptions.values().next().value;
                  this.stateOptions = result.states;
                  this.stateValue = this.stateOptions.keys().next().value;
                  if (
                     hasTownVillageCityVariant(
                        this.stateValue,
                        this.countyValue,
                        this.cityValue,
                     )
                  ) {
                     this.cityTownVillageOptions = new Set(
                        findVariants(
                           this.stateValue,
                           this.countyValue,
                           this.cityValue,
                        ),
                     );
                     this.cityTownVillageValue = this.cityTownVillageOptions
                        .keys()
                        .next().value;
                  } else {
                     this.cityTownVillageOptions = new Set();
                     this.cityTownVillageValue = "";
                  }
               }
               this.m_state = "COMPLETED";
               this.onLookup.emit(this.m_state);
            });
         }
      };

      return (
         <Host>
            <label>
               ZIP
               <input
                  name="zip"
                  required
                  value={this.zipValue}
                  pattern={"\\d{5}"}
                  maxLength={5}
                  title={"Please enter a valid ZIP code"}
                  onInput={onZipInputChange}
               />
            </label>

            <input-possibly-hidden-select
               fieldLabel="City"
               name="city"
               selected={this.cityValue}
               options={this.cityOptions}
            />

            <input-possibly-hidden-select
               fieldLabel="City/Town/Village"
               name="city_town_village"
               selected={this.cityTownVillageValue}
               options={this.cityTownVillageOptions}
            />

            <input-possibly-hidden-select
               fieldLabel="County"
               name="user_county"
               selected={this.countyValue}
               options={this.countyOptions}
            />

            <input-possibly-hidden-select
               fieldLabel="State"
               name="state"
               selected={this.stateValue}
               options={this.stateOptions}
            />
         </Host>
      );
   }
}
