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
