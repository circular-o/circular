import { type FormatterFunction, GridFormatModule } from '../grid-types.js';

export const rowLayoutCellFormatter: FormatterFunction = (cell, formatterParams, onRendered) => {
  // Get the tabulator format module
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  let formatModule = cell.getColumn().getTable().modules.format;
  if (!formatModule) {
    formatModule = new GridFormatModule();
  }

  // Cell container
  // const cellContainer = cell.getElement();
  const cellContainer = document.createElement('div');
  cellContainer.classList.add('row-layout-cell-container');

  /* Title */

  // Includes the column title in the cell
  const titleContent = cell.getColumn().getDefinition().title;
  if (titleContent) {
    const title = document.createElement('div');
    title.classList.add('row-layout-cell-title');
    title.innerHTML = titleContent;
    cellContainer.appendChild(title);
  }

  /* Content */

  // Includes the cell content in the cell using the current formatter
  // Get the default formatter function from the column definition using the formatterOriginal variable
  const { formatterOriginal } = formatterParams;
  let formatterFn: FormatterFunction | undefined;
  if (typeof formatterOriginal === 'string') {
    formatterFn = GridFormatModule.formatters[formatterOriginal];
  } else if (typeof formatterOriginal === 'function') {
    formatterFn = formatterOriginal;
  }

  // If the formatter function is not found, then use the plain text formatter
  if (!formatterFn) {
    formatterFn = GridFormatModule.formatters.plaintext;
  }

  // Create the content element
  const content = document.createElement('div');
  content.classList.add('row-layout-cell-content');

  // Override the getElement function on cell to return the content element
  const originalGetElement = cell.getElement;
  cell.getElement = () => content;

  // Call the formatter function
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const formattedContent = formatterFn.call(formatModule, cell, formatterParams, onRendered);

  // Restore the original getElement function
  cell.getElement = originalGetElement;

  // Adds the formatted content to the content element
  if (typeof formattedContent === 'string') {
    content.innerHTML = formattedContent;
  } else {
    content.append(formattedContent);
  }

  // Adds the content element to the cell container
  cellContainer.appendChild(content);

  return cellContainer;
};
