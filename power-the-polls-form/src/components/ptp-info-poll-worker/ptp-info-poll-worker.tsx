import {Component, Fragment, h, Prop} from "@stencil/core";

import {States} from "../../data";
import {PtpFormData} from "../../util";
import {findJurisdictionId, idFromSlug} from "../../util/WorkElections";

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
        const {state, county, city, cityTownVillageSuffix} = this;
        const jurisdictionId =
            idFromSlug(this.jurisdictionIdOrSlug) ||
            (state && findJurisdictionId(state, county, city, cityTownVillageSuffix)) ||
            undefined;
        const stateInfo = (state && state in States && States[state]) || null;

        if (stateInfo?.has_all_mail_elections) {
            return (
                <Fragment>
                    <h1>Thanks for signing up to Power the Polls!</h1>
                    <p>
                        Thank you so much for your interest in being a poll worker.
                    </p>
                    <p>
                        {stateInfo?.name} conducts elections by mail, meaning that the need for poll workers is
                        generally
                        lower than many other states. However, there still may be ways that you can support election
                        administrators in your area. We encourage you to contact your county election office directly to
                        find out about any opportunities to get involved.
                    </p>
                    <p>
                        You can still help power the polls by voting in this upcoming election, and encouraging your
                        friends and family who live in other states to sign up to be poll workers.
                    </p>
                </Fragment>
            );
        }

        if (stateInfo?.notSupported === true) {
            return (
                <Fragment>
                    <h1>Thank you so much for your interest in being a poll worker!</h1>
                    <p>
                        Unfortunately we are unable to support poll worker placement in{" "}
                        {stateInfo.name}. You can still help power the polls by voting in
                        this upcoming election, and encouraging your friends and family
                        across the country to register to vote and &mdash; for those who
                        live in other parts of the U.S. &mdash; signing up to be poll
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
