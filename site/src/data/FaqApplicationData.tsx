import {FunctionalComponent, h} from "@stencil/core";

/**
 * Ordered list of questions and answers for page-faq.tsx, see also app-root.tsx
 */
const data: { sectionTitle: string, questions: { question: string, answer: FunctionalComponent }[] }[] = [
    {
        sectionTitle: "Submitting your poll worker application",
        questions: [
            {
                question: "How do I send my application to you?",
                answer: () => <p>
                    Hello, there! Thank you for reaching out.
                    Unfortunately we can't process your application from here, but we can help you connect with the people who can! You should reach 
                    out to your local administrators directly for information on how to proceed. They will be able to instruct you on how to submit an 
                    application. Enter your zip code at https://www.powerthepolls.org/search and you’ll find contact info for your local election administrators.
                </p>,
            },
            {
                question: "Can you mail me an application?",
                answer: () => <p>
                Thank you for your interest in applying to be a poll worker!
                You must complete your application with your local elections office. Look up their information at www.powerthepolls.org/search. 
                It’s important to get your application in as early as possible to let your elections office know that you’re eager and available for work. 
                </p>,
            },
        ],
    },
    {
        sectionTitle: "After you've submitted your application'",
        questions: [
            {
                question: "I haven't heard anything",
                answer: () => <p>
                    Thank you for signing up to be a poll worker, and thank you for reaching out to us!
                    Election Administrators are working hard to review poll worker applications, schedule 
                    training and handle all the other moving pieces that make an election day run smoothly. 
                    We suggest giving them a call (and remember to pick up unknown numbers in case they 
                    call you!). You can find their contact information here: https://www.powerthepolls.org/search
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
