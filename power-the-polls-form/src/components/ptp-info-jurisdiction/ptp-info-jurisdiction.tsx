import {
   Component,
   Fragment,
   h,
   Host,
   Prop,
   State,
   Watch,
} from "@stencil/core";
import { MultiPolygon } from "geojson";

import { States } from "../../data";
import { JurisdictionInfo } from "../../data/States";
import {
   allNullOrEmpty,
   isNullOrEmpty,
   PtpFormData,
   PtpHtml,
} from "../../util";
import { fetchJurisdictionInfo } from "../../util/WorkElections";

import AdditionalInfoForm from "./AdditionalInfoForm";
import CallToApplyButton from "./CallToApplyButton";
import CompleteApplicationButton from "./CompleteApplicationButton";

/**
 * Component to render work elections jurisdiction data.
 */
@Component({
   tag: "ptp-info-jurisdiction",
   styleUrl: "ptp-info-jurisdiction.scss",
   shadow: false,
})
export class JurisdictionInfoComponent {
   /**
    * ID of jurisdiction for Work Elections
    */
   @Prop() public jurisdictionId?: string | number;

   /**
    * If `true`, this component should show next steps and any additional form data
    */
   @Prop() public showNextSteps: boolean;

   /**
    * Props possibly passed in from the main form
    */
   @Prop() public initialFormData?: PtpFormData;

   @State() private jurisdiction?: JurisdictionInfo;
   @State() private jurisdictionShape?: MultiPolygon;
   @State() private formData: PtpFormData = {};
   @State() private isMailToFormComplete: boolean;
   @State() private additionalInfoFormStatus:
      | "pending"
      | "submitting"
      | "submitted";

   constructor() {
      this.isMailToFormComplete = false;
      this.showNextSteps = false;
      // we are post-election, so setting additional info state to "submitted" so the form doesn't show up
      this.additionalInfoFormStatus = "pending";
   }

   public componentWillLoad() {
      this.formData = this.initialFormData || {};
      if (this.jurisdictionId && this.jurisdictionId !== -1) {
         fetchJurisdictionInfo(this.jurisdictionId).then(
            (x) => (this.jurisdiction = x),
         );
         // Not currently supported by WE
         // fetchJurisdictionGeoJson( this.jurisdictionId ).then( x => this.jurisdictionShape = x );
      }
   }

   @Watch("additionalInfoFormStatus")
   public onAdditionalInfoFormStatusChanged(
      val: "pending" | "submitting" | "submitted",
   ) {
      // fake some loading so the user gets feedback
      if (val === "submitting") {
         window.scrollTo({ top: 0 });
         setTimeout(() => (this.additionalInfoFormStatus = "submitted"), 1000);
      }
   }

   public render() {

      const j = this.jurisdiction;
      if (j == null) {
         return this.jurisdictionId + "" === "-1" ? null : ( // don't show loading spinner if we have nothing to load
            <ui-loading-spinner />
         );
      }

      if (!j.name) {
         return (
            <Host>
               <h3>Uh oh!</h3>
               <p>
                  Unfortunately we're not able to retrieve jurisdiction{" "}
                  <strong>#{this.jurisdictionId}</strong> at this time
               </p>
               <p>
                  Please contact{" "}
                  <a
                     href={`mailto:info@powerthepolls.org?subject=Error%20with%20jurisdiction%20${this.jurisdictionId}`}
                  >
                     info@powerthepolls.org
                  </a>{" "}
                  and let us know the zip code you've entered.
               </p>
            </Host>
         );
      }
      const stateInfo = States[j.state.alpha];
      const hasApplication = !(
         j?.online_application == null || j?.online_application === ""
      );

      return (
         <Host>
            <div
               style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
               }}
            >
               <ui-geojson-to-svg
                  geoJson={this.jurisdictionShape}
                  height={180}
                  width={250}
               />
            </div>

            <h2>
               {j.name}, {j.state.alpha}
            </h2>

            {this.showNextSteps &&
            hasApplication &&
            this.additionalInfoFormStatus === "submitting" ? (
               <ui-loading-spinner />
            ) : this.showNextSteps &&
              hasApplication &&
              this.additionalInfoFormStatus === "pending" ? (
               <AdditionalInfoForm
                  data={this.formData}
                  onSubmit={() =>
                     (this.additionalInfoFormStatus = "submitting")
                  }
               />
            ) : (
               <Fragment>
                  {j.disambiguation_notice && (
                     <PtpHtml html={j.disambiguation_notice} />
                  )}

                  <p>
                     Thank you so much for your interest in being a poll worker.
                     Please be sure to reach out to your local election
                     administrator to learn more about their needs for upcoming
                     elections, as well as official application procedures for
                     poll workers.
                  </p>

                  <CompleteApplicationButton jurisdiction={j} />

                  {
                     // if jurisdiction has no application link,show the e-mail form
                     !hasApplication ? (
                        // use phone if specified to do so, else show email form
                        stateInfo.usePhoneInsteadOfEmailForFormFallback ? (
                           <Fragment>
                              <p>
                                 Unfortunately, there is not an online
                                 application for {stateInfo.name}. Call your
                                 local election administrator directly to
                                 express your interest in being a poll worker.
                              </p>
                              <p>
                                 To complete your application, call{" "}
                                 {j.telephone}.
                              </p>
                              <CallToApplyButton jurisdiction={j} />
                           </Fragment>
                        ) : (
                           // show email form unless it's already complete
                           !this.isMailToFormComplete && (
                              <email-application-form
                                 jurisdiction={j}
                                 data={this.formData}
                                 onSubmitted={() =>
                                    (this.isMailToFormComplete = true)
                                 }
                              />
                           )
                        )
                     ) : // jurisdiction has an application link, no need for special email or phone section
                     null
                  }

                  {this.showNextSteps && (
                     <Fragment>
                        <div class="next-steps">
                           {
                              // see: https://docs.google.com/document/d/1b-mPTB1nGmOoziqxAZRhx9UUgvcWqsZtNXqfijXtgrY/edit
                              (!hasApplication &&
                              stateInfo &&
                              stateInfo.usePhoneInsteadOfEmailForFormFallback
                                 ? [
                                      () => (
                                         <Fragment>
                                            <strong>
                                               Complete your community's
                                               application by calling the number
                                               above! Election Day is right
                                               around the corner, so don’t waste
                                               any time getting your application
                                               in.
                                            </strong>{" "}
                                            Learn more about hours,
                                            compensation, and requirements for
                                            your community below.
                                         </Fragment>
                                      ),
                                      () => "",
                                   ]
                                 : [
                                      () => (
                                         <Fragment>
                                            <strong>
                                               Complete your official
                                               application to be a poll worker
                                               today! Election Day is right
                                               around the corner, so don’t waste
                                               any time getting your application
                                               in.
                                            </strong>{" "}
                                            Learn more about hours,
                                            compensation, and requirements for
                                            your community below and be sure to
                                            complete your official application!
                                         </Fragment>
                                      ),
                                      () => "",
                                   ]
                              ).map((x, i) => (
                                 <p>
                                    <span class="number">{i + 1}</span>
                                    {x()}
                                 </p>
                              ))
                           }
                        </div>
                        <hr />
                     </Fragment>
                  )}

                  <section>
                     <h4>Hours and Compensation</h4>
                     {!allNullOrEmpty(
                        j?.hours_start,
                        j?.hours_end,
                        j?.compensation_for_the_day,
                        j?.full_day_required,
                     ) ? (
                        <ul>
                           {j.hours_start && (
                              <li>
                                 <strong>Start Time: </strong>
                                 {j.hours_start}
                              </li>
                           )}
                           {j.hours_end && (
                              <li>
                                 <strong>End Time: </strong>
                                 {j.hours_end}
                              </li>
                           )}
                           {j.compensation_for_the_day && (
                              <li>
                                 <strong>Compensation: </strong>
                                 {j.compensation_for_the_day}
                              </li>
                           )}
                           {j.full_day_required === "Y" ? (
                              <li>You must work the full day</li>
                           ) : null}
                           {j.full_day_required === "N" && (
                              <li>
                                 Part-day poll worker shifts are available.
                              </li>
                           )}
                           {j.full_day_required.length > 1 && (
                              <li>{j.full_day_required}</li>
                           )}
                        </ul>
                     ) : (
                        <p>
                           Please contact your local election official for more
                           information
                        </p>
                     )}
                  </section>

                  {!isNullOrEmpty(j.registration_status) ? (
                     <section>
                        <h4>Voter Registration Requirements</h4>
                        <ul>
                           <li>
                              {j.registration_status === "S"
                                 ? `You can be registered to vote anywhere in the state to work on Election Day in ${j.name}.`
                                 : j.registration_status === "J"
                                 ? `You must be registered to vote in ${j.name} to work on Election Day`
                                 : j.registration_status}
                           </li>
                        </ul>
                     </section>
                  ) : null}

                  <section>
                     <h4>Work Requirements</h4>
                     {!allNullOrEmpty(
                        j?.minimum_age,
                        j?.training_required,
                        j?.training_note,
                     ) ? (
                        <ul>
                           {j.minimum_age && (
                              <li>
                                 <strong>Minimum Age: </strong>
                                 {j.minimum_age}
                              </li>
                           )}
                           {j.training_required && (
                              <li>You must attend a training session.</li>
                           )}
                           {j.training_note && (
                              <li>
                                 <strong>Training Details: </strong>
                                 <PtpHtml html={j.training_note} />
                              </li>
                           )}
                        </ul>
                     ) : (
                        <p>
                           Please contact your local election official for more
                           information
                        </p>
                     )}
                  </section>

                  {!allNullOrEmpty(j?.further_notes, j?.notes) ? (
                     <section>
                        <h4>Further Notes</h4>
                        <p>{j.further_notes}</p>
                        {j.notes && <PtpHtml html={j.notes} />}
                     </section>
                  ) : null}

                  {!allNullOrEmpty(
                     j?.telephone,
                     j?.email,
                     j?.office_address,
                  ) ? (
                     <section>
                        <h4>Contact Information</h4>
                        {j?.telephone && (
                           <p>
                              <strong>Phone: </strong>
                              <a href={`tel:${j.telephone}`}>{j.telephone}</a>
                           </p>
                        )}
                        {j?.email && (
                           <p>
                              <strong>Email: </strong>
                              <a href={`mailto:${j.email}`}>{j.email}</a>
                           </p>
                        )}
                        {j?.office_address && (
                           <p>
                              <strong>Office Address: </strong>
                              <a
                                 target="_blank"
                                 href={`https://www.google.com/maps/search/${encodeURIComponent(
                                    j?.office_address,
                                 )}`}
                              >
                                 {j?.office_address}
                              </a>
                           </p>
                        )}
                     </section>
                  ) : null}

                  {j.info_website && (
                     <a
                        class="poll-worker-action"
                        href={j.info_website}
                        target="_blank"
                     >
                        Poll Worker Information
                     </a>
                  )}
                  {j.student_website && (
                     <a
                        class="poll-worker-action"
                        href={j.student_website}
                        target="_blank"
                     >
                        Student Poll Worker Information
                     </a>
                  )}

                  {hasApplication ? (
                     <CompleteApplicationButton jurisdiction={j} />
                  ) : stateInfo.usePhoneInsteadOfEmailForFormFallback ? (
                     <CallToApplyButton jurisdiction={j} />
                  ) : null}
               </Fragment>
            )}
         </Host>
      );
   }
}
