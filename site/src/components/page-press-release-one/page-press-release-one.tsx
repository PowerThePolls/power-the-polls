import { Component, h, Host } from "@stencil/core";

@Component({
    tag: "page-press-release-one",
    styleUrl: "page-press-release-one.scss",
    shadow: false,
})
export class PagePressReleaseOne {
    public render() {
        return (
            <Host>
                <a href="/press-and-media">
                    <button>BACK TO PRESS AND MEDIA</button>
                </a>
                <h1>
                    Power The Polls Launches First-of-its-Kind Effort to Recruit
                    New Wave of Poll Workers for Election Day
                </h1>
                <p>
                    <i>
                        June 30, 2020 -- In the Midst of a Nationwide Poll
                        Worker Shortage, Nonprofits and Companies Come Together
                        to Ensure Safe, Secure and Fair Elections Launch
                        Partners Include Civic Alliance, Comedy Central, Fair
                        Elections Center, Levi Strauss & Co., MTV, Patagonia,
                        Pizza to the Polls, Time to Vote, Uber, and We Can Vote.{" "}
                    </i>
                </p>
                <p>
                    PORTLAND, Ore. – Today, a coalition of businesses and
                    nonprofits is launching Power the Polls, a first-of-its-kind
                    initiative to recruit a new wave of poll workers –
                    especially among younger, more diverse populations that have
                    not historically filled these roles – to ensure a safe,
                    secure, healthy and fair election for all voters. Amidst a
                    nationwide poll worker shortage and fewer than 100 days to
                    sign up as many as 250,000 new workers nationally, Power the
                    Polls will be part of the solution through education,
                    recruitment, business engagement, PPE procurement, and
                    potential rewards for those who sign up. The initiative is
                    being launched by nonprofit organizations and businesses,
                    namely Civic Alliance, Comedy Central, Fair Elections
                    Center, Levi Strauss & Co, MTV, Patagonia, Pizza to the
                    Polls, Time To Vote, Uber, and We Can Vote—with a goal of
                    recruiting more partners.
                </p>
                <p>
                    Currently, most poll workers are over the age of 60 and in
                    the era of uncertainty caused by the coronavirus, fewer are
                    signing up for the job. The consequences have already been
                    felt in recent primaries where poll worker shortages led to
                    long lines and voter disenfranchisement. Washington, D.C.
                    lost 1,700 election workers during its primary in early
                    June. Similarly, Kentucky consolidated in-person voting in
                    each county to a single polling place during the primary due
                    to poll worker recruitment concerns
                </p>
                <p>
                    Power the Polls will focus on recruiting low-risk, healthy
                    and more diverse individuals to staff in-person voting
                    locations during early voting and on Election Day in order
                    to ensure that those who choose or need to vote in-person
                    are able to vote safely and delay-free. The initiative’s
                    platform is built using poll worker requirements collected
                    by the nonpartisan Fair Elections Center with its unique
                    Work Elections web portal. Information is available on poll
                    worker compensation, hours, application links, and training
                    and voter registration requirements for more than 4,000
                    jurisdictions in states across the country.
                </p>
                <p>
                    “Having healthy poll workers is critical to the voting
                    process,” says Scott Duncombe, the founder of Pizza to the
                    Polls. “During a pandemic, people should not have to choose
                    between putting themselves at risk and acting on their
                    democratic right to vote.” We cannot have mass closures of
                    poll sites on Nov. 3 due to lack of poll workers, resulting
                    in long lines, fewer opportunities to physically distance,
                    and directly stifling voters’ ability to cast a ballot.
                    Maintaining safe in-person voting is critical for
                    communities without reliable access to mail service, voters
                    with disabilities, those who need language assistance, or
                    for voters who simply want to cast their ballot in-person as
                    they always have.
                </p>
                <p>
                    “We’re excited about this new, expanded initiative to
                    recruit people to be poll workers for the Fall elections,”
                    said Fair Elections Center President Robert Brandon. “We
                    established Work Elections to provide information and make
                    it easy for folks to sign up. This year, with the pandemic
                    affecting the ability of many people who normally work at
                    the polls, we’re pleased to join with these partners to get
                    the word out that poll workers are going to be desperately
                    needed in many communities to help ensure a safe and fair
                    election for voters.” Power the Polls will recruit and
                    support workers by:
                    <ul>
                        <li>
                            Educating potential voters on the opportunity and
                            experience of manning Election Day polls.
                        </li>
                        <li>
                            An efficient and effective program to ensure people
                            sign up and show up on Election Day.
                        </li>
                        <li>
                            Activating businesses to give their workers Election
                            Day off so they can work the polls.
                        </li>
                        <li>
                            Providing PPE for worker safety on Election Day
                            (through corporate partners).
                        </li>
                        <li>
                            Rewarding poll workers for their service by
                            providing virtual gifts (merchandise, gift cards,
                            etc.) from Power the Polls business partners to
                            celebrate their service.{" "}
                        </li>
                    </ul>
                </p>
                <p>
                    “Today we are sounding the alarm on a nationwide poll worker
                    shortage -- and getting ahead of this crisis by recruiting
                    the next generation of younger and more diverse poll workers
                    who can help ensure a safe, fair and smooth election for all
                    voters,” said Erika Soto Lamb, Vice President of Social
                    Impact Strategy, Comedy Central and MTV. “MTV has a long
                    history in youth voter turnout and Comedy Central in
                    addressing the social issues of our time in super funny ways
                    -- together with the other Power the Polls partners we are
                    excited to answer the call of this latest critical challenge
                    of the 2020 elections.”
                </p>
                <p>
                    “While states across the country have rightly focused on
                    extending absentee voting, there's no doubt we will still
                    need robust and well-staffed in-person voting options,
                    especially for people with disabilities, those who need
                    language assistance, or communities without reliable access
                    to mail service,” said Jessica Barba Brown, senior advisor
                    for We Can Vote. “I served as a poll worker for the primary
                    election and it was an eye-opening and gratifying
                    experience. Working together with businesses, election
                    officials, and nonprofits, we can make sure we recruit
                    enough election workers so all voters can have a safe
                    experience at the polls.”
                </p>
                <p>
                    For more information for voters and businesses looking to
                    participate, visit www.powerthepolls.org.
                </p>
            </Host>
        );
    }
}
