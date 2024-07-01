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

    //Special info
    private specialInfoMap: Record<string, string> = {
        "6155": 'Call <a href="tel:+19125268226">(912) 526-8226</a> to apply!', // Toombs County, GA
        "6240": 'Please come into the elections office in person to apply at: <a href="https://www.google.com/maps/search/305 S Hightower St # 130, Thomaston, GA 30286" target="_blank">305 S Hightower St # 130, Thomaston, GA 30286</a>', // Upson County, GA
        "6203": 'Please call <a href="tel:+17066384349">(706) 638-4349</a> to apply!', // Walker County, GA
        "6263": 'Please apply online at: <a href="https://www.votewalton.gov/-No-Menu/Election-Worker-Application" target="_blank">https://www.votewalton.gov/-No-Menu/Election-Worker-Application</a>', // Walton County, GA
        "6242": 'Please call <a href="tel:+12298285775">(229) 828-5775</a> to apply!', // Webster County, GA
        "6279": 'Please call <a href="tel:+19125680095">(912) 568-0095</a> to apply!', // Wheeler County, GA
        "6162": 'Please call <a href="tel:+17068657812">(706) 865-7812</a> or email <a href="mailto:elections@whitecounty.net">elections@whitecounty.net</a> to apply!', // White County, GA
        "6138": 'Please call <a href="tel:+14789462188">(478) 946-2188</a> to apply!', // Wilkinson County, GA
        "6243": 'Please call <a href="tel:+12297768208">(229) 776-8208</a> X1 to apply!', // Worth County, GA
        "6569": 'Please call <a href="tel:+17123742031">(712) 374-2031</a> to apply!', // Fremont County, IA
        "9047": 'Please apply online at: <a href="https://www.mercercounty.org/boards-commissions/board-of-elections/board-worker-application" target="_blank">https://www.mercercounty.org/boards-commissions/board-of-elections/board-worker-application</a>', // Mercer County, NJ
        "6216": 'Call <a href="tel:+12297234522">(229) 723-4522</a> to apply!', // Early County, GA
        "9079": 'Please call <a href="tel:+15057224469">(505) 722-4469</a> to apply!', // McKinley County, NM
        "9080": 'Please call <a href="tel:+15753872248">(575) 387-2448</a> to apply!', // Mora County, NM
        "9085": 'Please call <a href="tel:+15053349471">(505) 334-9471</a> to apply!', // San Juan County, NM
        "6662": 'Please call <a href="tel:+18649428585">(864) 942-8585</a> to apply!', // Greenwood County, SC
        "10496": 'Learn more and apply online at <a href="https://www.governmentjobs.com/careers/kingcounty/jobs/4334979/elections-worker-temporary?keywords=Elections&pagetype=jobOpportunitiesJobs" target="_blank">https://www.governmentjobs.com/careers/kingcounty/jobs/4334979/elections-worker-temporary?keywords=Elections&pagetype=jobOpportunitiesJobs</a>', // King County, WA
        "9131": 'Please call <a href="tel:+15185484684">518-548-4684</a> to apply!', // Hamilton County, NY
        "8397": 'Please call <a href="tel:+16512662219">651-266-2219</a> to apply!', // Ramsey County, MN
        "10741": 'Please email <a href="mailto:clerk@townofbangor.wi.gov">clerk@townofbangor.wi.gov</a> to apply!', // Bangor (Town), WI
        "10744": 'Please call <a href="tel:+19207582720">920-758-2720</a> to apply!', // Eaton (Town), WI
        "10775": 'Please call <a href="tel:+17154546677">(715) 454-6677</a> or email <a href="mailto:clerk@townoffranzen.com">clerk@townoffranzen.com</a> to apply!', // Franzen, WI
        "10789": 'Please email <a href="mailto:hullclerk@tn.hull.wi.gov">hullclerk@tn.hull.wi.gov</a> to apply!', // Hull (Town), WI
        "6047": 'Please call <a href="tel:+18604653016">(860) 465-3016</a> or email <a href="mailto:registrars@windhamct.com">registrars@windhamct.com</a> to apply!', // Windham, CT
        "6067": 'If you apply, please include in the "notes" section that Power the Polls sent you :)', // Clay County, FL
        "6078": 'Please call <a href="tel:+18639466005">(863) 946-6005</a> to apply!', // Glades County, FL
        "6089": 'Please call <a href="tel:+18509973348">(850) 997-3348</a> to apply!', // Jefferson County, FL
        "6092": 'Please call <a href="tel:+12395336900">239-533-6900</a> to apply!', // Lee County, FL
        "6106": "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Osceola County, FL
        "8358": 'Please call <a href="tel:+12183873643">218-387-3643</a> to apply!', // Cook County, MN
        "10518": "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Yakima County, WA
        "5810": 'Consider "adopting a precinct" online at: <a href="https://www.solanocounty.com/depts/rov/workers/adopt_a_poll.asp" target="_blank">https://www.solanocounty.com/depts/rov/workers/adopt_a_poll.asp</a>', // Solano County, CA
        "6035": 'Please call <a href="tel:+12035746751">(203) 574-6751</a> to apply!', // Waterbury, CT
        "9060": 'Please apply online at: <a href="https://www.warrencountyvotes.com/home/showpublisheddocument/7523/638295895080430000" target="_blank">https://www.warrencountyvotes.com/home/showpublisheddocument/7523/638295895080430000</a>', // Warren County, NJ
        "9517": 'Please apply online at: <a href="https://airtable.com/applaVr8VXLc8miLW/shrT58SwXF1dEEhJh" target="_blank">https://airtable.com/applaVr8VXLc8miLW/shrT58SwXF1dEEhJh</a>', // Delaware County, PA
        "9510": 'Call <a href="tel:+17248525230">(724) 852-5230</a> or email <a href="mailto:elections@co.greene.pa.us">elections@co.greene.pa.us</a> to apply!', // Greene County, PA
        "9519": 'Call <a href="tel:+18146433091">(814) 643-3091 ext. 205</a> or email <a href="mailto:ariley@huntingdoncounty.net">ariley@huntingdoncounty.net</a> to apply!', // Huntingdon County, PA
        "6194": 'Please call <a href="tel:+17066285210">(706) 628-5210</a> to apply!', // Harris County, GA
        "6225": 'Please call <a href="tel:+17063768911">(706) 376-8911</a> to apply!', // Hart County, GA
        "6175": 'Please call <a href="tel:+12296712850">(229) 671-2850</a> to apply!', // Lowndes County, GA
        "6197": 'Please call <a href="tel:+12296499838">(229) 649-9838</a> to apply!', // Marion County, GA
        "6132": 'Please come to the elections office in person to apply at <a href="https://www.google.com/maps/search/337 Main St, Suite 101, Thomson, GA 30824" target="_blank">337 Main St, Suite 101, Thomson, GA 30824</a>!', // McDuffie County, GA
        "6198": 'Please call <a href="tel:+17707492103">(770) 749-2103</a> to apply!', // Polk County, GA
        "6251": 'Apply online at: <a href="https://www.rockdalecountyga.gov/be-a-poll-worker/" target="_blank">https://www.rockdalecountyga.gov/be-a-poll-worker/</a>', // Rockdale County, GA
        "6248": 'Please call <a href="tel:+12295245256">(229) 524-5256</a> to apply!', // Seminole County, GA
        "6283": 'Call <a href="tel:+14788623997">(478) 862-3997</a> to apply!', // Taylor County, GA
        "9547": 'Please call <a href="tel:+15703895640">(570) 389-5640</a> to apply!', // Columbia County, PA
        "9561": 'Please call <a href="tel:+18143337307">(814) 333-7307</a> to apply!', // Crawford County, PA
        "9567": 'Call <a href="tel:+15709962226">(570) 996-2226</a> to apply!', // Wyoming County, PA
        "6247": 'Apply online at: <a href="https://www.paulding.gov/1503/Poll-Workers" target="_blank">https://www.paulding.gov/1503/Poll-Workers</a>', // Paulding County, GA
        "6237": 'Call <a href="tel:+12298386220">(229) 838-6220, ext. 210</a> to apply!', // Stewart County, GA
        "9063": 'Please call <a href="tel:+15755336400">(575) 533-6400</a> to apply!', // Catron County, NM
        "6282": 'Please apply online at: <a href="https://charltoncountyga.us/DocumentCenter/View/438/Charlton-County-Employment-Application" target="_blank">https://charltoncountyga.us/DocumentCenter/View/438/Charlton-County-Employment-Application</a>', // Charlton County, GA
        "6215": 'Call <a href="tel:+14783743775">(478) 374-3775</a> or email <a href="mailto:dodge.probatecourt@gmail.com">dodge.probatecourt@gmail.com</a> to apply!', // Dodge County, GA
        "9537": 'Please call <a href="tel:+18147553537">(814) 755-3537 ext. 1</a> to apply!', // Forest County, PA
        "9910": 'Email <a href="mailto:freda.ragan@taylorcounty.texas.gov">freda.ragan@taylorcounty.texas.gov</a> and <a href="mailto:dan.murray@taylorcounty.texas.gov">dan.murray@taylorcounty.texas.gov</a> to apply!', // Taylor County, TX
        "6178": 'Please come to the office at <a href="https://www.google.com/maps/search/201 North Davis St, Room 142, Nashville, GA 31639" target="_blank">201 North Davis St, Room 142, Nashville, GA 31639</a> to apply!', // Berrien County, GA
        "6209": 'Please call <a href="tel:+12297682445">(229) 768-2445</a> to apply!', // Clay County, GA
        "6218": 'Please come in person to the elections office at <a href="https://www.google.com/maps/search/201 Freeman St, Suite 9, Claxton, GA 30417" target="_blank">201 Freeman St, Suite 9, Claxton, GA 30417</a> to apply!', // Evans County, GA
        "10495": "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Clark County, WA
        "10502": "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Columbia County, WA
        "10515": "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Cowlitz County, WA
        "10485": "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Douglas County, WA
        "10498": "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Ferry County, WA
        "10503": 'Please call HR at <a href="tel:+13606797372">360-679-7372</a> to apply!', // Island County, WA
        "10487": "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Kittitas County, WA
        "10514": "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Klickitat County, WA
        "10505": "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Lewis County, WA
        "10516": "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Lincoln County, WA
        "10510": 'Learn more and apply online at <a href="https://www.governmentjobs.com/careers/piercecountywa/jobs/4411860/apply-in-5-minutes-to-be-a-part-of-election-history-as-an-elections-temporary-hir" target="_blank">https://www.governmentjobs.com/careers/piercecountywa/jobs/4411860/apply-in-5-minutes-to-be-a-part-of-election-history-as-an-elections-temporary-hir</a>', // Pierce County, WA
        "10517": 'Learn more and apply online at <a href="https://www.governmentjobs.com/careers/skagitwa/jobs/4325764/on-call-elections-technician?keywords=election&pagetype=jobOpportunitiesJobs" target="_blank">https://www.governmentjobs.com/careers/skagitwa/jobs/4325764/on-call-elections-technician?keywords=election&pagetype=jobOpportunitiesJobs</a>', // Skagit County, WA
        "10509": 'Learn more and apply online at <a href="https://www.governmentjobs.com/careers/spokanecountywa/jobs/4122864/election-worker-1-extra-help" target="_blank">https://www.governmentjobs.com/careers/spokanecountywa/jobs/4122864/election-worker-1-extra-help</a>', // Spokane County, WA
        "10488": "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Stevens County, WA
        "10497": "Your county is fully staffed for 2024! Remember to thank your elections workers when you vote!", // Thurston County, WA
        "10493": 'Learn more and apply online at <a href="https://www.governmentjobs.com/careers/whatcomcounty/jobs/4285511/temporary-elections-worker-on-call?page=2&pagetype=jobOpportunitiesJobs" target="_blank">https://www.governmentjobs.com/careers/whatcomcounty/jobs/4285511/temporary-elections-worker-on-call?page=2&pagetype=jobOpportunitiesJobs</a>', // Whatcom County, WA
        "6028": 'Please call the Trumbull Registrars’ Office at: <a href="tel:+12034525058">(203) 452-5058</a> or <a href="tel:+12034525059">(203) 452-5059</a> to apply!', // Trumbull, CT
        "9802": 'Please call <a href="tel:+14237531688">423-753-1688</a> to apply!', // Washington County, TN
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
                            Special Instructions from Your Local Elections
                            Office:
                        </h2>
                        <p
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.specialInfo) }}
                        />
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
