import {Component, h, Host} from "@stencil/core";

@Component({
    tag: "page-election-officials",
    shadow: false,
})
export class PageElectionOfficials {
    public render() {
        return (
            <Host>
                <h1>Information for Election Administrators</h1>
                <h3>Need poll workers? We’re here to help.</h3>
                <p>
                    The Power the Polls team is here to help hardworking elections
                     administrators across the country recruit the poll
                     workers they need to adequately staff every election.
                </p>
                <p>
                    <a
                    href="https://powerthepolls.typeform.com/EASupport" target="_blank">If you’re
                     looking for more poll workers, complete this
                     quick and easy survey to let us know what you need.</a>
                </p>
                <p>
                    Here’s how we’ll help:
                </p>
                <ul>
                    <li>
                        You’ll let us know what you’re looking
                         for — overall need, specific skill sets,
                          availability, etc. — by completing the survey above.
                    </li>
                    <li>
                        We’ll send you a list of folks in your
                        jurisdiction who have expressed their
                        interest in being a poll worker by
                        signing up through Power the Polls.
                    </li>
                    <li>
                        If needed, we can also support the recruitment
                      of new potential poll workers in your jurisdiction.
                    </li>
                </ul>
                <p>
                    For more information about how Power the Polls works,
                     <a
                     href="https://www.powerthepolls.org/about">
                    visit our About page.
                    </a>
                </p>
                <h3>Thank you for your service!</h3>
                <p>
                    On behalf of our entire team at Power the Polls and all
                    of our partners, thank you for your incredible service
                    to your local communities and to our country.
                </p>
                <p>
                    We know you and your team work hard every day to serve
                    voters and ensure safe and fair elections year after
                    year. We’re humbled to coordinate with dedicated
                    elections officials across the country and can’t wait
                    to connect with you.
                </p>
                <p>
                    <b>
                        Questions? Email us at <a
                        href={"mailto:electionofficials@powerthepolls.org"}>electionofficials@powerthepolls.org</a>.
                    </b>
                </p>
            </Host>
        );
    }
}
