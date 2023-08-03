---
meta:
  title: Dropdown
  description: 'Dropdowns expose additional content that "drops down" in a panel.'
layout: component
---

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [color picker](/components/color-picker)). The API gives you complete control over showing, hiding, and positioning the panel.

```html:preview
<o-dropdown>
  <o-button slot="trigger" caret>Dropdown</o-button>
  <o-menu>
    <o-menu-item>Dropdown Item 1</o-menu-item>
    <o-menu-item>Dropdown Item 2</o-menu-item>
    <o-menu-item>Dropdown Item 3</o-menu-item>
    <o-divider></o-divider>
    <o-menu-item type="checkbox" checked>Checkbox</o-menu-item>
    <o-menu-item disabled>Disabled</o-menu-item>
    <o-divider></o-divider>
    <o-menu-item>
      Prefix
      <o-icon slot="prefix" name="gift"></o-icon>
    </o-menu-item>
    <o-menu-item>
      Suffix Icon
      <o-icon slot="suffix" name="heart"></o-icon>
    </o-menu-item>
  </o-menu>
</o-dropdown>
```

```jsx:react
import { OButton, ODivider, ODropdown, OIcon, OMenu, OMenuItem } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <ODropdown>
    <OButton slot="trigger" caret>
      Dropdown
    </OButton>
    <OMenu>
      <OMenuItem>Dropdown Item 1</OMenuItem>
      <OMenuItem>Dropdown Item 2</OMenuItem>
      <OMenuItem>Dropdown Item 3</OMenuItem>
      <ODivider />
      <OMenuItem type="checkbox" checked>
        Checkbox
      </OMenuItem>
      <OMenuItem disabled>Disabled</OMenuItem>
      <ODivider />
      <OMenuItem>
        Prefix
        <OIcon slot="prefix" name="gift" />
      </OMenuItem>
      <OMenuItem>
        Suffix Icon
        <OIcon slot="suffix" name="heart" />
      </OMenuItem>
    </OMenu>
  </ODropdown>
);
```

## Examples

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu), you can listen for the [`o-select`](/components/menu#events) event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

```html:preview
<div class="dropdown-selection">
  <o-dropdown>
    <o-button slot="trigger" caret>Edit</o-button>
    <o-menu>
      <o-menu-item value="cut">Cut</o-menu-item>
      <o-menu-item value="copy">Copy</o-menu-item>
      <o-menu-item value="paste">Paste</o-menu-item>
    </o-menu>
  </o-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('o-dropdown');

  dropdown.addEventListener('o-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

```jsx:react
import { OButton, ODropdown, OMenu, OMenuItem } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => {
  function handleSelect(event) {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  }

  return (
    <ODropdown>
      <OButton slot="trigger" caret>
        Edit
      </OButton>
      <OMenu onOSelect={handleSelect}>
        <OMenuItem value="cut">Cut</OMenuItem>
        <OMenuItem value="copy">Copy</OMenuItem>
        <OMenuItem value="paste">Paste</OMenuItem>
      </OMenu>
    </ODropdown>
  );
};
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

```html:preview
<div class="dropdown-selection-alt">
  <o-dropdown>
    <o-button slot="trigger" caret>Edit</o-button>
    <o-menu>
      <o-menu-item value="cut">Cut</o-menu-item>
      <o-menu-item value="copy">Copy</o-menu-item>
      <o-menu-item value="paste">Paste</o-menu-item>
    </o-menu>
  </o-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('o-menu-item[value="cut"]');
  const copy = container.querySelector('o-menu-item[value="copy"]');
  const paste = container.querySelector('o-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
```

```jsx:react
import { OButton, ODropdown, OMenu, OMenuItem } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => {
  function handleCut() {
    console.log('cut');
  }

  function handleCopy() {
    console.log('copy');
  }

  function handlePaste() {
    console.log('paste');
  }

  return (
    <ODropdown>
      <OButton slot="trigger" caret>
        Edit
      </OButton>
      <OMenu>
        <OMenuItem onClick={handleCut}>Cut</OMenuItem>
        <OMenuItem onClick={handleCopy}>Copy</OMenuItem>
        <OMenuItem onClick={handlePaste}>Paste</OMenuItem>
      </OMenu>
    </ODropdown>
  );
};
```

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html:preview
<o-dropdown placement="top-start">
  <o-button slot="trigger" caret>Edit</o-button>
  <o-menu>
    <o-menu-item>Cut</o-menu-item>
    <o-menu-item>Copy</o-menu-item>
    <o-menu-item>Paste</o-menu-item>
    <o-divider></o-divider>
    <o-menu-item>Find</o-menu-item>
    <o-menu-item>Replace</o-menu-item>
  </o-menu>
</o-dropdown>
```

```jsx:react
import { OButton, ODivider, ODropdown, OMenu, OMenuItem } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <ODropdown placement="top-start">
    <OButton slot="trigger" caret>
      Edit
    </OButton>
    <OMenu>
      <OMenuItem>Cut</OMenuItem>
      <OMenuItem>Copy</OMenuItem>
      <OMenuItem>Paste</OMenuItem>
      <ODivider />
      <OMenuItem>Find</OMenuItem>
      <OMenuItem>Replace</OMenuItem>
    </OMenu>
  </ODropdown>
);
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

```html:preview
<o-dropdown distance="30">
  <o-button slot="trigger" caret>Edit</o-button>
  <o-menu>
    <o-menu-item>Cut</o-menu-item>
    <o-menu-item>Copy</o-menu-item>
    <o-menu-item>Paste</o-menu-item>
    <o-divider></o-divider>
    <o-menu-item>Find</o-menu-item>
    <o-menu-item>Replace</o-menu-item>
  </o-menu>
</o-dropdown>
```

```jsx:react
import { OButton, ODivider, ODropdown, OMenu, OMenuItem } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <ODropdown distance={30}>
    <OButton slot="trigger" caret>
      Edit
    </OButton>
    <OMenu>
      <OMenuItem>Cut</OMenuItem>
      <OMenuItem>Copy</OMenuItem>
      <OMenuItem>Paste</OMenuItem>
      <ODivider />
      <OMenuItem>Find</OMenuItem>
      <OMenuItem>Replace</OMenuItem>
    </OMenu>
  </ODropdown>
);
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

```html:preview
<o-dropdown skidding="30">
  <o-button slot="trigger" caret>Edit</o-button>
  <o-menu>
    <o-menu-item>Cut</o-menu-item>
    <o-menu-item>Copy</o-menu-item>
    <o-menu-item>Paste</o-menu-item>
    <o-divider></o-divider>
    <o-menu-item>Find</o-menu-item>
    <o-menu-item>Replace</o-menu-item>
  </o-menu>
</o-dropdown>
```

```jsx:react
import { OButton, ODivider, ODropdown, OMenu, OMenuItem } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <ODropdown skidding={30}>
    <OButton slot="trigger" caret>
      Edit
    </OButton>
    <OMenu>
      <OMenuItem>Cut</OMenuItem>
      <OMenuItem>Copy</OMenuItem>
      <OMenuItem>Paste</OMenuItem>
      <ODivider />
      <OMenuItem>Find</OMenuItem>
      <OMenuItem>Replace</OMenuItem>
    </OMenu>
  </ODropdown>
);
```

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html:preview
<div class="dropdown-hoist">
  <o-dropdown>
    <o-button slot="trigger" caret>No Hoist</o-button>
    <o-menu>
      <o-menu-item>Item 1</o-menu-item>
      <o-menu-item>Item 2</o-menu-item>
      <o-menu-item>Item 3</o-menu-item>
    </o-menu>
  </o-dropdown>

  <o-dropdown hoist>
    <o-button slot="trigger" caret>Hoist</o-button>
    <o-menu>
      <o-menu-item>Item 1</o-menu-item>
      <o-menu-item>Item 2</o-menu-item>
      <o-menu-item>Item 3</o-menu-item>
    </o-menu>
  </o-dropdown>
</div>

<style>
  .dropdown-hoist {
    position: relative;
    border: solid 2px var(--o-panel-border-color);
    padding: var(--o-spacing-medium);
    overflow: hidden;
  }
</style>
```

```jsx:react
import { OButton, ODivider, ODropdown, OIcon, OMenu, OMenuItem } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const css = `
  .dropdown-hoist {
    border: solid 2px var(--o-panel-border-color);
    padding: var(--o-spacing-medium);
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <div className="dropdown-hoist">
      <ODropdown>
        <OButton slot="trigger" caret>
          No Hoist
        </OButton>
        <OMenu>
          <OMenuItem>Item 1</OMenuItem>
          <OMenuItem>Item 2</OMenuItem>
          <OMenuItem>Item 3</OMenuItem>
        </OMenu>
      </ODropdown>

      <ODropdown hoist>
        <OButton slot="trigger" caret>
          Hoist
        </OButton>
        <OMenu>
          <OMenuItem>Item 1</OMenuItem>
          <OMenuItem>Item 2</OMenuItem>
          <OMenuItem>Item 3</OMenuItem>
        </OMenu>
      </ODropdown>
    </div>

    <style>{css}</style>
  </>
);
```
