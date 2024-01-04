import { Component, h, Host } from "@stencil/core";

@Component({
    tag: "page-election-officials",
    styleUrl: "page-election-officials.scss",
    shadow: false,
})
export class PageElectionOfficials {
    public render() {
        return (
            <Host>
                <h1>INFORMATION FOR ELECTION ADMINISTRATORS</h1>
                <h3>Need poll workers? We’re here to help.</h3>
                <p>
                    At Power the Polls, we help hardworking elections
                    administrators close the recruitment gap for poll workers
                    and other seasonal election workers.
                </p>
                <p>
                    We welcome the opportunity to connect and learn more about
                    your recruitment needs, and how our diverse nonpartisan
                    network of businesses and nonprofits can help.
                </p>
                <button class="back-button">
                    <a
                        href="https://powerthepolls.typeform.com/EASupport"
                        target="_blank"
                    >
                        Share recruitment needs{" "}
                    </a>
                </button>
                <p>Here’s how Power the Polls can help:</p>
                <ul>
                    <li>
                        <b>Information Gathering - </b>Let us know what you’re
                        looking for — overall need, specific skill sets (such as
                        language or tech skills), availability, etc. — by
                        completing the survey above.
                    </li>
                    <br></br>
                    <li>
                        <b>Information Sharing - </b>Our team will follow up and
                        can send you a list of folks in your jurisdiction who
                        have expressed their interest in being a poll worker, as
                        permitted by state law.
                    </li>
                    <br></br>
                    <li>
                        <b> Recruitment Efforts - </b> Power the Polls can also
                        help alert our wide network of nonpartisan partners to
                        support recruitment in a particular area.
                    </li>
                    <br></br>
                </ul>
                <p>
                    We look forward to learning more about your needs and
                    lending support to help achieve your staffing goals.
                </p>
                <p>
                    For more information about how Power the Polls works, visit
                    our &#160;
                    <a href="https://www.powerthepolls.org/about">About</a>
                    &#160; page
                </p>
                <h3>Thank you for your service!</h3>
                <p>
                    On behalf of our entire team at Power the Polls, all of our
                    partners, and the community you serve day-in and day-out,
                    thank you for your incredible service to your local
                    communities and our country.
                </p>
                <p>
                    We know you and your team work hard every day to serve
                    voters and ensure safe and fair elections year after year.
                    We’re humbled to coordinate with dedicated elections
                    officials across the country and can’t wait to connect with
                    you.
                </p>
                <p>
                    <b>
                        Questions? Email us at{" "}
                        <a href={"mailto:electionofficials@powerthepolls.org"}>
                            electionofficials@powerthepolls.org
                        </a>
                        .
                    </b>
                </p>
            </Host>
        );
    }
}
