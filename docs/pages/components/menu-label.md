---
meta:
  title: Menu Label
  description: Menu labels are used to describe a group of menu items.
layout: component
---

```html:preview
<o-menu style="max-width: 200px;">
  <o-menu-label>Fruits</o-menu-label>
  <o-menu-item value="apple">Apple</o-menu-item>
  <o-menu-item value="banana">Banana</o-menu-item>
  <o-menu-item value="orange">Orange</o-menu-item>
  <o-divider></o-divider>
  <o-menu-label>Vegetables</o-menu-label>
  <o-menu-item value="broccoli">Broccoli</o-menu-item>
  <o-menu-item value="carrot">Carrot</o-menu-item>
  <o-menu-item value="zucchini">Zucchini</o-menu-item>
</o-menu>
```

{% raw %}

```jsx:react
import { ODivider, OMenu, OMenuLabel, OMenuItem } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OMenu style={{ maxWidth: '200px' }}>
    <OMenuLabel>Fruits</OMenuLabel>
    <OMenuItem value="apple">Apple</OMenuItem>
    <OMenuItem value="banana">Banana</OMenuItem>
    <OMenuItem value="orange">Orange</OMenuItem>
    <ODivider />
    <OMenuLabel>Vegetables</OMenuLabel>
    <OMenuItem value="broccoli">Broccoli</OMenuItem>
    <OMenuItem value="carrot">Carrot</OMenuItem>
    <OMenuItem value="zucchini">Zucchini</OMenuItem>
  </OMenu>
);
```

{% endraw %}
