import {Component, h, Host, Prop, State} from "@stencil/core";

@Component({
    tag: "page-faq",
    styleUrl: "page-faq.scss",
    shadow: false,
})
export class PageFaq {

    /**
     * A list of entries to display in the FAQ
     * see: FaqData.ts
     * see: app-root.tsx
     */
    @Prop() public data?: { sectionTitle: string, questions: { question: string, answer: () => string }[] }[];

    /**
     * The page's title
     */
    @Prop() public pageTitle?: string;

    @State() private isModalOpen: boolean = false;

    public render() {
        const data = this.data || [];
        const {isModalOpen} = this;

        return (
            <Host>
                <h1>{this.pageTitle || ""}</h1>
                <p>
                    There are over 5,000 local election jurisdictions in the country - and becoming a poll worker is a
                    little different in each place. We’ve compiled a list of FAQs to help you understand the process
                    better. If you have questions specific to your local area, contact your local election office.
                </p>
                    <hr />        
                    <div class="column">
                    <div class="card">
                        <a href="/faq-eligibility"
                           target="_self" rel="noopener noreferrer">
                        <img src="/assets/images/resources/credentials.png"></img>
                       <h2>
                            ELIGIBILITY
                        </h2>
                             <p>
                               Figure out if you're eligible to be a poll worker.
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
                            Get information you need as you work.
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
                <h3>Still can’t find the answer to your question?</h3>
                <button class="cta" onClick={() => this.isModalOpen = true}>contact us</button>
                <contact-modal
                    isOpen={isModalOpen}
                    onClose={() => this.isModalOpen = false}
                />

                <p>
                    For press inquiries, please contact <a
                    href="mailto:press@powerthepolls.org">press@powerthepolls.org</a>.
                </p>
                <p>
                    To inquire about partnering with us, please contact <a
                    href="mailto:partners@powerthepolls.org">partners@powerthepolls.org</a>
                </p>
            </Host>
        );
    }
}
