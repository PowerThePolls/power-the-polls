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
    interface ContactForm {
        "formError": boolean;
        "submitForm"?: ( e: Event ) => void;
    }
    interface ContactModal {
        "isOpen": boolean;
    }
    interface PageAbout {
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
        "data"?: { sectionTitle: string, questions: { question: string, answer: () => string }[] }[];
    }
    interface PageFaqEligibility {
        /**
          * A list of entries to display in the FAQ see: FaqData.ts see: app-root.tsx
         */
        "data"?: { sectionTitle: string, questions: { question: string, answer: () => string }[] }[];
    }
    interface PageFaqEs {
        /**
          * A list of entries to display in the FAQ see: FaqData.ts see: app-root.tsx
         */
        "data"?: { question: string, answer: string }[];
        /**
          * The page's title
         */
        "pageTitle"?: string;
    }
    interface PageFaqPollWorker {
        /**
          * A list of entries to display in the FAQ see: FaqData.ts see: app-root.tsx
         */
        "data"?: { sectionTitle: string, questions: { question: string, answer: () => string }[] }[];
    }
    interface PageForm {
        /**
          * Optional partnerId/source parameter to use when submitting the form. If the partnerId exists in `/data/PartnerList.ts` then additional partner data will be looked up.
         */
        "partnerId"?: string;
    }
    interface PageInfo {
    }
    interface PageJurisdiction {
        "match"?: MatchResults;
    }
    interface PagePartners {
        /**
          * List of all the partner logos to display
         */
        "partners"?: Partner[];
    }
    interface PagePartnersTable {
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
    interface PageImpact {
    }
    interface QuestionSection {
        "questions"?: { question: string, answer: () => string }[];
        "sectionTitle"?: string;
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
    interface HTMLContactFormElement extends Components.ContactForm, HTMLStencilElement {
    }
    var HTMLContactFormElement: {
        prototype: HTMLContactFormElement;
        new (): HTMLContactFormElement;
    };
    interface HTMLContactModalElement extends Components.ContactModal, HTMLStencilElement {
    }
    var HTMLContactModalElement: {
        prototype: HTMLContactModalElement;
        new (): HTMLContactModalElement;
    };
    interface HTMLPageAboutElement extends Components.PageAbout, HTMLStencilElement {
    }
    var HTMLPageAboutElement: {
        prototype: HTMLPageAboutElement;
        new (): HTMLPageAboutElement;
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
    interface HTMLQuestionSectionElement extends Components.QuestionSection, HTMLStencilElement {
    }
    var HTMLQuestionSectionElement: {
        prototype: HTMLQuestionSectionElement;
        new (): HTMLQuestionSectionElement;
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
    interface HTMLPageImpactElement extends Components.PageImpact, HTMLStencilElement {
    }
    var HTMLPageImpactElement: {
        prototype: HTMLPageImpactElement;
        new (): HTMLPageImpactElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "component-list": HTMLComponentListElement;
        "contact-form": HTMLContactFormElement;
        "contact-modal": HTMLContactModalElement;
        "page-about": HTMLPageAboutElement;
        "page-contact": HTMLPageContactElement;
        "page-election-officials": HTMLPageElectionOfficialsElement;
        "page-faq": HTMLPageFaqElement;
        "page-faq-application-status": HTMLPageFaqApplicationStatusElement;
        "page-faq-eligibility": HTMLPageFaqEligibilityElement;
        "page-faq-es": HTMLPageFaqEsElement;
        "page-faq-poll-worker": HTMLPageFaqPollWorkerElement;
        "page-form": HTMLPageFormElement;
        "page-info": HTMLPageInfoElement;
        "page-jurisdiction": HTMLPageJurisdictionElement;
        "page-partners": HTMLPagePartnersElement;
        "page-partners-table": HTMLPagePartnersTableElement;
        "page-privacy": HTMLPagePrivacyElement;
        "page-resources": HTMLPageResourcesElement;
        "page-search": HTMLPageSearchElement;
        "page-testimonial": HTMLPageTestimonialElement;
        "page-impact"; HTMLPageImpactElement;
        "question-section": HTMLQuestionSectionElement;
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
    interface ContactForm {
        "formError"?: boolean;
        "submitForm"?: ( e: Event ) => void;
    }
    interface ContactModal {
        "isOpen"?: boolean;
        "onClose"?: (event: CustomEvent<any>) => void;
    }
    interface PageAbout {
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
        "data"?: { sectionTitle: string, questions: { question: string, answer: () => string }[] }[];
    }
    interface PageFaqEligibility {
        /**
          * A list of entries to display in the FAQ see: FaqData.ts see: app-root.tsx
         */
        "data"?: { sectionTitle: string, questions: { question: string, answer: () => string }[] }[];
    }
    interface PageFaqEs {
        /**
          * A list of entries to display in the FAQ see: FaqData.ts see: app-root.tsx
         */
        "data"?: { question: string, answer: string }[];
        /**
          * The page's title
         */
        "pageTitle"?: string;
    }
    interface PageFaqPollWorker {
        /**
          * A list of entries to display in the FAQ see: FaqData.ts see: app-root.tsx
         */
        "data"?: { sectionTitle: string, questions: { question: string, answer: () => string }[] }[];
    }
    interface PageForm {
        /**
          * Optional partnerId/source parameter to use when submitting the form. If the partnerId exists in `/data/PartnerList.ts` then additional partner data will be looked up.
         */
        "partnerId"?: string;
    }
    interface PageInfo {
    }
    interface PageJurisdiction {
        "match"?: MatchResults;
    }
    interface PagePartners {
        /**
          * List of all the partner logos to display
         */
        "partners"?: Partner[];
    }
    interface PagePartnersTable {
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
    interface QuestionSection {
        "questions"?: { question: string, answer: () => string }[];
        "sectionTitle"?: string;
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
        "contact-form": ContactForm;
        "contact-modal": ContactModal;
        "page-about": PageAbout;
        "page-contact": PageContact;
        "page-election-officials": PageElectionOfficials;
        "page-faq": PageFaq;
        "page-faq-application-status": PageFaqApplicationStatus;
        "page-faq-eligibility": PageFaqEligibility;
        "page-faq-es": PageFaqEs;
        "page-faq-poll-worker": PageFaqPollWorker;
        "page-form": PageForm;
        "page-info": PageInfo;
        "page-jurisdiction": PageJurisdiction;
        "page-partners": PagePartners;
        "page-partners-table": PagePartnersTable;
        "page-privacy": PagePrivacy;
        "page-resources": PageResources;
        "page-search": PageSearch;
        "page-testimonial": PageTestimonial;
        "question-section": QuestionSection;
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
            "contact-form": LocalJSX.ContactForm & JSXBase.HTMLAttributes<HTMLContactFormElement>;
            "contact-modal": LocalJSX.ContactModal & JSXBase.HTMLAttributes<HTMLContactModalElement>;
            "page-about": LocalJSX.PageAbout & JSXBase.HTMLAttributes<HTMLPageAboutElement>;
            "page-contact": LocalJSX.PageContact & JSXBase.HTMLAttributes<HTMLPageContactElement>;
            "page-election-officials": LocalJSX.PageElectionOfficials & JSXBase.HTMLAttributes<HTMLPageElectionOfficialsElement>;
            "page-faq": LocalJSX.PageFaq & JSXBase.HTMLAttributes<HTMLPageFaqElement>;
            "page-faq-application-status": LocalJSX.PageFaqApplicationStatus & JSXBase.HTMLAttributes<HTMLPageFaqApplicationStatusElement>;
            "page-faq-eligibility": LocalJSX.PageFaqEligibility & JSXBase.HTMLAttributes<HTMLPageFaqEligibilityElement>;
            "page-faq-es": LocalJSX.PageFaqEs & JSXBase.HTMLAttributes<HTMLPageFaqEsElement>;
            "page-faq-poll-worker": LocalJSX.PageFaqPollWorker & JSXBase.HTMLAttributes<HTMLPageFaqPollWorkerElement>;
            "page-form": LocalJSX.PageForm & JSXBase.HTMLAttributes<HTMLPageFormElement>;
            "page-info": LocalJSX.PageInfo & JSXBase.HTMLAttributes<HTMLPageInfoElement>;
            "page-jurisdiction": LocalJSX.PageJurisdiction & JSXBase.HTMLAttributes<HTMLPageJurisdictionElement>;
            "page-partners": LocalJSX.PagePartners & JSXBase.HTMLAttributes<HTMLPagePartnersElement>;
            "page-partners-table": LocalJSX.PagePartnersTable & JSXBase.HTMLAttributes<HTMLPagePartnersTableElement>;
            "page-privacy": LocalJSX.PagePrivacy & JSXBase.HTMLAttributes<HTMLPagePrivacyElement>;
            "page-resources": LocalJSX.PageResources & JSXBase.HTMLAttributes<HTMLPageResourcesElement>;
            "page-search": LocalJSX.PageSearch & JSXBase.HTMLAttributes<HTMLPageSearchElement>;
            "page-testimonial": LocalJSX.PageTestimonial & JSXBase.HTMLAttributes<HTMLPageTestimonialElement>;
            "question-section": LocalJSX.QuestionSection & JSXBase.HTMLAttributes<HTMLQuestionSectionElement>;
            "ui-h3-bar": LocalJSX.UiH3Bar & JSXBase.HTMLAttributes<HTMLUiH3BarElement>;
            "ui-impact-box": LocalJSX.UiImpactBox & JSXBase.HTMLAttributes<HTMLUiImpactBoxElement>;
            "ui-menu-button": LocalJSX.UiMenuButton & JSXBase.HTMLAttributes<HTMLUiMenuButtonElement>;
            "ui-partner-image": LocalJSX.UiPartnerImage & JSXBase.HTMLAttributes<HTMLUiPartnerImageElement>;
            "ui-social-share": LocalJSX.UiSocialShare & JSXBase.HTMLAttributes<HTMLUiSocialShareElement>;
        }
    }
}
