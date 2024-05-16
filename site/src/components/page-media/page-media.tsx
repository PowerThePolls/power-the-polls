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
               <a href="/press-release-2024-05-16" rel="noopener noreferrer">
                  <h3>
                     Power the Polls, National Leader in Poll Worker
                     Recruitment, Names Kerry Washington and Former Rep. Adam
                     Kinzinger as Co-Chairs of New Advisory Council{" "}
                  </h3>{" "}
                  May 16, 2024.
               </a>
            </div>
            <div class="card">
               <a href="/press-release-2024-01-30" rel="noopener noreferrer">
                  <h3>
                     Power the Polls Announces New Bilingual Poll Worker
                     Recruitment Toolkit{" "}
                  </h3>{" "}
                  January 30, 2024.
               </a>
            </div>
            <div class="card">
               <a href="/press-release-2023-05-03" rel="noopener noreferrer">
                  <h3>
                     Power the Polls Recognized in Politics & Policy Category of
                     Fast Company’s 2023 World Changing Ideas Awards.{" "}
                  </h3>{" "}
                  May 3, 2023.
               </a>
            </div>
            <div class="card">
               <a href="/press-release-2023-03-28" rel="noopener noreferrer">
                  <h3>
                     New Survey Finds People Excited to Serve as Poll Workers in
                     Future Elections{" "}
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
                  href="https://thefulcrum.us/civic-engagement-education/poll-workers"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <h3>
                     America needs poll workers, now more than ever. The
                     Fulcrum.{" "}
                  </h3>{" "}
                  Marta Hanson. May 6, 2024.
               </a>
            </div>
            <div class="card">
               <a
                  href="https://19thnews.org/2024/04/election-workers-safety-support-threats-2024/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <h3>
                     Election workers are committed to 2024 — despite threats,
                     harassment and turnover. The 19th.{" "}
                  </h3>{" "}
                  Barbara Rodriguez. April 17, 2024.
               </a>
            </div>
            <div class="card">
               <a
                  href="https://plus.thebulwark.com/p/group-looking-for-volunteer-poll-workers"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <h3>
                     Meet the Group Trying to Get More People to Volunteer as
                     Poll Workers. The Bulwark.{" "}
                  </h3>{" "}
                  Jim Swift. June 13, 2023.
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
