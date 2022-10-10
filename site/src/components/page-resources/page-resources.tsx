 import {Component, h, Host} from "@stencil/core";

@Component({
    tag: "page-resources",
    styleUrl: "page-resources.scss",
    shadow: false,
})
export class PageResources {

    public render() {
        return (
            <Host>

                <h1>Resources</h1>
                    <p>Now that you've <a href="https://www.powerthepolls.org/signup#form">
                        signed up
                    </a> with Power the Polls, here are some resources to help you get ready to serve.
                    </p>
                  <div class="column">
                    <div class="card">
                        <a href="/assets/documents/now-what.pdf"
                                                                         target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/logo-icon-pink-source.png"></img>
                       <h2>
                            I signed up to power the polls - now what?
                        </h2>
                             <p>
                               There’s more to do to complete your poll worker application! Here’s what comes next.
                            </p>
                        </a>
                    </div>
                    <div class="card">
                    <a href="/assets/documents/common-scenarios.pdf"
                                                                         target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/resources/ballot_box.png"></img>
                        <h2>
                            Top Voting or Ballot Issues to Prepare For
                        </h2>
                        <p>
                            Voters may need help with the voting process. Learn what solutions you can provide.
                        </p>
                        </a>
                    </div>
                    <div class="card">
                         <a href="/assets/documents/problem-solving.pdf"
                                                                         target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/resources/problem_solving.png"></img>
                        <h2>
                            Safety and Problem Solving at the Polls
                        </h2>
                        <p>
                            Learn how you can problem solve and help keep things calm at your polling location.
                        </p>
                        </a>
                    </div>
                    </div>

                  <div class="column">
                    <div class="card">
                     <a href="/assets/documents/a-day-in-the-life.pdf"
                                                                         target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/resources/group.png"></img>
                        <h2>
                            A Day in the Life of a Poll Worker
                        </h2>
                        <p>
                            Serving as a poll worker may not be what you think. Learn what your day will be like.
                        </p>
                        </a>
                    </div>
                    <div class="card">
                         <a href="/assets/documents/accessibility-at-the-polls.pdf"
                                                                         target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/resources/team.png"></img>
                        <h2>
                            Maintaining Accessible Voting for Everyone
                        </h2>
                        <p>
                            Learn how to help your polling place be accessible for disabled and bi-lingual voters.
                        </p>
                        </a>
                    </div>
                    <div class="card">
                         <a href="https://www.fairelectionscenter.org/statevotingguides"
                                                                         target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/resources/states.png"></img>
                        <h2>
                            Fair Elections Center: State Voting Guides
                        </h2>
                        <p>
                            Learn the rules, requirements and important dates for casting a ballot in every state.
                        </p>
                        </a>
                    </div>
                  </div>

                  <div class="column">
                <div class="card">
                  <a href="/assets/documents/election-day-checklist.pdf"
                                                                         target="_blank" rel="noopener noreferrer">                        <img src="/assets/images/resources/checklist.png"></img>
                        <h2>
                            Poll Worker Election Day Checklist
                        </h2>
                        <p>
                            Save this checklist to make sure you’re ready to power the polls!
                        </p>
                        </a>
                    </div>
                    <div class="card">
                         <a href="/assets/documents/checking-biases.pdf"
                                                                         target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/resources/tables.png"></img>
                        <h2>
                            Checking Our Personal Biases at the Polls
                        </h2>
                        <p>
                            Learn how to identify and check your biases so that you can best serve all voters.
                        </p>
                        </a>
                    </div>
                    <div class="card">
                         <a href="/assets/documents/25-questions-to-ask.pdf"
                                                                         target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/resources/questions.png"></img>
                        <h2>
                            Questions to Ask in Your Official Training
                        </h2>
                        <p>
                            Use this guide to prep for your official training and make sure you’re ready to serve.
                        </p>
                        </a>
                    </div>
                  </div>

                <br />
                <br />
                <p>
                    These resources do not take the place of the official training
                    and resources that your elections office provides. If you have specific questions,{" "}
                    <stencil-route-link url="/search">reach out to your local election
                        administrator.
                    </stencil-route-link>
                </p>
                <p>
                    Credits:
                        <a href="https://www.flaticon.com/free-icons/checklist" title="checklist icons"> Checklist icons created by Ilham Fitrotul Hayat - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/vote" title="vote icons"> Vote, Group, and Problem icons created by Freepik - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/work" title="work icons"> Work icons created by Eucalyp - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/united-states" title="united states icons"> United states icons created by Nikita Golubev - Flaticon</a>
                </p>

            </Host>
        );
    }

}
