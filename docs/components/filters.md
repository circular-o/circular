# Filters

[component-header:o-filters]

```html preview
<o-filters
  filters='[{"type": "input", "name": "input", "placeholder": "Input"}, {"type": "select", "name": "select", "placeholder": "Select", "style": "width:160px", "options": [{ "value": "option-1", "label": "Option 1" }, { "value": "option-2", "label": "Option 2" }]}, {"type": "divider"}, {"type": "select", "name": "multi-select", "placeholder": "Multi-select", "multiple": true,"options": [{ "value": "option-1", "label": "Option 1" }, { "value": "option-2", "label": "Option 2" }]}, {"type": "switch", "name": "switch", "label": "Switch"}]'
></o-filters>
```

## Examples

### Simple filter

One config

### Style and CSS properties

One config

### Prefix and Suffix

TODO

### Rows

TODO

## Filter types

Using filters attribute directly with the tag element:

```html preview
<o-filters
  hide-clear-all
  filters='{"type": "input", "prefix": "search", "name": "test1", "placeholder": "Filter from attribute", "clearIconName": "x-square"}'
></o-filters>
```

Using filters property with the OFilters element:

```html preview
<o-filters class="filters-example"></o-filters>

<script>
  const filtersEl = document.querySelector('.filters-example');
  const multiOptions = [
    { value: 'option-1', label: 'Option 1', expandIconName: 'arrow-down-square' },
    { value: 'option-2', label: 'Option 2', prefix: 'house' },
    { value: 'option-3', label: 'Option 3', disabled: true },
    { value: 'option-4', label: 'Option 4', prefix: 'android2', suffix: 'apple' },
    { value: 'option-5', label: 'Option 5' },
    { value: 'option-6', label: 'Option 6' },
    { value: 'option-7', label: 'Option 7' }
  ];

  filtersEl.filters = [
    {
      type: 'input',
      name: 'test2',
      placeholder: 'Filter from filters property',
      prefix: 'search'
    },
    {
      type: 'divider'
    },
    {
      type: 'select',
      name: 'test3',
      placeholder: 'Select',
      options: [
        { value: 'show', label: 'Show multi-select', suffix: 'eye' },
        { value: 'hide', label: 'Hide multi-select', prefix: 'eye-slash' }
      ],
      hidden: true
    },
    {
      type: 'select',
      name: 'test3.2',
      placeholder: 'Multi-select',
      options: multiOptions,
      multiple: true,
      hidden: true
    },
    {
      type: 'divider',
      name: 'test3.2-divider',
      hidden: true
    },
    {
      type: 'switch',
      name: 'test3.3',
      label: 'Show/Hide Select'
    }
  ];

  filtersEl.addEventListener('o-filter-change', ({ detail }) => {
    console.log('o-filter-change filters detail', detail);

    const { filter, value } = detail;

    if (filter.name === 'test3.3') {
      value ? filtersEl.showFilter('test3') : filtersEl.hideFilter('test3');
      filtersEl.showFilter('test3.2-divider', !!value);
    } else if (filter.name === 'test3') {
      filtersEl.showFilter('test3.2', value === 'show');
    }
  });
</script>
```

Two rows:

```html preview
<o-filters class="filters-example-2-rows"></o-filters>

<script>
  const filtersEl = document.querySelector('.filters-example-2-rows');

  const switchFilter = { type: 'switch', name: 'test5.5', label: 'Toggle Row 2' };

  const filtersRow1 = [
    {
      type: 'row',
      items: [
        {
          type: 'input',
          name: 'test4',
          placeholder: 'Input 1 row 1',
          suffix: 'search'
        },
        {
          type: 'input',
          inputType: 'date',
          name: 'test5',
          placeholder: 'Input 2 row 1'
        },
        switchFilter
      ]
    }
  ];

  const filtersRow2 = [
    {
      type: 'row',
      items: [
        {
          type: 'divider',
          vertical: false
        },
        {
          type: 'input',
          name: 'test6',
          placeholder: 'Input 1 row 2',
          prefix: 'chat',
          prefixType: 'text',
          suffix: 'chat',
          value: 'lo que sea'
        },
        {
          type: 'input',
          name: 'test7',
          placeholder: 'Input 2 row 2',
          suffix: 'km',
          suffixType: 'text'
        }
      ]
    }
  ];

  filtersEl.filters = [...filtersRow1];

  filtersEl.addEventListener('o-filter-change', ({ detail }) => {
    console.log('o-filter-change filters-example-2-rows detail', detail);

    if (detail.filter.type === 'switch') {
      filtersEl.filters = detail.value ? [...filtersRow1, ...filtersRow2] : [...filtersRow1];
    }

    const {
      filter: { type, name, inputType = 'text' },
      value
    } = detail;

    if (name === 'test4' && detail.value?.toLowerCase() === 'show') {
      filtersEl.setFilterValueByFilterConfig(switchFilter, true, { emitEvent: true });
    }

    if (type === 'input' && inputType === 'text' && detail.value?.toLowerCase() === 'hide') {
      filtersEl.setFilterValue(switchFilter.name, false, { emitEvent: true });
    }
  });
</script>
```

Custom clear all button:

Custom label:

```html preview
<o-filters
  filters='[{"type": "input", "prefix": "search", "name": "username", "placeholder": "Username"}, {"type": "input", "suffix": "envelope-at", "name": "email", "placeholder": "Email", "inputType": "email"}]'
>
  <span slot="clear-all-label"> Reset filters </span>
</o-filters>
```

Custom button:

```html preview
<o-filters
  id="filters-custom-clear-all"
  filters='[{"type": "input", "prefix": "search", "name": "username", "placeholder": "Username"}, {"type": "input", "suffix": "envelope-at", "name": "email", "placeholder": "Email", "inputType": "email"}, {"type": "input", "suffix": "chat-left-text", "name": "comment", "placeholder": "Comment"}]'
>
  <o-button variant="danger" size="medium" slot="clear-all" outline>
    <o-icon slot="prefix" name="x-lg"></o-icon>
    Clear
  </o-button>
</o-filters>

<o-input id="username-input" label="External username input"></o-input>

<script>
  const filters = document.querySelector('#filters-custom-clear-all');
  const usernameInput = document.querySelector('#username-input');
  usernameInput.addEventListener('o-change', () => {
    filters.setFilterValue('username', usernameInput.value);
  });
  filters.addEventListener('o-filter-change', ({ detail }) => {
    if (detail.filter.name === 'username') {
      usernameInput.value = detail.value || '';
    }
  });
</script>
```

[component-metadata:o-filters]
