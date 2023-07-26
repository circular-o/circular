---
meta:
  title: Divider
  description: Dividers are used to visually separate or group elements.
layout: component
---

```html:preview
<o-divider></o-divider>
```

```jsx:react
import { ODivider } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => <ODivider />;
```

## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html:preview
<o-divider style="--width: 4px;"></o-divider>
```

{% raw %}

```jsx:react
import { ODivider } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => <ODivider style={{ '--width': '4px' }} />;
```

{% endraw %}

### Color

Use the `--color` custom property to change the color of the divider.

```html:preview
<o-divider style="--color: tomato;"></o-divider>
```

{% raw %}

```jsx:react
import { ODivider } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => <ODivider style={{ '--color': 'tomato' }} />;
```

{% endraw %}

### Spacing

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html:preview
<div style="text-align: center;">
  Above
  <o-divider style="--spacing: 2rem;"></o-divider>
  Below
</div>
```

{% raw %}

```jsx:react
import { ODivider } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <>
    Above
    <ODivider style={{ '--spacing': '2rem' }} />
    Below
  </>
);
```

{% endraw %}

### Vertical

Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.

```html:preview
<div style="display: flex; align-items: center; height: 2rem;">
  First
  <o-divider vertical></o-divider>
  Middle
  <o-divider vertical></o-divider>
  Last
</div>
```

{% raw %}

```jsx:react
import { ODivider } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '2rem'
    }}
  >
    First
    <ODivider vertical />
    Middle
    <ODivider vertical />
    Last
  </div>
);
```

{% endraw %}

### Menu Dividers

Use dividers in [menus](/components/menu) to visually group menu items.

```html:preview
<o-menu style="max-width: 200px;">
  <o-menu-item value="1">Option 1</o-menu-item>
  <o-menu-item value="2">Option 2</o-menu-item>
  <o-menu-item value="3">Option 3</o-menu-item>
  <o-divider></o-divider>
  <o-menu-item value="4">Option 4</o-menu-item>
  <o-menu-item value="5">Option 5</o-menu-item>
  <o-menu-item value="6">Option 6</o-menu-item>
</o-menu>
```

{% raw %}

```jsx:react
import { ODivider, OMenu, OMenuItem } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OMenu style={{ maxWidth: '200px' }}>
    <OMenuItem value="1">Option 1</OMenuItem>
    <OMenuItem value="2">Option 2</OMenuItem>
    <OMenuItem value="3">Option 3</OMenuItem>
    <o-divider />
    <OMenuItem value="4">Option 4</OMenuItem>
    <OMenuItem value="5">Option 5</OMenuItem>
    <OMenuItem value="6">Option 6</OMenuItem>
  </OMenu>
);
```

{% endraw %}
