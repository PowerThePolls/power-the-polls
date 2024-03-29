/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { JurisdictionInfo } from "./data/States";
import { PtpFormData } from "./util";
import { GeoJSON } from "geojson";
import { Options } from "./components/ui-geojson-to-svg/types";
export { JurisdictionInfo } from "./data/States";
export { PtpFormData } from "./util";
export { GeoJSON } from "geojson";
export { Options } from "./components/ui-geojson-to-svg/types";
export namespace Components {
    /**
     * Email application that will only render if there is no application link for the jurisdiction
     */
    interface EmailApplicationForm {
        "data": PtpFormData;
        "jurisdiction"?: JurisdictionInfo;
    }
    /**
     * An input and (optional) select element for a US postal address and state which will look up address values based on
     * the user's input to allow the user to select from.
     */
    interface InputAddress {
        "state": () => Promise<"STARTED" | "COMPLETED">;
    }
    /**
     * Render a `<select>` if `options` has values, else render `<input type="hidden">` with `selected` as the value.
     */
    interface InputPossiblyHiddenSelect {
        "fieldLabel": string;
        "name": string;
        "options": Map<string, string> | Set<string>;
        "selected": string;
    }
    /**
     * The Power the Polls sign-up form.
     */
    interface PowerThePollsForm {
        /**
          * The label for an additional field to be displayed on the signup form. If undefined, no additional field will be displayed.
         */
        "customFormFieldLabel"?: string;
        "optUserOutOfChase"?: boolean;
        /**
          * To display custom text and images for a specific Power the Polls partner, enter their ID here.
         */
        "partnerId"?: string;
        /**
          * Optional name displayed in privacy policy disclaimer when `optUserOutOfChase` is true
         */
        "partnerName"?: string;
        "reset": () => Promise<void>;
        /**
          * The API key to access SmartyStreets which is used for address lookup.
         */
        "smartyStreetsApiKey"?: string;
        /**
          * The version of this `power-the-polls-form` component
         */
        "version": () => Promise<string>;
    }
    /**
     * Component to render work elections jurisdiction data.
     */
    interface PtpInfoJurisdiction {
        /**
          * Props possibly passed in from the main form
         */
        "initialFormData"?: PtpFormData;
        /**
          * ID of jurisdiction for Work Elections
         */
        "jurisdictionId"?: string | number;
        /**
          * If `true`, this component should show next steps and any additional form data
         */
        "showNextSteps": boolean;
    }
    /**
     * Display state or specific jurisdiction information for poll workers based on whether
     * the provided `state`, `county`, and `city` match a jurisdiction or not.
     */
    interface PtpInfoPollWorker {
        /**
          * City for matching to location
         */
        "city"?: string;
        "cityTownVillageSuffix"?: string;
        /**
          * County for matching to location
         */
        "county"?: string;
        /**
          * Complete form data, if available, for `ptp-info-jurisdiction`
         */
        "formData"?: PtpFormData;
        /**
          * ID or Slug of jurisdiction for Work Elections. Use in place of `state`, `county`, and `city`
         */
        "jurisdictionIdOrSlug"?: string | number;
        /**
          * If `true`, this component will lso render 1-3 bullet items indicating the next steps for the user
         */
        "showNextSteps": boolean;
        /**
          * State for matching to location
         */
        "state"?: string;
    }
    /**
     * When we have no specific polling jurisdiction for a user and just their state we
     * display a list of all the counties for them to choose from.
     */
    interface PtpInfoState {
        /**
          * State abbreviation
         */
        "state"?: string;
    }
    interface UiGeojsonToSvg {
        "geoJson"?: GeoJSON;
        "height": number;
        "options"?: Options;
        "width": number;
    }
    interface UiLoadingSpinner {
        "small": boolean;
    }
}
export interface EmailApplicationFormCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLEmailApplicationFormElement;
}
export interface InputAddressCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInputAddressElement;
}
export interface PowerThePollsFormCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPowerThePollsFormElement;
}
declare global {
    /**
     * Email application that will only render if there is no application link for the jurisdiction
     */
    interface HTMLEmailApplicationFormElement extends Components.EmailApplicationForm, HTMLStencilElement {
    }
    var HTMLEmailApplicationFormElement: {
        prototype: HTMLEmailApplicationFormElement;
        new (): HTMLEmailApplicationFormElement;
    };
    /**
     * An input and (optional) select element for a US postal address and state which will look up address values based on
     * the user's input to allow the user to select from.
     */
    interface HTMLInputAddressElement extends Components.InputAddress, HTMLStencilElement {
    }
    var HTMLInputAddressElement: {
        prototype: HTMLInputAddressElement;
        new (): HTMLInputAddressElement;
    };
    /**
     * Render a `<select>` if `options` has values, else render `<input type="hidden">` with `selected` as the value.
     */
    interface HTMLInputPossiblyHiddenSelectElement extends Components.InputPossiblyHiddenSelect, HTMLStencilElement {
    }
    var HTMLInputPossiblyHiddenSelectElement: {
        prototype: HTMLInputPossiblyHiddenSelectElement;
        new (): HTMLInputPossiblyHiddenSelectElement;
    };
    /**
     * The Power the Polls sign-up form.
     */
    interface HTMLPowerThePollsFormElement extends Components.PowerThePollsForm, HTMLStencilElement {
    }
    var HTMLPowerThePollsFormElement: {
        prototype: HTMLPowerThePollsFormElement;
        new (): HTMLPowerThePollsFormElement;
    };
    /**
     * Component to render work elections jurisdiction data.
     */
    interface HTMLPtpInfoJurisdictionElement extends Components.PtpInfoJurisdiction, HTMLStencilElement {
    }
    var HTMLPtpInfoJurisdictionElement: {
        prototype: HTMLPtpInfoJurisdictionElement;
        new (): HTMLPtpInfoJurisdictionElement;
    };
    /**
     * Display state or specific jurisdiction information for poll workers based on whether
     * the provided `state`, `county`, and `city` match a jurisdiction or not.
     */
    interface HTMLPtpInfoPollWorkerElement extends Components.PtpInfoPollWorker, HTMLStencilElement {
    }
    var HTMLPtpInfoPollWorkerElement: {
        prototype: HTMLPtpInfoPollWorkerElement;
        new (): HTMLPtpInfoPollWorkerElement;
    };
    /**
     * When we have no specific polling jurisdiction for a user and just their state we
     * display a list of all the counties for them to choose from.
     */
    interface HTMLPtpInfoStateElement extends Components.PtpInfoState, HTMLStencilElement {
    }
    var HTMLPtpInfoStateElement: {
        prototype: HTMLPtpInfoStateElement;
        new (): HTMLPtpInfoStateElement;
    };
    interface HTMLUiGeojsonToSvgElement extends Components.UiGeojsonToSvg, HTMLStencilElement {
    }
    var HTMLUiGeojsonToSvgElement: {
        prototype: HTMLUiGeojsonToSvgElement;
        new (): HTMLUiGeojsonToSvgElement;
    };
    interface HTMLUiLoadingSpinnerElement extends Components.UiLoadingSpinner, HTMLStencilElement {
    }
    var HTMLUiLoadingSpinnerElement: {
        prototype: HTMLUiLoadingSpinnerElement;
        new (): HTMLUiLoadingSpinnerElement;
    };
    interface HTMLElementTagNameMap {
        "email-application-form": HTMLEmailApplicationFormElement;
        "input-address": HTMLInputAddressElement;
        "input-possibly-hidden-select": HTMLInputPossiblyHiddenSelectElement;
        "power-the-polls-form": HTMLPowerThePollsFormElement;
        "ptp-info-jurisdiction": HTMLPtpInfoJurisdictionElement;
        "ptp-info-poll-worker": HTMLPtpInfoPollWorkerElement;
        "ptp-info-state": HTMLPtpInfoStateElement;
        "ui-geojson-to-svg": HTMLUiGeojsonToSvgElement;
        "ui-loading-spinner": HTMLUiLoadingSpinnerElement;
    }
}
declare namespace LocalJSX {
    /**
     * Email application that will only render if there is no application link for the jurisdiction
     */
    interface EmailApplicationForm {
        "data"?: PtpFormData;
        "jurisdiction"?: JurisdictionInfo;
        "onSubmitted"?: (event: EmailApplicationFormCustomEvent<any>) => void;
    }
    /**
     * An input and (optional) select element for a US postal address and state which will look up address values based on
     * the user's input to allow the user to select from.
     */
    interface InputAddress {
        "onLookup"?: (event: InputAddressCustomEvent<"STARTED" | "COMPLETED">) => void;
    }
    /**
     * Render a `<select>` if `options` has values, else render `<input type="hidden">` with `selected` as the value.
     */
    interface InputPossiblyHiddenSelect {
        "fieldLabel"?: string;
        "name"?: string;
        "options"?: Map<string, string> | Set<string>;
        "selected"?: string;
    }
    /**
     * The Power the Polls sign-up form.
     */
    interface PowerThePollsForm {
        /**
          * The label for an additional field to be displayed on the signup form. If undefined, no additional field will be displayed.
         */
        "customFormFieldLabel"?: string;
        /**
          * Dispatched when the user has submitted the form and it has successfully POSTed to `destination`
         */
        "onSubmitCompleted"?: (event: PowerThePollsFormCustomEvent<any>) => void;
        /**
          * Dispatched when there is an error submitting the form to `destination`
         */
        "onSubmitError"?: (event: PowerThePollsFormCustomEvent<any>) => void;
        "optUserOutOfChase"?: boolean;
        /**
          * To display custom text and images for a specific Power the Polls partner, enter their ID here.
         */
        "partnerId"?: string;
        /**
          * Optional name displayed in privacy policy disclaimer when `optUserOutOfChase` is true
         */
        "partnerName"?: string;
        /**
          * The API key to access SmartyStreets which is used for address lookup.
         */
        "smartyStreetsApiKey"?: string;
    }
    /**
     * Component to render work elections jurisdiction data.
     */
    interface PtpInfoJurisdiction {
        /**
          * Props possibly passed in from the main form
         */
        "initialFormData"?: PtpFormData;
        /**
          * ID of jurisdiction for Work Elections
         */
        "jurisdictionId"?: string | number;
        /**
          * If `true`, this component should show next steps and any additional form data
         */
        "showNextSteps"?: boolean;
    }
    /**
     * Display state or specific jurisdiction information for poll workers based on whether
     * the provided `state`, `county`, and `city` match a jurisdiction or not.
     */
    interface PtpInfoPollWorker {
        /**
          * City for matching to location
         */
        "city"?: string;
        "cityTownVillageSuffix"?: string;
        /**
          * County for matching to location
         */
        "county"?: string;
        /**
          * Complete form data, if available, for `ptp-info-jurisdiction`
         */
        "formData"?: PtpFormData;
        /**
          * ID or Slug of jurisdiction for Work Elections. Use in place of `state`, `county`, and `city`
         */
        "jurisdictionIdOrSlug"?: string | number;
        /**
          * If `true`, this component will lso render 1-3 bullet items indicating the next steps for the user
         */
        "showNextSteps"?: boolean;
        /**
          * State for matching to location
         */
        "state"?: string;
    }
    /**
     * When we have no specific polling jurisdiction for a user and just their state we
     * display a list of all the counties for them to choose from.
     */
    interface PtpInfoState {
        /**
          * State abbreviation
         */
        "state"?: string;
    }
    interface UiGeojsonToSvg {
        "geoJson"?: GeoJSON;
        "height"?: number;
        "options"?: Options;
        "width"?: number;
    }
    interface UiLoadingSpinner {
        "small"?: boolean;
    }
    interface IntrinsicElements {
        "email-application-form": EmailApplicationForm;
        "input-address": InputAddress;
        "input-possibly-hidden-select": InputPossiblyHiddenSelect;
        "power-the-polls-form": PowerThePollsForm;
        "ptp-info-jurisdiction": PtpInfoJurisdiction;
        "ptp-info-poll-worker": PtpInfoPollWorker;
        "ptp-info-state": PtpInfoState;
        "ui-geojson-to-svg": UiGeojsonToSvg;
        "ui-loading-spinner": UiLoadingSpinner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            /**
             * Email application that will only render if there is no application link for the jurisdiction
             */
            "email-application-form": LocalJSX.EmailApplicationForm & JSXBase.HTMLAttributes<HTMLEmailApplicationFormElement>;
            /**
             * An input and (optional) select element for a US postal address and state which will look up address values based on
             * the user's input to allow the user to select from.
             */
            "input-address": LocalJSX.InputAddress & JSXBase.HTMLAttributes<HTMLInputAddressElement>;
            /**
             * Render a `<select>` if `options` has values, else render `<input type="hidden">` with `selected` as the value.
             */
            "input-possibly-hidden-select": LocalJSX.InputPossiblyHiddenSelect & JSXBase.HTMLAttributes<HTMLInputPossiblyHiddenSelectElement>;
            /**
             * The Power the Polls sign-up form.
             */
            "power-the-polls-form": LocalJSX.PowerThePollsForm & JSXBase.HTMLAttributes<HTMLPowerThePollsFormElement>;
            /**
             * Component to render work elections jurisdiction data.
             */
            "ptp-info-jurisdiction": LocalJSX.PtpInfoJurisdiction & JSXBase.HTMLAttributes<HTMLPtpInfoJurisdictionElement>;
            /**
             * Display state or specific jurisdiction information for poll workers based on whether
             * the provided `state`, `county`, and `city` match a jurisdiction or not.
             */
            "ptp-info-poll-worker": LocalJSX.PtpInfoPollWorker & JSXBase.HTMLAttributes<HTMLPtpInfoPollWorkerElement>;
            /**
             * When we have no specific polling jurisdiction for a user and just their state we
             * display a list of all the counties for them to choose from.
             */
            "ptp-info-state": LocalJSX.PtpInfoState & JSXBase.HTMLAttributes<HTMLPtpInfoStateElement>;
            "ui-geojson-to-svg": LocalJSX.UiGeojsonToSvg & JSXBase.HTMLAttributes<HTMLUiGeojsonToSvgElement>;
            "ui-loading-spinner": LocalJSX.UiLoadingSpinner & JSXBase.HTMLAttributes<HTMLUiLoadingSpinnerElement>;
        }
    }
}
