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
                    Most states require that poll workers are U.S. citizens. The best way to find this information is
                     by looking up your zip code at <a href="https://www.powerthepolls.org/search" target="_self">
                     https://www.powerthepolls.org/search</a> or reaching out to your local
                     election office.
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
];
export default data;
