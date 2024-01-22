import {FunctionalComponent, h} from "@stencil/core";

/**
 * Ordered list of questions and answers for page-faq.tsx, see also app-root.tsx
 */
const data: { sectionTitle: string, questions: { question: string, answer: FunctionalComponent }[] }[] = [
        {
        sectionTitle: "Poll worker responsibilities",
        questions: [
            {
                question: "WHAT DO POLL WORKERS DO?",
                answer: () => <p>
                    There are many kinds of jobs for poll workers to do, including helping voters check in, managing
                    voter lines, troubleshooting equipment, and providing directions and assistance. Poll workers may
                    also assist with various office duties. To learn more, check out our resource
                    <a href="https://www.powerthepolls.org/assets/documents/a-day-in-the-life.pdf"> “A day in the life of a poll worker.”</a>
                </p>,
            },
            {
                question: "IS A POLL WORKER THE SAME AS A POLL WATCHER?",
                answer: () => <p>
                    No, these are different roles. Poll workers work
                    for election administrators to help administer
                    the election. They do things like set up the
                    polling location, check in voters, assist
                    voters with questions, and troubleshoot any other
                    issues. Poll watchers, which are sometimes also
                    known as poll observers or poll monitors, are
                    volunteers or staff from an outside organization,
                    political party, or campaign who are certified to
                    observe and monitor election administration. Power
                    the Polls only recruits poll workers.
                </p>,
            },
            {
                question: "IF I’M WORKING THE POLLS, WHEN DO I VOTE",
                answer: () => <p>
                    Poll workers usually cast their votes early or by
                    mail, but some cast their votes on Election Day.
                    Certain jurisdictions may require poll workers to
                    vote early or via absentee ballot. Your local
                    election official can provide details about how
                    poll workers cast their ballots.
                </p>,
            },
        ],
    },
    {
        sectionTitle: "Poll worker training",
        questions: [
            {
                question: "DO POLL WORKERS NEED TRAINING?",
                answer: () => <p>
                    Yes. Prior to Election Day, local
                    jurisdictions host training and provide poll
                    workers with all the necessary information and
                    skills they need to be successful and help their
                    neighbors vote.
                </p>,
            },
            {
                question: "WHEN WILL THE TRAINING START?",
                answer: () => <p>
                    Check to see if your local administrator has
                    posted new training information. In some places,
                    there are online trainings you can start immediately,
                    though many may not be scheduled until closer to the
                    election. If there is no information about training
                    online, reach out to your election administrator directly
                    to ask when training is and how to schedule yourself to
                    attend.
                    <br/>
                    In the meantime, check out our <a href="https://www.powerthepolls.org/resources" target="_self">
                    Resources</a> page to learn
                    more about what to expect at your training and at the
                    polls.
                </p>,
            },
        ],
    },
    {
        sectionTitle: "Compensation and safety",
        questions: [
            {
                question: "ARE POLL WORKERS PAID?",
                answer: () => <p>
                    Local jurisdictions will often pay poll workers a
                    stipend for their participation. In most cases, you
                    will be paid with a check for a day’s worth of work.
                    In some cases, poll working may be voluntary and not
                    paid. You can find out more about pay in your
                    jurisdiction by reaching out directly to the local
                    elections office or typing in your zip code at <stencil-route-link
                    url="/search">http://www.powerthepolls.org/search</stencil-route-link>.
                </p>,
            },
            {
                question: "I’M CONCERNED ABOUT MY SAFETY. WHAT PRECAUTIONS ARE BEING TAKEN TO PROTECT POLL WORKERS?",
                answer: () => <p>
                    Local election administrators across the country know how
                    important safety is at polling sites—not just for voters,
                    but for poll workers too! Many election administrators
                    incorporate safety information into the training and resources
                    they provide to poll workers and voters. If you have specific
                    questions or concerns about steps being taken in your area,
                    please reach out to your local election officials for more
                    information.
                </p>,
            },
            {
                question: "I HAVE A DISABILITY. WHAT ACCOMODATIONS ARE BEING PROVIDED?",
                answer: () => <p>
                    Accommodations vary state to state, so the best place to find information is by contacting your
                    local election administrator directly. You can find their info <stencil-route-link
                    url="/search">here</stencil-route-link>.
                </p>,
            },
            {
                question: "I DON'T WANT TO BE PAID TO BE A POLL WORKER.",
                answer: () => <p>
                    If you are not interested in being paid, you can ask your administrator about waiving your wages. If
                    that is not possible, you can choose to donate it to a charity.
                </p>,
            },
        ],
    },
];
export default data;
