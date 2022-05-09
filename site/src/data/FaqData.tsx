import { FunctionalComponent, h } from "@stencil/core";

/**
 * Ordered list of questions and answers for page-faq.tsx, see also app-root.tsx
 */
const data: {
   sectionTitle: string;
   questions: { question: string; answer: FunctionalComponent }[];
}[] = [
   {
      sectionTitle: "Requirements for being a poll worker",
      questions: [
         {
            question: "What are the requirements for being a poll worker?",
            answer: () => (
               <p>
                  Qualifications vary by jurisdictions. Most states require poll
                  workers to be registered to vote in the state or their local
                  jurisdiction. Some local elections offices have student poll
                  worker programs for younger people who aren’t yet eligible to
                  vote but would like to play an important part of the
                  democratic process
               </p>
            ),
         },
         {
            question:
               "Can I be a poll worker in a state I don’t live in/am not registered in?",
            answer: () => (
               <p>
                  Individuals are generally only allowed to serve in the state
                  where they reside though there may be exceptions to this in
                  select jurisdictions.
               </p>
            ),
         },
         {
            question:
               "I’m not a U.S. citizen / I’m a permanent resident. Can I serve as a poll worker?",
            answer: () => (
               <p>
                  Most states require that poll workers are U.S. citizens. The
                  best place to find guidance is with your local administrator.
               </p>
            ),
         },
         {
            question: "I’m under 18. Can I still help?",
            answer: () => (
               <p>
                  Many states allow individuals under 18 to be poll workers, but
                  each state has its own requirements, and this can vary between
                  different cities and counties. Some states also have
                  additional requirements for students like permission slips, a
                  certain GPA, etc. The best place to find this information is
                  by reaching out to your local election administrator.
               </p>
            ),
         },
         {
            question:
               "Do I have to work the full day, or can I sign up for a shift?",
            answer: () => (
               <div>
                  <p>
                     Some jurisdictions allow workers to sign up for shifts,
                     while others require you to work full days. Hours also
                     often vary for early voting work versus Election Day. If
                     you’re concerned about the hours, you should submit your
                     application and let your election officials know about your
                     availability.
                  </p>
                  <p>
                     If your jurisdiction requires a full day of work and you
                     can’t make those hours but still want to help, think about
                     recruiting other people you know to be a poll worker and
                     can serve for the full time needed.
                  </p>
               </div>
            ),
         },
      ],
   },
   {
      sectionTitle: "Poll worker responsibilities",
      questions: [
         {
            question: "What do poll workers do?",
            answer: () => (
               <p>
                  There are many kinds of jobs for poll workers to do, including
                  helping voters check in, managing voter lines, troubleshooting
                  equipment, and providing directions and assistance. Poll
                  workers may also assist with various office duties.
               </p>
            ),
         },
         {
            question: "Is a poll worker the same as a poll watcher?",
            answer: () => (
               <p>
                  No, these are different roles. Poll workers work for election
                  administrators to help administer the election. They do things
                  like check in voters, fix voting machines, and troubleshoot
                  any other issues at polling sites. Poll watchers, which are
                  sometimes also known as poll observers and poll monitors, are
                  volunteers or staff from a political party or campaign that
                  are certified to observe and monitor election administration.
                  In most states, only political parties, candidates and ballot
                  issue committees can appoint poll watchers. Organizations and
                  civic groups can also appoint poll watchers in some states.
               </p>
            ),
         },
         {
            question: "Do poll workers need training?",
            answer: () => (
               <p>
                  Local jurisdictions often host mandatory trainings, and
                  provide poll workers with all the necessary information and
                  skills they need prior to Election Day.
               </p>
            ),
         },
         {
            question:
               "Does it matter if I’m a Republican, Democrat, or Independent?",
            answer: () => (
               <p>
                  Poll working is usually a non-partisan activity and your party
                  affiliation does not matter, but in some states poll workers
                  are matched to locations in pairs based on their party
                  registration. This is sometimes done to ensure party balance
                  among poll workers at every polling location. Applications in
                  some jurisdictions may ask you for party registration
                  information for this purpose.
               </p>
            ),
         },
      ],
   },
   {
      sectionTitle: "Submitting your application",
      questions: [
         {
            question:
               "Once I submit my name and email here on Power The Polls, is my application complete?",
            answer: () => (
               <p>
                  No! We are here to connect you directly to your local
                  elections office, where you need to fill out an application
                  and/or provide information so your local elections
                  administrator can reach out to you.
               </p>
            ),
         },
         {
            question: "Can you mail me an application?",
            answer: () => (
               <p>
                  Unfortunately, Power the Polls can’t mail you an application
                  -- but we can connect you with the people who can. You should{" "}
                  <stencil-route-link url="/search">
                     reach out to your local administrators
                  </stencil-route-link>{" "}
                  for information on how to proceed.
               </p>
            ),
         },
      ],
   },
   {
      sectionTitle: "After you apply",
      questions: [
         {
            question: "What do I do after I complete my application?",
            answer: () => (
               <p>
                  Be sure to be on the lookout for any communication from your
                  local election administrators! Be proactive in reaching out to
                  your local elections office to follow up on the status of your
                  application and make sure you are signed up for any training
                  or mandatory information sessions. The earlier you can reach
                  out to your elections office the better. The closer you get to
                  the upcoming elections (including any primaries) the busier
                  those offices so be proactive early on.
               </p>
            ),
         },
         {
            question: "Do poll workers need training?",
            answer: () => (
               <p>
                  Local jurisdictions will often have mandatory trainings or
                  optional information sessions, and provide poll workers with
                  all the necessary information and skills they need prior to
                  Election Day.
               </p>
            ),
         },
         {
            question: "When will the training start?",
            answer: () => (
               <div>
                  <p>
                     If you've already applied, you can check in to see if your
                     local administrator has posted new training information. In
                     some places, there are online trainings you can start
                     immediately, though many may not be scheduled till closer
                     to the election.
                  </p>
                  <p>
                     If there is no information about trainings online, reach
                     out to your election administrator directly to ask when
                     trainings are and how to schedule yourself to attend.
                  </p>
               </div>
            ),
         },
         {
            question:
               "I applied, but I haven’t heard back from my local city or county!",
            answer: () => (
               <p>
                  While there is a great need for poll workers right now, many
                  election administrators do not reach out to poll worker
                  applicants until closer to Election Day. Be persistent and
                  proactive to find information since many of these offices are
                  understaffed - that’s why they need your help as a poll
                  worker!
               </p>
            ),
         },
         {
            question: "What’s the deadline to apply/for recruitment?",
            answer: () => (
               <div>
                  <p>
                     Most election administrators accept applications on a
                     rolling basis, so we do not have a set deadline nationwide
                     or even state-by-state. However, getting applications in as
                     early as possible is important to help administrators in
                     their planning.
                  </p>
                  <p>
                     If you’re ready to get started, please begin your signup
                     process{" "}
                     <stencil-route-link url="/signup#form">
                        here
                     </stencil-route-link>
                     .
                  </p>
               </div>
            ),
         },
         {
            question:
               "I need to withdraw my application. How can I still help?",
            answer: () => (
               <p>
                  We completely understand that plans change. If you can no
                  longer be a poll worker, one of the most important things you
                  can do is recruit people to replace you this year to help keep
                  polling locations open!
               </p>
            ),
         },
      ],
   },
   {
      sectionTitle: "Compensation and safety",
      questions: [
         {
            question: "Are poll workers paid?",
            answer: () => (
               <p>
                  Local jurisdictions will often pay poll workers a stipend for
                  their participation. In most cases, you will be paid with a
                  check for a day’s worth of work. In some cases, poll working
                  may be voluntary and not paid. You can find out more about pay
                  in your jurisdiction by{" "}
                  <stencil-route-link url="/search">
                     reaching out directly to the local elections office.
                  </stencil-route-link>
               </p>
            ),
         },
         {
            question:
               "I’m concerned about my safety. What precautions are being taken to protect poll workers?",
            answer: () => (
               <p>
                  Power the Polls is working with local organizations and
                  partners to help election officials provide PPE. If you have
                  specific concerns about what PPE will be provided in your
                  jurisdiction, please reach out to your local officials for
                  more information.
               </p>
            ),
         },
         {
            question:
               "I have a disability. What accommodations are being provided?",
            answer: () => (
               <p>
                  These vary state to state, so the best place to find
                  information is by contacting your local elections
                  administrator directly.
               </p>
            ),
         },
         {
            question: "I don’t want to be paid to be a poll worker.",
            answer: () => (
               <p>
                  If you are not interested in being paid, you can ask your
                  administrator about waiving your wages. If that is not
                  possible, you can choose to donate it to a charity.
               </p>
            ),
         },
      ],
   },
   {
      sectionTitle: "Additional inquiries",
      questions: [
         {
            question:
               "I’m an organization and would like to partner with Power the Polls.",
            answer: () => (
               <p>
                  Thank you for your interest in partnering with Power the
                  Polls! Please let us know you are interested in partnering by
                  emailing us at{" "}
                  <a href="mailto:partnerships@powerthepolls.org">
                     partnerships@powerthepolls.org
                  </a>{" "}
                  and we will reach out to share more information with you.
               </p>
            ),
         },
         {
            question: "If I’m working the polls, when do I vote?",
            answer: () => (
               <p>
                  Poll workers usually cast their votes early or by mail, but
                  some cast their votes on Election Day. Certain jurisdictions
                  may require poll workers to vote early or via absentee ballot.
                  Your local elections official can provide details about how
                  poll workers cast their ballots.
               </p>
            ),
         },
         {
            question: "Who started this organization?",
            answer: () => (
               <p>
                  The initiative was launched by nonprofit organizations and
                  businesses including the Civic Alliance, Comedy Central, Fair
                  Elections Center, Center for Secure and Modern Elections, Levi
                  Strauss & Co, MTV, Patagonia, Pizza to the Polls, Time To
                  Vote, Uber, and We Can Vote.
               </p>
            ),
         },
      ],
   },
   {
      sectionTitle: "Technical issues",
      questions: [
         {
            question:
               "I hit the “Complete Your Application” button, but it brought me to a blank email. What next?",
            answer: () => (
               <div>
                  <p>
                     If the "Complete Your Application!" prompt leads you to a
                     blank email, that means that you need to email your local
                     election administrator directly to apply. If you're not
                     sure what to write, please feel free to use this sample
                     text in the body of your message:
                  </p>
                  <p>To Whom It May Concern</p>
                  <p>
                     I am writing to you to express my interest in being a poll
                     worker in this November's election. I am committed to
                     making sure all eligible voters in my area are able to
                     exercise their right to vote this year.
                  </p>
                  <p>
                     I have reviewed the requirements for our area and I am
                     ready, willing, and able to serve. I can be reached by
                     phone at (###) ###-#### or at this email. My address is 123
                     Main Street, EveryTown, State, Zip code.
                  </p>
                  <p>
                     I look forward to hearing from you about all training
                     opportunities and next steps so I can serve as a poll
                     worker this year.
                  </p>
               </div>
            ),
         },
         {
            question:
               "I filled out an application online, but there’s no way to submit it. Can I email it to you as an attachment?",
            answer: () => (
               <p>
                  Unfortunately, Power the Polls cannot process your application
                  directly. You should reach out to your local administrators
                  for information on how to proceed.
               </p>
            ),
         },
         {
            question:
               "I’m experiencing a technical error while trying to access your site/I found an error on your site!",
            answer: () => (
               <p>
                  Please reach out to us here to report this issue. Be sure to
                  include a screenshot and the zip code you used to sign up.
               </p>
            ),
         },
      ],
   },
];
export default data;
