# Checkbox

[component-header:o-checkbox]

```html preview
<o-checkbox>Checkbox</o-checkbox>
```

```jsx react
import { OCheckbox } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => <OCheckbox>Checkbox</OCheckbox>;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Checked

Use the `checked` attribute to activate the checkbox.

```html preview
<o-checkbox checked>Checked</o-checkbox>
```

```jsx react
import { OCheckbox } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => <OCheckbox checked>Checked</OCheckbox>;
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

```html preview
<o-checkbox indeterminate>Indeterminate</o-checkbox>
```

```jsx react
import { OCheckbox } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => <OCheckbox indeterminate>Indeterminate</OCheckbox>;
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

```html preview
<o-checkbox disabled>Disabled</o-checkbox>
```

```jsx react
import { OCheckbox } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => <OCheckbox disabled>Disabled</OCheckbox>;
```

## Sizes

Use the `size` attribute to change a checkbox's size.

```html preview
<o-checkbox size="small">Small</o-checkbox>
<br />
<o-checkbox size="medium">Medium</o-checkbox>
<br />
<o-checkbox size="large">Large</o-checkbox>
```

```jsx react
import { OCheckbox } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <OCheckbox size="small">Small</OCheckbox>
    <br />
    <OCheckbox size="medium">Medium</OCheckbox>
    <br />
    <OCheckbox size="large">Large</OCheckbox>
  </>
);
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <o-checkbox>Check me</o-checkbox>
  <br />
  <o-button type="submit" variant="primary" style="margin-top: 1rem;">Submit</o-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('o-checkbox');
  const errorMessage = `Don't forget to check me!`;

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('o-checkbox').then(async () => {
    await checkbox.updateComplete;
    checkbox.setCustomValidity(errorMessage);
  });

  // Update validity on change
  checkbox.addEventListener('o-change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });

  // Handle submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { useEffect, useRef } from 'react';
import { OButton, OCheckbox } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => {
  const checkbox = useRef(null);
  const errorMessage = `Don't forget to check me!`;

  function handleChange() {
    checkbox.current.setCustomValidity(checkbox.current.checked ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    checkbox.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <OCheckbox ref={checkbox} onSlChange={handleChange}>
        Check me
      </OCheckbox>
      <br />
      <OButton type="submit" variant="primary" style={{ marginTop: '1rem' }}>
        Submit
      </OButton>
    </form>
  );
};
```

[component-metadata:o-checkbox]
