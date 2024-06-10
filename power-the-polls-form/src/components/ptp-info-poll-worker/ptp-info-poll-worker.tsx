import { Component, Fragment, h, Prop } from "@stencil/core";

import { States } from "../../data";
import { PtpFormData } from "../../util";
import { findJurisdictionId, idFromSlug } from "../../util/WorkElections";

/**
 * Display state or specific jurisdiction information for poll workers based on whether
 * the provided `state`, `county`, and `city` match a jurisdiction or not.
 */
@Component({
    tag: "ptp-info-poll-worker",
    shadow: false,
})
export class PollWorkerInfo {
    /**
     * State for matching to location
     */
    @Prop() public state?: string;

    /**
     * County for matching to location
     */
    @Prop() public county?: string;

    /**
     * City for matching to location
     */
    @Prop() public city?: string;
    @Prop() public cityTownVillageSuffix?: string;

    /**
     * ID or Slug of jurisdiction for Work Elections. Use in place of `state`, `county`, and `city`
     */
    @Prop() public jurisdictionIdOrSlug?: string | number;

    /**
     * Complete form data, if available, for `ptp-info-jurisdiction`
     */
    @Prop() public formData?: PtpFormData;

    /**
     * If `true`, this component will lso render 1-3 bullet items indicating the next steps for the user
     */
    @Prop() public showNextSteps: boolean;

    constructor() {
        this.showNextSteps = false;
    }

    public render() {
        const { state, county, city, cityTownVillageSuffix } = this;
        const jurisdictionId =
            idFromSlug(this.jurisdictionIdOrSlug) ||
            (state &&
                findJurisdictionId(
                    state,
                    county,
                    city,
                    cityTownVillageSuffix,
                )) ||
            undefined;
        const stateInfo = (state && state in States && States[state]) || null;

        if (stateInfo?.has_all_mail_elections) {
            if (stateInfo?.name === "Washington") {
                return (
                    <Fragment>
                        <h1>
                            Thank you so much for your interest in being a poll
                            worker.
                        </h1>
                        <p>
                            Washington conducts elections by mail, meaning that
                            the need for poll workers or seasonal election
                            workers is generally lower than many other states.
                        </p>
                        <p>
                            Most Washington counties are currently fully staffed
                            for 2024, which is great news!
                        </p>
                        <p>Several jurisdictions are hiring, including:</p>
                        <ul>
                            <li>
                                <strong>Island County</strong> - Desire workers
                                that are interested in working multiple election
                                seasons, must commit to serve ongoing, year over
                                year. Please call HR at{" "}
                                <a href="tel:+13606797372">360-679-7372</a> to
                                apply!
                            </li>
                            <li>
                                <strong>King County</strong> - Seeking several
                                hundred workers for August and November.{" "}
                                <a
                                    href="https://www.kingcounty.gov/depts/elections.aspx"
                                    target="_blank"
                                >
                                    Learn more and apply online here
                                </a>
                                .
                            </li>
                            <li>
                                <strong>Skagit County</strong> -{" "}
                                <a
                                    href="https://www.skagitcounty.net/Departments/Elections/Main.htm"
                                    target="_blank"
                                >
                                    Learn more and apply online here
                                </a>
                                .
                            </li>
                            <li>
                                <strong>Snohomish County</strong> - Apply by
                                9/23/24 to work 10/28/24-11/15/24. Email{" "}
                                <a href="mailto:Elections@snoco.org">
                                    Elections@snoco.org
                                </a>{" "}
                                using the template below.
                            </li>
                            <li>
                                <strong>Spokane County</strong> -{" "}
                                <a
                                    href="https://www.spokanecounty.org/160/Elections"
                                    target="_blank"
                                >
                                    Learn more and apply online here
                                </a>
                                .
                            </li>
                            <li>
                                <strong>Whatcom County</strong> -{" "}
                                <a
                                    href="https://www.whatcomcounty.us/1732/Elections"
                                    target="_blank"
                                >
                                    Learn more and apply online here
                                </a>
                                .
                            </li>
                        </ul>
                        <p>
                            If you still have questions about your own election
                            office’s needs, we encourage you to call or email
                            your county election office directly to find out
                            about any opportunities to get involved.
                            <a
                                href="https://www.sos.wa.gov/elections/auditors.aspx"
                                target="_blank"
                            >
                                Click here to find the contact information for
                                your county election office
                            </a>{" "}
                            and see below for a sample email.
                        </p>

                        <p>--</p>
                        <p>
                            <i>Sample email: </i>
                        </p>
                        <br />
                        <p>
                            <i>
                                I am a resident of ____ County and interested in
                                providing support for upcoming elections.
                            </i>
                        </p>
                        <p>
                            <i>
                                I found your contact info through Power the
                                Polls, a national nonpartisan initiative to
                                recruit poll workers. I know there isn’t a
                                widespread need for poll workers in Washington
                                since the state conducts elections by mail, but
                                I am reaching out in case there are other
                                upcoming opportunities to get involved and
                                support elections locally.
                            </i>
                        </p>
                        <br />
                        <p>
                            <i>Thank you for all you do!</i>
                        </p>
                        <br />
                        <p>
                            <i>Name</i>
                        </p>
                        <p>
                            <i>Address</i>
                        </p>
                        <p>
                            <i>Phone</i>
                        </p>
                    </Fragment>
                );
            }
            if (stateInfo?.name === "Oregon") {
                return (
                    <Fragment>
                        <h1>Thanks for signing up to Power the Polls!</h1>
                        <p>
                            Thank you so much for your interest in being a poll
                            worker.
                        </p>
                        <p>
                            Oregon conducts elections by mail, meaning that the
                            need for poll workers is generally lower than many
                            other states. However, some election administrators
                            in Oregon may still need temporary workers for
                            support around upcoming elections.
                        </p>
                        <p>
                            We encourage you to call or email your county
                            election office directly to find out about any
                            opportunities to get involved.{" "}
                            <a
                                href="https://sos.oregon.gov/elections/Pages/countyofficials.aspx"
                                target="_blank"
                            >
                                Click here to find the contact information for
                                your county election office{" "}
                            </a>{" "}
                            and see below for a sample email.
                        </p>
                        <p>--</p>
                        <p>
                            <i>Sample email: </i>
                        </p>
                        <br />
                        <p>
                            <i>
                                I am a resident of ____ County and interested in
                                providing support for upcoming elections.
                            </i>
                        </p>
                        <p>
                            <i>
                                I found your contact info through Power the
                                Polls, a national nonpartisan initiative to
                                recruit poll workers. I know there isn’t a
                                widespread need for poll workers in Oregon since
                                the state conducts elections by mail, but I am
                                reaching out in case there are other upcoming
                                opportunities to get involved and support
                                elections locally.
                            </i>
                        </p>
                        <br />
                        <p>
                            <i>Thank you for all you do!</i>
                        </p>
                        <br />
                        <p>
                            <i>Name</i>
                        </p>
                        <p>
                            <i>Address</i>
                        </p>
                        <p>
                            <i>Phone</i>
                        </p>
                    </Fragment>
                );
            }
            if (stateInfo?.name === "Hawaii") {
                return (
                    <Fragment>
                        <h1>Thanks for signing up to Power the Polls!</h1>
                        <p>
                            Thank you so much for your interest in being a poll
                            worker.
                        </p>
                        <p>
                            Hawaii conducts elections by mail, meaning that the
                            need for poll workers is generally lower than many
                            other states. However, some election administrators
                            in Hawaii may still need temporary workers for
                            support around upcoming elections.
                        </p>
                        <p>
                            We encourage you to call or email your county
                            election office directly to find out about any
                            opportunities to get involved.{" "}
                            <a
                                href="https://elections.hawaii.gov/resources/county-election-divisions"
                                target="_blank"
                            >
                                Click here to find the contact information for
                                your county election office{" "}
                            </a>{" "}
                            and see below for a sample email.
                        </p>
                        <p>--</p>
                        <p>
                            <i>Sample email: </i>
                        </p>
                        <br />
                        <p>
                            <i>
                                I am a resident of ____ County and interested in
                                providing support for upcoming elections.
                            </i>
                        </p>
                        <p>
                            <i>
                                I found your contact info through Power the
                                Polls, a national nonpartisan initiative to
                                recruit poll workers. I know there isn’t a
                                widespread need for poll workers in Hawaii since
                                the state conducts elections by mail, but I am
                                reaching out in case there are other upcoming
                                opportunities to get involved and support
                                elections locally.
                            </i>
                        </p>
                        <br />
                        <p>
                            <i>Thank you for all you do!</i>
                        </p>
                        <br />
                        <p>
                            <i>Name</i>
                        </p>
                        <p>
                            <i>Address</i>
                        </p>
                        <p>
                            <i>Phone</i>
                        </p>
                    </Fragment>
                );
            }
            return (
                <Fragment>
                    <h1>Thanks for signing up to Power the Polls!</h1>
                    <p>
                        Thank you so much for your interest in being a poll
                        worker.
                    </p>
                    <p>
                        {stateInfo?.name} conducts elections by mail, meaning
                        that the need for poll workers is generally lower than
                        many other states. However, there still may be ways that
                        you can support election administrators in your area. We
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

        if (stateInfo?.notSupported === true) {
            return (
                <Fragment>
                    <h1>
                        Thank you so much for your interest in being a poll
                        worker!
                    </h1>
                    <p>
                        Unfortunately we are unable to support poll worker
                        placement in {stateInfo.name}. You can still help power
                        the polls by voting in this upcoming election, and
                        encouraging your friends and family across the country
                        to register to vote and &mdash; for those who live in
                        other parts of the U.S. &mdash; signing up to be poll
                        workers.
                    </p>
                </Fragment>
            );
        }

        return (
            <Fragment>
                <h1>You’re one step closer to Powering the Polls!</h1>
                <h2>What’s next?</h2>
                <hr />
                {jurisdictionId != null ||
                stateInfo?.noPollWorkersNeeded === true ? (
                    <ptp-info-jurisdiction
                        jurisdictionId={jurisdictionId}
                        initialFormData={
                            this.formData || {
                                city,
                                cityTownVillageSuffix,
                                state,
                                county,
                                jurisdictionId: jurisdictionId + "",
                            }
                        }
                        showNextSteps={this.showNextSteps}
                    />
                ) : (
                    // if we can't find a jurisdiction ID and this state is not full, show the state selection
                    <ptp-info-state state={state} />
                )}
            </Fragment>
        );
    }
}
