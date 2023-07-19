import { customElement, property, query } from 'lit/decorators.js';
import { Grid, type GridOptions } from './grid-types';
import { gridOptionsInit } from './grid-definitions';
import { html } from 'lit';
import { DateTime as LuxonDateTime } from 'luxon';
import { watch } from '../../internal/watch';
import LibraryBaseElement from '../../internal/library-base-element';
import styles from './grid.styles';
import type { CSSResultGroup } from 'lit';
import type { GridLayoutType } from './grid-definitions';

/**
 * @summary This component is a wrapper for the Tabulator library.
 *
 * @documentation https://circular-o.github.io/circular/#/components/grid
 * @status WIP
 * @since 1.6
 *
 * @event {{ grid: Grid, options: GridOptions }} o-grid-init - Emitted after the grid has been initialized. The event detail contains the grid instance and the grid full options used to initialize the Grid.
 * @event o-grid-destroy - Emitted after the grid has been destroyed.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty [--grid-border-width=0] - Grid CSS custom property
 * @cssproperty [--grid-border-style=solid] - Grid CSS custom property
 * @cssproperty [--grid-border-color=var(--o-color-neutral-200)] - Grid CSS custom property
 * @cssproperty [--grid-border-radius=var(--o-border-radius-large)] - Grid CSS custom property
 * @cssproperty [--grid-background-color=var(--o-panel-background-color)] - Grid CSS custom property
 * @cssproperty [--grid-font-size=var(--o-font-size-small)] - Grid CSS custom property
 * @cssproperty [--grid-font-color=var(--o-color-neutral-1000)] - Grid CSS custom property
 * @cssproperty [--grid-text-align=left] - Grid CSS custom property
 * @cssproperty [--grid-padding=0] - Grid CSS custom property
 * @cssproperty [--grid-shadow=none] - Grid CSS custom property
 * @cssproperty [--grid-header-background-color=var(--o-color-canvas-50)] - Grid CSS custom property
 * @cssproperty [--grid-header-background-color-col-moving=var(--o-color-neutral-200)] - Grid CSS custom property
 * @cssproperty [--grid-header-border-width=1px] - Grid CSS custom property
 * @cssproperty [--grid-header-border-style=solid] - Grid CSS custom property
 * @cssproperty [--grid-header-border-color=var(--grid-header-background-color)] - Grid CSS custom property
 * @cssproperty [--grid-header-font-color=var(--o-color-neutral-1000)] - Grid CSS custom property
 * @cssproperty [--grid-header-font-size=var(--grid-font-size)] - Grid CSS custom property
 * @cssproperty [--grid-header-font-weight=var(--o-font-weight-medium)] - Grid CSS custom property
 * @cssproperty [--grid-header-content-padding=var(--o-spacing-x-small)] - Grid CSS custom property
 * @cssproperty [--grid-header-title-editor-background-color=var(--grid-background-color)] - Grid CSS custom property
 * @cssproperty [--grid-header-title-editor-padding=1px] - Grid CSS custom property
 * @cssproperty [--grid-header-separator-width=0 0 0 1px] - Grid CSS custom property
 * @cssproperty [--grid-header-separator-style=solid] - Grid CSS custom property
 * @cssproperty [--grid-header-separator-color=var(--o-color-neutral-100)] - Grid CSS custom property
 * @cssproperty [--grid-header-separator-margin=var(--o-spacing-2x-small)] - Grid CSS custom property
 * @cssproperty [--grid-row-height=var(--o-input-height-medium)] - Grid CSS custom property
 * @cssproperty [--grid-row-background-color=var(--o-color-neutral-0)] - Grid CSS custom property
 * @cssproperty [--grid-row-background-color-even=var(--o-color-neutral-50)] - Grid CSS custom property
 * @cssproperty [--grid-row-border-width=0] - Grid CSS custom property
 * @cssproperty [--grid-row-border-style=solid] - Grid CSS custom property
 * @cssproperty [--grid-row-border-color=var(--grid-header-background-color)] - Grid CSS custom property
 * @cssproperty [--grid-row-layout-margin=0 0 var(--o-spacing-x-small) 0] - Grid CSS custom property
 * @cssproperty [--grid-cell-padding=var(--o-spacing-x-small)] - Grid CSS custom property
 * @cssproperty [--grid-cell-border-width=0] - Grid CSS custom property
 * @cssproperty [--grid-cell-border-style=solid] - Grid CSS custom property
 * @cssproperty [--grid-cell-border-color=var(--o-color-neutral-100)] - Grid CSS custom property
 * @cssproperty [--grid-cell-separator-width=0 0 0 1px] - Grid CSS custom property
 * @cssproperty [--grid-cell-separator-style=solid] - Grid CSS custom property
 * @cssproperty [--grid-cell-separator-color=var(--o-color-neutral-100)] - Grid CSS custom property
 * @cssproperty [--grid-cell-separator-margin=var(--o-spacing-2x-small)] - Grid CSS custom property
 */
@customElement('o-grid')
export default class OGrid extends LibraryBaseElement {
  static styles: CSSResultGroup = styles;

  @query('div.grid-container') gridContainer: HTMLDivElement;

  /** Grid options */
  @property({ type: Object }) options: GridOptions | undefined;

  /** Grid options */
  @property({ type: String }) layout: GridLayoutType = 'default';

  private gridInstance: Grid | undefined;

  private gridInitTimerId: number | undefined;

  public get grid() {
    return this.gridInstance;
  }

  constructor() {
    super();
    // Set global luxon variable
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    (window as any).luxon = { DateTime: LuxonDateTime };
  }

  @watch(['options', 'layout'])
  gridInit() {
    // If the grid has already been initialized, destroy it
    if (this.gridInitTimerId) {
      clearTimeout(this.gridInitTimerId);
    }

    this.gridInitTimerId = window.setTimeout(async () => {
      await this.gridDestroy();
      await this.updateComplete;

      // Initialize the options, if they are empty, then return
      const options = gridOptionsInit(this.options!, this.layout);
      if (!options) return;

      // Initialize the grid and emit the o-grid-init event
      this.gridInstance = new Grid(this.gridContainer, options);
      // Wait for the grid to be built before emitting the event
      this.gridInstance.on('tableBuilt', () => {
        this.emit('o-grid-init', { detail: { grid: this.gridInstance!, options } });
      });
    }, 50);
  }

  private gridDestroy() {
    return new Promise<void>(resolve => {
      // Destroy the grid and emit the o-grid-destroy event
      if (!this.gridInstance) {
        resolve();
        return;
      }

      this.gridInstance.on('tableDestroyed', () => {
        this.emit('o-grid-destroy');
        this.gridInstance = undefined;
        resolve();
      });

      this.gridInstance.destroy();
    });
  }

  render() {
    return html`<div class="grid-container ${this.layout}" part="base"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-grid': OGrid;
  }
}
