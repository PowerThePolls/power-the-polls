export interface Partner {
   /**
    * The key to use for thie source in ActionKit and for a vanity URL `https://powerthepolls.org/{partnerId}`
    * for the partner which will include their partnerID when the form is submitted
    */
   readonly partnerId: string;

   /**
    * Optional additional vanity URLs that will resolve to this partner.
    * Note that `partnerId` will itself always be a valid URL (`https://powerthepolls.org/{partnerId}`),
    * so this is only needed if there are alternative URLs desired.
    */
   readonly additionalVanityUrls?: string[];

   /**
    * The full name of this partner.
    */
   readonly name: string;

   /**
    * A logo for partners that should be displayed on the `/partners` page (page-partners.tsx). Images are sourced
    * from `/site/public/assets/images/partners/*`). If no logo is provided, the partner will no appear on the
    * Partners page.
    */
   readonly logo?: string;

   /**
    * malachi: it seems tthis is really just turning into a `showPartnerNameInPrivacyDisclaimer` value and that's all
    */
   readonly optUserOutOfChase?: boolean;

   /**
    * If `true` this partner is a Founding Partner
    */
   readonly isFoundingPartner?: boolean;

   /**
    * The label for an additional field to be displayed on the signup form. If not provided, no additional field
    * will be displayed.
    */
   readonly customSignupFormField?: string;

   /**
    * Whether to include the partner `logo` on the landing page of the partner's vanity URL (either
    * `https://powerthepolls.org/{partnerId}` or `https://powerthepolls.org/{vanityUrls}`).
    */
   readonly logoAppearsOnLandingPage?: boolean;

   /**
    * If true, the `logo`, when displayed, will receive a white background. If the logo is already on a white background
    * then set this to `true` so that the corners will be rounded.
    */
   readonly logoIsDark?: boolean;

   /**
    * Optional case (typically for certain more partisan partners) that we want to exclude from the public Partner List page
    * despite them having a `logo` assigned.
    */
   readonly excludeFromPartnerList?: boolean;

   /**
    * Optional meta pixel code.
    */
   readonly pixelCode?: string;
}

export type PartnerList = Partner[];

export interface SocialInfo {
   readonly name: string;
   readonly cta: string;
   readonly image: string;
   readonly url: string;
   readonly eventKey: string;
}


export interface VideoGroup {
   category?: string;
   videos: VideoInfo[];
}

export interface VideoInfo {
   name: string;
   url: string | null;
   /**
    * Seconds into video to start, this will also be the frame that is used as the thumbnail
    */
   startFrom?: number;
   /**
    * If `undefined`, should be treated as video/mp4
    */
   mimeType?: string;
   /**
    * Link to related information about the video
    */
   additionalInfoLink?: {text: string, link: string };
}
