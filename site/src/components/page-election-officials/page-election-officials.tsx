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
                <h3>Thank You for Your Service</h3>
                <p>
                    On behalf of our entire team at Power the Polls and our amazing partner organizations and companies,
                    we would like to thank you for your incredible service to your local communities and our country. We
                    know you and your team work hard everyday to serve voters and ensure safe and fair elections year
                    after year. We’re humbled to coordinate with dedicated elections officials across the country and
                    can’t wait to connect with you.
                </p>
                <h3>We Aim to Inspire Americans to Sign Up to be Poll Workers</h3>
                <p>
                    America needs more poll workers to ensure a safe and fair election. Power the Polls is designed to
                    address that need -- and is continuing the work it started in 2020 -- to recruit a new wave of
                    younger, more diverse poll workers who can help protect fair access to the ballot box now and in the
                    future. Power the Polls is a first-of-its-kind, nonpartisan initiative for recruiting poll workers.
                </p>
                <h3>Working to Serve Election Administrators</h3>
                <p>
                    Power the Polls is eager to coordinate directly with elections administrators to identify and fill
                    poll worker recruitment gaps in local communities. Power the Polls was grateful to coordinate with
                    local elections officials, Secretaries of State, and State Election Directors to address poll worker
                    shortages in 2020, and we are proud to continue this critical work in 2022. Do you need more tech
                    savvy individuals to ensure voters get the support they need? Are you searching for multilingual
                    speakers who are eager to work the polls in your community? Power the Polls can help! Wherever
                    possible, we work alongside elections officials to customize recruitment to best fill particular
                    gaps.
                </p>
                <h3>We Would Love to Hear From You</h3>
                <p>
                    Our team at Power the Polls is eager to serve our hardworking elections administrators. Email us
                    at <a href="mailto:electionofficials@powerthepolls.org">electionofficials@powerthepolls.org</a> to
                    get connected with our Poll Worker Engagement Manager. <b>When election administrators flag a poll
                    worker need, Power the Polls can boost recruitment through all of our recruitment channels - earned
                    media, social media, partners, businesses, and paid media.</b> To best fill any recruitment needs,
                    it is helpful to have the following information:
                </p>
                <ul>
                    <h3>
                        <li>Contact Information</li>
                    </h3>
                    Please provide your name, title, local office, phone number, and email.
                    <h3>
                        <li>Where do you need more poll workers (jurisdiction-wise)?</li>
                    </h3>
                    <p>
                        Be ready to indicate which jurisdictions need additional poll workers or recruitment support.
                    </p>
                    <h3>
                        <li>Approximately how many people are needed?</li>
                    </h3>
                    <p>
                        This will allow us to target the right number of people to reach out to so we don’t overwhelm a
                        local office.
                    </p>
                    <h3>
                        <li>Are there any particular needs for certain skills or for availability on key dates?</li>
                    </h3>
                    <p>
                        Are you looking for individuals with particular language or tech skills? Do you need people with
                        experience in customer service? Are you looking to fill gaps for one date or one role
                        specifically? The more information our team has about your jurisdiction’s particular needs, the
                        better we can recruit the best suited neighbors to serve.
                    </p>
                    <h3>
                        <li>
                            In addition to completing their application, is there another way potential poll workers
                            should contact your office?
                        </li>
                    </h3>
                    <p>
                        Power the Polls encourages potential poll workers to complete their local jurisdiction’s
                        official online application. (If the local jurisdiction does not have its own online
                        application, we direct them to submit an online application with the state election office, in
                        states where one is available.) If you notice any issue with the information provided on our
                        website, please let us know so we can update and provide better instructions for potential poll
                        workers to reach you.
                    </p>
                </ul>
                <h3>Thank you again for your incredible service.</h3>
                <p>
                    <b>
                        For more information and to learn more about working with PowerthePolls.org to help with your
                        poll worker recruitment needs, please contact <a
                        href={"mailto:electionofficials@powerthepolls.org"}>electionofficials@powerthepolls.org</a>.
                    </b>
                </p>
                <h3>About our Poll Worker Application Information</h3>
                <p>
                    Power the Polls uses data on poll worker requirements researched and collected by the nonpartisan
                    Fair Elections Center, as part of their WorkElections project. Information is available on poll
                    worker compensation, hours, application links, and training and voter registration requirements for
                    thousands of jurisdictions in states across the country.
                </p>
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
