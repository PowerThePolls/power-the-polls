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
                <p>
                    Now that you've <a href="/assets/documents/election-day-checklist.pdf"
                                                                         target="_blank" rel="noopener noreferrer">
                                signed up
                            </a> with Power the Polls, here are some resources to help you get ready to serve.
                </p>
                <div class="row">
                  <div class="column">

                    <div class="card">
                       <h2>
                            Becoming a Poll Worker
                        </h2>
                             <p>
                               You’ve signed up with Power the Polls—now what?
                            </p> 
                            
                    </div>

                    </div>

                  <div class="column">
                    <div class="card">
                        <h2>
                            Day in the Life of a Poll Worker
                        </h2>
                        <p>
                            Learn what to expect on an average day as a poll worker. 
                        </p>
                    </div>

                  </div>

                  <div class="column">
                    <div class="card">
                        <h2>
                            Poll Worker Election Day Checklist
                        </h2>
                        <p>
                            Save this checklist to make sure you’re ready to power the polls!
                        </p>
                    </div>
                  </div>

                </div>
            <div class="row">
                  <div class="column">
                    <div class="card">
                        <h2>
                            Common Voter Issues At the Polls
                        </h2>
                        <p>
                            Learn how to handle voting issues you may encounter as a poll worker.
                        </p>
                    </div>
                  </div>

                  <div class="column">
                    <div class="card">
                        <h2>
                            Accessibility at the Polls
                        </h2>
                        <p>
                            Learn how to make voting accessible for everyone.
                        </p>
                    </div>
                  </div>

                  <div class="column">
                    <div class="card">
                        <h2>
                            Checking Our Biases at the Polls
                        </h2>
                        <p>
                            Learn how to identify and check your biases so you can best serve all voters. 
                        </p>
                    </div>
                  </div>
                </div>

                <br />
                <br />
                <p>
                    These supplemental resources do not take the place of the official poll worker training
                    and resources that your elections office provides. If you have specific questions related to your
                    service as a poll worker or the rules and resources in your jurisdiction,{" "}
                    <stencil-route-link url="/search">reach out to your local election
                        administrator.
                    </stencil-route-link>
                </p>

            </Host>
        );
    }

}