# Select

[component-header:o-select]

```html preview
<o-select>
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
  <o-option value="option-4">Option 4</o-option>
  <o-option value="option-5">Option 5</o-option>
  <o-option value="option-6">Option 6</o-option>
</o-select>
```

```jsx react
import { OOption, OSelect } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OSelect>
    <OOption value="option-1">Option 1</OOption>
    <OOption value="option-2">Option 2</OOption>
    <OOption value="option-3">Option 3</OOption>
    <OOption value="option-4">Option 4</OOption>
    <OOption value="option-5">Option 5</OOption>
    <OOption value="option-6">Option 6</OOption>
  </OSelect>
);
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<o-select label="Select one">
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
</o-select>
```

```jsx react
import { OOption, OSelect } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OSelect label="Select one">
    <OOption value="option-1">Option 1</OOption>
    <OOption value="option-2">Option 2</OOption>
    <OOption value="option-3">Option 3</OOption>
  </OSelect>
);
```

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<o-select label="Experience" help-text="Please tell us your skill level.">
  <o-option value="1">Novice</o-option>
  <o-option value="2">Intermediate</o-option>
  <o-option value="3">Advanced</o-option>
</o-select>
```

```jsx react
import { OOption, OSelect } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OSelect label="Experience" help-text="Please tell us your skill level.">
    <OOption value="1">Novice</OOption>
    <OOption value="2">Intermediate</OOption>
    <OOption value="3">Advanced</OOption>
  </OSelect>
);
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<o-select placeholder="Select one">
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
</o-select>
```

```jsx react
import { OOption, OSelect } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OSelect placeholder="Select one">
    <OOption value="option-1">Option 1</OOption>
    <OOption value="option-2">Option 2</OOption>
    <OOption value="option-3">Option 3</OOption>
  </OSelect>
);
```

### Clearable

Use the `clearable` attribute to make the control clearable. The clear button only appears when an option is selected.

```html preview
<o-select clearable value="option-1">
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
</o-select>
```

```jsx react
import { OOption, OSelect } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OSelect placeholder="Clearable" clearable>
    <OOption value="option-1">Option 1</OOption>
    <OOption value="option-2">Option 2</OOption>
    <OOption value="option-3">Option 3</OOption>
  </OSelect>
);
```

### Filled Selects

Add the `filled` attribute to draw a filled select.

```html preview
<o-select filled>
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
</o-select>
```

```jsx react
import { OOption, OSelect } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OSelect filled>
    <OOption value="option-1">Option 1</OOption>
    <OOption value="option-2">Option 2</OOption>
    <OOption value="option-3">Option 3</OOption>
  </OSelect>
);
```

### Pill

Use the `pill` attribute to give selects rounded edges.

```html preview
<o-select pill>
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
</o-select>
```

```jsx react
import { OOption, OSelect } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OSelect pill>
    <OOption value="option-1">Option 1</OOption>
    <OOption value="option-2">Option 2</OOption>
    <OOption value="option-3">Option 3</OOption>
  </OSelect>
);
```

### Disabled

Use the `disabled` attribute to disable a select.

```html preview
<o-select placeholder="Disabled" disabled>
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
</o-select>
```

```jsx react
import { OOption, OSelect } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OSelect placeholder="Disabled" disabled>
    <OOption value="option-1">Option 1</OOption>
    <OOption value="option-2">Option 2</OOption>
    <OOption value="option-3">Option 3</OOption>
  </OSelect>
);
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. It's a good practice to use `clearable` when this option is enabled. To set multiple values at once, set `value` to a space-delimited list of values.

```html preview
<o-select label="Select a Few" value="option-1 option-2 option-3" multiple clearable>
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
  <o-option value="option-4">Option 4</o-option>
  <o-option value="option-5">Option 5</o-option>
  <o-option value="option-6">Option 6</o-option>
</o-select>
```

```jsx react
import { OOption, OSelect } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OSelect label="Select a Few" value="option-1 option-2 option-3" multiple clearable>
    <OOption value="option-1">Option 1</OOption>
    <OOption value="option-2">Option 2</OOption>
    <OOption value="option-3">Option 3</OOption>
    <OOption value="option-4">Option 4</OOption>
    <OOption value="option-5">Option 5</OOption>
    <OOption value="option-6">Option 6</OOption>
  </OSelect>
);
```

?> Note that multi-select options may wrap, causing the control to expand vertically. You can use the `max-options-visible` attribute to control the maximum number of selected options to show at once.

### Setting Initial Values

Use the `value` attribute to set the initial selection. When using `multiple`, use space-delimited values to select more than one option.

```html preview
<o-select value="option-1 option-2" multiple clearable>
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
  <o-option value="option-4">Option 4</o-option>
</o-select>
```

```jsx react
import { ODivider, OOption, OSelect } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OSelect value="option-1 option-2" multiple clearable>
    <OOption value="option-1">Option 1</OOption>
    <OOption value="option-2">Option 2</OOption>
    <OOption value="option-3">Option 3</OOption>
  </OSelect>
);
```

### Grouping Options

Use `<o-divider>` to group listbox items visually. You can also use `<small>` to provide labels, but they won't be announced by most assistive devices.

```html preview
<o-select>
  <small>Section 1</small>
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
  <o-divider></o-divider>
  <small>Section 2</small>
  <o-option value="option-4">Option 4</o-option>
  <o-option value="option-5">Option 5</o-option>
  <o-option value="option-6">Option 6</o-option>
</o-select>
```

```jsx react
import { OOption, OSelect } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OSelect>
    <OOption value="option-1">Option 1</OOption>
    <OOption value="option-2">Option 2</OOption>
    <OOption value="option-3">Option 3</OOption>
    <OOption value="option-4">Option 4</OOption>
    <OOption value="option-5">Option 5</OOption>
    <OOption value="option-6">Option 6</OOption>
  </OSelect>
);
```

### Sizes

Use the `size` attribute to change a select's size. Note that size does not apply to listbox options.

```html preview
<o-select placeholder="Small" size="small">
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
</o-select>

<br />

<o-select placeholder="Medium" size="medium">
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
</o-select>

<br />

<o-select placeholder="Large" size="large">
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
</o-select>
```

```jsx react
import { OOption, OSelect } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <OSelect placeholder="Small" size="small">
      <OOption value="option-1">Option 1</OOption>
      <OOption value="option-2">Option 2</OOption>
      <OOption value="option-3">Option 3</OOption>
    </OSelect>

    <br />

    <OSelect placeholder="Medium" size="medium">
      <OOption value="option-1">Option 1</OOption>
      <OOption value="option-2">Option 2</OOption>
      <OOption value="option-3">Option 3</OOption>
    </OSelect>

    <br />

    <OSelect placeholder="Large" size="large">
      <OOption value="option-1">Option 1</OOption>
      <OOption value="option-2">Option 2</OOption>
      <OOption value="option-3">Option 3</OOption>
    </OSelect>
  </>
);
```

### Placement

The preferred placement of the select's listbox can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.

```html preview
<o-select placement="top">
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
</o-select>
```

```jsx react
import {
  OOption,
  OSelect
} from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OSelect placement="top">
    <OOption value="option-1">Option 1</OOption>
    <OOption value="option-2">Option 2</OOption>
    <OOption value="option-3">Option 3</OOption>
  </ODropdown>
);
```

### Prefix Icons

Use the `prefix` slot to prepend an icon to the control.

```html preview
<o-select placeholder="Small" size="small" clearable>
  <o-icon name="house" slot="prefix"></o-icon>
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
</o-select>
<br />
<o-select placeholder="Medium" size="medium" clearable>
  <o-icon name="house" slot="prefix"></o-icon>
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
</o-select>
<br />
<o-select placeholder="Large" size="large" clearable>
  <o-icon name="house" slot="prefix"></o-icon>
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
</o-select>
```

```jsx react
import { OIcon, OOption, OSelect } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <OSelect placeholder="Small" size="small">
      <OIcon name="house" slot="prefix"></OIcon>
      <OOption value="option-1">Option 1</OOption>
      <OOption value="option-2">Option 2</OOption>
      <OOption value="option-3">Option 3</OOption>
    </OSelect>
    <br />
    <OSelect placeholder="Medium" size="medium">
      <OIcon name="house" slot="prefix"></OIcon>
      <OOption value="option-1">Option 1</OOption>
      <OOption value="option-2">Option 2</OOption>
      <OOption value="option-3">Option 3</OOption>
    </OSelect>
    <br />
    <OSelect placeholder="Large" size="large">
      <OIcon name="house" slot="prefix"></OIcon>
      <OOption value="option-1">Option 1</OOption>
      <OOption value="option-2">Option 2</OOption>
      <OOption value="option-3">Option 3</OOption>
    </OSelect>
  </>
);
```

[component-metadata:o-select]
