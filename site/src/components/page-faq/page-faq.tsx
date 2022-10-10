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
                    Power the Polls is a first-of-its-kind, nonpartisan initiative for recruiting poll workers to ensure
                    a safe and fair election for all. Power the Polls was launched in June 2020 by a coalition of
                    businesses and nonprofits, including Civic Alliance, Civic Responsibility Project, Comedy Central,
                    Fair Elections Center, Pizza to the Polls, MTV Entertainment Group, and Center for Secure & Modern
                    Elections. Power the Polls relies on objective data about poll worker requirements and applications
                    collected from over 5,000 jurisdictions assembled by the non-partisan Fair Elections Center.
                </p>
                <p>
                    There are over 5,000 local election jurisdictions in the country - and becoming a poll worker is a
                    little different in each place. We’ve compiled a list of FAQs to help you understand the process
                    better. If you have questions specific to your local area, contact your local election office.
                </p>
                {data.map(({sectionTitle, questions}) => (
                    <question-section
                        key={sectionTitle}
                        sectionTitle={sectionTitle}
                        questions={questions}
                    />
                ))}
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
