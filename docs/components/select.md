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
import { OOption, OSelect } from '%PACKAGE-FULL-PATH%/dist/react';

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
import { OOption, OSelect } from '%PACKAGE-FULL-PATH%/dist/react';

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
import { OOption, OSelect } from '%PACKAGE-FULL-PATH%/dist/react';

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
import { OOption, OSelect } from '%PACKAGE-FULL-PATH%/dist/react';

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
import { OOption, OSelect } from '%PACKAGE-FULL-PATH%/dist/react';

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
import { OOption, OSelect } from '%PACKAGE-FULL-PATH%/dist/react';

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
import { OOption, OSelect } from '%PACKAGE-FULL-PATH%/dist/react';

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
import { OOption, OSelect } from '%PACKAGE-FULL-PATH%/dist/react';

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
import { OOption, OSelect } from '%PACKAGE-FULL-PATH%/dist/react';

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
import { ODivider, OOption, OSelect } from '%PACKAGE-FULL-PATH%/dist/react';

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
import { OOption, OSelect } from '%PACKAGE-FULL-PATH%/dist/react';

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
import { OOption, OSelect } from '%PACKAGE-FULL-PATH%/dist/react';

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
} from '%PACKAGE-FULL-PATH%/dist/react';

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
import { OIcon, OOption, OSelect } from '%PACKAGE-FULL-PATH%/dist/react';

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

### Autocomplete

By setting the `autocomplete` property, the select will show an input box on the top of the options list to filter them.

```html preview
<div style="display: flex;gap: 8px;align-items: center; padding-bottom: 12px;">
  <o-radio-group class="select-autocomplete-sizes" value="medium">
    <o-radio-button value="small">Small</o-radio-button>
    <o-radio-button value="medium">Medium</o-radio-button>
    <o-radio-button value="large">Large</o-radio-button>
  </o-radio-group>
  <o-switch class="select-autocomplete-multiple">Multiple</o-switch>
</div>

<o-select class="select-autocomplete-select" autocomplete>
  <o-option value="matrix">Matrix</o-option>
  <o-option value="guardians-of-the-galaxy">Guardians of the Galaxy</o-option>
  <o-option value="expendables">Expendables</o-option>
  <o-option value="iron-man">Iron Man</o-option>
  <o-option value="spider-man">Spider-man</o-option>
  <o-option value="rocky">Rocky</o-option>
</o-select>

<script>
  const sizes = document.querySelector('.select-autocomplete-sizes');
  const multiple = document.querySelector('.select-autocomplete-multiple');
  const select = document.querySelector('.select-autocomplete-select');

  sizes.addEventListener('o-change', () => {
    select.size = sizes.value;
  });

  multiple.addEventListener('o-change', () => {
    select.multiple = multiple.checked;
  });
</script>
```

```jsx react
import { OSelect, ORadioGroup, ORadioButton, OSwitch, OOption } from '%PACKAGE-FULL-PATH%/dist/react';
import { useState } from 'react';

const App = () => {
  const containerStyle = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    paddingBottom: '12px'
  };

  const [size, setSize] = useState('medium');
  const [multiple, setMultiple] = useState(false);

  return (
    <>
      <div style={containerStyle}>
        <ORadioGroup value={size} onOChange={event => setSize(event.target.value)}>
          <ORadioButton value="small">Small</ORadioButton>
          <ORadioButton value="medium">Medium</ORadioButton>
          <ORadioButton value="large">Large</ORadioButton>
        </ORadioGroup>
        <OSwitch onOChange={event => setMultiple(event.target.checked)} multiple={multiple}>
          Multiple
        </OSwitch>
      </div>
      <OSelect autocomplete size={size} multiple={multiple}>
        <OOption value="matrix">Matrix</OOption>
        <OOption value="guardians-of-the-galaxy">Guardians of the Galaxy</OOption>
        <OOption value="expendables">Expendables</OOption>
        <OOption value="iron-man">Iron Man</OOption>
        <OOption value="spider-man">Spider-man</OOption>
        <OOption value="rocky">Rocky</OOption>
      </OSelect>
    </>
  );
};
```

Also, the `options` of the `o-select` can be set by setting the property `autocomplete-external` and by handling externally the `o-autocomplete-input` event which contains the value of the autocomplete input.

```html preview
<o-select class="select-autocomplete-external-select" autocomplete autocomplete-external> </o-select>

<script>
  const options = ['Matrix', 'Guardians of the Galaxy', 'Expendables', 'Iron Man', 'Spider-man', 'Rocky'];
  const select = document.querySelector('.select-autocomplete-external-select');

  const setOptions = inputValue => {
    let optionsHtml = '';

    options.forEach(o => {
      if (o.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())) {
        optionsHtml = `${optionsHtml}
          <o-option value="${o.split(' ').join('-').toLocaleLowerCase()}">${o}</o-option>`;
      }
    });

    select.innerHTML = optionsHtml;
  };

  setOptions('');

  select.addEventListener('o-autocomplete-input', ({ detail: { ref, value } }) => {
    setOptions(value || '');
  });
</script>
```

```jsx react
import { OSelect, OOption } from '%PACKAGE-FULL-PATH%/dist/react';
import { useState } from 'react';

const App = () => {
  const options = ['Matrix', 'Guardians of the Galaxy', 'Expendables', 'Iron Man', 'Spider-man', 'Rocky'];

  const getFilteredOptions = inputValue => {
    const result = [];
    options.forEach(o => {
      if (o.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())) {
        result.push({
          value: o.split(' ').join('-').toLocaleLowerCase(),
          label: o
        });
      }
    });

    return result;
  };

  const handleAutocompleteInput = ({ detail: { value } }) => {
    setFilteredOptions(getFilteredOptions(value));
  };

  const [filteredOptions, setFilteredOptions] = useState(getFilteredOptions(''));

  return (
    <OSelect autocomplete autocomplete-external onOAutocompleteInput={handleAutocompleteInput}>
      {filteredOptions.map(({ value, label }) => (
        <OOption key={value} value={value}>
          {label}
        </OOption>
      ))}
    </OSelect>
  );
};
```

### Slots options-prefix & options-suffix

By using the `options-prefix` and `options-prefix` slots, you can prepend or append any content to the options list.

```html preview
<o-select placeholder="Options as options prefix and suffix">
  <o-option value="matrix">Matrix</o-option>
  <o-option value="guardians-of-the-galaxy">Guardians of the Galaxy</o-option>
  <o-option value="expendables">Expendables</o-option>

  <o-option value="suffix-option" slot="options-suffix">I'm a suffix option</o-option>
  <o-option value="prefix-option" slot="options-prefix">I'm a prefix option</o-option>
</o-select>
<br />

<o-select placeholder="Options as options prefix and suffix with autocomplete" autocomplete>
  <o-option value="matrix">Matrix</o-option>
  <o-option value="guardians-of-the-galaxy">Guardians of the Galaxy</o-option>
  <o-option value="expendables">Expendables</o-option>

  <o-option value="suffix-option" slot="options-suffix">I'm a suffix option</o-option>
  <o-option value="prefix-option" slot="options-prefix">I'm a prefix option</o-option>
</o-select>
<br />

<o-select placeholder="Other elements as options prefix and suffix">
  <o-option value="iron-man">Iron Man</o-option>
  <o-option value="spider-man">Spider-man</o-option>
  <o-option value="rocky">Rocky</o-option>

  <o-button slot="options-suffix">I'm a suffix button</o-button>
  <o-input placeholder="I'm a prefix o-input" slot="options-prefix"></o-input>
</o-select>
<br />

<o-select placeholder="Mix elements inside options prefix and suffix">
  <o-option value="matrix">Matrix</o-option>
  <o-option value="guardians-of-the-galaxy">Guardians of the Galaxy</o-option>
  <o-option value="expendables">Expendables</o-option>

  <div slot="options-prefix">
    <o-option value="prefix-option">I'm a prefix option</o-option>
    <o-input placeholder="I'm a prefix o-input" style="--o-input-border-radius-medium: 0"></o-input>
    <o-divider style="--spacing: 4px"></o-divider>
  </div>

  <div slot="options-suffix">
    <o-divider style="--spacing: 4px"></o-divider>
    <o-button style="--o-input-border-radius-medium: 0; width: 100%" square>I'm a suffix button</o-button>
    <o-option value="suffix-option">I'm a suffix option</o-option>
  </div>
</o-select>
<br />

<o-select class="select-options-prefix-suffix" placeholder="Interacting with the options prefix and suffix elements">
  <o-option value="iron-man">Iron Man</o-option>
  <o-option value="spider-man">Spider-man</o-option>
  <o-option value="rocky">Rocky</o-option>
</o-select>

<script>
  const select = document.querySelector('.select-options-prefix-suffix');

  // Options Prefix
  const optionsPrefixButton = document.createElement('o-button');
  optionsPrefixButton.innerHTML = 'Create option';
  optionsPrefixButton.square = true;
  optionsPrefixButton.setAttribute('slot', 'options-prefix');
  optionsPrefixButton.setAttribute('style', '--o-input-border-radius-medium: 0; width: 100%');
  optionsPrefixButton.addEventListener('click', () => {
    alert('Options prefix button clicked!');
  });

  // Options Suffix
  const optionsSuffixDiv = document.createElement('div');
  optionsSuffixDiv.setAttribute('slot', 'options-suffix');

  const suffixOption = document.createElement('o-option');
  suffixOption.value = 'suffix-option';
  suffixOption.innerHTML = 'Suffix option (Click me!)';
  suffixOption.addEventListener('click', () => {
    alert('Options suffix o-option clicked!');
  });

  const suffixInput = document.createElement('o-input');
  suffixInput.setAttribute('placeholder', 'Suffix input');
  suffixInput.addEventListener('o-change', () => {
    const msg = `Options suffix o-input changed! (value: ${suffixInput.value})`;
    alert(msg);
  });

  optionsSuffixDiv.append(suffixOption);
  optionsSuffixDiv.append(suffixInput);

  // Appending to o-select
  select.append(optionsPrefixButton);
  select.append(optionsSuffixDiv);
</script>
```

```jsx react
import { OSelect, OOption, OButton, OInput } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => {
  const options = ['Matrix', 'Guardians of the Galaxy', 'Expendables', 'Iron Man', 'Spider-man', 'Rocky'].map(o => ({
    value: o.split(' ').join('-').toLocaleLowerCase(),
    label: o
  }));

  return (
    <>
      <OSelect placeholder="Options as options prefix and suffix">
        {options.slice(0, 3).map(({ value, label }) => (
          <OOption key={value} value={value}>
            {label}
          </OOption>
        ))}

        <OOption value="suffix-option" slot="options-suffix">
          I'm a suffix option
        </OOption>
        <OOption value="prefix-option" slot="options-prefix">
          I'm a prefix option
        </OOption>
      </OSelect>
      <br />

      <OSelect placeholder="Options as options prefix and suffix with autocomplete" autocomplete>
        {options.slice(0, 3).map(({ value, label }) => (
          <OOption key={value} value={value}>
            {label}
          </OOption>
        ))}

        <OOption value="suffix-option" slot="options-suffix">
          I'm a suffix option
        </OOption>
        <OOption value="prefix-option" slot="options-prefix">
          I'm a prefix option
        </OOption>
      </OSelect>
      <br />

      <OSelect placeholder="Other elements as options prefix and suffix">
        {options.slice(3).map(({ value, label }) => (
          <OOption key={value} value={value}>
            {label}
          </OOption>
        ))}

        <o-button slot="options-suffix">I'm a suffix button</o-button>
        <o-input placeholder="I'm a prefix o-input" slot="options-prefix"></o-input>
      </OSelect>
      <br />

      <OSelect placeholder="Mix elements inside options prefix and suffix">
        {options.slice(0, 3).map(({ value, label }) => (
          <OOption key={value} value={value}>
            {label}
          </OOption>
        ))}

        <div slot="options-prefix">
          <OOption value="prefix-option">I'm a prefix option</OOption>
          <o-input placeholder="I'm a prefix o-input" style={{ '--o-input-border-radius-medium': '0' }}></o-input>
          <o-divider style={{ '--spacing': '4px' }}></o-divider>
        </div>

        <div slot="options-suffix">
          <o-divider style={{ '--spacing': '4px' }}></o-divider>
          <o-button style={{ '--o-input-border-radius-medium': '0', width: '100%' }} square>
            I'm a suffix button
          </o-button>
          <OOption value="suffix-option">I'm a suffix option</OOption>
        </div>
      </OSelect>
      <br />

      <OSelect
        class="select-options-prefix-suffix"
        placeholder="Interacting with the options prefix and suffix elements"
      >
        {options.slice(3).map(({ value, label }) => (
          <OOption key={value} value={value}>
            {label}
          </OOption>
        ))}

        <OButton
          slot="options-prefix"
          style={{ '--o-input-border-radius-medium': '0', width: '100%' }}
          onClick={() => alert('Options prefix button clicked!')}
          square
        >
          Create option
        </OButton>

        <div slot="options-suffix">
          <OOption
            value="suffix-option"
            onClick={() => {
              alert('Options suffix o-option clicked!');
            }}
          >
            Suffix option (Click me!)
          </OOption>

          <OInput
            placeholder="Suffix input"
            style={{ '--o-input-border-radius-medium': '0' }}
            onOChange={event => {
              const msg = `Options suffix o-input changed! (value: ${event.target.value})`;
              alert(msg);
            }}
          ></OInput>
        </div>
      </OSelect>
    </>
  );
};
```

[component-metadata:o-select]
