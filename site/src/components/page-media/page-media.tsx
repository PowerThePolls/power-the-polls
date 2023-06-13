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
                <div class="title-container"><h2>Press Releases</h2></div>
                    <div class="card">
                    <a href="/press-release-2023-05-03" rel="noopener noreferrer">
                        <h3>
                            Power the Polls Recognized in Politics & Policy Category of Fast Company’s 2023 World Changing Ideas Awards. </h3> May 3, 2023.
                        </a>
                    </div>
                    <div class="card">
                    <a href="/press-release-2023-03-28" rel="noopener noreferrer">
                        <h3>
                            New Survey Finds People Excited to Serve as Poll Workers in Future Elections </h3> May 28, 2023.
                        </a>
                    </div>
                    <div class="card">
                    <a href="/press-release-2022-11-03" rel="noopener noreferrer">
                        <h3>
                            Power the Polls Announces Recruitment of 265,000 Potential Poll Workers Ahead of 2022 Election </h3> November 3, 2022.
                        </a>
                    </div>
                <div class="button-container"><a href="/press-releases"><button>SEE MORE PRESS RELEASES →</button></a></div>

                <div class="title-container"><h2> In the News </h2></div>
                <div class="card">
                         <a href="https://www.politico.com/newsletters/playbook/2022/11/03/bidens-important-puzzling-democracy-speech-00064817"
                                                                         target="_blank" rel="noopener noreferrer">
                        <h3>
                            First in Playbook: Power the Polls. POLITICO Playbook. </h3> Garrett Ross. November 3, 2022.
                        </a>
                    </div>
                 <div class="card">
                         <a href="https://www.buzzfeednews.com/article/annabetts/poll-workers-2022-midterm-elections-threats"
                                                                         target="_blank" rel="noopener noreferrer">
                        <h3>
                            Poll Workers Told Us Why They Have Decided To Work The Elections This Year Despite An Increase In Threats Against Them. Buzzfeed News. </h3> Anna Betts. October 24, 2022.
                        </a>
                    </div>
                 <div class="card">
                         <a href="https://www.elle.com/culture/career-politics/a41499054/poll-workers-women-voters-midterms/"
                                                                         target="_blank" rel="noopener noreferrer">
                        <h3>
                            The Women Are Coming—to Vote. ELLE. </h3> Opinion by Ashley Spillane. October 4, 2022.
                        </a>
                    </div>
                <div class="button-container"><a href="/media"><button>SEE MORE MEDIA →</button></a></div>
            </Host>
        );
    }

}
