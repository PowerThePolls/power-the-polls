# ptp-info-state

<!-- Auto Generated Below -->


## Overview

When we have no specific polling jurisdiction for a user and just their state we
display a list of all the counties for them to choose from.

## Properties

| Property | Attribute | Description        | Type                  | Default     |
| -------- | --------- | ------------------ | --------------------- | ----------- |
| `state`  | `state`   | State abbreviation | `string \| undefined` | `undefined` |


## Dependencies

### Used by

 - [ptp-info-poll-worker](../ptp-info-poll-worker)

### Depends on

- [ui-loading-spinner](../ui-loading-spinner)

### Graph
```mermaid
graph TD;
  ptp-info-state --> ui-loading-spinner
  ptp-info-poll-worker --> ptp-info-state
  style ptp-info-state fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


