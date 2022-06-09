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
                {/*TODO: ES translations*/}
                {/*<p>*/}
                {/*    <stencil-route-link url="/faq">English</stencil-route-link>*/}
                {/*    {" / "}*/}
                {/*    <stencil-route-link url="/faq-es">Español</stencil-route-link>*/}
                {/*</p>*/}
                <p>
                    There are over 4,000 local election jurisdictions in the country - and becoming a poll worker is a
                    little different in each place. We’ve compiled a list of FAQs to help you understand the process
                    better, but if you have questions specific to your local area, contact your local election office.
                    You can find the contact information for your local elections office by <stencil-route-link
                    url="/search"> entering your zip code here. </stencil-route-link>
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
