# Radio Button

[component-header:o-radio-button]

Radio buttons are designed to be used with [radio groups](/components/radio-group). When a radio button has focus, the arrow keys can be used to change the selected option just like standard radio controls.

```html preview
<o-radio-group label="Select an option" name="a" value="1">
  <o-radio-button value="1">Option 1</o-radio-button>
  <o-radio-button value="2">Option 2</o-radio-button>
  <o-radio-button value="3">Option 3</o-radio-button>
</o-radio-group>
```

```jsx react
import { ORadioButton, ORadioGroup } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <ORadioGroup label="Select an option" name="a" value="1">
    <ORadioButton value="1">Option 1</ORadioButton>
    <ORadioButton value="2">Option 2</ORadioButton>
    <ORadioButton value="3">Option 3</ORadioButton>
  </ORadioGroup>
);
```

## Examples

### Checked States

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html preview
<o-radio-group label="Select an option" name="a" value="1">
  <o-radio-button value="1">Option 1</o-radio-button>
  <o-radio-button value="2">Option 2</o-radio-button>
  <o-radio-button value="3">Option 3</o-radio-button>
</o-radio-group>
```

```jsx react
import { ORadioButton, ORadioGroup } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <ORadioGroup label="Select an option" name="a" value="1">
    <ORadioButton value="1">Option 1</ORadioButton>
    <ORadioButton value="2">Option 2</ORadioButton>
    <ORadioButton value="3">Option 3</ORadioButton>
  </ORadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio button.

```html preview
<o-radio-group label="Select an option" name="a" value="1">
  <o-radio-button value="1">Option 1</o-radio-button>
  <o-radio-button value="2" disabled>Option 2</o-radio-button>
  <o-radio-button value="3">Option 3</o-radio-button>
</o-radio-group>
```

```jsx react
import { ORadioButton, ORadioGroup } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <ORadioGroup label="Select an option" name="a" value="1">
    <ORadioButton value="1">Option 1</ORadioButton>
    <ORadioButton value="2" disabled>
      Option 2
    </ORadioButton>
    <ORadioButton value="3">Option 3</ORadioButton>
  </ORadioGroup>
);
```

### Sizes

Add the `size` attribute to the [Radio Group](/components/radio-group) to change the size of the radio buttons.

```html preview
<o-radio-group label="Select an option" size="small" value="1">
  <o-radio-button value="1">Option 1</o-radio-button>
  <o-radio-button value="2">Option 2</o-radio-button>
  <o-radio-button value="3">Option 3</o-radio-button>
</o-radio-group>

<br />

<o-radio-group label="Select an option" size="medium" value="1">
  <o-radio-button value="1">Option 1</o-radio-button>
  <o-radio-button value="2">Option 2</o-radio-button>
  <o-radio-button value="3">Option 3</o-radio-button>
</o-radio-group>

<br />

<o-radio-group label="Select an option" size="large" value="1">
  <o-radio-button value="1">Option 1</o-radio-button>
  <o-radio-button value="2">Option 2</o-radio-button>
  <o-radio-button value="3">Option 3</o-radio-button>
</o-radio-group>
```

```jsx react
import { ORadioButton, ORadioGroup } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <ORadioGroup label="Select an option" size="small" value="1">
      <ORadioButton value="1">Option 1</ORadioButton>
      <ORadioButton value="2">Option 2</ORadioButton>
      <ORadioButton value="3">Option 3</ORadioButton>
    </ORadioGroup>

    <br />

    <ORadioGroup label="Select an option" size="medium" value="1">
      <ORadioButton value="1">Option 1</ORadioButton>
      <ORadioButton value="2">Option 2</ORadioButton>
      <ORadioButton value="3">Option 3</ORadioButton>
    </ORadioGroup>

    <br />

    <ORadioGroup label="Select an option" size="large" value="1">
      <ORadioButton value="1">Option 1</ORadioButton>
      <ORadioButton value="2">Option 2</ORadioButton>
      <ORadioButton value="3">Option 3</ORadioButton>
    </ORadioGroup>
  </>
);
```

### Pill Buttons

Use the `pill` attribute to give radio buttons rounded edges.

```html preview
<o-radio-group label="Select an option" name="a" value="1">
  <o-radio-button pill size="small" value="1">Option 1</o-radio-button>
  <o-radio-button pill size="small" value="2">Option 2</o-radio-button>
  <o-radio-button pill size="small" value="3">Option 3</o-radio-button>
</o-radio-group>

<br />

<o-radio-group label="Select an option" name="a" value="1">
  <o-radio-button pill size="medium" value="1">Option 1</o-radio-button>
  <o-radio-button pill size="medium" value="2">Option 2</o-radio-button>
  <o-radio-button pill size="medium" value="3">Option 3</o-radio-button>
</o-radio-group>

<br />

<o-radio-group label="Select an option" name="a" value="1">
  <o-radio-button pill size="large" value="1">Option 1</o-radio-button>
  <o-radio-button pill size="large" value="2">Option 2</o-radio-button>
  <o-radio-button pill size="large" value="3">Option 3</o-radio-button>
</o-radio-group>
```

```jsx react
import { ORadioButton, ORadioGroup } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <ORadioGroup label="Select an option" name="a" value="1">
    <ORadioButton pill size="small" value="1">Option 1</ORadioButton>
    <ORadioButton pill size="small" value="2">Option 2</ORadioButton>
    <ORadioButton pill size="small" value="3">Option 3</ORadioButton>
  </ORadioGroup>

  <br />

  <ORadioGroup label="Select an option" name="a" value="1">
    <ORadioButton pill size="medium" value="1">Option 1</ORadioButton>
    <ORadioButton pill size="medium" value="2">Option 2</ORadioButton>
    <ORadioButton pill size="medium" value="3">Option 3</ORadioButton>
  </ORadioGroup>

  <br />

  <ORadioGroup label="Select an option" name="a" value="1">
    <ORadioButton pill size="large" value="1">Option 1</ORadioButton>
    <ORadioButton pill size="large" value="2">Option 2</ORadioButton>
    <ORadioButton pill size="large" value="3">Option 3</ORadioButton>
  </ORadioGroup>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<o-radio-group label="Select an option" name="a" value="1">
  <o-radio-button value="1">
    <o-icon slot="prefix" name="archive"></o-icon>
    Option 1
  </o-radio-button>

  <o-radio-button value="2">
    <o-icon slot="suffix" name="bag"></o-icon>
    Option 2
  </o-radio-button>

  <o-radio-button value="3">
    <o-icon slot="prefix" name="gift"></o-icon>
    <o-icon slot="suffix" name="cart"></o-icon>
    Option 3
  </o-radio-button>
</o-radio-group>
```

```jsx react
import { OIcon, ORadioButton, ORadioGroup } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <ORadioGroup label="Select an option" name="a" value="1">
    <ORadioButton value="1">
      <OIcon slot="prefix" name="archive" />
      Option 1
    </ORadioButton>

    <ORadioButton value="2">
      <OIcon slot="suffix" name="bag" />
      Option 2
    </ORadioButton>

    <ORadioButton value="3">
      <OIcon slot="prefix" name="gift" />
      <OIcon slot="suffix" name="cart" />
      Option 3
    </ORadioButton>
  </ORadioGroup>
);
```

### Buttons with Icons

You can omit button labels and use icons instead. Make sure to set a `label` attribute on each icon so screen readers will announce each option correctly.

```html preview
<o-radio-group label="Select an option" name="a" value="neutral">
  <o-radio-button value="angry">
    <o-icon name="emoji-angry" label="Angry"></o-icon>
  </o-radio-button>

  <o-radio-button value="sad">
    <o-icon name="emoji-frown" label="Sad"></o-icon>
  </o-radio-button>

  <o-radio-button value="neutral">
    <o-icon name="emoji-neutral" label="Neutral"></o-icon>
  </o-radio-button>

  <o-radio-button value="happy">
    <o-icon name="emoji-smile" label="Happy"></o-icon>
  </o-radio-button>

  <o-radio-button value="laughing">
    <o-icon name="emoji-laughing" label="Laughing"></o-icon>
  </o-radio-button>
</o-radio-group>
```

```jsx react
import { OIcon, ORadioButton, ORadioGroup } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <ORadioGroup label="Select an option" name="a" value="neutral">
    <ORadioButton value="angry">
      <OIcon name="emoji-angry" label="Angry" />
    </ORadioButton>

    <ORadioButton value="sad">
      <OIcon name="emoji-frown" label="Sad" />
    </ORadioButton>

    <ORadioButton value="neutral">
      <OIcon name="emoji-neutral" label="Neutral" />
    </ORadioButton>

    <ORadioButton value="happy">
      <OIcon name="emoji-smile" label="Happy" />
    </ORadioButton>

    <ORadioButton value="laughing">
      <OIcon name="emoji-laughing" label="Laughing" />
    </ORadioButton>
  </ORadioGroup>
);
```

[component-metadata:o-radio-button]
