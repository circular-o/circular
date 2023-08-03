import '../../../dist/circular.js';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type { Grid, GridOptions } from './grid-types.js';
import type OGrid from './grid.js';

const tableData = [
  { id: 1, name: 'Oli Bob', age: '12', col: 'red', dob: '' },
  { id: 2, name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982' },
  { id: 3, name: 'Christine Lobowski', age: '42', col: 'green', dob: '22/05/1982' },
  { id: 4, name: 'Brendon Philips', age: '125', col: 'orange', dob: '01/08/1980' },
  { id: 5, name: 'Margret Marmajuke', age: '16', col: 'yellow', dob: '31/01/1999' }
];

const gridOptions: GridOptions = {
  data: tableData, // Assign data to table
  columns: [
    // Define Table Columns
    { title: 'Name', field: 'name', width: 150 },
    { title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress' },
    { title: 'Favorite Color', field: 'col' },
    { title: 'Date Of Birth', field: 'dob', sorter: 'date', hozAlign: 'center' }
  ]
};

describe('<o-grid>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <o-grid></o-grid> `);

    expect(el).to.exist;
  });

  it('should initialize a Grid instance', async () => {
    const el = await fixture<OGrid>(html` <o-grid></o-grid> `);

    let gridInstance: Grid | undefined;
    let gridFullOptions: GridOptions | undefined;

    // o-grid-init event is fired when the grid is initialized
    const gridInitSpy = sinon.spy(({ detail: { grid, options } }) => {
      gridInstance = grid as Grid;
      gridFullOptions = options as GridOptions;
    });

    el.options = gridOptions;

    el.addEventListener('o-grid-init', gridInitSpy);
    await waitUntil(() => gridInitSpy.calledOnce);

    expect(gridInitSpy).to.have.been.calledOnce;
    expect(gridInstance).to.be.an.instanceOf(Object);
    expect(el.grid).to.be.an.instanceOf(Object);
    expect(gridInstance).to.equal(el.grid);
    expect(gridFullOptions).to.be.an('object');

    const gridBaseEl = el.shadowRoot!.querySelector('.grid-container.tabulator')!;
    expect(gridBaseEl).to.exist;
  });
});
