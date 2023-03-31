import {FunctionalComponent, h} from "@stencil/core";

/**
 * Ordered list of questions and answers for page-faq.tsx, see also app-root.tsx
 */
const data: { sectionTitle: string, questions: { question: string, answer: FunctionalComponent }[] }[] = [
    {
        sectionTitle: "Requirements for being a poll worker",
        questions: [
            {
                question: "WHAT ARE THE REQUIREMENTS FOR BEING A POLL WORKER?",
                answer: () => <p>
                    Qualifications vary by jurisdictions. Most states require
                    poll workers to live in or be registered to vote in the
                    state or their local jurisdiction. Some local election
                    offices have student poll worker programs for younger
                    people who aren’t yet eligible to vote but would like
                    to play an important part of the democratic process.
                </p>,
            },
            {
                question: "CAN I BE A POLL WORKER IN ANOTHER STATE?",
                answer: () => <p>
                    Individuals are generally only allowed to serve in the state where they reside/vote, though there
                    may be exceptions to this in select jurisdictions.
                </p>,
            },
            {
                question: "ARE THERE CITIZENSHIP REQUIREMENTS TO BE A POLL WORKER?",
                answer: () => <p>
                    Most states require that poll workers are U.S. citizens. The best way to find this information is
                     by looking up your zip code at <stencil-route-link
                    url="/search">
                     https://www.powerthepolls.org/search</stencil-route-link> or reaching out to your local
                     election office.
                </p>,
            },
            {
                question: "I’M UNDER 18. CAN I STILL HELP?",
                answer: () => <p>
                    Many states allow individuals under 18 to be poll workers, but each state has its own requirements,
                    and sometimes these can vary depending on which part of the state you are in. The best way to find this information is
                     by looking up your zip code at <stencil-route-link
                    url="/search">
                     http://www.powerthepolls.org/search</stencil-route-link> or reaching out to your local
                     election office.
                </p>,
            },
            {
                question: "DO I REALLY HAVE TO WORK THE FULL DAY OR CAN I SIGN UP FOR SHORTER SHIFT?",
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
                question: "DOES IT MATTER IF I’M A REPUBLICAN, DEMOCRAT, OR INDEPENDENT?",
                answer: () => <p>
                    Poll working is usually a non-partisan activity and your party affiliation does not matter, but in
                    some states poll workers are matched to locations in pairs based on their party registration. This
                    is sometimes done to ensure party balance among poll workers at every polling location. Applications
                    in some jurisdictions may ask you for party registration information for this purpose.
                </p>,
            },
        ],
    },
];
export default data;
