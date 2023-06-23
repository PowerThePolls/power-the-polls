# input-possibly-hidden-select

<!-- Auto Generated Below -->


## Overview

Render a `<select>` if `options` has values, else render `<input type="hidden">` with `selected` as the value.

## Properties

| Property     | Attribute     | Description | Type                                 | Default     |
| ------------ | ------------- | ----------- | ------------------------------------ | ----------- |
| `fieldLabel` | `field-label` |             | `string`                             | `undefined` |
| `name`       | `name`        |             | `string`                             | `undefined` |
| `options`    | --            |             | `Map<string, string> \| Set<string>` | `undefined` |
| `selected`   | `selected`    |             | `string`                             | `undefined` |


## Dependencies

### Used by

 - [input-address](../input-address)

### Graph
```mermaid
graph TD;
  input-address --> input-possibly-hidden-select
  style input-possibly-hidden-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


