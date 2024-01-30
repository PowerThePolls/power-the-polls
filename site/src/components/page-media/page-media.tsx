import { Component, h, Host } from "@stencil/core";

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
                <div class="title-container">
                    <h2>Press Releases</h2>
                </div>
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
                <div class="button-container">
                    <a href="/press-releases">
                        <button>SEE MORE PRESS RELEASES →</button>
                    </a>
                </div>

                <div class="title-container">
                    <h2> In the News </h2>
                </div>
                <div class="card">
                    <a
                        href="https://www.women.com/1336248/get-involved-local-politics-more-women-power/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>
                            How To Get Involved In Local Politics - Because More
                            Women In Power Starts At Home. Women.com.
                        </h3>{" "}
                        Amanda Ray Byerly. July 14, 2023.
                    </a>
                </div>
                <div class="card">
                    <a
                        href="https://plus.thebulwark.com/p/group-looking-for-volunteer-poll-workers"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>
                            Meet the Group Trying to Get More People to
                            Volunteer as Poll Workers. The Bulwark.{" "}
                        </h3>{" "}
                        Jim Swift. June 13, 2023.
                    </a>
                </div>
                <div class="card">
                    <a
                        href="https://electionline.org/electionline-weekly/2023/05-11/#tab-4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>
                            Power the Polls named honorable mention in Fast
                            Company’s 2023 World Changing Ideas Awards.
                            electionline Weekly. The Election Center.{" "}
                        </h3>{" "}
                        May 11, 2023.
                    </a>
                </div>
                <div class="button-container">
                    <a href="/media">
                        <button>SEE MORE MEDIA →</button>
                    </a>
                </div>
            </Host>
        );
    }
}
