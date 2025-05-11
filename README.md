# D&H Test

Improvements:
 - avoid injecting material icons in index.html -> its not optimal as it prevents tree shaking -> configure icons at build time.
 - avoid using ngDeep -> ngDeep is depreacted and breaks component encapsulation. 
 - minimize the use of !important -> use only IF neccessary to avoid specifity issues.
 - I would recommend tailwindCSS utilities - non-semantic css - avoid css duplication.

components:
 - card-configuration - group inputs and set values via card data service.
 - card container - hold card + card-information and read values from card data service.
 - card - dumb component (onPush) only display values
 - card-information - dumb component (onPush) only display values
 
state management
 - card-data.service.ts - centralized reactive state via BehaviourSubject
  - why BehaviourSuject: 
   - reactive forms would be overkill since there is no validation
   - inputs & Outputs are not scalable for multi-component interaction

models:
 - card-data.interface.ts - keeps the data structured and type-safe.

directives:
 - card-active.directive.ts - flexible and reusable way to manage active state.