# Icon Button

[component-header:o-icon-button]

For a full list of icons that come bundled with Shoelace, refer to the [icon component](/components/icon).

```html preview
<o-icon-button name="gear" label="Settings"></o-icon-button>
```

```jsx react
import { OIconButton } from '%PACKAGE_NAME%/dist/react';

const App = () => <OIconButton name="gear" label="Settings" />;
```

## Examples

### Sizes

Icon buttons inherit their parent element's `font-size`.

```html preview
<o-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></o-icon-button>
<o-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></o-icon-button>
<o-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></o-icon-button>
```

```jsx react
import { OIconButton } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <>
    <OIconButton name="pencil" label="Edit" style={{ fontSize: '1.5rem' }} />
    <OIconButton name="pencil" label="Edit" style={{ fontSize: '2rem' }} />
    <OIconButton name="pencil" label="Edit" style={{ fontSize: '2.5rem' }} />
  </>
);
```

### Colors

Icon buttons are designed to have a uniform appearance, so their color is not inherited. However, you can still customize them by styling the `base` part.

```html preview
<div class="icon-button-color">
  <o-icon-button name="type-bold" label="Bold"></o-icon-button>
  <o-icon-button name="type-italic" label="Italic"></o-icon-button>
  <o-icon-button name="type-underline" label="Underline"></o-icon-button>
</div>

<style>
  .icon-button-color o-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color o-icon-button::part(base):hover,
  .icon-button-color o-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color o-icon-button::part(base):active {
    color: #960077;
  }
</style>
```

```jsx react
import { OIconButton } from '%PACKAGE_NAME%/dist/react';

const css = `
  .icon-button-color o-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color o-icon-button::part(base):hover,
  .icon-button-color o-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color o-icon-button::part(base):active {
    color: #960077;
  }
`;

const App = () => (
  <>
    <div className="icon-button-color">
      <OIconButton name="type-bold" label="Bold" />
      <OIconButton name="type-italic" label="Italic" />
      <OIconButton name="type-underline" label="Underline" />
    </div>

    <style>{css}</style>
  </>
);
```

### Link Buttons

Use the `href` attribute to convert the button to a link.

```html preview
<o-icon-button name="gear" label="Settings" href="https://example.com" target="_blank"></o-icon-button>
```

```jsx react
import { OIconButton } from '%PACKAGE_NAME%/dist/react';

const App = () => <OIconButton name="gear" label="Settings" href="https://example.com" target="_blank" />;
```

### Icon Button with Tooltip

Wrap a tooltip around an icon button to provide contextual information to the user.

```html preview
<o-tooltip content="Settings">
  <o-icon-button name="gear" label="Settings"></o-icon-button>
</o-tooltip>
```

```jsx react
import { OIconButton, OTooltip } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <OTooltip content="Settings">
    <OIconButton name="gear" label="Settings" />
  </OTooltip>
);
```

### Disabled

Use the `disabled` attribute to disable the icon button.

```html preview
<o-icon-button name="gear" label="Settings" disabled></o-icon-button>
```

```jsx react
import { OIconButton } from '%PACKAGE_NAME%/dist/react';

const App = () => <OIconButton name="gear" label="Settings" disabled />;
```

[component-metadata:o-icon-button]
