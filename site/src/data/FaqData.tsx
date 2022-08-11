import {FunctionalComponent, h} from "@stencil/core";

/**
 * Ordered list of questions and answers for page-faq.tsx, see also app-root.tsx
 */
const data: { sectionTitle: string, questions: { question: string, answer: FunctionalComponent }[] }[] = [
    {
        sectionTitle: "Requirements for being a poll worker",
        questions: [
            {
                question: "What are the requirements for being a poll worker?",
                answer: () => <p>
                    Qualifications vary by jurisdictions. Most states require poll workers to live in or be registered
                    to vote in the state or their local jurisdiction. Some local election offices have student poll
                    worker programs for younger people who aren’t yet eligible to vote but would like to play an
                    important part of the democratic process.
                </p>,
            },
            {
                question: "Can I be a poll worker in another state?",
                answer: () => <p>
                    Individuals are generally only allowed to serve in the state where they reside/vote, though there
                    may be exceptions to this in select jurisdictions.
                </p>,
            },
            {
                question: "Are there citizenship requirements to be a poll worker?",
                answer: () => <p>
                    Most states require that poll workers are U.S. citizens. The best place to find guidance is with
                    your local election office.
                </p>,
            },
            {
                question: "I’m under 18. Can I still help?",
                answer: () => <p>
                    Many states allow individuals under 18 to be poll workers, but each state has its own requirements,
                    and sometimes these can vary depending on which part of the state you are in. The best way to find
                    this information is by reaching out to your local election office.
                </p>,
            },
            {
                question: "Do i really have to work the full day or can i sign up for shorter shift?",
                answer: () => <p>
                    Some jurisdictions allow workers to sign up for shifts, while others require you to work full
                    days. Hours also often vary for early voting work versus Election Day. If you’re concerned about
                    the hours, you should submit your application and let your election officials know about your
                    availability. If your jurisdiction requires a full day of work and you can’t make those hours
                    but still want to help, think about recruiting other people you know to be a poll worker and can
                    serve for the full time needed.
                </p>,
            },
            {
                question: "Does it matter if i’m a Republican, Democrat, or Independent?",
                answer: () => <p>
                    Poll working is usually a non-partisan activity and your party affiliation does not matter, but in
                    some states poll workers are matched to locations in pairs based on their party registration. This
                    is sometimes done to ensure party balance among poll workers at every polling location. Applications
                    in some jurisdictions may ask you for party registration information for this purpose.
                </p>,
            },
        ],
    },
    {
        sectionTitle: "Poll worker responsibilities",
        questions: [
            {
                question: "What do poll workers do?",
                answer: () => <p>
                    There are many kinds of jobs for poll workers to do, including helping voters check in, managing
                    voter lines, troubleshooting equipment, and providing directions and assistance. Poll workers may
                    also assist with various office duties.
                </p>,
            },
            {
                question: "Is a poll worker the same as a poll watcher?",
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
                question: "Do poll workers need training?",
                answer: () => <p>
                    Yes, prior to Election Day, local jurisdictions provide training for all necessary information that
                    poll workers need.
                </p>,
            },
        ],
    },
    {
        sectionTitle: "Submitting your poll worker application",
        questions: [
            {
                question: "Once I submit my name and email here on Power The Polls, is my application complete?",
                answer: () => <p>
                    No! Once you sign up with us, we immediately direct you to a page with your local elections office
                    information. You must fill out an application and/or provide information to your local elections
                    office. They manage everything related to poll worker applications, selection, training, and
                    placement. You must complete this most important step of completing their application process.
                </p>,
            },
            {
                question: "Can you mail me an application?",
                answer: () => <p>
                    Unfortunately, Power the Polls can’t mail you an application, but many applications are available
                    online. You can get more information when you sign up <stencil-route-link
                    url="/signup#form">here</stencil-route-link>.
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
                question: "Are poll workers paid?",
                answer: () => <p>
                    Local jurisdictions will often pay poll workers a stipend for their participation. In most cases,
                    you will be paid with a check for a day’s worth of work. In some cases, poll working may be
                    voluntary and not paid. You can find out more about pay in your jurisdiction by <stencil-route-link
                    url="/search">reaching out directly to the local elections office.</stencil-route-link>
                </p>,
            },
            {
                question: "I’m concerned about my safety. What precautions are being taken to protect poll workers?",
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
                question: "I have a disability. What accommodations are being provided?",
                answer: () => <p>
                    Accommodations vary state to state, so the best place to find information is by contacting your
                    local election administrator directly. You can find their info <stencil-route-link
                    url="/search">here</stencil-route-link>.
                </p>,
            },
            {
                question: "I don’t want to be paid to be a poll worker.",
                answer: () => <p>
                    If you are not interested in being paid, you can ask your administrator about waiving your wages. If
                    that is not possible, you can choose to donate it to a charity.
                </p>,
            },
        ],
    },
    {
        sectionTitle: "Additional inquiries",
        questions: [
            {
                question: "I’m an organization and would like to partner with Power the Polls.",
                answer: () => <p>
                    Thank you for your interest in partnering with Power the Polls! Please let us know you are
                    interested in partnering by emailing us at <a
                    href="mailto:partners@powerthepolls.org">partners@powerthepolls.org</a> and we will reach
                    out to share more information with you.
                </p>,
            },
            {
                question: "Who started this organization?",
                answer: () => <p>
                    The initiative was launched by nonprofit organizations and businesses including the Civic Alliance,
                    Comedy Central, Fair Elections Center, Center for Secure and Modern Elections, Levi Strauss & Co,
                    MTV, Patagonia, Pizza to the Polls, Time To Vote, Uber, and We Can Vote.
                </p>,
            },
        ],
    },
    {
        sectionTitle: "Technical issues",
        questions: [
            {
                question: "I hit the “Complete Your Application” button, but it brought me to a blank email. What next?",
                answer: () => <p>
                    If the "Complete Your Application!" prompt leads you to a blank email, that means that you need to
                    email your local election administrator directly to apply.
                </p>,
            },
            {
                question: "I filled out an application online, but there’s no way to submit it. Can I email it to you as an attachment?",
                answer: () => <p>
                    Unfortunately, Power the Polls cannot process your application directly. You should reach out to
                    your local administrators for information on how to proceed. You can find their info when you sign
                    up <stencil-route-link url="/signup#form">here</stencil-route-link>.
                </p>,
            },
            {
                question: "I’m experiencing a technical error while trying to access your site/I found an error on your site!",
                answer: () => <p>
                    Please email <a href="mailto:info@powerthepolls.org">info@powerthepolls.org</a> to report the issue.
                    Be sure to include a screenshot and the zip code you used to sign up.
                </p>,
            },
        ],
    },
];
export default data;
