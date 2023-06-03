# Option

[component-header:o-option]

```html preview
<o-select label="Select one">
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2">Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
</o-select>
```

```jsx react
import { OOption, OSelect } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <OSelect>
    <OOption value="option-1">Option 1</OOption>
    <OOption value="option-2">Option 2</OOption>
    <OOption value="option-3">Option 3</OOption>
  </OSelect>
);
```

## Examples

### Disabled

Use the `disabled` attribute to disable an option and prevent it from being selected.

```html preview
<o-select label="Select one">
  <o-option value="option-1">Option 1</o-option>
  <o-option value="option-2" disabled>Option 2</o-option>
  <o-option value="option-3">Option 3</o-option>
</o-select>
```

```jsx react
import { OOption, OSelect } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <OSelect>
    <OOption value="option-1">Option 1</OOption>
    <OOption value="option-2" disabled>
      Option 2
    </OOption>
    <OOption value="option-3">Option 3</OOption>
  </OSelect>
);
```

### Prefix & Suffix

Add icons to the start and end of menu items using the `prefix` and `suffix` slots.

```html preview
<o-select label="Select one">
  <o-option value="option-1">
    <o-icon slot="prefix" name="envelope"></o-icon>
    Email
    <o-icon slot="suffix" name="patch-check"></o-icon>
  </o-option>

  <o-option value="option-2">
    <o-icon slot="prefix" name="telephone"></o-icon>
    Phone
    <o-icon slot="suffix" name="patch-check"></o-icon>
  </o-option>

  <o-option value="option-3">
    <o-icon slot="prefix" name="chat-dots"></o-icon>
    Chat
    <o-icon slot="suffix" name="patch-check"></o-icon>
  </o-option>
</o-select>
```

[component-metadata:o-option]
