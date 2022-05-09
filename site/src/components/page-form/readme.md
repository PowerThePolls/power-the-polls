# page-form

<!-- Auto Generated Below -->

## Properties

| Property    | Attribute    | Description                                                                                                                                                            | Type                  | Default     |
| ----------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `partnerId` | `partner-id` | Optional partnerId/source parameter to use when submitting the form. If the partnerId exists in `/data/PartnerList.ts` then additional partner data will be looked up. | `string \| undefined` | `undefined` |

## Dependencies

### Depends on

- power-the-polls-form

### Graph

```mermaid
graph TD;
  page-form --> power-the-polls-form
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
  style page-form fill:#f9f,stroke:#333,stroke-width:4px
```

---
