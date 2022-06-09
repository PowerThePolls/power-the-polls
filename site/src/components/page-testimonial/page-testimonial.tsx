import {Component, h, Host} from "@stencil/core";

@Component({
    tag: "page-testimonial",
    shadow: false,
})
export class PageTestimonial {
    public render() {
        return (
            <Host>
                <script async defer src="https://widgets.boast.io/current/components.js"/>
                <div data-boast-component="boast-form" data-form-id="371196b2-e960-4268-ba82-d19a0d591325"/>
            </Host>);
    }
}
