import { FormatModule, TabulatorFull as Tabulator } from 'tabulator-tables';
import type { CellComponent, ColumnDefinition, EmptyCallback, FormatterParams, Options } from 'tabulator-tables';

export type FormatterFunction = (
  cell: CellComponent,
  formatterParams: GridFormatterParams,
  onRendered: EmptyCallback
) => string | HTMLElement;

export type GridFormatterParams = FormatterParams & {
  formatterOriginal?: string | FormatterFunction;
};

export interface GridColumnDefinition extends ColumnDefinition {
  formatterParams?: GridFormatterParams | undefined;
}

export interface GridOptions extends Options {
  columns?: GridColumnDefinition[] | undefined;
}

export class Grid extends Tabulator {}

/* Redefined to avoid typescript error on 'formatters is not defined' */
export class GridFormatModule extends FormatModule {
  static formatters: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: FormatterFunction;
  };
}
