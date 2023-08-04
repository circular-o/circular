---
meta:
  title: Radio Group
  description: Radio groups are used to group multiple radios or radio buttons so they function as a single form control.
layout: component
---

```html:preview
<o-radio-group label="Select an option" name="a" value="1">
  <o-radio value="1">Option 1</o-radio>
  <o-radio value="2">Option 2</o-radio>
  <o-radio value="3">Option 3</o-radio>
</o-radio-group>
```

```jsx:react
import { ORadio, ORadioGroup } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <ORadioGroup label="Select an option" name="a" value="1">
    <ORadio value="1">Option 1</ORadio>
    <ORadio value="2">Option 2</ORadio>
    <ORadio value="3">Option 3</ORadio>
  </ORadioGroup>
);
```

## Examples

### Help Text

Add descriptive help text to a radio group with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<o-radio-group label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
  <o-radio value="1">Option 1</o-radio>
  <o-radio value="2">Option 2</o-radio>
  <o-radio value="3">Option 3</o-radio>
</o-radio-group>
```

```jsx:react
import { ORadio, ORadioGroup } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <ORadioGroup label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
    <ORadio value="1">Option 1</ORadio>
    <ORadio value="2">Option 2</ORadio>
    <ORadio value="3">Option 3</ORadio>
  </ORadioGroup>
);
```

### Radio Buttons

[Radio buttons](/components/radio-button) offer an alternate way to display radio controls. In this case, an internal [button group](/components/button-group) is used to group the buttons into a single, cohesive control.

```html:preview
<o-radio-group label="Select an option" help-text="Select an option that makes you proud." name="a" value="1">
  <o-radio-button value="1">Option 1</o-radio-button>
  <o-radio-button value="2">Option 2</o-radio-button>
  <o-radio-button value="3">Option 3</o-radio-button>
</o-radio-group>
```

```jsx:react
import { ORadioButton, ORadioGroup } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <ORadioGroup label="Select an option" name="a" value="1">
    <ORadioButton value="1">Option 1</ORadioButton>
    <ORadioButton value="2">Option 2</ORadioButton>
    <ORadioButton value="3">Option 3</ORadioButton>
  </ORadioGroup>
);
```

### Disabling Options

Radios and radio buttons can be disabled by adding the `disabled` attribute to the respective options inside the radio group.

```html:preview
<o-radio-group label="Select an option" name="a" value="1">
  <o-radio value="1">Option 1</o-radio>
  <o-radio value="2" disabled>Option 2</o-radio>
  <o-radio value="3">Option 3</o-radio>
</o-radio-group>
```

```jsx:react
import { ORadio, ORadioGroup } from 'O-PACKAGE-FULL-NAME-O/dist/react';

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

### Sizing Options

The size of [Radios](/components/radio) and [Radio Buttons](/components/radio-buttons) will be determined by the Radio Group's `size` attribute.

```html:preview
<o-radio-group label="Select an option" size="medium" value="medium" class="radio-group-size">
  <o-radio value="small">Small</o-radio>
  <o-radio value="medium">Medium</o-radio>
  <o-radio value="large">Large</o-radio>
</o-radio-group>

<script>
  const radioGroup = document.querySelector('.radio-group-size');

  radioGroup.addEventListener('o-change', () => {
    radioGroup.size = radioGroup.value;
  });
</script>
```

```jsx:react
import { useState } from 'react';
import { ORadio, ORadioGroup } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => {
  const [size, setSize] = useState('medium');

  return (
    <>
      <ORadioGroup
        label="Select an option"
        size={size}
        value={size}
        class="radio-group-size"
        onOChange={event => setSize(event.target.value)}
      >
        <ORadio value="small">Small</ORadio>
        <ORadio value="medium">Medium</ORadio>
        <ORadio value="large">Large</ORadio>
      </ORadioGroup>
    </>
  );
};
```

:::tip
[Radios](/components/radio) and [Radio Buttons](/components/radio-button) also have a `size` attribute. This can be useful in certain compositions, but it will be ignored when used inside of a Radio Group.
:::

### Validation

Setting the `required` attribute to make selecting an option mandatory. If a value has not been selected, it will prevent the form from submitting and display an error message.

```html:preview
<form class="validation">
  <o-radio-group label="Select an option" name="a" required>
    <o-radio value="1">Option 1</o-radio>
    <o-radio value="2">Option 2</o-radio>
    <o-radio value="3">Option 3</o-radio>
  </o-radio-group>
  <br />
  <o-button type="submit" variant="primary">Submit</o-button>
</form>

<script>
  const form = document.querySelector('.validation');

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx:react
import { OButton, OIcon, ORadio, ORadioGroup } from 'O-PACKAGE-FULL-NAME-O/dist/react';
const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <ORadioGroup label="Select an option" name="a" required onOChange={handleChange}>
        <ORadio value="1">
          Option 1
        </ORadio>
        <ORadiovalue="2">
          Option 2
        </ORadio>
        <ORadio value="3">
          Option 3
        </ORadio>
      </ORadioGroup>
      <br />
      <OButton type="submit" variant="primary">
        Submit
      </OButton>
    </form>
  );
};
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html:preview
<form class="custom-validity">
  <o-radio-group label="Select an option" name="a" value="1">
    <o-radio value="1">Not me</o-radio>
    <o-radio value="2">Me neither</o-radio>
    <o-radio value="3">Choose me</o-radio>
  </o-radio-group>
  <br />
  <o-button type="submit" variant="primary">Submit</o-button>
</form>

<script>
  const form = document.querySelector('.custom-validity');
  const radioGroup = form.querySelector('o-radio-group');
  const errorMessage = 'You must choose the last option';

  // Set initial validity as soon as the element is defined
  await Promise.all([
    customElements.whenDefined('o-radio'),
    customElements.whenDefined('o-radio-group'),
  ]).then(() => {
    radioGroup.setCustomValidity(errorMessage);
  });

  // Update validity when a selection is made
  form.addEventListener('o-change', () => {
    const isValid = radioGroup.value === '3';
    radioGroup.setCustomValidity(isValid ? '' : errorMessage);
  });

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx:react
import { useEffect, useRef } from 'react';
import { OButton, OIcon, ORadio, ORadioGroup } from 'O-PACKAGE-FULL-NAME-O/dist/react';
const App = () => {
  const radioGroup = useRef(null);
  const errorMessage = 'You must choose this option';

  function handleChange() {
    radioGroup.current.setCustomValidity(radioGroup.current.value === '3' ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    radio.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <ORadioGroup ref={radioGroup} label="Select an option" name="a" value="1" onOChange={handleChange}>
        <ORadio value="1">Not me</ORadio>
        <ORadio value="2">Me neither</ORadio>
        <ORadio value="3">Choose me</ORadio>
      </ORadioGroup>
      <br />
      <OButton type="submit" variant="primary">
        Submit
      </OButton>
    </form>
  );
};
```
