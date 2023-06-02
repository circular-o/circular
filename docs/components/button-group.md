# Button Group

[component-header:o-button-group]

```html preview
<o-button-group label="Alignment">
  <o-button>Left</o-button>
  <o-button>Center</o-button>
  <o-button>Right</o-button>
</o-button-group>
```

```jsx react
import { OButton, OButtonGroup } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OButtonGroup label="Alignment">
    <OButton>Left</OButton>
    <OButton>Center</OButton>
    <OButton>Right</OButton>
  </OButtonGroup>
);
```

## Examples

### Button Sizes

All button sizes are supported, but avoid mixing sizes within the same button group.

```html preview
<o-button-group label="Alignment">
  <o-button size="small">Left</o-button>
  <o-button size="small">Center</o-button>
  <o-button size="small">Right</o-button>
</o-button-group>

<br /><br />

<o-button-group label="Alignment">
  <o-button size="medium">Left</o-button>
  <o-button size="medium">Center</o-button>
  <o-button size="medium">Right</o-button>
</o-button-group>

<br /><br />

<o-button-group label="Alignment">
  <o-button size="large">Left</o-button>
  <o-button size="large">Center</o-button>
  <o-button size="large">Right</o-button>
</o-button-group>
```

```jsx react
import { OButton, OButtonGroup } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <OButtonGroup label="Alignment">
      <OButton size="small">Left</OButton>
      <OButton size="small">Center</OButton>
      <OButton size="small">Right</OButton>
    </OButtonGroup>

    <br />
    <br />

    <OButtonGroup label="Alignment">
      <OButton size="medium">Left</OButton>
      <OButton size="medium">Center</OButton>
      <OButton size="medium">Right</OButton>
    </OButtonGroup>

    <br />
    <br />

    <OButtonGroup label="Alignment">
      <OButton size="large">Left</OButton>
      <OButton size="large">Center</OButton>
      <OButton size="large">Right</OButton>
    </OButtonGroup>
  </>
);
```

### Theme Buttons

Theme buttons are supported through the button's `variant` attribute.

```html preview
<o-button-group label="Alignment">
  <o-button variant="primary">Left</o-button>
  <o-button variant="primary">Center</o-button>
  <o-button variant="primary">Right</o-button>
</o-button-group>

<br /><br />

<o-button-group label="Alignment">
  <o-button variant="success">Left</o-button>
  <o-button variant="success">Center</o-button>
  <o-button variant="success">Right</o-button>
</o-button-group>

<br /><br />

<o-button-group label="Alignment">
  <o-button variant="neutral">Left</o-button>
  <o-button variant="neutral">Center</o-button>
  <o-button variant="neutral">Right</o-button>
</o-button-group>

<br /><br />

<o-button-group label="Alignment">
  <o-button variant="warning">Left</o-button>
  <o-button variant="warning">Center</o-button>
  <o-button variant="warning">Right</o-button>
</o-button-group>

<br /><br />

<o-button-group label="Alignment">
  <o-button variant="danger">Left</o-button>
  <o-button variant="danger">Center</o-button>
  <o-button variant="danger">Right</o-button>
</o-button-group>
```

```jsx react
import { OButton, OButtonGroup } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <OButtonGroup label="Alignment">
      <OButton variant="primary">Left</OButton>
      <OButton variant="primary">Center</OButton>
      <OButton variant="primary">Right</OButton>
    </OButtonGroup>

    <br />
    <br />

    <OButtonGroup label="Alignment">
      <OButton variant="success">Left</OButton>
      <OButton variant="success">Center</OButton>
      <OButton variant="success">Right</OButton>
    </OButtonGroup>

    <br />
    <br />

    <OButtonGroup label="Alignment">
      <OButton variant="neutral">Left</OButton>
      <OButton variant="neutral">Center</OButton>
      <OButton variant="neutral">Right</OButton>
    </OButtonGroup>

    <br />
    <br />

    <OButtonGroup label="Alignment">
      <OButton variant="warning">Left</OButton>
      <OButton variant="warning">Center</OButton>
      <OButton variant="warning">Right</OButton>
    </OButtonGroup>

    <br />
    <br />

    <OButtonGroup label="Alignment">
      <OButton variant="danger">Left</OButton>
      <OButton variant="danger">Center</OButton>
      <OButton variant="danger">Right</OButton>
    </OButtonGroup>
  </>
);
```

### Pill Buttons

Pill buttons are supported through the button's `pill` attribute.

```html preview
<o-button-group label="Alignment">
  <o-button size="small" pill>Left</o-button>
  <o-button size="small" pill>Center</o-button>
  <o-button size="small" pill>Right</o-button>
</o-button-group>

<br /><br />

<o-button-group label="Alignment">
  <o-button size="medium" pill>Left</o-button>
  <o-button size="medium" pill>Center</o-button>
  <o-button size="medium" pill>Right</o-button>
</o-button-group>

<br /><br />

<o-button-group label="Alignment">
  <o-button size="large" pill>Left</o-button>
  <o-button size="large" pill>Center</o-button>
  <o-button size="large" pill>Right</o-button>
</o-button-group>
```

```jsx react
import { OButton, OButtonGroup } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <OButtonGroup label="Alignment">
      <OButton size="small" pill>
        Left
      </OButton>
      <OButton size="small" pill>
        Center
      </OButton>
      <OButton size="small" pill>
        Right
      </OButton>
    </OButtonGroup>

    <br />
    <br />

    <OButtonGroup label="Alignment">
      <OButton size="medium" pill>
        Left
      </OButton>
      <OButton size="medium" pill>
        Center
      </OButton>
      <OButton size="medium" pill>
        Right
      </OButton>
    </OButtonGroup>

    <br />
    <br />

    <OButtonGroup label="Alignment">
      <OButton size="large" pill>
        Left
      </OButton>
      <OButton size="large" pill>
        Center
      </OButton>
      <OButton size="large" pill>
        Right
      </OButton>
    </OButtonGroup>
  </>
);
```

### Dropdowns in Button Groups

Dropdowns can be placed inside button groups as long as the trigger is an `<o-button>` element.

```html preview
<o-button-group label="Example Button Group">
  <o-button>Button</o-button>
  <o-button>Button</o-button>
  <o-dropdown>
    <o-button slot="trigger" caret>Dropdown</o-button>
    <o-menu>
      <o-menu-item>Item 1</o-menu-item>
      <o-menu-item>Item 2</o-menu-item>
      <o-menu-item>Item 3</o-menu-item>
    </o-menu>
  </o-dropdown>
</o-button-group>
```

```jsx react
import { OButton, OButtonGroup, ODropdown, OMenu, OMenuItem } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OButtonGroup label="Example Button Group">
    <OButton>Button</OButton>
    <OButton>Button</OButton>
    <ODropdown>
      <OButton slot="trigger" caret>
        Dropdown
      </OButton>
      <OMenu>
        <OMenuItem>Item 1</OMenuItem>
        <OMenuItem>Item 2</OMenuItem>
        <OMenuItem>Item 3</OMenuItem>
      </OMenu>
    </ODropdown>
  </OButtonGroup>
);
```

### Split Buttons

Create a split button using a button and a dropdown. Use a [visually hidden](/components/visually-hidden) label to ensure the dropdown is accessible to users with assistive devices.

```html preview
<o-button-group label="Example Button Group">
  <o-button variant="primary">Save</o-button>
  <o-dropdown placement="bottom-end">
    <o-button slot="trigger" variant="primary" caret>
      <o-visually-hidden>More options</o-visually-hidden>
    </o-button>
    <o-menu>
      <o-menu-item>Save</o-menu-item>
      <o-menu-item>Save as&hellip;</o-menu-item>
      <o-menu-item>Save all</o-menu-item>
    </o-menu>
  </o-dropdown>
</o-button-group>
```

```jsx react
import { OButton, OButtonGroup, ODropdown, OMenu, OMenuItem } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OButtonGroup label="Example Button Group">
    <OButton variant="primary">Save</OButton>
    <ODropdown placement="bottom-end">
      <OButton slot="trigger" variant="primary" caret></OButton>
      <OMenu>
        <OMenuItem>Save</OMenuItem>
        <OMenuItem>Save as&hellip;</OMenuItem>
        <OMenuItem>Save all</OMenuItem>
      </OMenu>
    </ODropdown>
  </OButtonGroup>
);
```

### Tooltips in Button Groups

Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.

```html preview
<o-button-group label="Alignment">
  <o-tooltip content="I'm on the left">
    <o-button>Left</o-button>
  </o-tooltip>

  <o-tooltip content="I'm in the middle">
    <o-button>Center</o-button>
  </o-tooltip>

  <o-tooltip content="I'm on the right">
    <o-button>Right</o-button>
  </o-tooltip>
</o-button-group>
```

```jsx react
import { OButton, OButtonGroup, OTooltip } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <OButtonGroup label="Alignment">
      <OTooltip content="I'm on the left">
        <OButton>Left</OButton>
      </OTooltip>

      <OTooltip content="I'm in the middle">
        <OButton>Center</OButton>
      </OTooltip>

      <OTooltip content="I'm on the right">
        <OButton>Right</OButton>
      </OTooltip>
    </OButtonGroup>
  </>
);
```

### Toolbar Example

Create interactive toolbars with button groups.

```html preview
<div class="button-group-toolbar">
  <o-button-group label="History">
    <o-tooltip content="Undo">
      <o-button><o-icon name="arrow-counterclockwise" label="Undo"></o-icon></o-button>
    </o-tooltip>
    <o-tooltip content="Redo">
      <o-button><o-icon name="arrow-clockwise" label="Redo"></o-icon></o-button>
    </o-tooltip>
  </o-button-group>

  <o-button-group label="Formatting">
    <o-tooltip content="Bold">
      <o-button><o-icon name="type-bold" label="Bold"></o-icon></o-button>
    </o-tooltip>
    <o-tooltip content="Italic">
      <o-button><o-icon name="type-italic" label="Italic"></o-icon></o-button>
    </o-tooltip>
    <o-tooltip content="Underline">
      <o-button><o-icon name="type-underline" label="Underline"></o-icon></o-button>
    </o-tooltip>
  </o-button-group>

  <o-button-group label="Alignment">
    <o-tooltip content="Align Left">
      <o-button><o-icon name="justify-left" label="Align Left"></o-icon></o-button>
    </o-tooltip>
    <o-tooltip content="Align Center">
      <o-button><o-icon name="justify" label="Align Center"></o-icon></o-button>
    </o-tooltip>
    <o-tooltip content="Align Right">
      <o-button><o-icon name="justify-right" label="Align Right"></o-icon></o-button>
    </o-tooltip>
  </o-button-group>
</div>

<style>
  .button-group-toolbar o-button-group:not(:last-of-type) {
    margin-right: var(--o-spacing-x-small);
  }
</style>
```

```jsx react
import { OButton, OButtonGroup, OIcon, OTooltip } from '%PACKAGE_FULL_PATH%/dist/react';

const css = `
  .button-group-toolbar o-button-group:not(:last-of-type) {
    margin-right: var(--o-spacing-x-small);
  }
`;

const App = () => (
  <>
    <div className="button-group-toolbar">
      <OButtonGroup label="History">
        <OTooltip content="Undo">
          <OButton>
            <OIcon name="arrow-counterclockwise"></OIcon>
          </OButton>
        </OTooltip>
        <OTooltip content="Redo">
          <OButton>
            <OIcon name="arrow-clockwise"></OIcon>
          </OButton>
        </OTooltip>
      </OButtonGroup>

      <OButtonGroup label="Formatting">
        <OTooltip content="Bold">
          <OButton>
            <OIcon name="type-bold"></OIcon>
          </OButton>
        </OTooltip>
        <OTooltip content="Italic">
          <OButton>
            <OIcon name="type-italic"></OIcon>
          </OButton>
        </OTooltip>
        <OTooltip content="Underline">
          <OButton>
            <OIcon name="type-underline"></OIcon>
          </OButton>
        </OTooltip>
      </OButtonGroup>

      <OButtonGroup label="Alignment">
        <OTooltip content="Align Left">
          <OButton>
            <OIcon name="justify-left"></OIcon>
          </OButton>
        </OTooltip>
        <OTooltip content="Align Center">
          <OButton>
            <OIcon name="justify"></OIcon>
          </OButton>
        </OTooltip>
        <OTooltip content="Align Right">
          <OButton>
            <OIcon name="justify-right"></OIcon>
          </OButton>
        </OTooltip>
      </OButtonGroup>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:o-button-group]
