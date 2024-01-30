import { Component, h, Host } from "@stencil/core";

@Component({
    tag: "page-all-press-releases",
    styleUrl: "page-all-press-releases.scss",
    shadow: false,
})
export class PageAllPressReleases {
    public render() {
        return (
            <Host>
                <h2>Selected Press Releases</h2>
                <div class="card">
                    <a
                        href="/press-release-2024-01-30"
                        rel="noopener noreferrer"
                    >
                        <h3>
                            Power the Polls Announces New Bilingual Poll Worker
                            Recruitment Toolkit{" "}
                        </h3>{" "}
                        January 30, 2024.
                    </a>
                </div>
                <div class="card">
                    <a
                        href="/press-release-2023-05-03"
                        rel="noopener noreferrer"
                    >
                        <h3>
                            Power the Polls Recognized in Politics & Policy
                            Category of Fast Company’s 2023 World Changing Ideas
                            Awards.{" "}
                        </h3>{" "}
                        May 3, 2023.
                    </a>
                </div>
                <div class="card">
                    <a
                        href="/press-release-2023-03-28"
                        rel="noopener noreferrer"
                    >
                        <h3>
                            New Survey Finds People Excited to Serve as Poll
                            Workers in Future Elections{" "}
                        </h3>{" "}
                        March 28, 2023.
                    </a>
                </div>
                <div class="card">
                    <a
                        href="/press-release-2022-11-03"
                        rel="noopener noreferrer"
                    >
                        <h3>
                            Power the Polls Announces Recruitment of 265,000
                            Potential Poll Workers Ahead of 2022 Election{" "}
                        </h3>{" "}
                        November 3, 2022.
                    </a>
                </div>
                <div class="card">
                    <a
                        href="/press-release-2022-09-19"
                        rel="noopener noreferrer"
                    >
                        <h3>
                            125,000 New Potential Poll Workers Recruited by
                            Power the Polls Ahead of 2022 Election.{" "}
                        </h3>{" "}
                        September 19, 2022.
                    </a>
                </div>
                <div class="card">
                    <a
                        href="/press-release-2022-03-20"
                        rel="noopener noreferrer"
                    >
                        <h3>
                            Power the Polls Returns to Recruit New Wave of Poll
                            Workers Ahead of Primary and Midterm Elections.{" "}
                        </h3>{" "}
                        May 20, 2022.
                    </a>
                </div>
                <div class="card">
                    <a
                        href="/press-release-2020-09-25"
                        rel="noopener noreferrer"
                    >
                        <h3>
                            Power the Polls Signs Up More Than 500,000 People
                            Who Want To Serve as Poll Workers.{" "}
                        </h3>{" "}
                        September 25, 2020.
                    </a>
                </div>
                <div class="card">
                    <a
                        href="/press-release-2020-06-30"
                        rel="noopener noreferrer"
                    >
                        <h3>
                            Power The Polls Launches First-of-its-Kind Effort to
                            Recruit New Wave of Poll Workers for Election Day.{" "}
                        </h3>{" "}
                        June 30, 2020.
                    </a>
                </div>
                <div class="button-container">
                    <a href="/media">
                        <button>SEE MEDIA</button>
                    </a>
                </div>
            </Host>
        );
    }
}
