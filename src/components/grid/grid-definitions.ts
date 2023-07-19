import { type GridOptions } from './grid-types';
import { rowLayoutCellFormatter } from './formatters/row-layout-cell-formatter';

/**
 * Default grid options
 * Created as a function to avoid mutating the same object
 */
export const DEFAULT_GRID_OPTIONS: (overrides?: GridOptions) => GridOptions = (overrides: GridOptions = {}) => ({
  layout: 'fitColumns',
  responsiveLayout: 'hide',
  autoResize: true,
  minHeight: 200,
  movableColumns: true,
  resizableRows: true,
  ...overrides
});

/** Grid options type row-layout */
export const ROW_LAYOUT_OPTIONS: (overrides?: GridOptions) => GridOptions = (overrides: GridOptions = {}) => {
  // Replace the formatter of every column with a custom formatter
  const columns =
    overrides?.columns?.map(column => ({
      ...column,
      formatter: rowLayoutCellFormatter,
      formatterParams: {
        ...column.formatterParams,
        formatterOriginal: column.formatter
      }
    })) || [];

  return {
    ...DEFAULT_GRID_OPTIONS({}),
    headerVisible: false,
    ...overrides,
    columns
  };
};

export type GridLayoutType = 'row-layout' | 'default';

/** Grid options init function */
export const gridOptionsInit: (options: GridOptions, layoutType: GridLayoutType) => GridOptions | undefined = (
  options: GridOptions,
  layoutType: GridLayoutType
) => {
  if (!options) return undefined;

  if (layoutType === 'row-layout') {
    return ROW_LAYOUT_OPTIONS(options);
  }

  return DEFAULT_GRID_OPTIONS(options);
};
