import {Component, h, Host} from "@stencil/core";

@Component({
    tag: "page-media",
    styleUrl: "page-media.scss",
    shadow: false,
})
export class PageMedia {
    public render() {
        return (
            <Host>
                <h1>Press & Media</h1>
                <h2>Press Releases</h2>
                    <div class="card">
                    <a href="/assets/documents/25-questions-to-ask.pdf" rel="noopener noreferrer">
                        <h3>
                            Press Release 1
                        </h3>
                        </a>
                    </div>
                <h2> In the News </h2>
                <div class="card">
                         <a href="https://www.politico.com/newsletters/playbook/2022/11/03/bidens-important-puzzling-democracy-speech-00064817"
                                                                         target="_blank" rel="noopener noreferrer">
                        <h2>
                            POLITICO Playbook: Biden's important, puzzling democracy speech. POLITICO Playbook. Garrett Ross. November 3, 2022.
                        </h2>
                        </a>
                    </div>

            </Host>
        );
    }

}
