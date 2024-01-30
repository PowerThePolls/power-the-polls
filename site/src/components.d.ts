/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory } from "@stencil/router";
import { Partner } from "./data/types";
export namespace Components {
    interface AppRoot {
    }
    interface ComponentList {
    }
    interface PageAbout {
    }
    interface PageAllMedia {
    }
    interface PageAllPressReleases {
    }
    interface PageContact {
        /**
          * The page's title
         */
        "pageTitle"?: string;
    }
    interface PageElectionOfficials {
    }
    interface PageFaq {
        /**
          * The page's title
         */
        "pageTitle"?: string;
    }
    interface PageFaqApplicationStatus {
        /**
          * A list of entries to display in the FAQ see: FaqData.ts see: app-root.tsx
         */
        "data"?: {
      sectionTitle: string;
      questions: { question: string; answer: () => string }[];
   }[];
    }
    interface PageFaqEligibility {
        /**
          * A list of entries to display in the FAQ see: FaqData.ts see: app-root.tsx
         */
        "data"?: {
      sectionTitle: string;
      questions: { question: string; answer: () => string }[];
   }[];
    }
    interface PageFaqEs {
        /**
          * A list of entries to display in the FAQ see: FaqData.ts see: app-root.tsx
         */
        "data"?: { question: string; answer: string }[];
        /**
          * The page's title
         */
        "pageTitle"?: string;
    }
    interface PageFaqPollWorker {
        /**
          * A list of entries to display in the FAQ see: FaqData.ts see: app-root.tsx
         */
        "data"?: {
      sectionTitle: string;
      questions: { question: string; answer: () => string }[];
   }[];
    }
    interface PageForm {
        /**
          * Optional partnerId/source parameter to use when submitting the form. If the partnerId exists in `/data/PartnerList.ts` then additional partner data will be looked up.
         */
        "partnerId"?: string;
    }
    interface PageImpact {
    }
    interface PageInfo {
    }
    interface PageJurisdiction {
        "match"?: MatchResults;
    }
    interface PageMedia {
    }
    interface PagePartners {
        /**
          * List of all the partner logos to display
         */
        "partners"?: Partner[];
    }
    interface PagePartnersTable {
    }
    interface PagePressRelease20230328 {
    }
    interface PagePressRelease20240130 {
    }
    interface PagePressRelease20240130Es {
    }
    interface PagePressReleaseFive {
    }
    interface PagePressReleaseFour {
    }
    interface PagePressReleaseOne {
    }
    interface PagePressReleaseSix {
    }
    interface PagePressReleaseThree {
    }
    interface PagePressReleaseTwo {
    }
    interface PagePrivacy {
    }
    interface PageResources {
    }
    interface PageSearch {
        "history": RouterHistory;
    }
    interface PageTestimonial {
    }
    interface UiH3Bar {
    }
    interface UiImpactBox {
    }
    interface UiMenuButton {
        "isActive"?: boolean;
        /**
          * aria-label
         */
        "label"?: string;
    }
    interface UiPartnerImage {
        /**
          * If this value matches the `partner` ID then the image will have the `chosen-partner` class added which currently pulses the image.
         */
        "chosenPartnerId"?: string;
        /**
          * By default, an empty <span> with an id set to the partnerId is added to this component. If you don't want to pollute the ID space, you can exclude that span by setting this to `true`
         */
        "excludeAnchor": boolean;
        /**
          * A `Partner` object or partnerID string
         */
        "partner": Partner | string;
        /**
          * If `true` the image will not be loaded from the deployed assets but from the `partner-updates` branch on GitHub
          * @see page-partners-table
         */
        "sourceFromDevBranch": boolean;
    }
    interface UiSocialShare {
        /**
          * The displayed call-to-action text
         */
        "cta"?: string;
        /**
          * Key to send for analytics when user selects this social share
         */
        "eventKey"?: string;
        /**
          * Image to use from `assets/images/social/*`
         */
        "image"?: string;
        /**
          * If `true`, the share icons will be light in color
         */
        "invertColors"?: boolean;
        /**
          * The full name of the social network. Used as the link title text.
         */
        "name"?: string;
        /**
          * href for anchor (will open in a new window)
         */
        "url"?: string;
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLComponentListElement extends Components.ComponentList, HTMLStencilElement {
    }
    var HTMLComponentListElement: {
        prototype: HTMLComponentListElement;
        new (): HTMLComponentListElement;
    };
    interface HTMLPageAboutElement extends Components.PageAbout, HTMLStencilElement {
    }
    var HTMLPageAboutElement: {
        prototype: HTMLPageAboutElement;
        new (): HTMLPageAboutElement;
    };
    interface HTMLPageAllMediaElement extends Components.PageAllMedia, HTMLStencilElement {
    }
    var HTMLPageAllMediaElement: {
        prototype: HTMLPageAllMediaElement;
        new (): HTMLPageAllMediaElement;
    };
    interface HTMLPageAllPressReleasesElement extends Components.PageAllPressReleases, HTMLStencilElement {
    }
    var HTMLPageAllPressReleasesElement: {
        prototype: HTMLPageAllPressReleasesElement;
        new (): HTMLPageAllPressReleasesElement;
    };
    interface HTMLPageContactElement extends Components.PageContact, HTMLStencilElement {
    }
    var HTMLPageContactElement: {
        prototype: HTMLPageContactElement;
        new (): HTMLPageContactElement;
    };
    interface HTMLPageElectionOfficialsElement extends Components.PageElectionOfficials, HTMLStencilElement {
    }
    var HTMLPageElectionOfficialsElement: {
        prototype: HTMLPageElectionOfficialsElement;
        new (): HTMLPageElectionOfficialsElement;
    };
    interface HTMLPageFaqElement extends Components.PageFaq, HTMLStencilElement {
    }
    var HTMLPageFaqElement: {
        prototype: HTMLPageFaqElement;
        new (): HTMLPageFaqElement;
    };
    interface HTMLPageFaqApplicationStatusElement extends Components.PageFaqApplicationStatus, HTMLStencilElement {
    }
    var HTMLPageFaqApplicationStatusElement: {
        prototype: HTMLPageFaqApplicationStatusElement;
        new (): HTMLPageFaqApplicationStatusElement;
    };
    interface HTMLPageFaqEligibilityElement extends Components.PageFaqEligibility, HTMLStencilElement {
    }
    var HTMLPageFaqEligibilityElement: {
        prototype: HTMLPageFaqEligibilityElement;
        new (): HTMLPageFaqEligibilityElement;
    };
    interface HTMLPageFaqEsElement extends Components.PageFaqEs, HTMLStencilElement {
    }
    var HTMLPageFaqEsElement: {
        prototype: HTMLPageFaqEsElement;
        new (): HTMLPageFaqEsElement;
    };
    interface HTMLPageFaqPollWorkerElement extends Components.PageFaqPollWorker, HTMLStencilElement {
    }
    var HTMLPageFaqPollWorkerElement: {
        prototype: HTMLPageFaqPollWorkerElement;
        new (): HTMLPageFaqPollWorkerElement;
    };
    interface HTMLPageFormElement extends Components.PageForm, HTMLStencilElement {
    }
    var HTMLPageFormElement: {
        prototype: HTMLPageFormElement;
        new (): HTMLPageFormElement;
    };
    interface HTMLPageImpactElement extends Components.PageImpact, HTMLStencilElement {
    }
    var HTMLPageImpactElement: {
        prototype: HTMLPageImpactElement;
        new (): HTMLPageImpactElement;
    };
    interface HTMLPageInfoElement extends Components.PageInfo, HTMLStencilElement {
    }
    var HTMLPageInfoElement: {
        prototype: HTMLPageInfoElement;
        new (): HTMLPageInfoElement;
    };
    interface HTMLPageJurisdictionElement extends Components.PageJurisdiction, HTMLStencilElement {
    }
    var HTMLPageJurisdictionElement: {
        prototype: HTMLPageJurisdictionElement;
        new (): HTMLPageJurisdictionElement;
    };
    interface HTMLPageMediaElement extends Components.PageMedia, HTMLStencilElement {
    }
    var HTMLPageMediaElement: {
        prototype: HTMLPageMediaElement;
        new (): HTMLPageMediaElement;
    };
    interface HTMLPagePartnersElement extends Components.PagePartners, HTMLStencilElement {
    }
    var HTMLPagePartnersElement: {
        prototype: HTMLPagePartnersElement;
        new (): HTMLPagePartnersElement;
    };
    interface HTMLPagePartnersTableElement extends Components.PagePartnersTable, HTMLStencilElement {
    }
    var HTMLPagePartnersTableElement: {
        prototype: HTMLPagePartnersTableElement;
        new (): HTMLPagePartnersTableElement;
    };
    interface HTMLPagePressRelease20230328Element extends Components.PagePressRelease20230328, HTMLStencilElement {
    }
    var HTMLPagePressRelease20230328Element: {
        prototype: HTMLPagePressRelease20230328Element;
        new (): HTMLPagePressRelease20230328Element;
    };
    interface HTMLPagePressRelease20240130Element extends Components.PagePressRelease20240130, HTMLStencilElement {
    }
    var HTMLPagePressRelease20240130Element: {
        prototype: HTMLPagePressRelease20240130Element;
        new (): HTMLPagePressRelease20240130Element;
    };
    interface HTMLPagePressRelease20240130EsElement extends Components.PagePressRelease20240130, HTMLStencilElement {
    }
    var HTMLPagePressRelease20240130EsElement: {
        prototype: HTMLPagePressRelease20240130EsElement;
        new (): HTMLPagePressRelease20240130EsElement;
    };
    interface HTMLPagePressReleaseFiveElement extends Components.PagePressReleaseFive, HTMLStencilElement {
    }
    var HTMLPagePressReleaseFiveElement: {
        prototype: HTMLPagePressReleaseFiveElement;
        new (): HTMLPagePressReleaseFiveElement;
    };
    interface HTMLPagePressReleaseFourElement extends Components.PagePressReleaseFour, HTMLStencilElement {
    }
    var HTMLPagePressReleaseFourElement: {
        prototype: HTMLPagePressReleaseFourElement;
        new (): HTMLPagePressReleaseFourElement;
    };
    interface HTMLPagePressReleaseOneElement extends Components.PagePressReleaseOne, HTMLStencilElement {
    }
    var HTMLPagePressReleaseOneElement: {
        prototype: HTMLPagePressReleaseOneElement;
        new (): HTMLPagePressReleaseOneElement;
    };
    interface HTMLPagePressReleaseSixElement extends Components.PagePressReleaseSix, HTMLStencilElement {
    }
    var HTMLPagePressReleaseSixElement: {
        prototype: HTMLPagePressReleaseSixElement;
        new (): HTMLPagePressReleaseSixElement;
    };
    interface HTMLPagePressReleaseThreeElement extends Components.PagePressReleaseThree, HTMLStencilElement {
    }
    var HTMLPagePressReleaseThreeElement: {
        prototype: HTMLPagePressReleaseThreeElement;
        new (): HTMLPagePressReleaseThreeElement;
    };
    interface HTMLPagePressReleaseTwoElement extends Components.PagePressReleaseTwo, HTMLStencilElement {
    }
    var HTMLPagePressReleaseTwoElement: {
        prototype: HTMLPagePressReleaseTwoElement;
        new (): HTMLPagePressReleaseTwoElement;
    };
    interface HTMLPagePrivacyElement extends Components.PagePrivacy, HTMLStencilElement {
    }
    var HTMLPagePrivacyElement: {
        prototype: HTMLPagePrivacyElement;
        new (): HTMLPagePrivacyElement;
    };
    interface HTMLPageResourcesElement extends Components.PageResources, HTMLStencilElement {
    }
    var HTMLPageResourcesElement: {
        prototype: HTMLPageResourcesElement;
        new (): HTMLPageResourcesElement;
    };
    interface HTMLPageSearchElement extends Components.PageSearch, HTMLStencilElement {
    }
    var HTMLPageSearchElement: {
        prototype: HTMLPageSearchElement;
        new (): HTMLPageSearchElement;
    };
    interface HTMLPageTestimonialElement extends Components.PageTestimonial, HTMLStencilElement {
    }
    var HTMLPageTestimonialElement: {
        prototype: HTMLPageTestimonialElement;
        new (): HTMLPageTestimonialElement;
    };
    interface HTMLUiH3BarElement extends Components.UiH3Bar, HTMLStencilElement {
    }
    var HTMLUiH3BarElement: {
        prototype: HTMLUiH3BarElement;
        new (): HTMLUiH3BarElement;
    };
    interface HTMLUiImpactBoxElement extends Components.UiImpactBox, HTMLStencilElement {
    }
    var HTMLUiImpactBoxElement: {
        prototype: HTMLUiImpactBoxElement;
        new (): HTMLUiImpactBoxElement;
    };
    interface HTMLUiMenuButtonElement extends Components.UiMenuButton, HTMLStencilElement {
    }
    var HTMLUiMenuButtonElement: {
        prototype: HTMLUiMenuButtonElement;
        new (): HTMLUiMenuButtonElement;
    };
    interface HTMLUiPartnerImageElement extends Components.UiPartnerImage, HTMLStencilElement {
    }
    var HTMLUiPartnerImageElement: {
        prototype: HTMLUiPartnerImageElement;
        new (): HTMLUiPartnerImageElement;
    };
    interface HTMLUiSocialShareElement extends Components.UiSocialShare, HTMLStencilElement {
    }
    var HTMLUiSocialShareElement: {
        prototype: HTMLUiSocialShareElement;
        new (): HTMLUiSocialShareElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "component-list": HTMLComponentListElement;
        "page-about": HTMLPageAboutElement;
        "page-all-media": HTMLPageAllMediaElement;
        "page-all-press-releases": HTMLPageAllPressReleasesElement;
        "page-contact": HTMLPageContactElement;
        "page-election-officials": HTMLPageElectionOfficialsElement;
        "page-faq": HTMLPageFaqElement;
        "page-faq-application-status": HTMLPageFaqApplicationStatusElement;
        "page-faq-eligibility": HTMLPageFaqEligibilityElement;
        "page-faq-es": HTMLPageFaqEsElement;
        "page-faq-poll-worker": HTMLPageFaqPollWorkerElement;
        "page-form": HTMLPageFormElement;
        "page-impact": HTMLPageImpactElement;
        "page-info": HTMLPageInfoElement;
        "page-jurisdiction": HTMLPageJurisdictionElement;
        "page-media": HTMLPageMediaElement;
        "page-partners": HTMLPagePartnersElement;
        "page-partners-table": HTMLPagePartnersTableElement;
        "page-press-release-2023-03-28": HTMLPagePressRelease20230328Element;
        "page-press-release-2024-01-30": HTMLPagePressRelease20240130Element;
        "page-press-release-2024-01-30-es": HTMLPagePressRelease20240130EsElement;
        "page-press-release-five": HTMLPagePressReleaseFiveElement;
        "page-press-release-four": HTMLPagePressReleaseFourElement;
        "page-press-release-one": HTMLPagePressReleaseOneElement;
        "page-press-release-six": HTMLPagePressReleaseSixElement;
        "page-press-release-three": HTMLPagePressReleaseThreeElement;
        "page-press-release-two": HTMLPagePressReleaseTwoElement;
        "page-privacy": HTMLPagePrivacyElement;
        "page-resources": HTMLPageResourcesElement;
        "page-search": HTMLPageSearchElement;
        "page-testimonial": HTMLPageTestimonialElement;
        "ui-h3-bar": HTMLUiH3BarElement;
        "ui-impact-box": HTMLUiImpactBoxElement;
        "ui-menu-button": HTMLUiMenuButtonElement;
        "ui-partner-image": HTMLUiPartnerImageElement;
        "ui-social-share": HTMLUiSocialShareElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface ComponentList {
    }
    interface PageAbout {
    }
    interface PageAllMedia {
    }
    interface PageAllPressReleases {
    }
    interface PageContact {
        /**
          * The page's title
         */
        "pageTitle"?: string;
    }
    interface PageElectionOfficials {
    }
    interface PageFaq {
        /**
          * The page's title
         */
        "pageTitle"?: string;
    }
    interface PageFaqApplicationStatus {
        /**
          * A list of entries to display in the FAQ see: FaqData.ts see: app-root.tsx
         */
        "data"?: {
      sectionTitle: string;
      questions: { question: string; answer: () => string }[];
   }[];
    }
    interface PageFaqEligibility {
        /**
          * A list of entries to display in the FAQ see: FaqData.ts see: app-root.tsx
         */
        "data"?: {
      sectionTitle: string;
      questions: { question: string; answer: () => string }[];
   }[];
    }
    interface PageFaqEs {
        /**
          * A list of entries to display in the FAQ see: FaqData.ts see: app-root.tsx
         */
        "data"?: { question: string; answer: string }[];
        /**
          * The page's title
         */
        "pageTitle"?: string;
    }
    interface PageFaqPollWorker {
        /**
          * A list of entries to display in the FAQ see: FaqData.ts see: app-root.tsx
         */
        "data"?: {
      sectionTitle: string;
      questions: { question: string; answer: () => string }[];
   }[];
    }
    interface PageForm {
        /**
          * Optional partnerId/source parameter to use when submitting the form. If the partnerId exists in `/data/PartnerList.ts` then additional partner data will be looked up.
         */
        "partnerId"?: string;
    }
    interface PageImpact {
    }
    interface PageInfo {
    }
    interface PageJurisdiction {
        "match"?: MatchResults;
    }
    interface PageMedia {
    }
    interface PagePartners {
        /**
          * List of all the partner logos to display
         */
        "partners"?: Partner[];
    }
    interface PagePartnersTable {
    }
    interface PagePressRelease20230328 {
    }
    interface PagePressRelease20240130 {
    }
    interface PagePressRelease20240130Es {
    }
    interface PagePressReleaseFive {
    }
    interface PagePressReleaseFour {
    }
    interface PagePressReleaseOne {
    }
    interface PagePressReleaseSix {
    }
    interface PagePressReleaseThree {
    }
    interface PagePressReleaseTwo {
    }
    interface PagePrivacy {
    }
    interface PageResources {
    }
    interface PageSearch {
        "history": RouterHistory;
    }
    interface PageTestimonial {
    }
    interface UiH3Bar {
    }
    interface UiImpactBox {
    }
    interface UiMenuButton {
        "isActive"?: boolean;
        /**
          * aria-label
         */
        "label"?: string;
        "onToggle"?: (event: CustomEvent<UiMenuButton>) => void;
    }
    interface UiPartnerImage {
        /**
          * If this value matches the `partner` ID then the image will have the `chosen-partner` class added which currently pulses the image.
         */
        "chosenPartnerId"?: string;
        /**
          * By default, an empty <span> with an id set to the partnerId is added to this component. If you don't want to pollute the ID space, you can exclude that span by setting this to `true`
         */
        "excludeAnchor"?: boolean;
        /**
          * A `Partner` object or partnerID string
         */
        "partner"?: Partner | string;
        /**
          * If `true` the image will not be loaded from the deployed assets but from the `partner-updates` branch on GitHub
          * @see page-partners-table
         */
        "sourceFromDevBranch"?: boolean;
    }
    interface UiSocialShare {
        /**
          * The displayed call-to-action text
         */
        "cta"?: string;
        /**
          * Key to send for analytics when user selects this social share
         */
        "eventKey"?: string;
        /**
          * Image to use from `assets/images/social/*`
         */
        "image"?: string;
        /**
          * If `true`, the share icons will be light in color
         */
        "invertColors"?: boolean;
        /**
          * The full name of the social network. Used as the link title text.
         */
        "name"?: string;
        /**
          * href for anchor (will open in a new window)
         */
        "url"?: string;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "component-list": ComponentList;
        "page-about": PageAbout;
        "page-all-media": PageAllMedia;
        "page-all-press-releases": PageAllPressReleases;
        "page-contact": PageContact;
        "page-election-officials": PageElectionOfficials;
        "page-faq": PageFaq;
        "page-faq-application-status": PageFaqApplicationStatus;
        "page-faq-eligibility": PageFaqEligibility;
        "page-faq-es": PageFaqEs;
        "page-faq-poll-worker": PageFaqPollWorker;
        "page-form": PageForm;
        "page-impact": PageImpact;
        "page-info": PageInfo;
        "page-jurisdiction": PageJurisdiction;
        "page-media": PageMedia;
        "page-partners": PagePartners;
        "page-partners-table": PagePartnersTable;
        "page-press-release-2023-03-28": PagePressRelease20230328;
        "page-press-release-2024-01-30": PagePressRelease20240130;
        "page-press-release-2024-01-30-es": PagePressRelease20240130Es;
        "page-press-release-five": PagePressReleaseFive;
        "page-press-release-four": PagePressReleaseFour;
        "page-press-release-one": PagePressReleaseOne;
        "page-press-release-six": PagePressReleaseSix;
        "page-press-release-three": PagePressReleaseThree;
        "page-press-release-two": PagePressReleaseTwo;
        "page-privacy": PagePrivacy;
        "page-resources": PageResources;
        "page-search": PageSearch;
        "page-testimonial": PageTestimonial;
        "ui-h3-bar": UiH3Bar;
        "ui-impact-box": UiImpactBox;
        "ui-menu-button": UiMenuButton;
        "ui-partner-image": UiPartnerImage;
        "ui-social-share": UiSocialShare;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "component-list": LocalJSX.ComponentList & JSXBase.HTMLAttributes<HTMLComponentListElement>;
            "page-about": LocalJSX.PageAbout & JSXBase.HTMLAttributes<HTMLPageAboutElement>;
            "page-all-media": LocalJSX.PageAllMedia & JSXBase.HTMLAttributes<HTMLPageAllMediaElement>;
            "page-all-press-releases": LocalJSX.PageAllPressReleases & JSXBase.HTMLAttributes<HTMLPageAllPressReleasesElement>;
            "page-contact": LocalJSX.PageContact & JSXBase.HTMLAttributes<HTMLPageContactElement>;
            "page-election-officials": LocalJSX.PageElectionOfficials & JSXBase.HTMLAttributes<HTMLPageElectionOfficialsElement>;
            "page-faq": LocalJSX.PageFaq & JSXBase.HTMLAttributes<HTMLPageFaqElement>;
            "page-faq-application-status": LocalJSX.PageFaqApplicationStatus & JSXBase.HTMLAttributes<HTMLPageFaqApplicationStatusElement>;
            "page-faq-eligibility": LocalJSX.PageFaqEligibility & JSXBase.HTMLAttributes<HTMLPageFaqEligibilityElement>;
            "page-faq-es": LocalJSX.PageFaqEs & JSXBase.HTMLAttributes<HTMLPageFaqEsElement>;
            "page-faq-poll-worker": LocalJSX.PageFaqPollWorker & JSXBase.HTMLAttributes<HTMLPageFaqPollWorkerElement>;
            "page-form": LocalJSX.PageForm & JSXBase.HTMLAttributes<HTMLPageFormElement>;
            "page-impact": LocalJSX.PageImpact & JSXBase.HTMLAttributes<HTMLPageImpactElement>;
            "page-info": LocalJSX.PageInfo & JSXBase.HTMLAttributes<HTMLPageInfoElement>;
            "page-jurisdiction": LocalJSX.PageJurisdiction & JSXBase.HTMLAttributes<HTMLPageJurisdictionElement>;
            "page-media": LocalJSX.PageMedia & JSXBase.HTMLAttributes<HTMLPageMediaElement>;
            "page-partners": LocalJSX.PagePartners & JSXBase.HTMLAttributes<HTMLPagePartnersElement>;
            "page-partners-table": LocalJSX.PagePartnersTable & JSXBase.HTMLAttributes<HTMLPagePartnersTableElement>;
            "page-press-release-2023-03-28": LocalJSX.PagePressRelease20230328 & JSXBase.HTMLAttributes<HTMLPagePressRelease20230328Element>;
            "page-press-release-2024-01-30": LocalJSX.PagePressRelease20240130 & JSXBase.HTMLAttributes<HTMLPagePressRelease20240130Element>;
            "page-press-release-2024-01-30-es": LocalJSX.PagePressRelease20240130Es & JSXBase.HTMLAttributes<HTMLPagePressRelease20240130EsElement>;
            "page-press-release-five": LocalJSX.PagePressReleaseFive & JSXBase.HTMLAttributes<HTMLPagePressReleaseFiveElement>;
            "page-press-release-four": LocalJSX.PagePressReleaseFour & JSXBase.HTMLAttributes<HTMLPagePressReleaseFourElement>;
            "page-press-release-one": LocalJSX.PagePressReleaseOne & JSXBase.HTMLAttributes<HTMLPagePressReleaseOneElement>;
            "page-press-release-six": LocalJSX.PagePressReleaseSix & JSXBase.HTMLAttributes<HTMLPagePressReleaseSixElement>;
            "page-press-release-three": LocalJSX.PagePressReleaseThree & JSXBase.HTMLAttributes<HTMLPagePressReleaseThreeElement>;
            "page-press-release-two": LocalJSX.PagePressReleaseTwo & JSXBase.HTMLAttributes<HTMLPagePressReleaseTwoElement>;
            "page-privacy": LocalJSX.PagePrivacy & JSXBase.HTMLAttributes<HTMLPagePrivacyElement>;
            "page-resources": LocalJSX.PageResources & JSXBase.HTMLAttributes<HTMLPageResourcesElement>;
            "page-search": LocalJSX.PageSearch & JSXBase.HTMLAttributes<HTMLPageSearchElement>;
            "page-testimonial": LocalJSX.PageTestimonial & JSXBase.HTMLAttributes<HTMLPageTestimonialElement>;
            "ui-h3-bar": LocalJSX.UiH3Bar & JSXBase.HTMLAttributes<HTMLUiH3BarElement>;
            "ui-impact-box": LocalJSX.UiImpactBox & JSXBase.HTMLAttributes<HTMLUiImpactBoxElement>;
            "ui-menu-button": LocalJSX.UiMenuButton & JSXBase.HTMLAttributes<HTMLUiMenuButtonElement>;
            "ui-partner-image": LocalJSX.UiPartnerImage & JSXBase.HTMLAttributes<HTMLUiPartnerImageElement>;
            "ui-social-share": LocalJSX.UiSocialShare & JSXBase.HTMLAttributes<HTMLUiSocialShareElement>;
        }
    }
}
