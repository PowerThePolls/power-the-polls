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
                    also assist with various office duties.
                </p>,
            },
            {
                question: "IS A POLL WORKER THE SAME AS A POLL WATCHER?",
                answer: () => <p>
                    No, these are different roles. Poll workers work for election administrators to help administer the
                    election. They do things like set up the polling location, check in voters, assist voters with
                    questions, and troubleshoot any other issues. Poll watchers, which are sometimes also known as poll
                    observers and poll monitors, are volunteers or staff from an outside organization, political party
                    or campaign who are certified to observe and monitor election administration. Power the Polls only
                    recruits poll workers.
                </p>,
            },
            {
                question: "DO POLL WORKERS NEED TRAINING?",
                answer: () => <p>
                    Yes, prior to Election Day, local jurisdictions provide training for all necessary information that
                    poll workers need.
                </p>,
            },
        ],
    },
    {
        sectionTitle: "After you apply to be a poll worker",
        questions: [
            {
                question: "What do I do after I complete my application?",
                answer: () => <p>
                    Be sure to look for any communication from your local election administrators! Be proactive in
                    reaching out to your local elections office to follow up on the status of your application and make
                    sure you are signed up for any training or mandatory information sessions. The earlier you can reach
                    out to your elections office the better. The closer you get to the upcoming elections (including any
                    primaries), the busier those offices will be. Be proactive early on.
                </p>,
            },
            {
                question: "Do poll workers need training?",
                answer: () => <p>
                    Yes, local jurisdictions host training, and provide poll workers with all the necessary information
                    and skills prior to Election Day.
                </p>,
            },
            {
                question: "When will the training start?",
                answer: () => <p>
                    Check in to see if your local administrator has posted new training information. In some places,
                    there are online trainings you can start immediately, though many may not be scheduled until closer
                    to the election. If there is no information about training online, reach out to your election
                    administrator directly to ask when training is and how to schedule yourself to attend.
                </p>,
            },
            {
                question: "I applied, but I haven’t heard back from my local city or county!",
                answer: () => <p>
                    While there is a great need for poll workers right now, many election administrators do not reach
                    out to poll worker applicants until closer to Election Day. Be proactive to find information since
                    many of these offices are understaffed - that’s why they need your help as a poll worker!
                </p>,
            },
            {
                question: "What’s the deadline to apply?",
                answer: () => <p>
                    Most election administrators accept applications on a rolling basis, so we do not have a set
                    deadline nationwide or even state-by-state. However, getting applications in as early as possible is
                    important to help administrators in their planning. If you’re ready to get started, please look up
                    your application <stencil-route-link
                    url="/signup#form">here</stencil-route-link> and submit it today!
                </p>,
            },
            {
                question: "I need to withdraw my application. How can I still help?",
                answer: () => <p>
                    We completely understand that plans change. If you can no longer be a poll worker, one of the most
                    important things you can do is recruit your friends, family and neighbors to replace you this year
                    to help keep polling locations open!
                </p>,
            },
            {
                question: "I applied or served as a poll worker in 2020. Do i need to apply again?",
                answer: () => <p>
                    You should apply again so your local election officials know that you’re available again for the
                    upcoming election. It’s also possible that there is a new application form for this year, so err on
                    the side of completing a new application <stencil-route-link
                    url="/signup#form">here</stencil-route-link>!
                </p>,
            },
            {
                question: "If i’m working the polls, when do i vote?",
                answer: () => <p>
                    Poll workers usually cast their votes early or by mail, but some cast their votes on Election Day.
                    Certain jurisdictions may require poll workers to vote early or via absentee ballot. Your local
                    election official can provide details about how poll workers cast their ballots.
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
                    Local jurisdictions will often pay poll workers a stipend for their participation. In most cases,
                    you will be paid with a check for a day’s worth of work. In some cases, poll working may be
                    voluntary and not paid. You can find out more about pay in your jurisdiction by <stencil-route-link
                    url="/search">reaching out directly to the local elections office.</stencil-route-link>
                </p>,
            },
            {
                question: "I’M CONCERNED ABOUT MY SAFETY. WHAT PRECAUTIONS ARE BEING TAKEN TO PROTECT POLL WORKERS?",
                answer: () => <p>
                    Local election authorities across the country know how important safety is at polling sites – not
                    just for voters but for workers too! If you have specific questions or concerns about steps being
                    taken in your area, please reach out to your local election officials for more information. We know
                    many are also doing important work this year to provide training and resources to protect poll
                    workers and voters. Their contact information can be found once you <stencil-route-link
                    url="/signup#form">sign up to complete your
                    application</stencil-route-link>.
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
