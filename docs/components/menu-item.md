# Menu Item

[component-header:o-menu-item]

```html preview
<o-menu style="max-width: 200px;">
  <o-menu-item>Option 1</o-menu-item>
  <o-menu-item>Option 2</o-menu-item>
  <o-menu-item>Option 3</o-menu-item>
  <o-divider></o-divider>
  <o-menu-item type="checkbox" checked>Checkbox</o-menu-item>
  <o-menu-item disabled>Disabled</o-menu-item>
  <o-divider></o-divider>
  <o-menu-item>
    Prefix Icon
    <o-icon slot="prefix" name="gift"></o-icon>
  </o-menu-item>
  <o-menu-item>
    Suffix Icon
    <o-icon slot="suffix" name="heart"></o-icon>
  </o-menu-item>
</o-menu>
```

```jsx react
import { ODivider, OIcon, OMenu, OMenuItem } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OMenu style={{ maxWidth: '200px' }}>
    <OMenuItem>Option 1</OMenuItem>
    <OMenuItem>Option 2</OMenuItem>
    <OMenuItem>Option 3</OMenuItem>
    <ODivider />
    <OMenuItem type="checkbox" checked>
      Checkbox
    </OMenuItem>
    <OMenuItem disabled>Disabled</OMenuItem>
    <ODivider />
    <OMenuItem>
      Prefix Icon
      <OIcon slot="prefix" name="gift" />
    </OMenuItem>
    <OMenuItem>
      Suffix Icon
      <OIcon slot="suffix" name="heart" />
    </OMenuItem>
  </OMenu>
);
```

## Examples

### Disabled

Add the `disabled` attribute to disable the menu item so it cannot be selected.

```html preview
<o-menu style="max-width: 200px;">
  <o-menu-item>Option 1</o-menu-item>
  <o-menu-item disabled>Option 2</o-menu-item>
  <o-menu-item>Option 3</o-menu-item>
</o-menu>
```

```jsx react
import { OMenu, OMenuItem } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OMenu style={{ maxWidth: '200px' }}>
    <OMenuItem>Option 1</OMenuItem>
    <OMenuItem disabled>Option 2</OMenuItem>
    <OMenuItem>Option 3</OMenuItem>
  </OMenu>
);
```

### Prefix & Suffix

Add content to the start and end of menu items using the `prefix` and `suffix` slots.

```html preview
<o-menu style="max-width: 200px;">
  <o-menu-item>
    <o-icon slot="prefix" name="house"></o-icon>
    Home
  </o-menu-item>

  <o-menu-item>
    <o-icon slot="prefix" name="envelope"></o-icon>
    Messages
    <o-badge slot="suffix" variant="primary" pill>12</o-badge>
  </o-menu-item>

  <o-divider></o-divider>

  <o-menu-item>
    <o-icon slot="prefix" name="gear"></o-icon>
    Settings
  </o-menu-item>
</o-menu>
```

```jsx react
import { OBadge, ODivider, OIcon, OMenu, OMenuItem } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OMenu style={{ maxWidth: '200px' }}>
    <OMenuItem>
      <OIcon slot="prefix" name="house" />
      Home
    </OMenuItem>

    <OMenuItem>
      <OIcon slot="prefix" name="envelope" />
      Messages
      <OBadge slot="suffix" variant="primary" pill>
        12
      </OBadge>
    </OMenuItem>

    <ODivider />

    <OMenuItem>
      <OIcon slot="prefix" name="gear" />
      Settings
    </OMenuItem>
  </OMenu>
);
```

### Checkbox Menu Items

Set the `type` attribute to `checkbox` to create a menu item that will toggle on and off when selected. You can use the `checked` attribute to set the initial state.

Checkbox menu items are visually indistinguishable from regular menu items. Their ability to be toggled is primarily inferred from context, much like you'd find in the menu of a native app.

```html preview
<o-menu style="max-width: 200px;">
  <o-menu-item type="checkbox">Autosave</o-menu-item>
  <o-menu-item type="checkbox" checked>Check Spelling</o-menu-item>
  <o-menu-item type="checkbox">Word Wrap</o-menu-item>
</o-menu>
```

```jsx react
import { OMenu, OMenuItem } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OMenu style={{ maxWidth: '200px' }}>
    <OMenuItem type="checkbox">Autosave</OMenuItem>
    <OMenuItem type="checkbox" checked>
      Check Spelling
    </OMenuItem>
    <OMenuItem type="checkbox">Word Wrap</OMenuItem>
  </OMenu>
);
```

### Value & Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the `o-select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value, its checked state, and more.

```html preview
<o-menu class="menu-value" style="max-width: 200px;">
  <o-menu-item value="opt-1">Option 1</o-menu-item>
  <o-menu-item value="opt-2">Option 2</o-menu-item>
  <o-menu-item value="opt-3">Option 3</o-menu-item>
  <o-divider></o-divider>
  <o-menu-item type="checkbox" value="opt-4">Checkbox 4</o-menu-item>
  <o-menu-item type="checkbox" value="opt-5">Checkbox 5</o-menu-item>
  <o-menu-item type="checkbox" value="opt-6">Checkbox 6</o-menu-item>
</o-menu>

<script>
  const menu = document.querySelector('.menu-value');

  menu.addEventListener('o-select', event => {
    const item = event.detail.item;

    // Log value
    if (item.type === 'checkbox') {
      console.log(`Selected value: ${item.value} (${item.checked ? 'checked' : 'unchecked'})`);
    } else {
      console.log(`Selected value: ${item.value}`);
    }
  });
</script>
```

```jsx react
import { OMenu, OMenuItem } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => {
  function handleSelect(event) {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  }

  return (
    <OMenu style={{ maxWidth: '200px' }} onOSelect={handleSelect}>
      <OMenuItem value="opt-1">Option 1</OMenuItem>
      <OMenuItem value="opt-2">Option 2</OMenuItem>
      <OMenuItem value="opt-3">Option 3</OMenuItem>
    </OMenu>
  );
};
```

[component-metadata:o-menu-item]
