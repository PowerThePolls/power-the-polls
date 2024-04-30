import { Component, h, Host, Prop } from "@stencil/core";
@Component({
    tag: "page-advisory",
    styleUrl: "page-advisory.scss",
    shadow: false,
})
export class PageAdvisory {
   /**
     * The page's title
     */
    @Prop() public pageTitle?: string;

    public render() {
        return (
            <Host>
                <h1>{this.pageTitle || ""}</h1>
                <p class="council-description">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h2> Members </h2>
                <div>
                    <a>
                        <img>
                    </a>
                </div>
            </Host>
        );
    }
}
