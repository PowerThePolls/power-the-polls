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
                <p>
                    Power the Polls was grateful to coordinate with
                    local elections officials, Secretaries of State, and State Election Directors to address poll worker
                    shortages in 2020, and we are proud to continue this critical work. Do you need more tech
                    savvy individuals to ensure voters get the support they need? Are you searching for multilingual
                    speakers who are eager to work the polls in your community? Power the Polls can help! Wherever
                    possible, we work alongside elections officials to customize recruitment to best fill particular
                    gaps.
                </p>
                <h3>We Would Love to Hear From You</h3>
                <p>
                    Our team at Power the Polls is eager to serve our hardworking elections administrators. <b><a
                    href="https://powerthepolls.typeform.com/EASupport">Click here
                    to inform us of your poll worker needs with a quick and easy survey</a>, or email us
                    at <a href="mailto:electionofficials@powerthepolls.org">electionofficials@powerthepolls.org</a> to
                    get connected with our Poll Worker Engagement Manager.</b> When election administrators flag a poll
                    worker need, Power the Polls can boost recruitment through all of our recruitment channels - earned
                    media, social media, partners, businesses, and paid media.
                </p>
                <p>
                    To best fill your recruitment needs, it is helpful to have the following information:
                </p>
                <ul>
                    <li>
                        Contact Information - Please provide your name, title, local office, phone number, and email.
                    </li>
                    <li>
                        Approximately how many people are needed? This will allow us to target the right number of
                        people to reach out to so we don’t overwhelm a local office.
                    </li>
                    <li>
                        Are there any particular needs for certain skills or for availability on key dates?
                    </li>
                    <li>
                        Are you looking for individuals with particular language or tech skills? Do you need people with
                        experience in customer service? Are you looking to fill gaps for one date or one role
                        specifically? The more information our team has about your jurisdiction’s particular needs, the
                        better we can recruit the best suited neighbors to serve.
                    </li>
                    <li>
                        In addition to completing their application, is there another way potential poll workers should
                        contact your office?
                    </li>
                </ul>
                <p>
                    <b>If you see any information on Power the Polls that is inaccurate or needs
                        to be updated, please email <a
                            href={"mailto:electionofficials@powerthepolls.org"}>electionofficials@powerthepolls.org</a> so
                        we can update this information ASAP!
                    </b>
                </p>
            </Host>
        );
    }
}
