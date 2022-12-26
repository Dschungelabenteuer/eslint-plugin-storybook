# use-string-literals-names

<!-- RULE-CATEGORIES:START -->
<!-- RULE-CATEGORIES:END -->

## Rule Details

Use string literals to override a story name.

Examples of **incorrect** code for this rule:

```js
export const name = 'Example story'
// Using variables…
export const Primary = { name }
// Using template literals…
export const Primary = { name: `Example story` }

```

Examples of **correct** code for this rule:

```js
// Using single-quoted string literals…
export const Primary = { name: 'Example story' }
// Using double-quoted string literals…
export const Primary = { name: "Example story" }

```

## Further Reading

Static analysis comes with limitations which prevent Storybook from reliably evaluating code passed to story's `name` property within CSF files. Additionally, template literals may include code supposed to be interpolated and thus cannot be used reliably either. One should always use string literals to override a story name.