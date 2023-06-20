# Filters

[component-header:o-filters]

Using filters attribute directly with the tag element:

```html preview
<o-filters
  filters='{"type": "input", "prefix": "search", "name": "test1", "placeholder": "Filter from attribute"}'
></o-filters>
```

Using filters property with the OFilters element:

```html preview
<o-filters class="filters-example"></o-filters>

<script>
  const filtersEl = document.querySelector('.filters-example');
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
      type: 'input',
      name: 'test3',
      placeholder: 'another input'
    }
  ];

  filtersEl.addEventListener('o-filter-change', ({ detail }) =>
    console.log('o-filter-change filters-example detail', detail)
  );
</script>
```

Two rows:

```html preview
<o-filters class="filters-example-2-rows"></o-filters>

<script>
  const filtersEl = document.querySelector('.filters-example-2-rows');
  filtersEl.filters = [
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
        {
          type: 'input',
          inputType: 'number',
          inputmode: 'numeric',
          name: 'test5.5',
          placeholder: 'Input 3 row 1'
        },
        {
          type: 'divider',
          vertical: false
        }
      ]
    },
    {
      type: 'row',
      items: [
        {
          type: 'input',
          name: 'test6',
          placeholder: 'Input 1 row 2',
          prefix: 'chat',
          prefixType: 'text',
          suffix: 'chat'
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

  filtersEl.addEventListener('o-filter-change', ({ detail }) =>
    console.log('o-filter-change filters-example-2-rows detail', detail)
  );
</script>
```

## Examples

### First Example

TODO

### Second Example

TODO

[component-metadata:o-filters]
