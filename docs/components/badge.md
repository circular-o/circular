# Badge

[component-header:o-badge]

```html preview
<o-badge>Badge</o-badge>
```

```jsx react
import { OBadge } from '%PACKAGE_NAME%/dist/react';

const App = () => <OBadge>Badge</OBadge>;
```

## Examples

### Variants

Set the `variant` attribute to change the badge's variant.

```html preview
<o-badge variant="primary">Primary</o-badge>
<o-badge variant="success">Success</o-badge>
<o-badge variant="neutral">Neutral</o-badge>
<o-badge variant="warning">Warning</o-badge>
<o-badge variant="danger">Danger</o-badge>
```

```jsx react
import { OBadge } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <>
    <OBadge variant="primary">Primary</OBadge>
    <OBadge variant="success">Success</OBadge>
    <OBadge variant="neutral">Neutral</OBadge>
    <OBadge variant="warning">Warning</OBadge>
    <OBadge variant="danger">Danger</OBadge>
  </>
);
```

### Pill Badges

Use the `pill` attribute to give badges rounded edges.

```html preview
<o-badge variant="primary" pill>Primary</o-badge>
<o-badge variant="success" pill>Success</o-badge>
<o-badge variant="neutral" pill>Neutral</o-badge>
<o-badge variant="warning" pill>Warning</o-badge>
<o-badge variant="danger" pill>Danger</o-badge>
```

```jsx react
import { OBadge } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <>
    <OBadge variant="primary" pill>
      Primary
    </OBadge>
    <OBadge variant="success" pill>
      Success
    </OBadge>
    <OBadge variant="neutral" pill>
      Neutral
    </OBadge>
    <OBadge variant="warning" pill>
      Warning
    </OBadge>
    <OBadge variant="danger" pill>
      Danger
    </OBadge>
  </>
);
```

### Pulsating Badges

Use the `pulse` attribute to draw attention to the badge with a subtle animation.

```html preview
<div class="badge-pulse">
  <o-badge variant="primary" pill pulse>1</o-badge>
  <o-badge variant="success" pill pulse>1</o-badge>
  <o-badge variant="neutral" pill pulse>1</o-badge>
  <o-badge variant="warning" pill pulse>1</o-badge>
  <o-badge variant="danger" pill pulse>1</o-badge>
</div>

<style>
  .badge-pulse o-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```

```jsx react
import { OBadge } from '%PACKAGE_NAME%/dist/react';

const css = `
  .badge-pulse o-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const App = () => (
  <>
    <div className="badge-pulse">
      <OBadge variant="primary" pill pulse>
        1
      </OBadge>
      <OBadge variant="success" pill pulse>
        1
      </OBadge>
      <OBadge variant="neutral" pill pulse>
        1
      </OBadge>
      <OBadge variant="warning" pill pulse>
        1
      </OBadge>
      <OBadge variant="danger" pill pulse>
        1
      </OBadge>
    </div>

    <style>{css}</style>
  </>
);
```

### With Buttons

One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.

```html preview
<o-button>
  Requests
  <o-badge pill>30</o-badge>
</o-button>

<o-button style="margin-inline-start: 1rem;">
  Warnings
  <o-badge variant="warning" pill>8</o-badge>
</o-button>

<o-button style="margin-inline-start: 1rem;">
  Errors
  <o-badge variant="danger" pill>6</o-badge>
</o-button>
```

```jsx react
import { OBadge, OButton } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <>
    <OButton>
      Requests
      <OBadge pill>30</OBadge>
    </OButton>

    <OButton style={{ marginInlineStart: '1rem' }}>
      Warnings
      <OBadge variant="warning" pill>
        8
      </OBadge>
    </OButton>

    <OButton style={{ marginInlineStart: '1rem' }}>
      Errors
      <OBadge variant="danger" pill>
        6
      </OBadge>
    </OButton>
  </>
);
```

### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

```html preview
<o-menu style="max-width: 240px;">
  <o-menu-label>Messages</o-menu-label>
  <o-menu-item>Comments <o-badge slot="suffix" variant="neutral" pill>4</o-badge></o-menu-item>
  <o-menu-item>Replies <o-badge slot="suffix" variant="neutral" pill>12</o-badge></o-menu-item>
</o-menu>
```

```jsx react
import { OBadge, OButton, OMenu, OMenuItem, OMenuLabel } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <OMenu
    style={{
      maxWidth: '240px',
      border: 'solid 1px var(--o-panel-border-color)',
      borderRadius: 'var(--o-border-radius-medium)'
    }}
  >
    <OMenuLabel>Messages</OMenuLabel>
    <OMenuItem>
      Comments
      <OBadge slot="suffix" variant="neutral" pill>
        4
      </OBadge>
    </OMenuItem>
    <OMenuItem>
      Replies
      <OBadge slot="suffix" variant="neutral" pill>
        12
      </OBadge>
    </OMenuItem>
  </OMenu>
);
```

[component-metadata:o-badge]
