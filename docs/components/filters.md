# Filters

[component-header:o-filters]

Using filters attribute directly with the tag element:

```html preview
<o-filters
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
      type: 'divider'
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
      filtersEl.setFilterDataByFilterConfig(switchFilter, true, { emitEvent: true });
    }

    if (type === 'input' && inputType === 'text' && detail.value?.toLowerCase() === 'hide') {
      filtersEl.setFilterData(switchFilter.name, false, { emitEvent: true });
    }
  });
</script>
```

## Examples

### First Example

TODO

### Second Example

TODO

[component-metadata:o-filters]
