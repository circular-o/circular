# Input

[component-header:o-input]

```html preview
<o-input></o-input>
```

```jsx react
import { OInput } from '%PACKAGE_NAME%/dist/react';

const App = () => <OInput />;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<o-input label="What is your name?"></o-input>
```

```jsx react
import { OIcon, OInput } from '%PACKAGE_NAME%/dist/react';

const App = () => <OInput label="What is your name?" />;
```

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<o-input label="Nickname" help-text="What would you like people to call you?"></o-input>
```

```jsx react
import { OIcon, OInput } from '%PACKAGE_NAME%/dist/react';

const App = () => <OInput label="Nickname" help-text="What would you like people to call you?" />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<o-input placeholder="Type something"></o-input>
```

```jsx react
import { OInput } from '%PACKAGE_NAME%/dist/react';

const App = () => <OInput placeholder="Type something" />;
```

### Clearable

Add the `clearable` attribute to add a clear button when the input has content.

```html preview
<o-input placeholder="Clearable" clearable></o-input>
```

```jsx react
import { OInput } from '%PACKAGE_NAME%/dist/react';

const App = () => <OInput placeholder="Clearable" clearable />;
```

### Toggle Password

Add the `password-toggle` attribute to add a toggle button that will show the password when activated.

```html preview
<o-input type="password" placeholder="Password Toggle" password-toggle></o-input>
```

```jsx react
import { OInput } from '%PACKAGE_NAME%/dist/react';

const App = () => <OInput type="password" placeholder="Password Toggle" size="medium" password-toggle />;
```

### Filled Inputs

Add the `filled` attribute to draw a filled input.

```html preview
<o-input placeholder="Type something" filled></o-input>
```

```jsx react
import { OInput } from '%PACKAGE_NAME%/dist/react';

const App = () => <OInput placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable an input.

```html preview
<o-input placeholder="Disabled" disabled></o-input>
```

```jsx react
import { OInput } from '%PACKAGE_NAME%/dist/react';

const App = () => <OInput placeholder="Disabled" disabled />;
```

### Sizes

Use the `size` attribute to change an input's size.

```html preview
<o-input placeholder="Small" size="small"></o-input>
<br />
<o-input placeholder="Medium" size="medium"></o-input>
<br />
<o-input placeholder="Large" size="large"></o-input>
```

```jsx react
import { OInput } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <>
    <OInput placeholder="Small" size="small" />
    <br />
    <OInput placeholder="Medium" size="medium" />
    <br />
    <OInput placeholder="Large" size="large" />
  </>
);
```

### Pill

Use the `pill` attribute to give inputs rounded edges.

```html preview
<o-input placeholder="Small" size="small" pill></o-input>
<br />
<o-input placeholder="Medium" size="medium" pill></o-input>
<br />
<o-input placeholder="Large" size="large" pill></o-input>
```

```jsx react
import { OInput } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <>
    <OInput placeholder="Small" size="small" pill />
    <br />
    <OInput placeholder="Medium" size="medium" pill />
    <br />
    <OInput placeholder="Large" size="large" pill />
  </>
);
```

### Input Types

The `type` attribute controls the type of input the browser renders.

```html preview
<o-input type="email" placeholder="Email"></o-input>
<br />
<o-input type="number" placeholder="Number"></o-input>
<br />
<o-input type="date" placeholder="Date"></o-input>
```

```jsx react
import { OInput } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <>
    <OInput type="email" placeholder="Email" />
    <br />
    <OInput type="number" placeholder="Number" />
    <br />
    <OInput type="date" placeholder="Date" />
  </>
);
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<o-input placeholder="Small" size="small">
  <o-icon name="house" slot="prefix"></o-icon>
  <o-icon name="chat" slot="suffix"></o-icon>
</o-input>
<br />
<o-input placeholder="Medium" size="medium">
  <o-icon name="house" slot="prefix"></o-icon>
  <o-icon name="chat" slot="suffix"></o-icon>
</o-input>
<br />
<o-input placeholder="Large" size="large">
  <o-icon name="house" slot="prefix"></o-icon>
  <o-icon name="chat" slot="suffix"></o-icon>
</o-input>
```

```jsx react
import { OIcon, OInput } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <>
    <OInput placeholder="Small" size="small">
      <OIcon name="house" slot="prefix"></OIcon>
      <OIcon name="chat" slot="suffix"></OIcon>
    </OInput>
    <br />
    <OInput placeholder="Medium" size="medium">
      <OIcon name="house" slot="prefix"></OIcon>
      <OIcon name="chat" slot="suffix"></OIcon>
    </OInput>
    <br />
    <OInput placeholder="Large" size="large">
      <OIcon name="house" slot="prefix"></OIcon>
      <OIcon name="chat" slot="suffix"></OIcon>
    </OInput>
  </>
);
```

### Customizing Label Position

Use [CSS parts](#css-parts) to customize the way form controls are drawn. This example uses CSS grid to position the label to the left of the control, but the possible orientations are nearly endless. The same technique works for inputs, textareas, radio groups, and similar form controls.

```html preview
<o-input class="label-on-left" label="Name" help-text="Enter your name""></o-input>
<o-input class="label-on-left" label="Email" type="email" help-text="Enter your email"></o-input>
<o-textarea class="label-on-left" label="Bio" help-text="Tell us something about yourself"></o-textarea>

<style>
  .label-on-left {
    --label-width: 3.75rem;
    --gap-width: 1rem;
  }

  .label-on-left + .label-on-left {
    margin-top: var(--o-spacing-medium);
  }

  .label-on-left::part(form-control) {
    display: grid;
    grid: auto / var(--label-width) 1fr;
    gap: var(--o-spacing-3x-small) var(--gap-width);
    align-items: center;
  }

  .label-on-left::part(form-control-label) {
    text-align: right;
  }

  .label-on-left::part(form-control-help-text) {
    grid-column-start: 2;
  }
</style>
```

[component-metadata:o-input]
