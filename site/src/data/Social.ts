import { SocialInfo } from "./types";

/**
 * Social share links for the left nav
 * see: ui-social-share.tsx
 * see: app-root.tsx
 */
const data: SocialInfo[] = [
   {
      name: "Twitter",
      cta: "Tweet",
      image: "icon-tw.svg",
      url:
         "https://twitter.com/intent/tweet?text=" +
         encodeURIComponent(`
🗳️ Join me and make sure our election runs smoothly!
🚨 Prevent voting location closures and long lines at the polls.
▶️ https://www.powerthepolls.org
#PowerThePolls
`).trim(),
      eventKey: "twitter-share",
   },
   {
      name: "Instagram",
      cta: "Instagram",
      image: "icon-ig.svg",
      url: "https://www.instagram.com/powerthepolls/",
      eventKey: "instagram-share",
   },
   {
      name: "Facebook",
      cta: "Share",
      image: "icon-fb.svg",
      url:
         "https://www.facebook.com/share.php?u=" +
         encodeURIComponent("https://www.powerthepolls.org/"),
      eventKey: "facebook-share",
   },
];
export default data;
