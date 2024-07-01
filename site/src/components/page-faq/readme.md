# page-faq

Faq Page imports faq data and formats it using the question section component. 
It has a contact modal with a form that feeds directly to helpscout via zapier webhook. 

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                                                           | Default     |
 | -------------- | --------------- | ----------- | -------------------------------------------------------------- | ----------- |
 | `questions`    | --              |             | `undefined \| ({ question: string; answer: () => string; }[])` | `undefined` |
 | `sectionTitle` | `section-title` |             | `string \| undefined`                                          | `undefined` |


 ## Dependencies

 ### Used by

  - [page-faq-application-status](../page-faq-application-status)
  - [page-faq-eligibility](../page-faq-eligibility)
  - [page-faq-poll-worker](../page-faq-poll-worker)

 ### Graph
 ```mermaid
 graph TD;
   page-faq-application-status --> question-section
   page-faq-eligibility --> question-section
   page-faq-poll-worker --> question-section
   style question-section fill:#f9f,stroke:#333,stroke-width:4px
 ```


----------------------------------------------


