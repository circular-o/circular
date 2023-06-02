# Button

[component-header:o-button]

```html preview
<o-button>Button</o-button>
```

```jsx react
import { OButton } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OButton>Button</OButton>;
```

## Examples

### Variants

Use the `variant` attribute to set the button's variant.

```html preview
<o-button variant="default">Default</o-button>
<o-button variant="primary">Primary</o-button>
<o-button variant="success">Success</o-button>
<o-button variant="neutral">Neutral</o-button>
<o-button variant="warning">Warning</o-button>
<o-button variant="danger">Danger</o-button>
```

```jsx react
import { OButton } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <OButton variant="default">Default</OButton>
    <OButton variant="primary">Primary</OButton>
    <OButton variant="success">Success</OButton>
    <OButton variant="neutral">Neutral</OButton>
    <OButton variant="warning">Warning</OButton>
    <OButton variant="danger">Danger</OButton>
  </>
);
```

### Sizes

Use the `size` attribute to change a button's size.

```html preview
<o-button size="small">Small</o-button>
<o-button size="medium">Medium</o-button>
<o-button size="large">Large</o-button>
```

```jsx react
import { OButton } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <OButton size="small">Small</OButton>
    <OButton size="medium">Medium</OButton>
    <OButton size="large">Large</OButton>
  </>
);
```

### Outline Buttons

Use the `outline` attribute to draw outlined buttons with transparent backgrounds.

```html preview
<o-button variant="default" outline>Default</o-button>
<o-button variant="primary" outline>Primary</o-button>
<o-button variant="success" outline>Success</o-button>
<o-button variant="neutral" outline>Neutral</o-button>
<o-button variant="warning" outline>Warning</o-button>
<o-button variant="danger" outline>Danger</o-button>
```

```jsx react
import { OButton } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <OButton variant="default" outline>
      Default
    </OButton>
    <OButton variant="primary" outline>
      Primary
    </OButton>
    <OButton variant="success" outline>
      Success
    </OButton>
    <OButton variant="neutral" outline>
      Neutral
    </OButton>
    <OButton variant="warning" outline>
      Warning
    </OButton>
    <OButton variant="danger" outline>
      Danger
    </OButton>
  </>
);
```

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

```html preview
<o-button size="small" pill>Small</o-button>
<o-button size="medium" pill>Medium</o-button>
<o-button size="large" pill>Large</o-button>
```

```jsx react
import { OButton } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <OButton size="small" pill>
      Small
    </OButton>
    <OButton size="medium" pill>
      Medium
    </OButton>
    <OButton size="large" pill>
      Large
    </OButton>
  </>
);
```

### Circle Buttons

Use the `circle` attribute to create circular icon buttons. When this attribute is set, the button expects a single `<o-icon>` in the default slot.

```html preview
<o-button variant="default" size="small" circle>
  <o-icon name="gear" label="Settings"></o-icon>
</o-button>

<o-button variant="default" size="medium" circle>
  <o-icon name="gear" label="Settings"></o-icon>
</o-button>

<o-button variant="default" size="large" circle>
  <o-icon name="gear" label="Settings"></o-icon>
</o-button>
```

```jsx react
import { OButton, OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <OButton variant="default" size="small" circle>
      <OIcon name="gear" />
    </OButton>
    <OButton variant="default" size="medium" circle>
      <OIcon name="gear" />
    </OButton>
    <OButton variant="default" size="large" circle>
      <OIcon name="gear" />
    </OButton>
  </>
);
```

### Text Buttons

Use the `text` variant to create text buttons that share the same size as regular buttons but don't have backgrounds or borders.

```html preview
<o-button variant="text" size="small">Text</o-button>
<o-button variant="text" size="medium">Text</o-button>
<o-button variant="text" size="large">Text</o-button>
```

```jsx react
import { OButton } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <OButton variant="text" size="small">
      Text
    </OButton>
    <OButton variant="text" size="medium">
      Text
    </OButton>
    <OButton variant="text" size="large">
      Text
    </OButton>
  </>
);
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. <kbd>CMD/CTRL/SHIFT + CLICK</kbd>) and exposes the `target` and `download` attributes.

```html preview
<o-button href="https://example.com/">Link</o-button>
<o-button href="https://example.com/" target="_blank">New Window</o-button>
<o-button href="assets/images/wordmark.svg" download="%PACKAGE-NAME%.svg">Download</o-button>
<o-button href="https://example.com/" disabled>Disabled</o-button>
```

```jsx react
import { OButton } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <OButton href="https://example.com/">Link</OButton>
    <OButton href="https://example.com/" target="_blank">
      New Window
    </OButton>
    <OButton href="assets/images/wordmark.svg" download="%PACKAGE-NAME%.svg">
      Download
    </OButton>
    <OButton href="https://example.com/" disabled>
      Disabled
    </OButton>
  </>
);
```

?> When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).

### Setting a Custom Width

As expected, buttons can be given a custom width by setting the `width` attribute. This is useful for making buttons span the full width of their container on smaller screens.

```html preview
<o-button variant="default" size="small" style="width: 100%; margin-bottom: 1rem;">Small</o-button>
<o-button variant="default" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</o-button>
<o-button variant="default" size="large" style="width: 100%;">Large</o-button>
```

```jsx react
import { OButton } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <OButton variant="default" size="small" style={{ width: '100%', marginBottom: '1rem' }}>
      Small
    </OButton>
    <OButton variant="default" size="medium" style={{ width: '100%', marginBottom: '1rem' }}>
      Medium
    </OButton>
    <OButton variant="default" size="large" style={{ width: '100%' }}>
      Large
    </OButton>
  </>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<o-button variant="default" size="small">
  <o-icon slot="prefix" name="gear"></o-icon>
  Settings
</o-button>

<o-button variant="default" size="small">
  <o-icon slot="suffix" name="arrow-counterclockwise"></o-icon>
  Refresh
</o-button>

<o-button variant="default" size="small">
  <o-icon slot="prefix" name="link-45deg"></o-icon>
  <o-icon slot="suffix" name="box-arrow-up-right"></o-icon>
  Open
</o-button>

<br /><br />

<o-button variant="default">
  <o-icon slot="prefix" name="gear"></o-icon>
  Settings
</o-button>

<o-button variant="default">
  <o-icon slot="suffix" name="arrow-counterclockwise"></o-icon>
  Refresh
</o-button>

<o-button variant="default">
  <o-icon slot="prefix" name="link-45deg"></o-icon>
  <o-icon slot="suffix" name="box-arrow-up-right"></o-icon>
  Open
</o-button>

<br /><br />

<o-button variant="default" size="large">
  <o-icon slot="prefix" name="gear"></o-icon>
  Settings
</o-button>

<o-button variant="default" size="large">
  <o-icon slot="suffix" name="arrow-counterclockwise"></o-icon>
  Refresh
</o-button>

<o-button variant="default" size="large">
  <o-icon slot="prefix" name="link-45deg"></o-icon>
  <o-icon slot="suffix" name="box-arrow-up-right"></o-icon>
  Open
</o-button>
```

```jsx react
import { OButton, OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <OButton variant="default" size="small">
      <OIcon slot="prefix" name="gear"></OIcon>
      Settings
    </OButton>

    <OButton variant="default" size="small">
      <OIcon slot="suffix" name="arrow-counterclockwise"></OIcon>
      Refresh
    </OButton>

    <OButton variant="default" size="small">
      <OIcon slot="prefix" name="link-45deg"></OIcon>
      <OIcon slot="suffix" name="box-arrow-up-right"></OIcon>
      Open
    </OButton>

    <br />
    <br />

    <OButton variant="default">
      <OIcon slot="prefix" name="gear"></OIcon>
      Settings
    </OButton>

    <OButton variant="default">
      <OIcon slot="suffix" name="arrow-counterclockwise"></OIcon>
      Refresh
    </OButton>

    <OButton variant="default">
      <OIcon slot="prefix" name="link-45deg"></OIcon>
      <OIcon slot="suffix" name="box-arrow-up-right"></OIcon>
      Open
    </OButton>

    <br />
    <br />

    <OButton variant="default" size="large">
      <OIcon slot="prefix" name="gear"></OIcon>
      Settings
    </OButton>

    <OButton variant="default" size="large">
      <OIcon slot="suffix" name="arrow-counterclockwise"></OIcon>
      Refresh
    </OButton>

    <OButton variant="default" size="large">
      <OIcon slot="prefix" name="link-45deg"></OIcon>
      <OIcon slot="suffix" name="box-arrow-up-right"></OIcon>
      Open
    </OButton>
  </>
);
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html preview
<o-button size="small" caret>Small</o-button>
<o-button size="medium" caret>Medium</o-button>
<o-button size="large" caret>Large</o-button>
```

```jsx react
import { OButton } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <OButton size="small" caret>
      Small
    </OButton>
    <OButton size="medium" caret>
      Medium
    </OButton>
    <OButton size="large" caret>
      Large
    </OButton>
  </>
);
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.

```html preview
<o-button variant="default" loading>Default</o-button>
<o-button variant="primary" loading>Primary</o-button>
<o-button variant="success" loading>Success</o-button>
<o-button variant="neutral" loading>Neutral</o-button>
<o-button variant="warning" loading>Warning</o-button>
<o-button variant="danger" loading>Danger</o-button>
```

```jsx react
import { OButton } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <OButton variant="default" loading>
      Default
    </OButton>
    <OButton variant="primary" loading>
      Primary
    </OButton>
    <OButton variant="success" loading>
      Success
    </OButton>
    <OButton variant="neutral" loading>
      Neutral
    </OButton>
    <OButton variant="warning" loading>
      Warning
    </OButton>
    <OButton variant="danger" loading>
      Danger
    </OButton>
  </>
);
```

### Disabled

Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.

```html preview
<o-button variant="default" disabled>Default</o-button>
<o-button variant="primary" disabled>Primary</o-button>
<o-button variant="success" disabled>Success</o-button>
<o-button variant="neutral" disabled>Neutral</o-button>
<o-button variant="warning" disabled>Warning</o-button>
<o-button variant="danger" disabled>Danger</o-button>
```

```jsx react
import { OButton } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <OButton variant="default" disabled>
      Default
    </OButton>

    <OButton variant="primary" disabled>
      Primary
    </OButton>

    <OButton variant="success" disabled>
      Success
    </OButton>

    <OButton variant="neutral" disabled>
      Neutral
    </OButton>

    <OButton variant="warning" disabled>
      Warning
    </OButton>

    <OButton variant="danger" disabled>
      Danger
    </OButton>
  </>
);
```

### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `o-button[variant="primary"]`).

```html preview
<o-button class="pink">Pink Button</o-button>

<style>
  o-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --o-input-height-medium: 48px;
    --o-input-border-width: 4px;

    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--o-transition-medium) transform ease, var(--o-transition-medium) border ease;
  }

  o-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  o-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  o-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```

[component-metadata:o-button]
