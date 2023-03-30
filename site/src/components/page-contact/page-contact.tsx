import {Component, h, Host, Prop} from "@stencil/core";

@Component({
    tag: "page-contact",
    styleUrl: "page-contact.scss",
    shadow: false,
})
export class PageContact {
    /**
     * The page's title
     */
    @Prop() public pageTitle?: string;

    public render() {

        return (
            <Host>
                <h1>{this.pageTitle || ""}</h1>
                <h2> Questions </h2>
                <p>
                    Frequently asked questions can be found <a
                    href="https://www.powerthepolls.org/faq">here</a>, and resources can be found <a
                    href="https://www.powerthepolls.org/resources">here</a>.

                    For general inquiries, please contact <a
                    href="mailto:info@powerthepolls.org">info@powerthepolls.org</a>
                </p>
                <h2> Press </h2>
                <p>
                    For press inquiries, please contact <a
                    href="mailto:press@powerthepolls.org">press@powerthepolls.org</a>.
                </p>
                <h2> Partnership </h2>
                <p>
                    To inquire about partnering with us, please contact <a
                    href="mailto:partners@powerthepolls.org">partners@powerthepolls.org</a>
                </p>
            </Host>
        );
    }
}
