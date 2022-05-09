# page-info

<!-- Auto Generated Below -->

## Dependencies

### Depends on

- stencil-router-redirect
- ptp-info-poll-worker

### Graph

```mermaid
graph TD;
  page-info --> stencil-router-redirect
  page-info --> ptp-info-poll-worker
  ptp-info-poll-worker --> ptp-info-jurisdiction
  ptp-info-poll-worker --> ptp-info-state
  ptp-info-jurisdiction --> ui-loading-spinner
  ptp-info-jurisdiction --> ui-geojson-to-svg
  ptp-info-jurisdiction --> email-application-form
  ptp-info-state --> ui-loading-spinner
  style page-info fill:#f9f,stroke:#333,stroke-width:4px
```

---
