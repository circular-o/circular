---
meta:
  title: Switch
  description: Switches allow the user to toggle an option on or off.
layout: component
---

```html:preview
<o-switch>Switch</o-switch>
```

```jsx:react
import { OSwitch } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => <OSwitch>Switch</OSwitch>;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Checked

Use the `checked` attribute to activate the switch.

```html:preview
<o-switch checked>Checked</o-switch>
```

```jsx:react
import { OSwitch } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => <OSwitch checked>Checked</OSwitch>;
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html:preview
<o-switch disabled>Disabled</o-switch>
```

```jsx:react
import { OSwitch } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => <OSwitch disabled>Disabled</OSwitch>;
```

## Sizes

Use the `size` attribute to change a switch's size.

```html:preview
<o-switch size="small">Small</o-switch>
<br />
<o-switch size="medium">Medium</o-switch>
<br />
<o-switch size="large">Large</o-switch>
```

```jsx:react
import { OSwitch } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <>
    <OSwitch size="small">Small</OSwitch>
    <br />
    <OSwitch size="medium">Medium</OSwitch>
    <br />
    <OSwitch size="large">Large</OSwitch>
  </>
);
```

### Custom Styles

Use the available custom properties to change how the switch is styled.

```html:preview
<o-switch style="--width: 80px; --height: 40px; --thumb-size: 36px;">Really big</o-switch>
```

{% raw %}

```jsx:react
import { OSwitch } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OSwitch
    style={{
      '--width': '80px',
      '--height': '32px',
      '--thumb-size': '26px'
    }}
  />
);
```

{% endraw %}
