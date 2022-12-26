/**
 * @fileoverview Use string literals to override a story name
 * @author Charles Gruenais
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import rule from '../../../lib/rules/use-string-literals-names'
import ruleTester from '../../utils/rule-tester'

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

ruleTester.run('use-string-literals-names', rule, {
  /**
   * This is an example test for a  rule that reports an error in case a named export is called 'wrong'
   * Use https://eslint.org/docs/developer-guide/working-with-rules for Eslint API
   * And delete this entire comment block
   */
  valid: ['export const Correct'],
  invalid: [
    {
      code: 'export const wrong',
      errors: [
        {
          messageId: 'anyMessageIdHere', // comes from the rule file
        },
      ],
    },
  ],
})
