namespace analytics {
   declare const gtag: (type: string, key: string, data: any) => void;
   declare const fbq: (type: string, key: string) => void;

   const google = (type: string, key: string, data: any): void => {
      try {
         if ("gtag" in window) {
            gtag(type, key, data);
         }
      } catch (e) {
         // console.log( e );
      }
   };
   const facebook = (type: string, key: string): void => {
      try {
         if ("fbq" in window) {
            fbq(type, key);
         }
      } catch (e) {
         // console.log( e );
      }
   };

   export const signup = (partnerId?: string) => {
      google("event", "signup", {
         event_category: "signup",
         event_label: partnerId || "Homepage",
      });
      facebook("track", "CompleteRegistration");
   };

   export const signupLinkClicked = (path: string) => {
      google("event", "signup_link", {
         event_category: "signup_link_clicked",
         event_label: "redirect",
         value: path,
      });
      facebook("track", "SignUpLinkClicked");
   };

   export const signupLinkClickedFallback = (
      fallbackType: string,
      stateName: string
   ) => {
      google("event", "signup_link", {
         event_category: "signup_link_clicked",
         event_label: fallbackType,
         value: stateName,
      });
      facebook("track", "SignUpLinkClicked");
   };

   export const socialShare = (key: string | undefined) => {
      google("event", key || "", {
         event_category: "social_share",
         event_label: "",
      });
   };
}
export default analytics;
