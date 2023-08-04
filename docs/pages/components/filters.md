---
meta:
  title: Filters
  description: 'A component that renders a list of filters based on a JSON configuration.'
layout: component
---

```html:preview
<o-filters
  filters='[{"type": "input", "name": "input", "placeholder": "Input"}, {"type": "select", "name": "select", "placeholder": "Select", "style": "width:160px", "options": [{ "value": "option-1", "label": "Option 1" }, { "value": "option-2", "label": "Option 2" }]}, {"type": "divider"}, {"type": "select", "name": "multi-select", "placeholder": "Multi-select", "multiple": true,"options": [{ "value": "option-1", "label": "Option 1" }, { "value": "option-2", "label": "Option 2" }]}, {"type": "switch", "name": "switch", "label": "Switch"}]'
></o-filters>
```

```jsx:react
import { OFilters } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OFilters filters='[{"type": "input", "name": "input", "placeholder": "Input"}, {"type": "select", "name": "select", "placeholder": "Select", "options": [{ "value": "option-1", "label": "Option 1" }, { "value": "option-2", "label": "Option 2" }]}, {"type": "divider"}, {"type": "select", "name": "multi-select", "placeholder": "Multi-select", "multiple": true,"options": [{ "value": "option-1", "label": "Option 1" }, { "value": "option-2", "label": "Option 2" }]}, {"type": "switch", "name": "switch", "label": "Switch"}]'></OFilters>
);
```

## Examples

### Single filter

The filters JSON configuration can be one single object or an array of objects.

```html:preview
<o-filters
  filters='{"type": "select", "name": "single-select", "label": "Select", "multiple": true, "value": ["option-2"], "options": [{ "value": "option-1", "label": "Option 1" }, { "value": "option-2", "label": "Option 2" }, { "value": "option-3", "label": "Option 3" }, { "value": "option-4", "label": "Option 4" }]}'
></o-filters>
<br />
<o-filters
  hide-clear-all
  filters='{"type": "input", "name": "single-input", "placeholder": "Search", "suffix": "search", "style": "--filter-default-width: 100%"}'
></o-filters>
```

```jsx:react
import { OFilters } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => {
  return (
    <>
      <OFilters filters='{"type": "select", "name": "single-select", "label": "Select", "multiple": true, "value": ["option-2"], "options": [{ "value": "option-1", "label": "Option 1" }, { "value": "option-2", "label": "Option 2" }, { "value": "option-3", "label": "Option 3" }, { "value": "option-4", "label": "Option 4" }]}'></OFilters>
      <br />
      <OFilters
        hide-clear-all
        filters='{"type": "input", "name": "single-input", "placeholder": "Search", "suffix": "search", "style": "--filter-default-width: 100%"}'
      ></OFilters>
    </>
  );
};
```

### Prefix and Suffix

Some filters (e.i. input) support prefix and suffix configuration, by default they are treated as icons (o-icon), however, they can be set also as text.

```html:preview
<o-filters class="filters-prefix-suffix-example"></o-filters>

<script>
  const filtersEl = document.querySelector('.filters-prefix-suffix-example');

  filtersEl.filters = [
    { type: 'input', prefix: 'person', name: 'username', placeholder: 'Username' },
    { type: 'input', suffix: '@', suffixType: 'text', name: 'email', placeholder: 'Email', inputType: 'email' }
  ];
</script>
```

```jsx:react
import { OFilters } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => {
  const filters = [
    { type: 'input', prefix: 'person', name: 'username', placeholder: 'Username' },
    { type: 'input', suffix: '@', suffixType: 'text', name: 'email', placeholder: 'Email', inputType: 'email' }
  ];

  return <OFilters filters={filters}></OFilters>;
};
```

### Rows

You could add several rows to the filters component.

```html:preview
<o-filters class="filters-rows-example"></o-filters>

<script>
  const filtersEl = document.querySelector('.filters-rows-example');

  filtersEl.filters = [
    {
      type: 'row',
      items: [
        { type: 'input', name: 'firstName', placeholder: 'First name' },
        { type: 'input', name: 'lastName', placeholder: 'Last name' }
      ]
    },
    {
      type: 'row',
      items: [
        { type: 'input', prefix: 'person', name: 'username', placeholder: 'Username', value: 'username-example' },
        { type: 'input', suffix: '@', suffixType: 'text', name: 'email', placeholder: 'Email', inputType: 'email' }
      ]
    }
  ];
</script>
```

```jsx:react
import { OFilters } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => {
  const filters = [
    {
      type: 'row',
      items: [
        { type: 'input', name: 'firstName', placeholder: 'First name' },
        { type: 'input', name: 'lastName', placeholder: 'Last name' }
      ]
    },
    {
      type: 'row',
      items: [
        { type: 'input', prefix: 'person', name: 'username', placeholder: 'Username', value: 'username-example' },
        { type: 'input', suffix: '@', suffixType: 'text', name: 'email', placeholder: 'Email', inputType: 'email' }
      ]
    }
  ];

  return <OFilters filters={filters}></OFilters>;
};
```

### Divider

Vertical and horizontal divider can be used with the filters.

```html:preview
<o-filters class="filters-divider-example"></o-filters>

<script>
  const filtersEl = document.querySelector('.filters-divider-example');

  filtersEl.filters = [
    {
      type: 'row',
      items: [
        { type: 'input', name: 'firstName', placeholder: 'First name' },
        { type: 'divider' },
        { type: 'input', name: 'lastName', placeholder: 'Last name' }
      ]
    },
    {
      type: 'row',
      items: [
        { type: 'divider', vertical: false },
        { type: 'input', prefix: 'person', name: 'username', placeholder: 'Username' },
        { type: 'divider', style: 'height: 90px' },
        { type: 'input', suffix: '@', suffixType: 'text', name: 'email', placeholder: 'Email', inputType: 'email' }
      ]
    }
  ];
</script>
```

```jsx:react
import { OFilters } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => {
  const filters = [
    {
      type: 'row',
      items: [
        { type: 'input', name: 'firstName', placeholder: 'First name' },
        { type: 'divider' },
        { type: 'input', name: 'lastName', placeholder: 'Last name' }
      ]
    },
    {
      type: 'row',
      items: [
        { type: 'divider', vertical: false },
        { type: 'input', prefix: 'person', name: 'username', placeholder: 'Username' },
        { type: 'divider', style: 'height: 90px' },
        { type: 'input', suffix: '@', suffixType: 'text', name: 'email', placeholder: 'Email', inputType: 'email' }
      ]
    }
  ];

  return <OFilters filters={filters}></OFilters>;
};
```

### Hide/Show filters

All filters include a property called `hidden` which hides the filter during the render cycle. However, the filters element expose and API to show and hide any filter by its name.

```html:preview
<o-button class="filters-hide-show-button-toggle" variant="warning" outline>Toggle</o-button>
<o-button class="filters-hide-show-button-hide" variant="danger" outline>Hide</o-button>
<o-button class="filters-hide-show-button-show" variant="success" outline>Show</o-button>
<br /><br />
<o-filters class="filters-hide-show-example"></o-filters>

<script>
  const filtersEl = document.querySelector('.filters-hide-show-example');

  filtersEl.filters = [
    {
      type: 'input',
      name: 'toggle',
      placeholder: 'Toggle',
      style: '--o-input-border-color: var(--o-color-warning-600);'
    },
    { type: 'input', name: 'hide-and-show', placeholder: 'Hide and Show' },
    { type: 'input', name: 'always-hidden', placeholder: 'Hidden', hidden: true }
  ];

  let isShown = true;
  const buttonHideShowEl = document.querySelector('.filters-hide-show-button-toggle');
  const buttonHideEl = document.querySelector('.filters-hide-show-button-hide');
  const buttonShowEl = document.querySelector('.filters-hide-show-button-show');

  buttonHideShowEl.addEventListener('click', () => {
    isShown = !isShown;
    filtersEl.showFilter('toggle', isShown);
  });

  buttonHideEl.addEventListener('click', () => {
    filtersEl.hideFilter('hide-and-show');
  });

  buttonShowEl.addEventListener('click', () => {
    filtersEl.showFilter('hide-and-show');
  });
</script>
```

```jsx:react
import { OFilters, OButton } from 'O-PACKAGE-FULL-NAME-O/dist/react';
import { useRef } from 'react';

const App = () => {
  const filters = [
    {
      type: 'input',
      name: 'toggle',
      placeholder: 'Toggle',
      style: '--o-input-border-color: var(--o-color-warning-600);'
    },
    { type: 'input', name: 'hide-and-show', placeholder: 'Hide and Show' },
    { type: 'input', name: 'always-hidden', placeholder: 'Hidden', hidden: true }
  ];

  // useRef hook could be used, however, in some frameworks like NextJS, it will not work, by using the o-connected event, it will work
  const filtersEl = useRef(null);
  let isShown = true;

  const onConnectedHandler = ({ detail }) => {
    // Filters component's o-connected event will be triggered by the contained filters too, so we need to check if the event is triggered by the component itself
    if (detail.className === 'OFilters') {
      filtersEl.current = detail.ref;
    }
  };

  const toggleHandler = () => {
    isShown = !isShown;
    filtersEl.current?.showFilter('toggle', isShown);
  };

  const hideHandler = () => {
    filtersEl.current?.hideFilter('hide-and-show');
  };

  const showHandler = () => {
    filtersEl.current?.showFilter('hide-and-show');
  };

  return (
    <>
      <OButton variant="warning" outline onClick={toggleHandler}>
        Toggle
      </OButton>
      <OButton variant="danger" outline onClick={hideHandler}>
        Hide
      </OButton>
      <OButton variant="success" outline onClick={showHandler}>
        Show
      </OButton>
      <br />
      <br />
      <OFilters filters={filters} onOConnected={onConnectedHandler}></OFilters>
    </>
  );
};
```

### Set/Get filter data

The filters component exposes on its API methods to set and get a filter value.

```html:preview
<p>Press Set to copy from the input to the filter, press Get copy from the filter to the input.</p>
<o-filters class="filters-get-set-data-example" hide-clear-all></o-filters>
<br />
<o-button class="filters-get-set-data-set" outline>
  Set
  <o-icon name="upload" slot="suffix"></o-icon>
</o-button>
<o-button class="filters-get-set-data-set-by-config" outline>
  Set by filter config
  <o-icon name="arrow-up-circle" slot="suffix"></o-icon>
</o-button>
<o-button class="filters-get-set-data-get" outline>
  Get
  <o-icon name="download" slot="suffix"></o-icon>
</o-button>
<o-input class="filters-get-set-data-input" placeholder="Input"></o-input>

<script>
  const filtersEl = document.querySelector('.filters-get-set-data-example');
  const setButton = document.querySelector('.filters-get-set-data-set');
  const setByConfigButton = document.querySelector('.filters-get-set-data-set-by-config');
  const getButton = document.querySelector('.filters-get-set-data-get');
  const input = document.querySelector('.filters-get-set-data-input');

  const inputFilter = {
    type: 'input',
    name: 'input',
    placeholder: 'Search',
    suffix: 'search',
    style: '--filter-default-width: 100%'
  };

  filtersEl.filters = inputFilter;

  setButton.addEventListener('click', () => {
    filtersEl.setFilterValue('input', input.value);
  });

  setByConfigButton.addEventListener('click', () => {
    filtersEl.setFilterValueByFilterConfig(inputFilter, input.value);
  });

  getButton.addEventListener('click', () => {
    input.value = filtersEl.getFilterValue('input') ?? '';
  });

  filtersEl.addEventListener('o-filter-change', ({ detail }) => {
    console.log('o-filter-change filters detail', detail);
  });
</script>
```

```jsx:react
import { OFilters, OButton, OIcon, OInput } from 'O-PACKAGE-FULL-NAME-O/dist/react';
import { useRef } from 'react';

const App = () => {
  const inputFilter = {
    type: 'input',
    name: 'input',
    placeholder: 'Search',
    suffix: 'search',
    style: '--filter-default-width: 100%'
  };

  const filters = inputFilter;

  // This reference could be used directly on the filters component, however, in some frameworks like NextJS, it will not work, by using the o-connected event, it will work
  const filtersEl = useRef(null);
  const inputEl = useRef(null);

  const onConnectedHandler = ({ detail }) => {
    // Filters component's o-connected event will be triggered by the contained filters too, so we need to check if the event is triggered by the component itself
    if (detail.className === 'OFilters') {
      filtersEl.current = detail.ref;
    }
    if (detail.className === 'OInput' && detail.ref.name === 'input-field') {
      inputEl.current = detail.ref;
    }
  };

  const filterChangeHandler = ({ detail }) => {
    console.log('o-filter-change filters detail', detail);
  };

  const setValueHandler = () => {
    filtersEl.current?.setFilterValue('input', inputEl.current.value);
  };

  const setByConfigValueHandler = () => {
    filtersEl.current?.setFilterValueByFilterConfig(inputFilter, inputEl.current.value);
  };

  const getValueHandler = () => {
    inputEl.current.value = filtersEl.current?.getFilterValue('input') ?? '';
  };

  return (
    <>
      <p>Press Set to copy from the input to the filter, press Get copy from the filter to the input.</p>
      <OFilters
        filters={filters}
        onOConnected={onConnectedHandler}
        onOFilterChange={filterChangeHandler}
        hide-clear-all
      ></OFilters>
      <br />
      <OButton outline onClick={setValueHandler}>
        Set
        <OIcon name="upload" slot="suffix"></OIcon>
      </OButton>
      <OButton outline onClick={setByConfigValueHandler}>
        Set by filter config
        <OIcon name="arrow-up-circle" slot="suffix"></OIcon>
      </OButton>
      <OButton outline onClick={getValueHandler}>
        Get
        <OIcon name="download" slot="suffix"></OIcon>
      </OButton>
      <OInput name="input-field" placeholder="Input" onOConnected={onConnectedHandler}></OInput>
    </>
  );
};
```

### The 'o-filter-change' event

```html:preview
<o-filters class="filters-filter-change-event-example"></o-filters>

<script>
  const filtersEl = document.querySelector('.filters-filter-change-event-example');
  const multiOptions = [
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2', prefix: 'house' },
    { value: 'option-3', label: 'Option 3', suffix: 'bank' },
    { value: 'option-4', label: 'Option 4', disabled: true },
    { value: 'option-5', label: 'Option 5', prefix: 'android', suffix: 'apple' }
  ];

  const switchFilter = { type: 'switch', name: 'switch', label: 'Show/Hide Select' };

  filtersEl.filters = [
    {
      type: 'input',
      name: 'input',
      placeholder: "Type 'show' or 'hide'",
      style: 'width: 186px'
    },
    {
      type: 'divider'
    },
    {
      type: 'select',
      name: 'select',
      placeholder: 'Select',
      options: [
        { value: 'show', label: 'Show multi-select', suffix: 'eye' },
        { value: 'hide', label: 'Hide multi-select', prefix: 'eye-slash' }
      ],
      hidden: true
    },
    {
      type: 'select',
      name: 'multi-select',
      placeholder: 'Multi-select',
      options: multiOptions,
      multiple: true,
      expandIconName: 'arrow-down-square',
      hidden: true
    },
    {
      type: 'divider',
      name: 'divider',
      hidden: true
    },
    switchFilter
  ];

  filtersEl.addEventListener('o-filter-change', ({ detail }) => {
    console.log('o-filter-change filters detail', detail);

    const { filter, value } = detail;

    switch (filter.name) {
      case 'switch':
        // Using showFilter and hideFilter
        value ? filtersEl.showFilter('select') : filtersEl.hideFilter('select');
        // Using showFilter with the value param
        filtersEl.showFilter('divider', !!value);
        break;
      case 'select':
        filtersEl.showFilter('multi-select', value === 'show');
        break;
      case 'input':
        if (value?.toLowerCase() === 'show') {
          // Setting the value using the filter configuration
          filtersEl.setFilterValueByFilterConfig(switchFilter, true, { emitEvent: true });
        }
        break;
      default:
        break;
    }

    if (filter.type === 'input' && value?.toLowerCase() === 'hide') {
      // Setting the value using the filter name
      filtersEl.setFilterValue(switchFilter.name, false, { emitEvent: true });
    }
  });
</script>
```

```jsx:react
import { OFilters } from 'O-PACKAGE-FULL-NAME-O/dist/react';
import { useRef } from 'react';

const App = () => {
  const multiOptions = [
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2', prefix: 'house' },
    { value: 'option-3', label: 'Option 3', suffix: 'bank' },
    { value: 'option-4', label: 'Option 4', disabled: true },
    { value: 'option-5', label: 'Option 5', prefix: 'android', suffix: 'apple' }
  ];

  const switchFilter = { type: 'switch', name: 'switch', label: 'Show/Hide Select' };

  const filters = [
    {
      type: 'input',
      name: 'input',
      placeholder: "Type 'show' or 'hide'",
      style: 'width: 186px'
    },
    {
      type: 'divider'
    },
    {
      type: 'select',
      name: 'select',
      placeholder: 'Select',
      options: [
        { value: 'show', label: 'Show multi-select', suffix: 'eye' },
        { value: 'hide', label: 'Hide multi-select', prefix: 'eye-slash' }
      ],
      hidden: true
    },
    {
      type: 'select',
      name: 'multi-select',
      placeholder: 'Multi-select',
      options: multiOptions,
      multiple: true,
      expandIconName: 'arrow-down-square',
      hidden: true
    },
    {
      type: 'divider',
      name: 'divider',
      hidden: true
    },
    switchFilter
  ];

  // This reference could be used directly on the filters component, however, in some frameworks like NextJS, it will not work, by using the o-connected event, it will work
  const filtersEl = useRef(null);

  const onConnectedHandler = ({ detail }) => {
    // Filters component's o-connected event will be triggered by the contained filters too, so we need to check if the event is triggered by the component itself
    if (detail.className === 'OFilters') {
      filtersEl.current = detail.ref;
    }
  };

  const filterChangeHandler = ({ detail }) => {
    console.log('o-filter-change filters detail', detail);

    const { filter, value } = detail;

    switch (filter.name) {
      case 'switch':
        // Using showFilter and hideFilter
        value ? filtersEl.current?.showFilter('select') : filtersEl.current?.hideFilter('select');
        // Using showFilter with the value param
        filtersEl.current?.showFilter('divider', !!value);
        break;
      case 'select':
        filtersEl.current?.showFilter('multi-select', value === 'show');
        break;
      case 'input':
        if (value?.toLowerCase() === 'show') {
          // Setting the value using the filter configuration
          filtersEl.current?.setFilterValueByFilterConfig(switchFilter, true, { emitEvent: true });
        }
        break;
      default:
        break;
    }

    if (filter.type === 'input' && value?.toLowerCase() === 'hide') {
      // Setting the value using the filter name
      filtersEl.current?.setFilterValue(switchFilter.name, false, { emitEvent: true });
    }
  };

  return (
    <>
      <OFilters filters={filters} onOConnected={onConnectedHandler} onOFilterChange={filterChangeHandler}></OFilters>
    </>
  );
};
```

### The 'Clear all' button

The filters component by default includes a "Clear all" button which is shown once at least one filter has a value and is hidden when all the filters are empty.

Hiding the button:

```html:preview
<o-filters
  hide-clear-all
  filters='[{"type": "input", "prefix": "search", "name": "username", "placeholder": "Username", "value": "username-example"}, {"type": "input", "suffix": "envelope-at", "name": "email", "placeholder": "Email", "inputType": "email"}]'
></o-filters>
```

```jsx:react
import { OFilters } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OFilters
    hide-clear-all
    filters='[{"type": "input", "prefix": "search", "name": "username", "placeholder": "Username", "value": "username-example"}, {"type": "input", "suffix": "envelope-at", "name": "email", "placeholder": "Email", "inputType": "email"}]'
  ></OFilters>
);
```

Changing the button's label:

```html:preview
<o-filters
  filters='[{"type": "input", "prefix": "search", "name": "username", "placeholder": "Username", "value": "username-example"}, {"type": "input", "suffix": "envelope-at", "name": "email", "placeholder": "Email", "inputType": "email"}]'
>
  <span slot="clear-all-label">Reset filters</span>
</o-filters>
```

```jsx:react
import { OFilters } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OFilters filters='[{"type": "input", "prefix": "search", "name": "username", "placeholder": "Username", "value": "username-example"}, {"type": "input", "suffix": "envelope-at", "name": "email", "placeholder": "Email", "inputType": "email"}]'>
    <span slot="clear-all-label">Reset filters</span>
  </OFilters>
);
```

Customizing the button:

```html:preview
<o-filters
  filters='[{"type": "input", "prefix": "search", "name": "username", "placeholder": "Username", "value": "username-example"}, {"type": "input", "suffix": "envelope-at", "name": "email", "placeholder": "Email", "inputType": "email"}]'
>
  <o-button variant="danger" size="medium" slot="clear-all" outline>
    <o-icon slot="prefix" name="x-lg"></o-icon>
    Clear
  </o-button>
</o-filters>
```

```jsx:react
import { OFilters, OButton, OIcon } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OFilters filters='[{"type": "input", "prefix": "search", "name": "username", "placeholder": "Username", "value": "username-example"}, {"type": "input", "suffix": "envelope-at", "name": "email", "placeholder": "Email", "inputType": "email"}]'>
    <OButton variant="danger" size="medium" slot="clear-all" outline>
      <OIcon slot="prefix" name="x-lg"></OIcon>
      Clear
    </OButton>
  </OFilters>
);
```

### Filters styling

The filter configuration can include 2 special properties called `style` and `css`, the first one is to set the `style` attribute and the other one to set the `part` and `class` attribute of the element.

```html:preview
<o-filters
  class="o-filters-custom-css"
  filters='[{"type": "input", "name": "input-1", "placeholder": "Input 1", "value": "input-example", "style": "width: 300px; --o-input-border-width: 2px;--o-input-border-color: red;"}, {"type": "input", "name": "input-2", "placeholder": "Input 2", "part": "input-custom-css"}]'
></o-filters>

<style>
  .o-filters-custom-css::part(input-custom-css) {
    --o-input-border-color: blue;
  }
</style>
```

```jsx:react
import { OFilters } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => {
  const cssClass = `
  .o-filters-custom-css::part(input-custom-css) {
    --o-input-border-color: blue;
  }
  `;

  return (
    <>
      <OFilters
        class="o-filters-custom-css"
        filters='[{"type": "input", "name": "input-1", "placeholder": "Input 1", "value": "input-example", "style": "width: 300px; --o-input-border-width: 2px;--o-input-border-color: red;"}, {"type": "input", "name": "input-2", "placeholder": "Input 2", "css": "input-custom-css"}]'
      ></OFilters>

      <style>{cssClass}</style>
    </>
  );
};
```

## Adding a new filter type

By default the filters component includes several types, however, more types can be added using the registerType API.

To create a new type plugin, you have to extend the abstract class `AbstractTypePlugin` located at `/dist/components/filters/types-plugins/abstract.type.plugin.js`.

The extended class has to define the `type` property and the `render` function. Internally, the type plugin class includes the `filtersComponent` property which is the filters element itself (type `OFilters`).

The `type` property can be a new type name or it can overwrite an existing one.

The `render` function receives the filter configuration as the first parameter and it must return the filter element to render which can be one of the following types `typeof nothing` (nothing to show), `TemplateResult` (returned by the `html` function of [lit.dev](https://lit.dev/docs/api/templates/#html)), `LibraryBaseElement` (O-LIBRARY-NAME-O base element class).

For more details please check the plugins already defined in the folder `/dist/components/filters/types-plugins/`.

```html:preview
<o-filters class="filters-custom-render-example"></o-filters>

<script type="module">
  import { AbstractTypePlugin } from 'O-PACKAGE-URL-O/dist/components/filters/types-plugins/abstract.type.plugin.js';
  import { cancelEvent } from 'O-PACKAGE-URL-O/dist/components/filters/utilities.type.plugin.js';

  class InputOverwriteTypePlugin extends AbstractTypePlugin {
    type = 'input';

    render(filter) {
      // By default it is 40px width
      const el = this.filtersComponent.createFilterElement('o-input', filter);

      el.innerHTML = `<o-icon name="funnel" slot="prefix"></o-icon>`;

      return el;
    }
  }

  class RatingTypePlugin extends AbstractTypePlugin {
    type = 'rating';

    render(filter) {
      // By default it is 40px width
      return this.filtersComponent.createFilterElement('o-rating', filter);
    }
  }

  class ColorPickerTypePlugin extends AbstractTypePlugin {
    type = 'color-picker';

    render(filter) {
      // By default it is 40px width
      return this.filtersComponent.createFilterElement('o-color-picker', { style: 'width: 40px', ...filter });
    }
  }

  class CustomInputTypePlugin extends AbstractTypePlugin {
    type = 'custom-input';

    render(filter) {
      return this.filtersComponent.createFilterElement('input', {
        style: 'border: solid 1px green;width: 150px;',
        ...filter
      });
    }

    addConnectedListener(el, listener) {
      el.addEventListener('o-connected', connectedEvent => listener(connectedEvent));

      // Native element renders immediately, so the event is dispatched right away
      const event = new CustomEvent('o-connected', { detail: { ref: el, className: el.constructor.name } });
      setTimeout(() => {
        el.dispatchEvent(event);
      }, 10);
    }

    addChangeListener(el, listener) {
      el.addEventListener('change', e => {
        cancelEvent(e);
        const event = new CustomEvent('o-change');
        listener(event);
      });
    }

    addFocusListener(el, listener) {
      el.addEventListener('focus', e => {
        cancelEvent(e);
        const event = new CustomEvent('o-focus');
        listener(event);
      });
    }
  }

  customElements.whenDefined('o-filters').then(() => {
    const filtersEl = document.querySelector('.filters-custom-render-example');

    filtersEl.registerType(InputOverwriteTypePlugin);
    filtersEl.registerType(RatingTypePlugin);
    filtersEl.registerType(ColorPickerTypePlugin);
    filtersEl.registerType(CustomInputTypePlugin);

    filtersEl.filters = [
      { type: 'input', name: 'input-overwrite', placeholder: 'Input overwrite' },
      { type: 'rating', name: 'rating', style: 'width: 116px', value: 3 },
      { type: 'color-picker', name: 'color-picker' },
      { type: 'custom-input', name: 'custom-input' }
    ];

    filtersEl.addEventListener('o-filter-change', ({ detail }) => {
      console.log('o-filter-change filters detail', detail);
    });
  });
</script>
```

```jsx:react
import { OFilters } from 'O-PACKAGE-FULL-NAME-O/dist/react';
import { AbstractTypePlugin } from 'O-PACKAGE-FULL-NAME-O/dist/components/filters/types-plugins/abstract.type.plugin';
import { cancelEvent } from 'O-PACKAGE-FULL-NAME-O/dist/components/filters/utilities.type.plugin.js';
import { useRef } from 'react';

class InputOverwriteTypePlugin extends AbstractTypePlugin {
  type = 'input';

  render(filter) {
    // By default it is 40px width
    const el = this.filtersComponent.createFilterElement('o-input', filter);

    el.innerHTML = `<o-icon name="funnel" slot="prefix"></o-icon>`;

    return el;
  }
}

class RatingTypePlugin extends AbstractTypePlugin {
  type = 'rating';

  render(filter) {
    // By default it is 40px width
    return this.filtersComponent.createFilterElement('o-rating', filter);
  }
}

class ColorPickerTypePlugin extends AbstractTypePlugin {
  type = 'color-picker';

  render(filter) {
    // By default it is 40px width
    return this.filtersComponent.createFilterElement('o-color-picker', { style: 'width: 40px', ...filter });
  }
}

class CustomInputTypePlugin extends AbstractTypePlugin {
  type = 'custom-input';

  render(filter) {
    return this.filtersComponent.createFilterElement('input', {
      style: 'border: solid 1px green;width: 150px;',
      ...filter
    });
  }

  addConnectedListener(el, listener) {
    el.addEventListener('o-connected', connectedEvent => listener(connectedEvent));

    // Native element renders immediately, so the event is dispatched right away
    const event = new CustomEvent('o-connected', { detail: { ref: el, className: el.constructor.name } });
    setTimeout(() => {
      el.dispatchEvent(event);
    }, 10);
  }

  addChangeListener(el, listener) {
    el.addEventListener('change', e => {
      cancelEvent(e);
      const event = new CustomEvent('o-change');
      listener(event);
    });
  }

  addFocusListener(el, listener) {
    el.addEventListener('focus', e => {
      cancelEvent(e);
      const event = new CustomEvent('o-focus');
      listener(event);
    });
  }
}

const App = () => {
  const filters = [
    { type: 'input', name: 'input-overwrite', placeholder: 'Input overwrite' },
    { type: 'rating', name: 'rating', style: 'width: 116px', value: 3 },
    { type: 'color-picker', name: 'color-picker' },
    { type: 'custom-input', name: 'custom-input' }
  ];

  // This reference could be used directly on the filters component, however, in some frameworks like NextJS, it will not work, by using the o-connected event, it will work
  const filtersEl = useRef(null);

  const onConnectedHandler = ({ detail }) => {
    // Filters component's o-connected event will be triggered by the contained filters too, so we need to check if the event is triggered by the component itself
    if (detail.className === 'OFilters') {
      filtersEl.current = detail.ref;

      filtersEl.current.registerType(InputOverwriteTypePlugin);
      filtersEl.current.registerType(RatingTypePlugin);
      filtersEl.current.registerType(ColorPickerTypePlugin);
      filtersEl.current.registerType(CustomInputTypePlugin);

      filtersEl.current.filters = filters;
    }
  };

  const filterChangeHandler = ({ detail }) => {
    console.log('o-filter-change filters detail', detail);
  };

  return <OFilters onOConnected={onConnectedHandler} onOFilterChange={filterChangeHandler}></OFilters>;
};
```

## Filters' types

Defines the properties of all the supported filters, the useful ones are defined to provide auto-complete options for the IDE (i.e.: vscode), the rest are passed to the filter component.

Please take into account that here can be only passed properties that are not functions, promises, etc, because the filters configurations are serialized to JSON.

Please check each O-LIBRARY-NAME-O component documentation used as a filter for more details about the properties that can be passed.

### Current filters' types supported

Located at `/dist/components/filters/filters.types.js`, following are the current supported types:

- input ([OInput](/components/input))
- select ([OSelect](/components/select))
- switch ([OSwitch](/components/switch))
- divider ([ODivider](/components/divider))
- row

```js
FilterType = 'input' | 'select' | 'switch' | 'divider' | 'row';
```

### Base filter definition

Defines the properties of the base filter from where must extend all the filters types. The useful properties are defined to provide auto-complete options for the IDE (i.e.: vscode), the rest are passed to the filter component. Please check each O-LIBRARY-NAME-O component documentation for more details.

```js
BaseFilter {
  // All other props are passed to the component
  [key: string]: any;
  // Type of the filter
  type: FilterType;
  // Name of the filter, useful to identify the filter in the DOM, the attribute name is 'data-filter-name'
  name: string;
  // Pass styles to the component using the style attribute
  style?: string;
  // Pass css classes to the component
  css?: string;
  hidden?: boolean;
}
```

### Input filter type

Defines the properties of the input filter.

Please check the [`OInput`](/components/input) component documentation for more details about the properties that can be passed.

```js
InputFilter extends BaseFilter {
  // Custom input filter properties, these ones are treated in a special way by the filter component, usually they are not passed to the input component,
  // it means that are ignored in the getValidPropsFromFilterConfig method
  type: 'input';
  inputType?: 'date' | 'datetime-local' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url';
  prefix?: string;
  suffix?: string;
  // Default value is 'icon'
  prefixType?: 'icon' | 'text';
  // Default value is 'icon'
  suffixType?: 'icon' | 'text';
  clearIconName?: string;
  // Default value is true
  clearable?: boolean;

  // Native input attributes, these ones are passed as is to the input component. Please check the OInput component documentation for more details
  inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
  value?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  size?: 'small' | 'medium' | 'large';
}
```

### Select (and multi-select) filter type

Defines the properties for the select filter.

Please check the [`OSelect`](/components/select) component documentation for more details about the properties that can be passed.

```js
SelectFilter extends BaseFilter {
  // Custom select filter properties, these ones are treated in a special way by the filter component, usually they are not passed to the select component,
  // it means that are ignored in the getValidPropsFromFilterConfig method
  type: 'select';
  options: OptionSelectFilter[];
  prefix?: string;
  // Default value is 'icon'
  prefixType?: 'icon' | 'text';
  clearIconName?: string;
  expandIconName?: string;
  // Default value is true
  clearable?: boolean;

  // Native select attributes, these ones are passed as is to the select component. Please check the OSelect component documentation for more details
  value?: string;
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  multiple?: boolean;
  disabled?: boolean;
  label?: string;
}
// Options for the select filter
export interface OptionSelectFilter {
  // Custom option properties, these ones are treated in a special way by the select filter component, usually they are not passed to the option component
  label: string;
  prefix?: string;
  suffix?: string;
  // Default value is 'icon'
  prefixType?: 'icon' | 'text';
  // Default value is 'icon'
  suffixType?: 'icon' | 'text';

  // Native option attributes, these ones are passed as is to the option component. Please check the OOption component documentation for more details
  value: string;
  disabled?: boolean;
}
```

### Switch filter type

Defines the props of the switch filter.

Please check the [`OSwitch`](/components/switch) component documentation for more details about the properties that can be passed.

```js
SwitchFilter extends BaseFilter {
  // Custom switch filter properties, these ones are treated in a special way by the filter component, usually they are not passed to the input component,
  // it means that are ignored in the getValidPropsFromFilterConfig method
  type: 'switch';
  label: string;

  // Native switch attributes, these ones are passed as is to the switch component. Please check the OSwitch component documentation for more details
  value?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  checked?: boolean;
}
```

### Divider filter type

Defines the props of the divider filter.

Please check the [`ODivider`](/components/divider) component documentation for more details about the properties that can be passed.

```js
DividerFilter extends Omit<BaseFilter, 'name'> {
  // Custom input filter properties, these ones are treated in a special way by the filter component, usually they are not passed to the input component,
  // it means that are ignored in the getValidPropsFromFilterConfig method
  type: 'divider';
  name?: string;
  // Default value is true
  vertical?: boolean;
}
```

### Row filter type

Defines the props of the row filter.

```js
RowFilter extends Omit<BaseFilter, 'name'> {
  // Custom input filter properties, these ones are treated in a special way by the filter component, usually they are not passed to the input component,
  // it means that are ignored in the getValidPropsFromFilterConfig method
  type: 'row';
  name?: string;
  items: Filter[];
}
```
