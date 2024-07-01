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

    @State() private specialInfo?: string;

    private specialInfoMap: Record<string, string> = {
        "6155": "Call (912) 526-8226 to apply!", // Toombs County, GA
        "6240": "Please come into the elections office in person to apply at: 305 S Hightower St # 130, Thomaston, GA 30286", // Upson County, GA
        "6203": "Please call (706) 638-4349 to apply!", // Walker County, GA
        "6263": "Please apply online at: https://www.votewalton.gov/-No-Menu/Election-Worker-Application", // Walton County, GA
        "6242": "Please call (229) 828-5775 to apply!", // Webster County, GA
        "6279": "Please call (912) 568-0095 to apply!", // Wheeler County, GA
        "6162": "Please call (706) 865-7812 or email elections@whitecounty.net to apply!", // White County, GA
        "6138": "Please call (478) 946-2188 to apply!", // Wilkinson County, GA
        "6243": "Please call (229) 776-8208 X1 to apply!", // Worth County, GA
        "6569": "Please call (712) 374-2031 to apply!", // Fremont County, IA
        "9047": "Please apply online at: https://www.mercercounty.org/boards-commissions/board-of-elections/board-worker-application", // Mercer County, NJ
        "6216": "Call (229) 723-4522 to apply!", // Early County, GA
        "9079": "Please call (505) 722-4469 to apply!", // McKinley County, NM
        "9080": "Please call (575) 387-2448 to apply!", // Mora County, NM
        "9085": "Please call (505) 334-9471 to apply!", // San Juan County, NM
        "6662": "Please call (864) 942-8585 to apply!", // Greenwood County, SC
        "10496":
            "Learn more and apply online at https://www.governmentjobs.com/careers/kingcounty/jobs/4334979/elections-worker-temporary?keywords=Elections&pagetype=jobOpportunitiesJobs", // King County, WA
        "9131": "Please call 518-548-4684 to apply!", // Hamilton County, NY
        "8397": "Please call 651-266-2219 to apply!", // Ramsey County, MN
        "10741": "Please email clerk@townofbangor.wi.gov to apply!", // Bangor (Town), WI
        "10744": "Please call 920-758-2720 to apply!", // Eaton (Town), WI
        "10775":
            "Please call (715) 454-6677 or email clerk@townoffranzen.com to apply!", // Franzen, WI
        "10789": "Please email hullclerk@tn.hull.wi.gov to apply!", // Hull (Town), WI
        "6047": "Please call (860) 465-3016 or email registrars@windhamct.com to apply!", // Windham, CT
        "6067": "If you apply, please include in the 'notes' section that Power the Polls sent you :)", // Clay County, FL
        "6078": "Please call (863) 946-6005 to apply!", // Glades County, FL
        "6089": "Please call (850) 997-3348 to apply!", // Jefferson County, FL
        "6092": "Please call 239-533-6900 to apply!", // Lee County, FL
        "6106": "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Osceola County, FL
        "8358": "Please call 218-387-3643 to apply!", // Cook County, MN
        "10518":
            "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Yakima County, WA
        "5810": "Consider 'adopting a precinct' online at: https://www.solanocounty.com/depts/rov/workers/adopt_a_poll.asp", // Solano County, CA
        "6035": "Please call 203) 574-6751 to apply!", // Waterbury, CT
        "9060": "Please apply online at: https://www.warrencountyvotes.com/home/showpublisheddocument/7523/638295895080430000", // Warren County, NJ
        "9517": "Please apply online at: https://airtable.com/applaVr8VXLc8miLW/shrT58SwXF1dEEhJh", // Delaware County, PA
        "9510": "Call (724) 852-5230 or email elections@co.greene.pa.us to apply!", // Greene County, PA
        "9519": "Call (814) 643-3091 ext. 205 or email ariley@huntingdoncounty.net to apply!", // Huntingdon County, PA
        "6194": "Please call (706) 628-5210 to apply!", // Harris County, GA
        "6225": "Please call (706) 376-8911 to apply!", // Hart County, GA
        "6175": "Please call (229) 671-2850 to apply!", // Lowndes County, GA
        "6197": "Please call (229) 649-9838 to apply!", // Marion County, GA
        "6132": "Please come to the elections office in person to apply at 337 Main St, Suite 101, Thomson, GA 30824!", // McDuffie County, GA
        "6198": "Please call (770) 749-2103 to apply!", // Polk County, GA
        "6251": "Apply online at: https://www.rockdalecountyga.gov/be-a-poll-worker/", // Rockdale County, GA
        "6248": "Please call (229) 524-5256 to apply!", // Seminole County, GA
        "6283": "Call (478) 862-3997 to apply!", // Taylor County, GA
        "9547": "Please call (570) 389-5640 to apply!", // Columbia County, PA
        "9561": "Please call (814) 333-7307 to apply!", // Crawford County, PA
        "9567": "Call (570) 996-2226 to apply!", // Wyoming County, PA
        "6247": "Apply online at: https://www.paulding.gov/1503/Poll-Workers", // Paulding County, GA
        "6237": "Call (229) 838-6220, ext. 210 to apply!", // Stewart County, GA
        "9063": "Please call (575) 533-6400 to apply!", // Catron County, NM
        "6282": "Please apply online at: https://charltoncountyga.us/DocumentCenter/View/438/Charlton-County-Employment-Application", // Charlton County, GA
        "6215": "Call (478) 374-3775 or email dodge.probatecourt@gmail.com to apply!", // Dodge County, GA
        "9537": "Please call (814) 755-3537 ext. 1 to apply!", // Forest County, PA
        "9910": "Email freda.ragan@taylorcounty.texas.gov and dan.murray@taylorcounty.texas.gov to apply!", // Taylor County, TX
        "6178": "Please come to the office at 201 North Davis St, Room 142, Nashville, GA 31639 to apply!", // Berrien County, GA
        "6209": "Please call (229) 768-2445 to apply!", // Clay County, GA
        "6218": "Please come in person to the elections office at 201 Freeman St, Suite 9, Claxton, GA 30417 to apply!", // Evans County, GA
        "10495":
            "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Clark County, WA
        "10502":
            "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Columbia County, WA
        "10515":
            "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Cowlitz County, WA
        "10485":
            "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Douglas County, WA
        "10498":
            "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Ferry County, WA
        "10503": "Please call HR at 360-679-7372 to apply!", // Island County, WA
        "10487":
            "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Kittitas County, WA
        "10514":
            "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Klickitat County, WA
        "10505":
            "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Lewis County, WA
        "10516":
            "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Lincoln County, WA
        "10510":
            "Learn more and apply online at https://www.governmentjobs.com/careers/piercecountywa/jobs/4411860/apply-in-5-minutes-to-be-a-part-of-election-history-as-an-elections-temporary-hir", // Pierce County, WA
        "10517":
            "Learn more and apply online at https://www.governmentjobs.com/careers/skagitwa/jobs/4325764/on-call-elections-technician?keywords=election&pagetype=jobOpportunitiesJobs", // Skagit County, WA
        "10509":
            "Learn more and apply online at https://www.governmentjobs.com/careers/spokanecountywa/jobs/4122864/election-worker-1-extra-help", // Spokane County, WA
        "10488":
            "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Stevens County, WA
        "10497":
            "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Thurston County, WA
        "10493":
            "Learn more and apply online at https://www.governmentjobs.com/careers/whatcomcounty/jobs/4285511/temporary-elections-worker-on-call?page=2&pagetype=jobOpportunitiesJobs", // Whatcom County, WA
        "6028": "Please call the Trumbull Registrars’ Office at: 203-452-5058 or 203-452-5059 to apply!", // Trumbull, CT
        "9802": "Please call 423-753-1688 to apply!", // Washington County, TN
    };

    constructor() {
        this.isMailToFormComplete = false;
        this.showNextSteps = false;
        // we are post-election, so setting additional info state to "submitted" so the form doesn't show up
        this.additionalInfoFormStatus = "submitted";
    }

    public componentWillLoad() {
        this.formData = this.initialFormData || {};
        if (this.jurisdictionId && this.jurisdictionId !== -1) {
            fetchJurisdictionInfo(this.jurisdictionId).then((x) => {
                this.jurisdiction = x;
                this.fetchSpecialInfo(x);
            });
            // Not currently supported by WE
            // fetchJurisdictionGeoJson( this.jurisdictionId ).then( x => this.jurisdictionShape = x );
        }
    }

    public fetchSpecialInfo(jurisdiction: JurisdictionInfo) {
        if (jurisdiction && jurisdiction.id) {
            const specialInfo = this.specialInfoMap[jurisdiction.id.toString()];
            this.specialInfo = specialInfo || undefined;
        } else {
            this.specialInfo = undefined;
        }
    }

    @Watch("additionalInfoFormStatus")
    public onAdditionalInfoFormStatusChanged(
        val: "pending" | "submitting" | "submitted",
    ) {
        // fake some loading so the user gets feedback
        if (val === "submitting") {
            window.scrollTo({ top: 0 });
            setTimeout(
                () => (this.additionalInfoFormStatus = "submitted"),
                1000,
            );
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
        if (j.vote_by_mail_jurisdiction) {
            return (
                <Fragment>
                    <h1>Thanks for signing up to Power the Polls!</h1>
                    <p>
                        Thank you so much for your interest in being a poll
                        worker.
                    </p>
                    <p>
                        {j.name} conducts elections by mail, meaning that the
                        need for poll workers is generally lower than many other
                        states. However, there still may be ways that you can
                        support election administrators in your area. We
                        encourage you to contact your county election office
                        directly to find out about any opportunities to get
                        involved.
                    </p>
                    <p>
                        You can still help power the polls by voting in this
                        upcoming election, and encouraging your friends and
                        family who live in other states to sign up to be poll
                        workers.
                    </p>
                </Fragment>
            );
        }
        if (j.jurisdiction_is_fully_recruited) {
            return (
                <Host>
                    <h2>
                        Thank you so much for your interest in being a poll
                        worker!
                    </h2>
                    <p>
                        Good news:{" "}
                        <strong>
                            {j.name || "Your jurisdiction"} has indicated that
                            they have all the election workers they need this
                            year!
                        </strong>
                    </p>
                    <p>
                        <strong>You can still help power the polls</strong> by
                        voting in this upcoming election, and encouraging your
                        friends and family across the country to register to
                        vote!
                    </p>
                    {!allNullOrEmpty(
                        j?.telephone,
                        j?.email,
                        j?.office_address,
                    ) ? (
                        <section>
                            <p>
                                If you are a current poll worker, or need to
                                reach out to the office for an update on your
                                application or for more information about your
                                placement, please see below for their contact
                                information.
                            </p>
                            <h4>Contact Information</h4>
                            {j?.telephone && (
                                <p>
                                    <strong>Phone: </strong>
                                    <a href={`tel:${j.telephone}`}>
                                        {j.telephone}
                                    </a>
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
                </Host>
            );
        }
        const stateInfo = States[j.state.alpha];
        const hasApplication = !(
            j?.online_application == null || j?.online_application === ""
        );

        const sanitizedJurisdictionName = j.name.replace(/&#8217;/g, "'");

        const getFullName = (jurisdictionInfo: JurisdictionInfo): string => {
            if (
                !jurisdictionInfo.name.includes(
                    stateInfo.subdivision_name as string,
                ) &&
                !j.is_the_jurisdiction_a_city &&
                j.state.alpha !== "AK"
            ) {
                return `${sanitizedJurisdictionName.toString()} ${
                    stateInfo.subdivision_name
                }, ${j.state.alpha}`;
            }
            return `${sanitizedJurisdictionName.toString()}, ${j.state.alpha}`;
        };

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

                <h5> Your {stateInfo.subdivision_name} is</h5>
                <h2>{getFullName(j)}</h2>

                {this.specialInfo && (
                    <div class="special-info">
                        <h2>
                            Special instructions from your local elections
                            office
                        </h2>
                        <p>{this.specialInfo}</p>
                    </div>
                )}

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
                            Thank you so much for your interest in being a poll
                            worker. In order to apply to be a poll worker, you
                            must connect with your local elections office so
                            that you can complete the official poll worker
                            application process with them.
                        </p>

                        <CompleteApplicationButton jurisdiction={j} />
                        <p>
                            This link will open a new tab connecting you to your
                            local elections office's poll worker application.
                        </p>

                        {
                            // if jurisdiction has no application link,show the e-mail form
                            !hasApplication ? (
                                // use phone if specified to do so, else show email form
                                stateInfo.usePhoneInsteadOfEmailForFormFallback ? (
                                    <Fragment>
                                        <p>
                                            Unfortunately, there is not an
                                            online application for{" "}
                                            {stateInfo.name}. Call your local
                                            election administrator directly to
                                            express your interest in being a
                                            poll worker.
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
                                                (this.isMailToFormComplete =
                                                    true)
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
                                                              Complete your
                                                              community's
                                                              application by
                                                              calling the number
                                                              above! Election
                                                              Day is right
                                                              around the corner,
                                                              so don’t waste any
                                                              time getting your
                                                              application in.
                                                          </strong>{" "}
                                                          Learn more about
                                                          hours, compensation,
                                                          and requirements for
                                                          your community below.
                                                      </Fragment>
                                                  ),
                                                  () => "",
                                              ]
                                            : [
                                                  () => (
                                                      <Fragment>
                                                          <strong>
                                                              Complete your
                                                              official
                                                              application to be
                                                              a poll worker
                                                              today! Election
                                                              Day is right
                                                              around the corner,
                                                              so don’t waste any
                                                              time getting your
                                                              application in.
                                                          </strong>{" "}
                                                          Learn more about
                                                          hours, compensation,
                                                          and requirements for
                                                          your community below
                                                          and be sure to
                                                          complete your official
                                                          application!
                                                      </Fragment>
                                                  ),
                                                  () => "",
                                              ]
                                        ).map((x, i) => (
                                            <p>
                                                <span class="number">
                                                    {i + 1}
                                                </span>
                                                {x()}
                                            </p>
                                        ))
                                    }
                                </div>
                                <hr />
                            </Fragment>
                        )}

                        {j.disambiguation_notice && (
                            <PtpHtml html={j.disambiguation_notice} />
                        )}

                        <section class="poll-worker-details-section-hours">
                            <h4>Hours and Compensation</h4>
                            {!allNullOrEmpty(
                                j?.hours_start,
                                j?.hours_end,
                                j?.compensation_for_the_day,
                                j?.full_day_required,
                            ) ? (
                                <ul>
                                    {j.hours_start && (
                                        <li class="hours">
                                            <strong>Hours</strong>
                                            <br></br>
                                            {j.hours_start} to {j.hours_end}
                                        </li>
                                    )}
                                    {j.compensation_for_the_day && (
                                        <li class="compensation">
                                            <strong>Compensation</strong>
                                            <br></br>
                                            {j.compensation_for_the_day}
                                        </li>
                                    )}
                                    {j.full_day_required === "Y" ? (
                                        <li class="other-details">
                                            <strong>Other Details</strong>
                                            <br></br>You must work the full day
                                        </li>
                                    ) : null}
                                    {j.full_day_required === "N" && (
                                        <li class="other-details">
                                            <strong>Other Details</strong>
                                            <br></br>Part-day poll worker shifts
                                            are available.
                                        </li>
                                    )}
                                    {j.full_day_required.length > 1 && (
                                        <li class="other-details">
                                            <strong>Other Details</strong>
                                            <br></br>
                                            {j.full_day_required}
                                        </li>
                                    )}
                                </ul>
                            ) : (
                                <p>
                                    Please contact your local election official
                                    for more information
                                </p>
                            )}
                        </section>

                        {!isNullOrEmpty(j.registration_status) ? (
                            <section class="poll-worker-details-section">
                                <h4>Voter Registration Requirements</h4>
                                <ul>
                                    <li class="requirements">
                                        <strong>Requirements</strong>
                                        <br></br>
                                        {j.registration_status === "S"
                                            ? `You can be registered to vote anywhere in the state to work on Election Day in ${j.name}.`
                                            : j.registration_status === "J"
                                              ? `You must be registered to vote in ${j.name} to work on Election Day`
                                              : j.registration_status}
                                    </li>
                                </ul>
                            </section>
                        ) : null}

                        <section class="poll-worker-details-section">
                            <h4>Work Requirements</h4>
                            {!allNullOrEmpty(
                                j?.minimum_age,
                                j?.training_required,
                                j?.training_note,
                            ) ? (
                                <ul>
                                    {j.minimum_age && (
                                        <li class="age">
                                            <strong>
                                                Minimum Age Requirements{" "}
                                            </strong>
                                            <br></br>
                                            {j.minimum_age}
                                        </li>
                                    )}
                                    {j.training_required && (
                                        <li class="training">
                                            <strong>Training Details</strong>
                                            <br></br>Yes. You must attend a
                                            training session.
                                        </li>
                                    )}
                                    {j.training_note && (
                                        <div class="training-details">
                                            <PtpHtml html={j.training_note} />
                                        </div>
                                    )}
                                </ul>
                            ) : (
                                <p>
                                    Please contact your local election official
                                    for more information
                                </p>
                            )}
                        </section>

                        {!allNullOrEmpty(
                            j?.telephone,
                            j?.email,
                            j?.office_address,
                        ) ? (
                            <section class="contact-info">
                                <h4>Contact Information</h4>
                                {j?.telephone && (
                                    <p class="btn-outline">
                                        <img> </img>
                                        <strong>Phone: </strong>
                                        <a href={`tel:${j.telephone}`}>
                                            {j.telephone}
                                        </a>
                                    </p>
                                )}
                                {j?.email && (
                                    <p class="btn-outline">
                                        <strong>Email: </strong>
                                        <a href={`mailto:${j.email}`}>
                                            {j.email}
                                        </a>
                                    </p>
                                )}
                                {j?.office_address && (
                                    <p class="btn-outline">
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

                        {!allNullOrEmpty(j?.further_notes, j?.notes) ? (
                            <section class="more-details-section">
                                <h4>More Details</h4>
                                <p>{j.further_notes}</p>
                                {j.notes && <PtpHtml html={j.notes} />}
                            </section>
                        ) : null}

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
