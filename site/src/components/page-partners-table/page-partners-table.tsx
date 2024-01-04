import {
   Component,
   Fragment,
   FunctionalComponent,
   h,
   Host,
   State,
   Watch,
} from "@stencil/core";

import { Partner } from "../../data/types";
import { debounce, equals } from "../../util";

import {
   getAuthenticatedUserName,
   getCommittingUserName,
   loadPartnerData,
   saveChanges,
   setToken,
} from "./GitHub";
import { PartnerTableData } from "./types";
import {
   calculatePartnerSearchValue as calculatePartnerSearchString,
   findDuplicates,
   getField,
   getLatest,
   isFieldModified,
   isValidImageBytes,
} from "./utils";

const Checkbox: FunctionalComponent<{
   partner: PartnerTableData;
   fieldName: keyof Partner;
   onInput: () => void;
   invert?: boolean;
   label?: string;
   disabled?: boolean;
}> = ({ partner, fieldName, onInput, invert, label, disabled }) => {
   let checked = !!getField(partner, fieldName);
   if (invert === true) {
      checked = !checked;
   }
   return (
      <Fragment>
         <input
            type="checkbox"
            disabled={disabled || false}
            checked={checked}
            name={fieldName}
         />
         <label
            class={{ modified: isFieldModified(partner, fieldName) }}
            htmlFor={fieldName}
            onClick={(_) => disabled !== true && onInput()}
         >
            {label}
         </label>
      </Fragment>
   );
};

/**
 * Displays the given `fieldName` and possible the former such value if it has been modified. Presumes the value
 * to be a string.
 */
const EditableText: FunctionalComponent<{
   partner: PartnerTableData;
   fieldName: keyof Partner;
   onClick: () => void;
}> = ({ partner, fieldName, onClick }) => {
   const isModified = isFieldModified(partner, fieldName);
   return (
      <div>
         <p
            class={{
               editable: true,
               modified: isModified,
            }}
            onClick={(_) => onClick()}
         >
            {getField(partner, fieldName) || "none"}
         </p>
         {isModified && (
            <p style={{ textDecoration: "line-through" }}>
               {partner.master[fieldName]}
            </p>
         )}
      </div>
   );
};

/**
 * Mini-CMS to edit /src/data/PartnersList.json in the partner-updates branch in GitHub and commit the changes
 */
@Component({
   tag: "page-partners-table",
   styleUrl: "page-partners-table.scss",
   shadow: false,
})
export class PagePartnersTable {
   private static readonly FILTER_REFRESH_DELAY: number = 300 /*milliseconds*/;

   @State() private partners: PartnerTableData[];
   @State() private isLoading?: [message: string, progress: number];
   @State() private isNotProduction: boolean;
   @State() private filterValue?: string;
   /**
    * `filterValue` split on whitespace. This is what is actually used to filter `partners`
    */
   @State() private filterParams?: string[];
   /**
    * The value of the auth token as the user is entering it in the login/auth input box. It is cleared
    * on successful auth and does NOT reflect the current authenticated user's token
    */
   @State() private tokenValue: string;

   private updateFilterParams: (val?: string) => void;

   constructor() {
      this.partners = [];
      this.tokenValue = "";
      this.isNotProduction = !(
         window.location.hostname === "powerthepolls.org" ||
         window.location.hostname === "www.powerthepolls.org"
      );
      this.isLoading = ["Loading partner data", 0];
      // we don't want to update this on every single keypress, so debounce to save on too many renders
      this.updateFilterParams = debounce((val?: string) => {
         this.filterParams = val?.split(" ").map((x) => x.toLowerCase());
      }, PagePartnersTable.FILTER_REFRESH_DELAY);
   }

   public componentWillLoad() {
      this.refreshPartnerData();
   }

   public refreshPartnerData(type: "Loading" | "Refreshing" = "Loading") {
      loadPartnerData(
         (message, progress) => (this.isLoading = [message, progress * 0.9]),
         type,
      ).then((x) => {
         this.partners = x;
         // set progress to 90% and introduce a delay before hiding the loading screen since it will
         // take a bit to render all 200+ partners and the images and components
         this.isLoading = ["Rendering", 0.9];
         setTimeout(() => (this.isLoading = undefined), 2000);
      });
   }

   @Watch("filterValue")
   public onFilterValueChanged(newVal?: string) {
      this.updateFilterParams(newVal);
   }

   public render() {
      const { partners, filterValue, filterParams } = this;

      const onFilterChange = (e: Event) => {
         this.filterValue = (e.target as HTMLInputElement).value;
      };

      const modify = (
         partner: PartnerTableData,
         field: keyof Partner,
         makeChange: (existing: any) => any,
      ) => {
         const existingData = getLatest(partner);
         const newVal = makeChange(existingData[field]);

         if (equals(existingData[field], newVal)) {
            console.log(
               "Not modifying",
               field,
               "existing data is the same",
               newVal,
            );
            return;
         }

         const newPartnerData = {
            ...existingData,
            [field]: newVal,
         };
         const updatedPartner: PartnerTableData = {
            ...partner,
            local: newPartnerData,
         };

         // if the modified data is equal to our original, then just clear the modifications
         if (
            (updatedPartner.branch !== undefined &&
               equals(updatedPartner.branch, updatedPartner.local)) ||
            // if the branch is non-null and the local changes differ then that is valid but if the branch has no changes we can compare against master
            (updatedPartner.branch === undefined &&
               equals(updatedPartner.master, updatedPartner.local))
         ) {
            updatedPartner.local = undefined;
         }

         // if the changes are legit, make sure we capture them in the filter value
         updatedPartner.search =
            calculatePartnerSearchString(existingData) +
            "|" +
            calculatePartnerSearchString(newPartnerData);

         // insert our new data in place of the old one
         const idx = this.partners.indexOf(partner);
         this.partners = [
            ...this.partners.slice(0, idx),
            updatedPartner,
            ...this.partners.slice(idx + 1),
         ];
      };

      const toggleBool = (partner: PartnerTableData, field: keyof Partner) =>
         modify(partner, field, (existing) =>
            existing === true ? undefined : true,
         );

      const setBool = (
         partner: PartnerTableData,
         field: keyof Partner,
         value?: boolean,
      ) => modify(partner, field, () => value);

      const promptModify = (
         partner: PartnerTableData,
         field: keyof Partner,
         emptyStringSetsUndefined: boolean = false,
      ) => {
         const newVal = prompt(
            `Update ${field} value for ${partner.master.name}:`,
            (getField(partner, field) || "") + "",
         )?.trim();
         if (newVal == null) {
            return; // user cancelled
         }
         if (emptyStringSetsUndefined || newVal !== "") {
            modify(partner, field, (_) => (newVal === "" ? undefined : newVal));
         }
      };

      const createNewPartner = () => {
         const partnerId = prompt(
            "New partner ID (source in ActionKit):\n\nno spaces\ncase-sensitive",
         )
            ?.trim()
            ?.replace(/\s/g, "-");
         if (partnerId == null || partnerId === "") {
            return;
         }

         const dup = findDuplicates(this.partners, partnerId);
         if (dup != null) {
            alert(
               `The value "${partnerId}" is already in use by ${
                  getLatest(dup).name
               }`,
            );
            return;
         }
         const partner = { partnerId, name: partnerId };
         this.partners = [
            ...this.partners,
            {
               master: { partnerId, name: "" },
               search: calculatePartnerSearchString(partner),
               local: partner,
            },
         ];
         setTimeout(() => (window.location.hash = partnerId), 500);
      };

      const onImageAdded = (p: PartnerTableData) => (e: Event) => {
         const files = (e.target as HTMLInputElement)?.files;
         if (files != null && files.length > 0) {
            const file = files[0];
            if (file.size > 1024 * 150) {
               alert(
                  `Cannot add. Images must be less than 150KiB but was ${Math.floor(
                     file.size / 1024,
                  )}KiB`,
               );
               return;
            }
            const reader = new FileReader();
            reader.onload = function (evt) {
               let imageData = evt.target?.result as string;
               if (imageData != null) {
                  if (isValidImageBytes(imageData)) {
                     modify(p, "logo", () => imageData);
                  } else {
                     alert(
                        "This image format is not valid.\n\nImages must be PNG, JPG, or SVG",
                     );
                  }
               }
            };
            reader.readAsDataURL(file);
         }
      };

      const save = async () => {
         const message = prompt(
            "Save these changes?\n\nAdd an optional message indicating what you changed here:",
         )?.trim();
         if (message == null) {
            return;
         }
         this.isLoading = ["Saving", 0];
         await saveChanges(
            this.partners,
            message,
            (m, progress) => (this.isLoading = [m, progress]),
         );
         this.isLoading = ["Refreshing", 0];
         setTimeout(() => window.location.reload(), 1000);
      };

      const saveToken = async () => {
         const committingUser =
            prompt(
               "If you are using someone else's token, enter your Slack username here:",
            )?.trim() || undefined;
         if (await setToken(this.tokenValue, committingUser)) {
            this.tokenValue = "";
         } else {
            this.tokenValue = "";
            alert("Invalid credentials");
         }
      };

      const deleteToken = async () => {
         if (
            confirm("Are you sure you want to logout?") &&
            (await setToken(undefined))
         ) {
            this.tokenValue = "";
            window.location.reload();
         }
      };

      const changesUnsaved = partners.filter(
         (x) => x.local !== undefined,
      ).length;
      const changesInBranch = partners.filter(
         (x) => x.branch !== undefined,
      ).length;
      const user = getAuthenticatedUserName();
      const committer = getCommittingUserName();

      return (
         <Host>
            <div class="controls">
               <div class="search">
                  Filter:&nbsp;
                  <input value={filterValue} onInput={onFilterChange} />
                  <button onClick={() => (this.filterValue = "")} class="icon">
                     ❌
                  </button>
               </div>
               <div class="create">
                  {partners.length} partners{" "}
                  <button onClick={createNewPartner}>Create New Partner</button>
               </div>
               <div>
                  {user ? (
                     <Fragment>
                        signed in as <strong>{user}</strong>
                        {committer !== undefined ? "/" + committer + " " : " "}
                        <button onClick={deleteToken}>Logout</button>
                     </Fragment>
                  ) : (
                     <Fragment>
                        <input
                           placeholder="Auth token"
                           value={this.tokenValue}
                           onInput={(e) =>
                              (this.tokenValue = (
                                 e.target as HTMLInputElement
                              ).value)
                           }
                           title="A developer will provide you with this auth token. Contact one of us over Slack."
                        />
                        <button onClick={saveToken}>Login</button>{" "}
                        <a
                           href="https://github.com/settings/tokens/new"
                           target="_blank"
                           title="Select 'repo'"
                        >
                           create&nbsp;token
                        </a>
                     </Fragment>
                  )}
               </div>
               <div class="changes">
                  <Fragment>
                     <span class="modified">{changesInBranch}</span> change
                     {changesInBranch > 1 || changesInBranch === 0 ? "s " : " "}
                     awaiting deploy /{" "}
                     <span class="modified">{changesUnsaved}</span> unsaved
                     change
                     {changesUnsaved > 1 || changesUnsaved === 0 ? "s " : " "}
                     <button
                        class={{
                           unauthenticated: user === undefined,
                           cta: true,
                        }}
                        onClick={save}
                        disabled={user === undefined || changesUnsaved === 0}
                     >
                        Save
                     </button>
                  </Fragment>
               </div>
            </div>
            <div class="table">
               <div class="header">
                  <div>Partner ID (source in ActionKit)</div>
                  <div>Full Name</div>
                  <div>Additional vanity URLs</div>
                  <div>Logo</div>
                  <div>Logo on /partners list?</div>
                  <div>Logo on landing page?</div>
                  <div>Is founding partner?</div>
                  <div>Partner name in privacy clause?</div>
                  <div>Custom form field</div>
               </div>
               {partners
                  .filter(
                     (x) =>
                        filterParams == null ||
                        filterParams.every((param) => x.search.includes(param)),
                  )
                  .map((partner) => (
                     <div
                        key={partner.master.partnerId}
                        id={partner.master.partnerId}
                     >
                        <div>
                           <code>
                              <a
                                 href={`https://powerthepolls.org/${partner.master.partnerId}`}
                                 target="_blank"
                              >
                                 {partner.master.partnerId}
                              </a>
                           </code>
                        </div>
                        <div>
                           <EditableText
                              partner={partner}
                              fieldName="name"
                              onClick={() => promptModify(partner, "name")}
                           />
                        </div>
                        <div>
                           <ul>
                              {getLatest(partner).additionalVanityUrls?.map(
                                 (vanityUrl) => (
                                    <li key={vanityUrl}>
                                       <a
                                          class={{
                                             modified: isFieldModified(
                                                partner,
                                                "additionalVanityUrls",
                                             ),
                                          }}
                                          href={`https://powerthepolls.org/${vanityUrl}`}
                                          target="_blank"
                                       >
                                          {vanityUrl}
                                       </a>{" "}
                                       <button
                                          class="icon"
                                          title="Delete this vanity URL"
                                          onClick={(_) =>
                                             modify(
                                                partner,
                                                "additionalVanityUrls",
                                                (existing: string[]) => {
                                                   const idx =
                                                      existing?.indexOf(
                                                         vanityUrl,
                                                      );
                                                   return [
                                                      ...existing.slice(0, idx),
                                                      ...existing.slice(
                                                         idx + 1,
                                                      ),
                                                   ];
                                                },
                                             )
                                          }
                                       >
                                          🗑️
                                       </button>
                                    </li>
                                 ),
                              )}
                              <li>
                                 <button
                                    class="icon"
                                    title="Add a new vanity URL"
                                    onClick={(_) => {
                                       const newVanityUrl = prompt(
                                          `Add a new vanity URL for ${
                                             getLatest(partner).name
                                          }\n\nThey currently have:\n` +
                                             `https://powerthepolls.org/${partner.master.partnerId}\n` +
                                             `${
                                                getLatest(partner)
                                                   .additionalVanityUrls?.map(
                                                      (x) =>
                                                         "https://powerthepolls.org/" +
                                                         x,
                                                   )
                                                   ?.join("\n") || ""
                                             }` +
                                             "\n\n\nno spaces",
                                       )
                                          ?.trim()
                                          ?.replace(/\s+/g, "");
                                       if (
                                          newVanityUrl == null ||
                                          newVanityUrl === ""
                                       ) {
                                          return;
                                       }
                                       const dup = findDuplicates(
                                          this.partners,
                                          newVanityUrl,
                                       );
                                       if (dup != null) {
                                          alert(
                                             `The value "${newVanityUrl}" is already in use by ${
                                                getLatest(dup).name
                                             }`,
                                          );
                                          return;
                                       }
                                       modify(
                                          partner,
                                          "additionalVanityUrls",
                                          (existing: string[]) => [
                                             ...(existing || []),
                                             newVanityUrl,
                                          ],
                                       );
                                    }}
                                 >
                                    ➕
                                 </button>
                              </li>
                           </ul>
                        </div>
                        <div
                           class={{
                              modified: isFieldModified(partner, "logo"),
                           }}
                        >
                           {getField(partner, "logo") ? (
                              <Fragment>
                                 <ui-partner-image
                                    partner={getLatest(partner)}
                                    excludeAnchor={true}
                                    sourceFromDevBranch={true}
                                 />
                                 <div class="logo-settings">
                                    <form
                                       class={{
                                          modified: isFieldModified(
                                             partner,
                                             "logoIsDark",
                                          ),
                                       }}
                                    >
                                       <label
                                          onClick={() =>
                                             setBool(
                                                partner,
                                                "logoIsDark",
                                                !!getField(
                                                   partner,
                                                   "logoIsDark",
                                                )
                                                   ? undefined
                                                   : true,
                                             )
                                          }
                                       >
                                          background
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             baseProfile="full"
                                             width="28"
                                             height="28"
                                          >
                                             {!!getField(
                                                partner,
                                                "logoIsDark",
                                             ) ? (
                                                // paths for selected-filled and de-selected-outline MaterialUI-esque switches
                                                <path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                                             ) : (
                                                <path d="M7 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10-3c2.76 0 5 2.24 5 5s-2.24 5-5 5H7c-2.76 0-5-2.24-5-5s2.24-5 5-5h10zM7 9a3 3 0 0 0 0 6h10a3 3 0 0 0 0-6H7z" />
                                             )}
                                          </svg>
                                       </label>
                                    </form>
                                 </div>
                              </Fragment>
                           ) : (
                              <Fragment>
                                 <label
                                    htmlFor={`upload-logo-for-${partner.master.partnerId}`}
                                    class="button"
                                 >
                                    add
                                 </label>
                                 <input
                                    type="file"
                                    id={`upload-logo-for-${partner.master.partnerId}`}
                                    accept="image/png,image/jpg,image/jpeg,image/svg+xml"
                                    style={{
                                       position: "relative",
                                       left: "-9999px",
                                    }}
                                    onInput={onImageAdded(partner)}
                                 />
                              </Fragment>
                           )}
                        </div>
                        <div>
                           <Checkbox
                              partner={partner}
                              fieldName="excludeFromPartnerList"
                              invert
                              disabled={getField(partner, "logo") == null}
                              onInput={() =>
                                 toggleBool(partner, "excludeFromPartnerList")
                              }
                           />
                        </div>
                        <div>
                           <Checkbox
                              partner={partner}
                              fieldName="logoAppearsOnLandingPage"
                              disabled={getField(partner, "logo") == null}
                              onInput={() =>
                                 toggleBool(partner, "logoAppearsOnLandingPage")
                              }
                           />
                        </div>
                        <div>
                           <Checkbox
                              partner={partner}
                              fieldName="isFoundingPartner"
                              onInput={() =>
                                 toggleBool(partner, "isFoundingPartner")
                              }
                           />
                        </div>
                        <div>
                           <Checkbox
                              partner={partner}
                              fieldName="optUserOutOfChase"
                              onInput={() =>
                                 toggleBool(partner, "optUserOutOfChase")
                              }
                           />
                        </div>
                        <div>
                           <EditableText
                              partner={partner}
                              fieldName="customSignupFormField"
                              onClick={() =>
                                 promptModify(
                                    partner,
                                    "customSignupFormField",
                                    true,
                                 )
                              }
                           />
                        </div>
                     </div>
                  ))}
            </div>
            {this.isNotProduction && (
               <div class="production-data-warning">
                  <span>
                     This is pointing to production data &mdash; don't save
                     unless you mean it!
                  </span>
               </div>
            )}
            {this.isLoading && (
               <div class="loading-screen">
                  <ui-loading-spinner style={{ margin: "-80px auto" }} />
                  <h1>Working...</h1>
                  <h2>{this.isLoading[0]}</h2>
                  <hr
                     style={{
                        width: Math.floor(this.isLoading[1] * 100) + "%",
                     }}
                  />
               </div>
            )}
         </Host>
      );
   }
}
