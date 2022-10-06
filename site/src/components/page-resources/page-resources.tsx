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
                    <p>Now that you've <a href="/assets/documents/election-day-checklist.pdf">
                        signed up
                    </a> with Power the Polls, here are some resources to help you get ready to serve.
                    </p>
                  <div class="column">
                    <div class="card">
                        <a href="/assets/documents/now-what.pdf"
                                                                         target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/logo-icon-pink-source.png"></img>
                       <h2>
                            How to become a Poll Worker
                        </h2>
                             <p>
                               You’ve signed up with Power the Polls—now what?
                            </p> 
                        </a>
                    </div>
                    <div class="card">
                    <a href="/assets/documents/common-scenarios.pdf"
                                                                         target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/resources/ballot_box.png"></img>
                        <h2>
                            Common Voter Issues At the Polls
                        </h2>
                        <p>
                            Learn how to handle voting issues you may encounter as a poll worker.
                        </p>
                        </a>
                    </div>
                    <div class="card">
                         <a href="/assets/documents/problem-solving.pdf"
                                                                         target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/resources/problem_solving.png"></img>
                        <h2>
                            Problem Solving at the Polls
                        </h2>
                        <p>
                            Learn how to ensure that all voters have a smooth, positive voting experience at your polling place
                        </p>
                        </a>
                    </div>
                    </div>

                  <div class="column">
                    <div class="card">
                     <a href="/assets/documents/election-day-checklist.pdf"
                                                                         target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/resources/group.png"></img>
                        <h2>
                            A Day in the Life of a Poll Worker
                        </h2>
                        <p>
                            Learn what to expect on an average day as a poll worker. 
                        </p>
                        </a>
                    </div>
                    <div class="card">
                         <a href="/assets/documents/election-day-checklist.pdf"
                                                                         target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/resources/team.png"></img>
                        <h2>
                            Accessibility at the Polls
                        </h2>
                        <p>
                            Learn how to make voting accessible for everyone.
                        </p>
                        </a>
                    </div>
                    <div class="card">
                         <a href="https://www.fairelectionscenter.org/statevotingguides"
                                                                         target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/resources/states.png"></img>
                        <h2>
                            State by State Voting Guide 
                        </h2>
                        <p>
                            Get a guide on how to vote in your state via the Fair Elections Center.  
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
                         <a href="/assets/documents/election-day-checklist.pdf"
                                                                         target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/resources/tables.png"></img>
                        <h2>
                            Checking Our Biases at the Polls
                        </h2>
                        <p>
                            Learn how to identify and check your biases so you can best serve all voters. 
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

            </Host>
        );
    }

}