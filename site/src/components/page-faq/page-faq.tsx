import {Component, h, Host, Prop} from "@stencil/core";

@Component({
    tag: "page-faq",
    styleUrl: "page-faq.scss",
    shadow: false,
})
export class PageFaq {
    /**
     * The page's title
     */
    @Prop() public pageTitle?: string;

    public render() {

        return (
            <Host>
                <h1>{this.pageTitle || ""}</h1>
                <p>
                    There are over 5,000 local election jurisdictions in the country - and becoming a poll worker is a
                    little different in each place. We’ve compiled a list of FAQs to help you understand the process
                    better. If you have questions specific to your local area,
                    <a href= "https://www.powerthepolls.org/search" target="_self">
                    contact your local election office.</a>
                </p>
                    <hr/>
                    <div class="column">
                    <div class="card">
                        <a href="/faq-eligibility"
                           target="_self" rel="noopener noreferrer">
                        <img src="/assets/images/resources/credentials.png"></img>
                       <h2>
                            ELIGIBILITY
                        </h2>
                             <p>
                               Find out if you're eligible to be a poll worker.
                            </p>
                        </a>
                    </div>
                    </div>
                    <div class="column">
                    <div class="card">
                    <a href="/faq-application-status"
                                                                         target="_self" rel="noopener noreferrer">
                        <img src="/assets/images/resources/application.png"></img>
                        <h2>
                            APPLICATION & PLACEMENT STATUS
                        </h2>
                        <p>
                            Learn about your application status.
                        </p>
                        </a>
                    </div>
                    </div>
                    <div class="column">
                    <div class="card">
                         <a href="/faq-poll-worker"
                                                                         target="_self" rel="noopener noreferrer">
                        <img src="/assets/images/resources/problem_solving.png"></img>
                        <h2>
                            POLL WORKER FAQ
                        </h2>
                        <p>
                            Learn about responsibilities, training, compensation, and safety.
                        </p>
                        </a>
                    </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <hr />
            </Host>
        );
    }
}
