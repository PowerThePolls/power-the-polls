# power-the-polls-form

<!-- Auto Generated Below -->


## Overview

The Power the Polls sign-up form.

## Properties

| Property               | Attribute                 | Description                                                                                                                | Type                   | Default     |
| ---------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| `customFormFieldLabel` | `custom-form-field-label` | The label for an additional field to be displayed on the signup form. If undefined, no additional field will be displayed. | `string \| undefined`  | `undefined` |
| `optUserOutOfChase`    | `opt-user-out-of-chase`   |                                                                                                                            | `boolean \| undefined` | `undefined` |
| `partnerId`            | `partner-id`              | To display custom text and images for a specific Power the Polls partner, enter their ID here.                             | `string \| undefined`  | `undefined` |
| `partnerName`          | `partner-name`            | Optional name displayed in privacy policy disclaimer when `optUserOutOfChase` is true                                      | `string \| undefined`  | `undefined` |
| `smartyStreetsApiKey`  | `smarty-streets-api-key`  | The API key to access SmartyStreets which is used for address lookup.                                                      | `string \| undefined`  | `undefined` |


## Events

| Event             | Description                                                                                     | Type               |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------ |
| `submitCompleted` | Dispatched when the user has submitted the form and it has successfully POSTed to `destination` | `CustomEvent<any>` |
| `submitError`     | Dispatched when there is an error submitting the form to `destination`                          | `CustomEvent<any>` |


## Methods

### `reset() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `version() => Promise<string>`

The version of this `power-the-polls-form` component

#### Returns

Type: `Promise<string>`




## Dependencies

### Depends on

- [ptp-info-poll-worker](../ptp-info-poll-worker)
- [input-address](../input-address)
- [ui-loading-spinner](../ui-loading-spinner)

### Graph
```mermaid
graph TD;
  power-the-polls-form --> ptp-info-poll-worker
  power-the-polls-form --> input-address
  power-the-polls-form --> ui-loading-spinner
  ptp-info-poll-worker --> ptp-info-jurisdiction
  ptp-info-poll-worker --> ptp-info-state
  ptp-info-jurisdiction --> ui-loading-spinner
  ptp-info-jurisdiction --> ui-geojson-to-svg
  ptp-info-jurisdiction --> email-application-form
  ptp-info-state --> ui-loading-spinner
  input-address --> input-possibly-hidden-select
  style power-the-polls-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


