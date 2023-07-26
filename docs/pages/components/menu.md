---
meta:
  title: Menu
  description: Menus provide a list of options for the user to choose from.
layout: component
---

You can use [menu items](/components/menu-item), [menu labels](/components/menu-label), and [dividers](/components/divider) to compose a menu. Menus support keyboard interactions, including type-to-select an option.

```html:preview
<o-menu style="max-width: 200px;">
  <o-menu-item value="undo">Undo</o-menu-item>
  <o-menu-item value="redo">Redo</o-menu-item>
  <o-divider></o-divider>
  <o-menu-item value="cut">Cut</o-menu-item>
  <o-menu-item value="copy">Copy</o-menu-item>
  <o-menu-item value="paste">Paste</o-menu-item>
  <o-menu-item value="delete">Delete</o-menu-item>
</o-menu>
```

{% raw %}

```jsx:react
import { ODivider, OMenu, OMenuItem } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OMenu style={{ maxWidth: '200px' }}>
    <OMenuItem value="undo">Undo</OMenuItem>
    <OMenuItem value="redo">Redo</OMenuItem>
    <ODivider />
    <OMenuItem value="cut">Cut</OMenuItem>
    <OMenuItem value="copy">Copy</OMenuItem>
    <OMenuItem value="paste">Paste</OMenuItem>
    <OMenuItem value="delete">Delete</OMenuItem>
  </OMenu>
);
```

{% endraw %}

:::tip
Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.
:::
