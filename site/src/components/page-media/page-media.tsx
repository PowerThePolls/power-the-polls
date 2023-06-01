import {Component, h, Host} from "@stencil/core";

@Component({
    tag: "page-media",
    shadow: false,
})
export class PageMedia {

    public render() {
        return (
            <Host>
                <h1>IMPACT</h1>
                <p>
                    Top languages include:
                </p>
                <ul>
                    <li>Spanish (37%)</li>
                    <li>French (3%)</li>
                    <li>Arabic (1.1%)</li>
                    <li>Haitian-Creole (1.1%)</li>
                    <li>ASL (1.0%)</li>
                    <li>Other languages (8.9%)</li>
                </ul>
            </Host>
        );
    }

}
