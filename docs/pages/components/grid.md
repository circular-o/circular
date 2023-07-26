---
meta:
  title: Grid
  description: This component is a wrapper for the Tabulator library.
layout: component
---

It applies the default styles and provides a simple API to initialize the grid and then access the grid instance.

The grid options provided to initialize the grid component are the same ones used in Tabulator, also the grid instance can be used to call any Tabulator method. See the [Tabulator documentation](https://tabulator.info/docs/5.5) for more details.

```html:preview
<o-grid class="grid-example"></o-grid>

<script>
  //define some sample data
  const tableData = [
    { id: 1, name: 'Oli Bob', age: '12', col: 'red', dob: '' },
    { id: 2, name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982' },
    { id: 3, name: 'Christine Lobowski', age: '42', col: 'green', dob: '22/05/1982' },
    { id: 4, name: 'Brendon Philips', age: '125', col: 'orange', dob: '01/08/1980' },
    { id: 5, name: 'Margret Marmajuke', age: '16', col: 'yellow', dob: '31/01/1999' }
  ];

  const gridOptions = {
    data: tableData, // Assign data to table
    columns: [
      // Define Table Columns
      { title: 'Name', field: 'name', width: 150 },
      { title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress' },
      { title: 'Favorite Color', field: 'col' },
      { title: 'Date Of Birth', field: 'dob', sorter: 'date', hozAlign: 'center' }
    ]
  };

  const gridEl = document.querySelector('o-grid.grid-example');
  gridEl.options = gridOptions;

  gridEl.addEventListener('o-grid-init', ({ detail: { grid } }) => {
    //trigger an alert message when the row is clicked
    grid.on('rowClick', function (e, row) {
      alert('Row ' + row.getData().id + ' Clicked!!!!');
    });
  });
</script>
```

```jsx:react
import { OGrid } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const tableData = [
  { id: 1, name: 'Oli Bob', age: '12', col: 'red', dob: '' },
  { id: 2, name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982' },
  { id: 3, name: 'Christine Lobowski', age: '42', col: 'green', dob: '22/05/1982' },
  { id: 4, name: 'Brendon Philips', age: '125', col: 'orange', dob: '01/08/1980' },
  { id: 5, name: 'Margret Marmajuke', age: '16', col: 'yellow', dob: '31/01/1999' }
];

const gridOptions = {
  data: tableData, // Assign data to table
  columns: [
    // Define Table Columns
    { title: 'Name', field: 'name', width: 150 },
    { title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress' },
    { title: 'Favorite Color', field: 'col' },
    { title: 'Date Of Birth', field: 'dob', sorter: 'date', hozAlign: 'center' }
  ]
};

const App = () => {
  const gridInitHandler = ({ detail: { grid } }) => {
    //trigger an alert message when the row is clicked
    grid.on('rowClick', function (e, row) {
      alert('Row ' + row.getData().id + ' Clicked!!!!');
    });
  };

  return <OGrid options={gridOptions} onOGridInit={gridInitHandler}></OGrid>;
};
```

## Examples

### Adding custom styles

You can pass custom styles by using the `custom-styles` attribute of the tag, or by using the `customStyles` property of the grid object. The custom styles can modify the Tabulator css styles.

#### Using the `custom-styles` attribute

```html:preview
<o-grid
  class="grid-example-custom-styles"
  custom-styles=".grid-container.tabulator { padding:10px; background-color: red; }"
></o-grid>

<script>
  //define some sample data
  const tableData = [
    { id: 1, name: 'Oli Bob', age: '12', col: 'red' },
    { id: 2, name: 'Mary May', age: '1', col: 'blue' }
  ];

  const gridOptions = {
    data: tableData, // Assign data to table
    minHeight: 80,
    columns: [
      // Define Table Columns
      { title: 'Name', field: 'name', width: 150 },
      { title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress' },
      { title: 'Favorite Color', field: 'col' }
    ]
  };

  const gridEl = document.querySelector('o-grid.grid-example-custom-styles');
  gridEl.options = gridOptions;
</script>
```

```jsx:react
import { OGrid } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const tableData = [
  { id: 1, name: 'Oli Bob', age: '12', col: 'red' },
  { id: 2, name: 'Mary May', age: '1', col: 'blue' }
];

const gridOptions = {
  data: tableData, // Assign data to table
  minHeight: 80,
  columns: [
    // Define Table Columns
    { title: 'Name', field: 'name', width: 150 },
    { title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress' },
    { title: 'Favorite Color', field: 'col' }
  ]
};

const App = () => (
  <OGrid
    options={gridOptions}
    custom-styles=".grid-container.tabulator { padding:10px; background-color: red; }"
  ></OGrid>
);
```

#### Using the `customStyles` object property

```html:preview
<o-grid class="grid-example-custom-styles-property"></o-grid>

<script>
  //define some sample data
  const tableData = [
    { id: 1, name: 'Oli Bob', age: '12', col: 'red' },
    { id: 2, name: 'Mary May', age: '1', col: 'blue' }
  ];

  const gridOptions = {
    data: tableData, // Assign data to table
    minHeight: 80,
    columns: [
      // Define Table Columns
      { title: 'Name', field: 'name', width: 150 },
      { title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress' },
      { title: 'Favorite Color', field: 'col' }
    ]
  };

  const gridEl = document.querySelector('o-grid.grid-example-custom-styles-property');
  gridEl.options = gridOptions;
  gridEl.customStyles = `
    .grid-container.tabulator {
      padding:5px;
      background-color: blue;
    }
  `;
</script>
```

```jsx:react
import { OGrid } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const tableData = [
  { id: 1, name: 'Oli Bob', age: '12', col: 'red' },
  { id: 2, name: 'Mary May', age: '1', col: 'blue' }
];

const gridOptions = {
  data: tableData, // Assign data to table
  minHeight: 80,
  columns: [
    // Define Table Columns
    { title: 'Name', field: 'name', width: 150 },
    { title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress' },
    { title: 'Favorite Color', field: 'col' }
  ]
};

const App = () => {
  const onConnectedHandler = ({ detail }) => {
    const gridEl = detail.ref;
    gridEl.customStyles = `
      .grid-container.tabulator {
        padding:5px;
        background-color: blue;
      }
    `;
  };

  return <OGrid options={gridOptions} onOConnected={onConnectedHandler}></OGrid>;
};
```

### Formatters & Grid layout

Based on this [Tabulator example](https://tabulator.info/examples/5.5?#formatters)

```html:preview
<h4>Formatters:</h4>
<o-grid class="grid-formatters-example"></o-grid>
<br /><br />
<h4>Formatters using row-layout:</h4>
<o-grid class="grid-row-layout-example" layout="row-layout"></o-grid>

<script>
  // Define some sample data
  const tableData = [
    {
      id: 1,
      name: 'Oli Bob',
      progress: 12,
      location: 'United Kingdom',
      gender: 'male',
      rating: 1,
      col: 'red',
      dob: '14/04/1984',
      car: 1,
      lucky_no: 5,
      lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing '
    },
    {
      id: 2,
      name: 'Mary May',
      progress: 1,
      location: 'Germany',
      gender: 'female',
      rating: 2,
      col: 'blue',
      dob: '14/05/1982',
      car: true,
      lucky_no: 10,
      lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
    },
    {
      id: 3,
      name: 'Christine Lobowski',
      progress: 42,
      location: 'France',
      gender: 'female',
      rating: 0,
      col: 'green',
      dob: '22/05/1982',
      car: 'true',
      lucky_no: 12,
      lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
    },
    {
      id: 4,
      name: 'Brendon Philips',
      progress: 100,
      location: 'USA',
      gender: 'male',
      rating: 1,
      col: 'orange',
      dob: '01/08/1980',
      car: false,
      lucky_no: 18,
      lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
    },
    {
      id: 5,
      name: 'Margret Marmajuke',
      progress: 16,
      location: 'Canada',
      gender: 'female',
      rating: 5,
      col: 'yellow',
      dob: '31/01/1999',
      car: false,
      lucky_no: 33,
      lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
    },
    {
      id: 6,
      name: 'Frank Harbours',
      progress: 38,
      location: 'Russia',
      gender: 'male',
      rating: 4,
      col: 'red',
      dob: '12/05/1966',
      car: 1,
      lucky_no: 2,
      lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
    },
    {
      id: 7,
      name: 'Jamie Newhart',
      progress: 23,
      location: 'India',
      gender: 'male',
      rating: 3,
      col: 'green',
      dob: '14/05/1985',
      car: true,
      lucky_no: 63,
      lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
    },
    {
      id: 8,
      name: 'Gemma Jane',
      progress: 60,
      location: 'China',
      gender: 'female',
      rating: 0,
      col: 'red',
      dob: '22/05/1982',
      car: 'true',
      lucky_no: 72,
      lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
    },
    {
      id: 9,
      name: 'Emily Sykes',
      progress: 42,
      location: 'South Korea',
      gender: 'female',
      rating: 1,
      col: 'maroon',
      dob: '11/11/1970',
      car: false,
      lucky_no: 44,
      lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
    },
    {
      id: 10,
      name: 'James Newman',
      progress: 73,
      location: 'Japan',
      gender: 'male',
      rating: 5,
      col: 'red',
      dob: '22/03/1998',
      car: false,
      lucky_no: 9,
      lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
    }
  ];

  const printIcon = function (cell, formatterParams) {
    return `<o-icon library="material" name="print"></o-icon>`;
  };

  const gridOptions = {
    data: tableData, // Assign data to table
    columns: [
      { formatter: 'rownum', hozAlign: 'center', width: 40 },
      {
        formatter: printIcon,
        width: 40,
        hozAlign: 'center',
        cellClick: function (e, cell) {
          alert('Printing row data for: ' + cell.getRow().getData().name);
        }
      },
      {
        title: 'Name',
        field: 'name',
        width: 150,
        formatter: function (cell, formatterParams) {
          const value = cell.getValue();
          return value.indexOf('o') > 0 ? `<span style="color:#3FB449; font-weight:bold;">${value}</span>` : value;
        }
      },
      {
        title: 'Progress',
        field: 'progress',
        formatter: 'progress',
        formatterParams: { color: ['#00dd00', 'orange', 'rgb(255,0,0)'] },
        sorter: 'number',
        width: 100
      },
      {
        title: 'Rating',
        field: 'rating',
        formatter: 'star',
        formatterParams: { stars: 6 },
        hozAlign: 'center',
        width: 120
      },
      { title: 'Driver', field: 'car', hozAlign: 'center', formatter: 'tickCross', width: 50 },
      { title: 'Col', field: 'col', formatter: 'color', width: 50 },
      { title: 'Line Wrapping', field: 'lorem', formatter: 'textarea' },
      { formatter: 'buttonCross', width: 30, hozAlign: 'center' }
    ]
  };

  const gridFormattersEl = document.querySelector('o-grid.grid-formatters-example');
  const gridRowLayoutEl = document.querySelector('o-grid.grid-row-layout-example');

  gridFormattersEl.options = gridOptions;
  gridRowLayoutEl.options = gridOptions;

  gridFormattersEl.addEventListener('o-grid-init', ({ detail: { grid } }) => {
    // Trigger an alert message when the row is clicked
    grid.on('rowClick', function (e, row) {
      alert('Grid Formatters ' + row.getData().id + ' Clicked!!!!');
    });
  });

  gridRowLayoutEl.addEventListener('o-grid-init', ({ detail: { grid } }) => {
    // Trigger an alert message when the row is clicked
    grid.on('rowClick', function (e, row) {
      alert('Grid RowLayout ' + row.getData().id + ' Clicked!!!!');
    });
  });
</script>
```

```jsx:react
import { OGrid } from 'O-PACKAGE-FULL-NAME-O/dist/react';

// Define some sample data
const tableData = [
  {
    id: 1,
    name: 'Oli Bob',
    progress: 12,
    location: 'United Kingdom',
    gender: 'male',
    rating: 1,
    col: 'red',
    dob: '14/04/1984',
    car: 1,
    lucky_no: 5,
    lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing '
  },
  {
    id: 2,
    name: 'Mary May',
    progress: 1,
    location: 'Germany',
    gender: 'female',
    rating: 2,
    col: 'blue',
    dob: '14/05/1982',
    car: true,
    lucky_no: 10,
    lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
  },
  {
    id: 3,
    name: 'Christine Lobowski',
    progress: 42,
    location: 'France',
    gender: 'female',
    rating: 0,
    col: 'green',
    dob: '22/05/1982',
    car: 'true',
    lucky_no: 12,
    lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
  },
  {
    id: 4,
    name: 'Brendon Philips',
    progress: 100,
    location: 'USA',
    gender: 'male',
    rating: 1,
    col: 'orange',
    dob: '01/08/1980',
    car: false,
    lucky_no: 18,
    lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
  },
  {
    id: 5,
    name: 'Margret Marmajuke',
    progress: 16,
    location: 'Canada',
    gender: 'female',
    rating: 5,
    col: 'yellow',
    dob: '31/01/1999',
    car: false,
    lucky_no: 33,
    lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
  },
  {
    id: 6,
    name: 'Frank Harbours',
    progress: 38,
    location: 'Russia',
    gender: 'male',
    rating: 4,
    col: 'red',
    dob: '12/05/1966',
    car: 1,
    lucky_no: 2,
    lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
  },
  {
    id: 7,
    name: 'Jamie Newhart',
    progress: 23,
    location: 'India',
    gender: 'male',
    rating: 3,
    col: 'green',
    dob: '14/05/1985',
    car: true,
    lucky_no: 63,
    lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
  },
  {
    id: 8,
    name: 'Gemma Jane',
    progress: 60,
    location: 'China',
    gender: 'female',
    rating: 0,
    col: 'red',
    dob: '22/05/1982',
    car: 'true',
    lucky_no: 72,
    lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
  },
  {
    id: 9,
    name: 'Emily Sykes',
    progress: 42,
    location: 'South Korea',
    gender: 'female',
    rating: 1,
    col: 'maroon',
    dob: '11/11/1970',
    car: false,
    lucky_no: 44,
    lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
  },
  {
    id: 10,
    name: 'James Newman',
    progress: 73,
    location: 'Japan',
    gender: 'male',
    rating: 5,
    col: 'red',
    dob: '22/03/1998',
    car: false,
    lucky_no: 9,
    lorem: 'Lorem ipsum dolor sit amet, elit consectetur adipisicing'
  }
];

const printIcon = function (cell, formatterParams) {
  return `<o-icon library="material" name="print"></o-icon>`;
};

const gridOptions = {
  data: tableData, // Assign data to table
  columns: [
    { formatter: 'rownum', hozAlign: 'center', width: 40 },
    {
      formatter: printIcon,
      width: 40,
      hozAlign: 'center',
      cellClick: function (e, cell) {
        alert('Printing row data for: ' + cell.getRow().getData().name);
      }
    },
    {
      title: 'Name',
      field: 'name',
      width: 150,
      formatter: function (cell, formatterParams) {
        const value = cell.getValue();
        return value.indexOf('o') > 0 ? `<span style="color:#3FB449; font-weight:bold;">${value}</span>` : value;
      }
    },
    {
      title: 'Progress',
      field: 'progress',
      formatter: 'progress',
      formatterParams: { color: ['#00dd00', 'orange', 'rgb(255,0,0)'] },
      sorter: 'number',
      width: 100
    },
    {
      title: 'Rating',
      field: 'rating',
      formatter: 'star',
      formatterParams: { stars: 6 },
      hozAlign: 'center',
      width: 120
    },
    { title: 'Driver', field: 'car', hozAlign: 'center', formatter: 'tickCross', width: 50 },
    { title: 'Col', field: 'col', formatter: 'color', width: 50 },
    { title: 'Line Wrapping', field: 'lorem', formatter: 'textarea' },
    { formatter: 'buttonCross', width: 30, hozAlign: 'center' }
  ]
};

const App = () => {
  const gridInitHandler = ({ detail: { grid } }) => {
    //trigger an alert message when the row is clicked
    grid.on('rowClick', function (e, row) {
      alert('Row ' + row.getData().id + ' Clicked!!!!');
    });
  };

  return (
    <>
      <h4>Formatters:</h4>
      <OGrid options={gridOptions} onOGridInit={gridInitHandler}></OGrid>
      <br />
      <br />
      <h4>Formatters using row-layout:</h4>
      <OGrid options={gridOptions} onOGridInit={gridInitHandler} layout="row-layout"></OGrid>
    </>
  );
};
```
