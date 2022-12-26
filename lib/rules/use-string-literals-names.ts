/**
 * @fileoverview Use string literals to override a story name
 * @author Charles Gruenais
 */

 import { createStorybookRule } from '../utils/create-storybook-rule'
 import { CategoryId } from '../utils/constants'

 //------------------------------------------------------------------------------
 // Rule Definition
 //------------------------------------------------------------------------------

 export = createStorybookRule({
   name: 'use-string-literals-names',
   defaultOptions: [],
   meta: {
     type: 'problem',
     docs: {
       description: 'Use string literals to override a story name',
       categories: [CategoryId.RECOMMENDED],
       recommended: 'error',
     },
     messages: {
       anyMessageIdHere: 'Fill me in',
     },
     fixable: 'code',
     hasSuggestions: true,
     schema: [],
   },

   create(context) {
     // variables should be defined here

     //----------------------------------------------------------------------
     // Helpers
     //----------------------------------------------------------------------

     // any helper functions should go here or else delete this section

     //----------------------------------------------------------------------
     // Public
     //----------------------------------------------------------------------

     return {
       /**
        * This is an example rule that reports an error in case a named export is called 'wrong'
        * Use https://eslint.org/docs/developer-guide/working-with-rules for Eslint API
        * And check https://astexplorer.net/ to help write rules
        * And delete this entire comment block
        */
       ExportNamedDeclaration: function (node) {
         const identifier = node.declaration.declarations[0].id
         if (identifier) {
           const { name } = identifier
           if (name === 'wrong') {
             context.report({
               node,
               messageId: 'anyMessageIdHere',
             })
           }
         }
       },
     }
   },
 })