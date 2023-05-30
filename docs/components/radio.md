# Radio

[component-header:o-radio]

Radios are designed to be used with [radio groups](/components/radio-group).

```html preview
<o-radio-group label="Select an option" name="a" value="1">
  <o-radio value="1">Option 1</o-radio>
  <o-radio value="2">Option 2</o-radio>
  <o-radio value="3">Option 3</o-radio>
</o-radio-group>
```

```jsx react
import { ORadio, ORadioGroup } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <ORadioGroup label="Select an option" name="a" value="1">
    <ORadio value="1">Option 1</ORadio>
    <ORadio value="2">Option 2</ORadio>
    <ORadio value="3">Option 3</ORadio>
  </ORadioGroup>
);
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Initial Value

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html preview
<o-radio-group label="Select an option" name="a" value="3">
  <o-radio value="1">Option 1</o-radio>
  <o-radio value="2">Option 2</o-radio>
  <o-radio value="3">Option 3</o-radio>
</o-radio-group>
```

```jsx react
import { ORadio, ORadioGroup } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <ORadioGroup label="Select an option" name="a" value="3">
    <ORadio value="1">Option 1</ORadio>
    <ORadio value="2">Option 2</ORadio>
    <ORadio value="3">Option 3</ORadio>
  </ORadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio.

```html preview
<o-radio-group label="Select an option" name="a" value="1">
  <o-radio value="1">Option 1</o-radio>
  <o-radio value="2" disabled>Option 2</o-radio>
  <o-radio value="3">Option 3</o-radio>
</o-radio-group>
```

```jsx react
import { ORadio, ORadioGroup } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <ORadioGroup label="Select an option" name="a" value="1">
    <ORadio value="1">Option 1</ORadio>
    <ORadio value="2" disabled>
      Option 2
    </ORadio>
    <ORadio value="3">Option 3</ORadio>
  </ORadioGroup>
);
```

## Sizes

Add the `size` attribute to the [Radio Group](/components/radio-group) to change the size of the radios.

```html preview
<o-radio-group label="Select an option" size="small" value="1">
  <o-radio value="1">Small 1</o-radio>
  <o-radio value="2">Small 2</o-radio>
  <o-radio value="3">Small 3</o-radio>
</o-radio-group>

<br />

<o-radio-group label="Select an option" size="medium" value="1">
  <o-radio value="1">Medium 1</o-radio>
  <o-radio value="2">Medium 2</o-radio>
  <o-radio value="3">Medium 3</o-radio>
</o-radio-group>

<br />

<o-radio-group label="Select an option" size="large" value="1">
  <o-radio value="1">Large 1</o-radio>
  <o-radio value="2">Large 2</o-radio>
  <o-radio value="3">Large 3</o-radio>
</o-radio-group>
```

```jsx react
import { ORadio } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <>
    <ORadioGroup size="small" value="1">
      <ORadio value="1">Small 1</ORadio>
      <ORadio value="2">Small 2</ORadio>
      <ORadio value="3">Small 3</ORadio>
    </ORadioGroup>

    <br />

    <ORadioGroup size="medium" value="1">
      <ORadio value="1">Medium 1</ORadio>
      <ORadio value="2">Medium 2</ORadio>
      <ORadio value="3">Medium 3</ORadio>
    </ORadioGroup>

    <br />

    <ORadioGroup size="large" value="1">
      <ORadio value="1">Large 1</ORadio>
      <ORadio value="2">Large 2</ORadio>
      <ORadio value="3">Large 3</ORadio>
    </ORadioGroup>
  </>
);
```

[component-metadata:o-radio]
