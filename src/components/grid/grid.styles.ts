import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    /* Grid */

    /* global */
    --grid-border-width: 0;
    --grid-border-style: solid;
    --grid-border-color: var(--o-color-neutral-200);
    --grid-border-radius: var(--o-border-radius-large);
    --grid-background-color: var(--o-panel-background-color);
    --grid-font-size: var(--o-font-size-small);
    --grid-font-color: var(--o-color-neutral-1000);
    --grid-text-align: left;
    --grid-padding: 0;
    --grid-shadow: none;

    /* header */
    --grid-header-background-color: var(--o-color-canvas-50);
    --grid-header-background-color-col-moving: var(--o-color-neutral-200);
    --grid-header-border-width: 1px;
    --grid-header-border-style: solid;
    --grid-header-border-color: var(--grid-header-background-color);
    --grid-header-font-color: var(--o-color-neutral-1000);
    --grid-header-font-size: var(--grid-font-size);
    --grid-header-font-weight: var(--o-font-weight-medium);
    --grid-header-content-padding: var(--o-spacing-x-small);
    --grid-header-title-editor-background-color: var(--grid-background-color);
    --grid-header-title-editor-padding: 1px;
    /* grid-header-separator */
    --grid-header-separator-width: 0 0 0 1px;
    --grid-header-separator-style: solid;
    --grid-header-separator-color: var(--o-color-neutral-100);
    --grid-header-separator-margin: var(--o-spacing-2x-small);

    /* row */
    --grid-row-height: var(--o-input-height-medium);
    --grid-row-background-color: var(--o-color-neutral-0);
    --grid-row-background-color-even: var(--o-color-neutral-50);
    --grid-row-border-width: 0;
    --grid-row-border-style: solid;
    --grid-row-border-color: var(--grid-header-background-color);

    /* row-layout */
    --grid-row-layout-margin: 0 0 var(--o-spacing-x-small) 0;
    /*--grid-row-layout-cell-border-style: solid;
    --grid-row-layout-cell-border-width: 0 0 0 1px;
    --grid-row-layout-cell-border-color: var(--o-color-neutral-100);*/

    /* cell */
    --grid-cell-padding: var(--o-spacing-x-small);
    --grid-cell-border-width: 0;
    --grid-cell-border-style: solid;
    --grid-cell-border-color: var(--o-color-neutral-100);
    /* grid-cell-separator */
    --grid-cell-separator-width: 0 0 0 1px;
    --grid-cell-separator-style: solid;
    --grid-cell-separator-color: var(--o-color-neutral-100);
    --grid-cell-separator-margin: var(--o-spacing-2x-small);

    /* Host styles */
    display: block;
  }

  /* Row layout */
  .grid-container.row-layout {
    --grid-header-font-color: var(--o-color-canvas-500);
    --grid-header-font-size: var(--o-font-size-x-small);
    /* --grid-font-size: var(--o-font-size-x-small); */
    --grid-row-background-color-even: var(--grid-row-background-color);
    --grid-border-radius: var(--o-border-radius-medium);
    --grid-padding: var(--o-spacing-x-small);
    --grid-cell-separator-margin: var(--grid-cell-padding);
  }

  .grid-container.row-layout .tabulator-row {
    border: none;
    border-radius: var(--grid-border-radius);
  }

  .grid-container.row-layout .tabulator-row:not(:last-child) {
    margin: var(--grid-row-layout-margin);
  }

  .grid-container.row-layout .tabulator-row .tabulator-cell {
    padding-left: 0;
  }

  .grid-container.row-layout .tabulator-row .tabulator-cell .row-layout-cell-container {
    padding-left: var(--grid-cell-padding);
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  /*.grid-container.row-layout .tabulator-row .tabulator-cell:not(:first-child) .row-layout-cell-container {
    border-color: var(--grid-row-layout-cell-border-color);
    border-style: var(--grid-row-layout-cell-border-style);
    border-width: var(--grid-row-layout-cell-border-width);
  }*/

  .grid-container.row-layout .row-layout-cell-container .row-layout-cell-title {
    color: var(--grid-header-font-color);
    font-size: var(--grid-header-font-size);
    padding-bottom: var(--o-spacing-x-small);
    width: 100%;
  }

  .grid-container.row-layout .row-layout-cell-container .row-layout-cell-content {
    height: 100%;
  }

  /*******************************************
    Grid CSS based on tabulator_semanticui.css
  *******************************************/

  /* Grid */

  .tabulator {
    position: relative;
    border-width: var(--grid-border-width);
    border-style: var(--grid-border-style);
    border-color: var(--grid-border-color);
    border-radius: var(--grid-border-radius);
    background-color: var(--grid-background-color);
    font-size: var(--grid-font-size);
    text-align: var(--grid-text-align);
    overflow: hidden;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    width: 100%;
    padding: var(--grid-padding);
    box-shadow: var(--grid-shadow);
    color: var(--grid-font-color);
  }

  .tabulator[tabulator-layout='fitDataFill'] .tabulator-tableholder .tabulator-table {
    min-width: 100%;
  }

  .tabulator[tabulator-layout='fitDataTable'] {
    display: inline-block;
  }

  .tabulator.tabulator-block-select {
    user-select: none;
  }

  .tabulator .tabulator-tableholder {
    position: relative;
    width: 100%;
    white-space: nowrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .tabulator .tabulator-tableholder:focus {
    outline: none;
  }

  .tabulator .tabulator-tableholder .tabulator-placeholder {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .tabulator .tabulator-tableholder .tabulator-placeholder[tabulator-render-mode='virtual'] {
    min-height: 100%;
    min-width: 100%;
  }

  .tabulator .tabulator-tableholder .tabulator-placeholder .tabulator-placeholder-contents {
    display: inline-block;
    text-align: center;
    padding: var(--o-spacing-small, 10px);
    color: var(--o-color-neutral-300, #ccc);
    font-weight: bold;
    font-size: 20px;
    white-space: normal;
  }

  .tabulator .tabulator-tableholder .tabulator-table {
    position: relative;
    display: inline-block;
    background-color: transparent;
    white-space: nowrap;
    overflow: visible;
    color: var(--grid-font-color);
  }

  .tabulator .tabulator-tableholder .tabulator-table .tabulator-row.tabulator-calcs {
    font-weight: bold;
    background: var(--o-color-neutral-100, #e2e2e2) !important;
  }

  .tabulator .tabulator-tableholder .tabulator-table .tabulator-row.tabulator-calcs.tabulator-calcs-top {
    border-bottom: 2px solid var(--o-color-neutral-200, #ddd);
  }

  .tabulator .tabulator-tableholder .tabulator-table .tabulator-row.tabulator-calcs.tabulator-calcs-bottom {
    border-top: 2px solid var(--o-color-neutral-200, #ddd);
  }

  .tabulator.tabulator-ltr {
    direction: ltr;
  }

  .tabulator.tabulator-rtl {
    text-align: initial;
    direction: rtl;
  }

  .tabulator.tabulator-rtl .tabulator-header .tabulator-col {
    text-align: initial;
    border-left: 1px solid var(--o-color-neutral-200, #ddd);
    border-right: initial;
  }

  .tabulator.tabulator-rtl .tabulator-header .tabulator-col.tabulator-col-group .tabulator-col-group-cols {
    margin-right: initial;
    margin-left: -1px;
  }

  .tabulator.tabulator-rtl .tabulator-header .tabulator-col.tabulator-sortable .tabulator-col-title {
    padding-right: 0;
    padding-left: 25px;
  }

  .tabulator.tabulator-rtl .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-sorter {
    left: 8px;
    right: initial;
  }

  .tabulator.tabulator-rtl .tabulator-row .tabulator-cell {
    border-right: initial;
    border-left: 1px solid var(--o-color-neutral-200, #ddd);
  }

  .tabulator.tabulator-rtl .tabulator-row .tabulator-cell .tabulator-data-tree-branch {
    margin-right: initial;
    margin-left: 5px;
    border-bottom-left-radius: initial;
    border-bottom-right-radius: 1px;
    border-left: initial;
    border-right: 2px solid var(--o-color-neutral-200, #ddd);
  }

  .tabulator.tabulator-rtl .tabulator-row .tabulator-cell .tabulator-data-tree-control {
    margin-right: initial;
    margin-left: 5px;
  }

  .tabulator.tabulator-rtl .tabulator-row .tabulator-cell.tabulator-frozen.tabulator-frozen-left {
    border-left: 2px solid var(--o-color-neutral-200, #ddd);
  }

  .tabulator.tabulator-rtl .tabulator-row .tabulator-cell.tabulator-frozen.tabulator-frozen-right {
    border-right: 2px solid var(--o-color-neutral-200, #ddd);
  }

  .tabulator.tabulator-rtl .tabulator-row .tabulator-col-resize-handle:last-of-type {
    width: 3px;
    margin-left: 0;
    margin-right: -3px;
  }

  .tabulator.tabulator-rtl .tabulator-footer .tabulator-calcs-holder {
    text-align: initial;
  }

  .tabulator .tabulator-tableholder .tabulator-table .tabulator-row.positive,
  .tabulator .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell.positive {
    box-shadow: 0px 0px 0px var(--o-color-success-200, #a3c293) inset;
    background: var(--o-color-success-50, #fcfff5) !important;
    color: var(--o-color-success-500, #21ba45) !important;
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator .tabulator-tableholder .tabulator-table .tabulator-row.positive:hover,
    .tabulator .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell.positive:hover {
      background: var(--o-color-success-100, #f7ffe6) !important;
      color: var(--o-color-success-600, #13ae38) !important;
    }
  }

  .tabulator .tabulator-tableholder .tabulator-table .tabulator-row.negative,
  .tabulator .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell.negative {
    box-shadow: 0px 0px 0px var(--o-color-danger-200, #e0b4b4) inset;
    background: var(--o-color-danger-50, #fff) !important;
    color: var(--o-color-danger-500, #db2828) !important;
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator .tabulator-tableholder .tabulator-table .tabulator-row.negative:hover,
    .tabulator .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell.negative:hover {
      background: var(--o-color-danger-100, #ffe7e7) !important;
      color: var(--o-color-danger-600, #d41616) !important;
    }
  }

  .tabulator .tabulator-tableholder .tabulator-table .tabulator-row.error,
  .tabulator .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell.error {
    box-shadow: 0px 0px 0px var(--o-color-danger-200, #e0b4b4) inset;
    background: var(--o-color-danger-50, #fff) !important;
    color: var(--o-color-danger-500, #db2828) !important;
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator .tabulator-tableholder .tabulator-table .tabulator-row.error:hover,
    .tabulator .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell.error:hover {
      background: var(--o-color-danger-100, #ffe7e7) !important;
      color: var(--o-color-danger-600, #d12323) !important;
    }
  }

  .tabulator .tabulator-tableholder .tabulator-table .tabulator-row.warning,
  .tabulator .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell.warning {
    box-shadow: 0px 0px 0px var(--o-color-warning-200, #c9ba9b) inset;
    background: var(--o-color-warning-50, #fff) !important;
    color: var(--o-color-warning-500, #f2c037) !important;
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator .tabulator-tableholder .tabulator-table .tabulator-row.warning:hover,
    .tabulator .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell.warning:hover {
      background: var(--o-color-warning-100, #fff) !important;
      color: var(--o-color-warning-600, #f1bb29) !important;
    }
  }

  .tabulator .tabulator-tableholder .tabulator-table .tabulator-row.active,
  .tabulator .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell.active {
    box-shadow: 0px 0px 0px var(--o-color-neutral-1000, rgba(0, 0, 0, 0.87)) inset;
    background: var(--o-color-warning-50, #e0e0e0) !important;
    color: var(--o-color-neutral-1000, rgba(0, 0, 0, 0.87)) !important;
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator .tabulator-tableholder .tabulator-table .tabulator-row.active:hover,
    .tabulator .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell.active:hover {
      background: var(--o-color-success-50, #f7ffe6) !important;
      color: var(--o-color-warning-500, #13ae38) !important;
    }
  }

  .tabulator .tabulator-tableholder .tabulator-table .tabulator-row.active,
  .tabulator .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell.active {
    pointer-events: none;
    color: var(--o-color-neutral-1000, rgba(0, 0, 0, 0.2));
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator .tabulator-tableholder .tabulator-table .tabulator-row.disabled:hover {
      pointer-events: none;
      color: var(--o-color-neutral-1000, rgba(0, 0, 0, 0.2));
    }
  }

  /* Header */

  .tabulator .tabulator-header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    border-bottom-width: var(--grid-header-border-width);
    border-bottom-style: var(--grid-header-border-style);
    border-bottom-color: var(--grid-header-border-color);
    background-color: var(--grid-header-background-color);
    color: var(--grid-header-font-color);
    font-size: var(--grid-header-font-size);
    font-weight: var(--grid-header-font-weight);
    white-space: nowrap;
    overflow: hidden;
    border-right: none;
    box-shadow: none;
    font-style: none;
    text-transform: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
  }

  .tabulator .tabulator-header.tabulator-header-hidden {
    display: none;
  }

  .tabulator .tabulator-header .tabulator-header-contents {
    position: relative;
    overflow: hidden;
  }

  .tabulator .tabulator-header .tabulator-header-contents .tabulator-headers {
    display: inline-block;
    min-height: var(--grid-row-height) !important;
  }

  .tabulator .tabulator-header .tabulator-col {
    display: inline-flex;
    position: relative;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    background-color: var(--grid-header-background-color);
    text-align: left;
    vertical-align: bottom;
    overflow: hidden;
    border-right: none;
    min-height: var(--grid-row-height) !important;
  }

  .tabulator .tabulator-header .tabulator-col:not(:first-of-type)::after {
    content: '';
    position: absolute;
    top: var(--grid-header-separator-margin);
    left: 0;
    width: 0;
    bottom: var(--grid-header-separator-margin);
    border-width: var(--grid-header-separator-width);
    border-style: var(--grid-header-separator-style);
    border-color: var(--grid-header-separator-color);
  }

  .tabulator .tabulator-header .tabulator-col.tabulator-moving {
    position: absolute;
    border-width: var(--grid-header-border-width);
    border-style: var(--grid-header-border-style);
    border-color: var(--grid-header-border-color);
    background: var(--grid-header-background-color-col-moving);
    pointer-events: none;
  }

  .tabulator .tabulator-header .tabulator-col .tabulator-col-content {
    box-sizing: border-box;
    position: relative;
    padding: var(--grid-header-content-padding);
  }

  .tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-header-popup-button {
    padding: 0 calc(var(--grid-header-content-padding) * 2);
  }

  .tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-header-popup-button:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  .tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title-holder {
    position: relative;
  }

  .tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title {
    box-sizing: border-box;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: bottom;
  }

  .tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title.tabulator-col-title-wrap {
    white-space: normal;
    text-overflow: initial;
  }

  .tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title .tabulator-title-editor {
    box-sizing: border-box;
    width: 100%;
    border-width: var(--grid-header-border-width);
    border-style: var(--grid-header-border-style);
    border-color: var(--grid-header-border-color);
    padding: var(--grid-header-title-editor-padding);
    background: var(--grid-header-title-editor-background-color);
  }

  .tabulator
    .tabulator-header
    .tabulator-col
    .tabulator-col-content
    .tabulator-col-title
    .tabulator-header-popup-button
    + .tabulator-title-editor {
    width: calc(100% - 22px);
  }

  .tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-sorter {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: var(--o-spacing-2x-small);
  }

  .tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-sorter .tabulator-arrow {
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid var(--o-color-neutral-300);
  }

  .tabulator .tabulator-header .tabulator-col.tabulator-col-group .tabulator-col-group-cols {
    position: relative;
    display: flex;
    border-top: 1px solid var(--grid-header-border-color);
    overflow: hidden;
    margin-right: -1px;
  }

  .tabulator .tabulator-header .tabulator-col .tabulator-header-filter {
    position: relative;
    box-sizing: border-box;
    margin-top: 2px;
    width: 100%;
    text-align: center;
  }

  .tabulator .tabulator-header .tabulator-col .tabulator-header-filter textarea {
    height: auto !important;
  }

  .tabulator .tabulator-header .tabulator-col .tabulator-header-filter svg {
    margin-top: var(--o-spacing-3x-small);
  }

  .tabulator .tabulator-header .tabulator-col .tabulator-header-filter input::-ms-clear {
    width: 0;
    height: 0;
  }

  .tabulator .tabulator-header .tabulator-col.tabulator-sortable .tabulator-col-title {
    padding-right: var(--o-spacing-x-large);
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator .tabulator-header .tabulator-col.tabulator-sortable.tabulator-col-sorter-element:hover {
      cursor: pointer;
      background-color: var(--o-color-neutral-200, #dae1e7);
    }
  }

  .tabulator
    .tabulator-header
    .tabulator-col.tabulator-sortable[aria-sort='none']
    .tabulator-col-content
    .tabulator-col-sorter {
    color: var(--o-color-neutral-300, #bbb);
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator
      .tabulator-header
      .tabulator-col.tabulator-sortable[aria-sort='none']
      .tabulator-col-content
      .tabulator-col-sorter.tabulator-col-sorter-element
      .tabulator-arrow:hover {
      cursor: pointer;
      border-bottom: 6px solid var(--o-color-neutral-700, #555);
    }
  }

  .tabulator
    .tabulator-header
    .tabulator-col.tabulator-sortable[aria-sort='none']
    .tabulator-col-content
    .tabulator-col-sorter
    .tabulator-arrow {
    border-top: none;
    border-bottom: 6px solid var(--o-color-neutral-700, #bbb);
  }

  .tabulator
    .tabulator-header
    .tabulator-col.tabulator-sortable[aria-sort='ascending']
    .tabulator-col-content
    .tabulator-col-sorter {
    color: var(--o-color-neutral-600, #666);
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator
      .tabulator-header
      .tabulator-col.tabulator-sortable[aria-sort='ascending']
      .tabulator-col-content
      .tabulator-col-sorter.tabulator-col-sorter-element
      .tabulator-arrow:hover {
      cursor: pointer;
      border-bottom: 6px solid var(--o-color-neutral-700, #555);
    }
  }

  .tabulator
    .tabulator-header
    .tabulator-col.tabulator-sortable[aria-sort='ascending']
    .tabulator-col-content
    .tabulator-col-sorter
    .tabulator-arrow {
    border-top: none;
    border-bottom: 6px solid var(--o-color-neutral-600, #666);
  }

  .tabulator
    .tabulator-header
    .tabulator-col.tabulator-sortable[aria-sort='descending']
    .tabulator-col-content
    .tabulator-col-sorter {
    color: var(--o-color-neutral-600, #666);
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator
      .tabulator-header
      .tabulator-col.tabulator-sortable[aria-sort='descending']
      .tabulator-col-content
      .tabulator-col-sorter.tabulator-col-sorter-element
      .tabulator-arrow:hover {
      cursor: pointer;
      border-top: 6px solid var(--o-color-neutral-700, #555);
    }
  }

  .tabulator
    .tabulator-header
    .tabulator-col.tabulator-sortable[aria-sort='descending']
    .tabulator-col-content
    .tabulator-col-sorter
    .tabulator-arrow {
    border-bottom: none;
    border-top: 6px solid var(--o-color-neutral-600, #666);
    color: var(--o-color-neutral-600, #666);
  }

  .tabulator .tabulator-header .tabulator-col.tabulator-col-vertical .tabulator-col-content .tabulator-col-title {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-col-vertical-flip .tabulator-col-title {
    transform: rotate(180deg);
  }

  .tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-sortable .tabulator-col-title {
    padding-right: 0;
    padding-top: var(--o-spacing-large, 20px);
  }

  .tabulator
    .tabulator-header
    .tabulator-col.tabulator-col-vertical.tabulator-sortable.tabulator-col-vertical-flip
    .tabulator-col-title {
    padding-right: 0;
    padding-bottom: var(--o-spacing-large, 20px);
  }

  .tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-sortable .tabulator-col-sorter {
    justify-content: center;
    left: 0;
    right: 0;
    top: var(--o-spacing-2x-small, 4px);
    bottom: auto;
  }

  .tabulator .tabulator-header .tabulator-frozen {
    position: sticky;
    left: 0;
    z-index: 10;
  }

  .tabulator .tabulator-header .tabulator-frozen.tabulator-frozen-left {
    border-right: var(--o-spacing-3x-small, 2px) solid var(--o-color-neutral-200, #ddd);
  }

  .tabulator .tabulator-header .tabulator-frozen.tabulator-frozen-right {
    border-left: var(--o-spacing-3x-small, 2px) solid var(--o-color-neutral-200, #ddd);
  }

  .tabulator .tabulator-header .tabulator-calcs-holder {
    box-sizing: border-box;
    background: white !important;
    border-top: 1px solid var(--o-color-neutral-200, #ddd);
    border-bottom: 1px solid var(--o-color-neutral-200, #ddd);
  }

  .tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row {
    background: white !important;
  }

  .tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row .tabulator-col-resize-handle {
    display: none;
  }

  .tabulator .tabulator-header .tabulator-frozen-rows-holder:empty {
    display: none;
  }

  /* Row */

  .tabulator-row {
    position: relative;
    box-sizing: border-box;
    min-height: var(--grid-row-height);
    background-color: var(--grid-row-background-color, #fff);
    border-width: var(--grid-row-border-width);
    border-style: var(--grid-row-border-style);
    border-color: var(--grid-row-border-color);
  }

  .tabulator-row.tabulator-row-even {
    background-color: var(--grid-row-background-color-even, #efefef);
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator-row.tabulator-selectable:hover {
      background-color: var(--o-color-danger-300, #bbb);
      cursor: pointer;
    }
  }

  .tabulator-row.tabulator-selected {
    background-color: var(--o-color-primary-300, #9abcea);
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator-row.tabulator-selected:hover {
      background-color: var(--o-color-primary-400, #769bcc);
      cursor: pointer;
    }
  }

  .tabulator-row.tabulator-row-moving {
    border: 1px solid var(--o-color-neutral-1000, #000);
    background: var(--o-color-neutral-0, #fff);
  }

  .tabulator-row.tabulator-moving {
    position: absolute;
    border-top: 1px solid var(--o-color-neutral-200, #ddd);
    border-bottom: 1px solid var(--o-color-neutral-200, #ddd);
    pointer-events: none;
    z-index: 15;
  }

  .tabulator-row .tabulator-row-resize-handle {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 5px;
  }

  .tabulator-row .tabulator-row-resize-handle.prev {
    top: 0;
    bottom: auto;
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator-row .tabulator-row-resize-handle:hover {
      cursor: ns-resize;
    }
  }

  .tabulator-row .tabulator-responsive-collapse {
    box-sizing: border-box;
    padding: 5px;
    border-top: 1px solid var(--o-color-neutral-200, #ddd);
    border-bottom: 1px solid var(--o-color-neutral-200, #ddd);
  }

  .tabulator-row .tabulator-responsive-collapse:empty {
    display: none;
  }

  .tabulator-row .tabulator-responsive-collapse table {
    font-size: 14px;
  }

  .tabulator-row .tabulator-responsive-collapse table tr td {
    position: relative;
  }

  .tabulator-row .tabulator-responsive-collapse table tr td:first-of-type {
    padding-right: 10px;
  }

  .tabulator-row .tabulator-cell {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    padding: var(--grid-cell-padding);
    border-width: var(--grid-cell-border-width);
    border-style: var(--grid-cell-border-style);
    border-color: var(--grid-cell-border-color);
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tabulator-row .tabulator-cell:not(:first-of-type)::after {
    content: '';
    position: absolute;
    top: var(--grid-cell-separator-margin);
    left: 0;
    width: 0;
    bottom: var(--grid-cell-separator-margin);
    border-width: var(--grid-cell-separator-width);
    border-style: var(--grid-cell-separator-style);
    border-color: var(--grid-cell-separator-color);
  }

  .tabulator-row .tabulator-cell.tabulator-frozen {
    display: inline-block;
    position: sticky;
    left: 0;
    background-color: inherit;
    z-index: 10;
  }

  .tabulator-row .tabulator-cell.tabulator-frozen.tabulator-frozen-left {
    border-right: 2px solid var(--o-color-neutral-200, #ddd);
  }

  .tabulator-row .tabulator-cell.tabulator-frozen.tabulator-frozen-right {
    border-left: 2px solid var(--o-color-neutral-200, #ddd);
  }

  .tabulator-row .tabulator-cell.tabulator-editing {
    border: 1px solid var(--o-color-primary-700, #1d68cd);
    outline: none;
    padding: 0;
  }

  .tabulator-row .tabulator-cell.tabulator-editing input,
  .tabulator-row .tabulator-cell.tabulator-editing select {
    border: 1px;
    background: transparent;
    outline: none;
  }

  .tabulator-row .tabulator-cell.tabulator-validation-fail {
    border: 1px solid var(--o-color-danger-600, #db2828);
  }

  .tabulator-row .tabulator-cell.tabulator-validation-fail input,
  .tabulator-row .tabulator-cell.tabulator-validation-fail select {
    border: 1px;
    background: transparent;
    color: var(--o-color-danger-600, #db2828);
  }

  .tabulator-row .tabulator-cell.tabulator-row-handle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
  }

  .tabulator-row .tabulator-cell.tabulator-row-handle .tabulator-row-handle-box {
    width: 80%;
  }

  .tabulator-row .tabulator-cell.tabulator-row-handle .tabulator-row-handle-box .tabulator-row-handle-bar {
    width: 100%;
    height: 3px;
    margin-top: 2px;
    background: var(--o-color-neutral-600, #666);
  }

  .tabulator-row .tabulator-cell .tabulator-data-tree-branch {
    display: inline-block;
    vertical-align: middle;
    height: 9px;
    width: 7px;
    margin-top: -9px;
    margin-right: 5px;
    border-bottom-left-radius: 1px;
    border-left: 2px solid var(--o-color-neutral-200, #ddd);
    border-bottom: 2px solid var(--o-color-neutral-200, #ddd);
  }

  .tabulator-row .tabulator-cell .tabulator-data-tree-control {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    height: 11px;
    width: 11px;
    margin-right: 5px;
    border: 1px solid var(--o-color-neutral-900, #333);
    border-radius: 2px;
    background: var(--o-color-neutral-1000, rgba(0, 0, 0, 0.1));
    overflow: hidden;
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator-row .tabulator-cell .tabulator-data-tree-control:hover {
      cursor: pointer;
      background: var(--o-color-neutral-1000, rgba(0, 0, 0, 0.2));
    }
  }

  .tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-collapse {
    display: inline-block;
    position: relative;
    height: 7px;
    width: 1px;
    background: transparent;
  }

  .tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-collapse:after {
    position: absolute;
    content: '';
    left: -3px;
    top: 3px;
    height: 1px;
    width: 7px;
    background: var(--o-color-neutral-900, #333);
  }

  .tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-expand {
    display: inline-block;
    position: relative;
    height: 7px;
    width: 1px;
    background: var(--o-color-neutral-900, #333);
  }

  .tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-expand:after {
    position: absolute;
    content: '';
    left: -3px;
    top: 3px;
    height: 1px;
    width: 7px;
    background: var(--o-color-neutral-900, #333);
  }

  .tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    height: 15px;
    width: 15px;
    border-radius: 20px;
    background: var(--o-color-neutral-600, #666);
    color: var(--o-color-neutral-0, #fff);
    font-weight: bold;
    font-size: 1.1em;
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }

  .tabulator-row
    .tabulator-cell
    .tabulator-responsive-collapse-toggle.open
    .tabulator-responsive-collapse-toggle-close {
    display: initial;
  }

  .tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle.open .tabulator-responsive-collapse-toggle-open {
    display: none;
  }

  .tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle svg {
    stroke: var(--o-color-neutral-0, #fff);
  }

  .tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle .tabulator-responsive-collapse-toggle-close {
    display: none;
  }

  .tabulator-row .tabulator-cell .tabulator-traffic-light {
    display: inline-block;
    height: 14px;
    width: 14px;
    border-radius: 14px;
  }

  .tabulator-row.tabulator-group {
    box-sizing: border-box;
    border-bottom: 1px solid var(--o-color-neutral-400, #999);
    border-right: 1px solid var(--o-color-neutral-200, #ddd);
    border-top: 1px solid var(--o-color-neutral-400, #999);
    padding: 5px;
    padding-left: 10px;
    background: var(--o-color-neutral-300, #ccc);
    font-weight: bold;
    min-width: 100%;
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator-row.tabulator-group:hover {
      cursor: pointer;
      background-color: var(--o-color-neutral-1000, rgba(0, 0, 0, 0.1));
    }
  }

  .tabulator-row.tabulator-group.tabulator-group-visible .tabulator-arrow {
    margin-right: 10px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--o-color-neutral-600, #666);
    border-bottom: 0;
  }

  .tabulator-row.tabulator-group.tabulator-group-level-1 {
    padding-left: 30px;
  }

  .tabulator-row.tabulator-group.tabulator-group-level-2 {
    padding-left: 50px;
  }

  .tabulator-row.tabulator-group.tabulator-group-level-3 {
    padding-left: 70px;
  }

  .tabulator-row.tabulator-group.tabulator-group-level-4 {
    padding-left: 90px;
  }

  .tabulator-row.tabulator-group.tabulator-group-level-5 {
    padding-left: 110px;
  }

  .tabulator-row.tabulator-group .tabulator-group-toggle {
    display: inline-block;
  }

  .tabulator-row.tabulator-group .tabulator-arrow {
    display: inline-block;
    width: 0;
    height: 0;
    margin-right: 16px;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 0;
    border-left: 6px solid var(--o-color-neutral-600, #666);
    vertical-align: middle;
  }

  .tabulator-row.tabulator-group span {
    margin-left: 10px;
    color: var(--o-color-danger-600, #d00);
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator-row.tabulator-selectable:hover {
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.87) inset;
      background: #e0e0e0 !important;
      color: rgba(0, 0, 0, 0.87) !important;
    }
  }

  .tabulator-row.tabulator-selected {
    background-color: #9abcea !important;
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator-row.tabulator-selected:hover {
      background-color: #769bcc !important;
      cursor: pointer;
    }
  }

  .tabulator-row.tabulator-moving {
    pointer-events: none !important;
  }

  .tabulator-row .tabulator-cell:last-of-type {
    border-right: none;
  }

  .tabulator-row.tabulator-group {
    background: #fafafa;
  }

  .tabulator-row.tabulator-group span {
    color: var(--o-color-neutral-600, #666);
  }

  /* Column */

  .tabulator .tabulator-col-resize-handle {
    position: relative;
    display: inline-block;
    width: 6px;
    margin-left: -3px;
    margin-right: -3px;
    z-index: 10;
    vertical-align: middle;
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator .tabulator-col-resize-handle:hover {
      cursor: ew-resize;
    }
  }

  .tabulator .tabulator-col-resize-handle:last-of-type {
    width: 3px;
    margin-right: 0;
  }

  /* Cell */

  /* Footer */

  .tabulator .tabulator-footer {
    border-top: 1px solid var(--o-color-neutral-400, #999);
    background-color: var(--o-color-neutral-0, #fff);
    color: var(--o-color-neutral-700, #555);
    white-space: nowrap;
    user-select: none;
    padding: var(--o-spacing-small);
    box-shadow: none;
    text-align: right;
    font-style: normal;
    font-weight: normal;
    text-transform: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
  }

  .tabulator .tabulator-footer .tabulator-footer-contents {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
  }

  .tabulator .tabulator-footer .tabulator-footer-contents:empty {
    display: none;
  }

  .tabulator .tabulator-footer .tabulator-calcs-holder {
    --o-spacing-small-negative: calc(var(--o-spacing-small) * -1);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    background: var(--grid-background-color) !important;
    border-bottom: 1px solid var(--o-color-neutral-200, #ddd);
    border-top: 1px solid var(--o-color-neutral-200, #ddd);
    overflow: hidden;
    margin: var(--o-spacing-small-negative) var(--o-spacing-small-negative) var(--o-spacing-small)
      var(--o-spacing-small-negative);
  }

  .tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row {
    display: inline-block;
    background: var(--grid-background-color) !important;
  }

  .tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row .tabulator-col-resize-handle {
    display: none;
  }

  .tabulator .tabulator-footer .tabulator-calcs-holder:only-child {
    margin-bottom: -5px;
    border-bottom: none;
  }

  .tabulator .tabulator-footer > * + .tabulator-page-counter {
    margin-left: 10px;
  }

  .tabulator .tabulator-footer .tabulator-page-counter {
    font-weight: normal;
  }

  .tabulator .tabulator-footer .tabulator-paginator {
    flex: 1;
    text-align: right;
    color: var(--o-color-neutral-700, #555);
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
  }

  .tabulator .tabulator-footer .tabulator-page-size {
    display: inline-block;
    margin: 0 5px;
    padding: 2px 5px;
    border: 1px solid var(--o-color-neutral-300, #aaa);
    border-radius: 3px;
  }

  .tabulator .tabulator-footer .tabulator-pages {
    margin: 0 7px;
  }

  .tabulator .tabulator-footer .tabulator-page {
    display: inline-block;
    margin: 0 2px;
    padding: 2px 5px;
    border: 1px solid var(--o-color-neutral-300, #aaa);
    border-radius: 3px;
    background: var(--o-color-neutral-0, rgba(255, 255, 255, 0.2));
  }

  .tabulator .tabulator-footer .tabulator-page.active {
    color: var(--o-color-danger-600, #d00);
  }

  .tabulator .tabulator-footer .tabulator-page:disabled {
    opacity: 0.5;
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator .tabulator-footer .tabulator-page:not(.disabled):hover {
      cursor: pointer;
      background: var(--o-color-neutral-0, rgba(0, 0, 0, 0.2));
      color: var(--o-color-neutral-0, #fff);
    }
  }

  /* Popup, Tooltip, Alert */

  .tabulator-popup-container {
    position: absolute;
    display: inline-block;
    box-sizing: border-box;
    background: var(--o-color-neutral-0, #fff);
    border: 1px solid var(--o-color-neutral-200, #ddd);
    box-shadow: var(--o-shadow-medium, 0 0 5px 0 rgba(0, 0, 0, 0.2));
    font-size: 14px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    z-index: 10000;
  }

  .tabulator-popup {
    padding: 5px;
    border-radius: 3px;
  }

  .tabulator-tooltip {
    max-width: Min(500px, 100%);
    padding: 3px 5px;
    border-radius: 2px;
    box-shadow: none;
    font-size: 12px;
    pointer-events: none;
  }

  .tabulator .tabulator-alert {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 100;
    height: 100%;
    width: 100%;
    background: var(--o-color-neutral-0, rgba(0, 0, 0, 0.4));
    text-align: center;
  }

  .tabulator .tabulator-alert .tabulator-alert-msg {
    display: inline-block;
    margin: 0 auto;
    padding: 10px 20px;
    border-radius: var(--o-border-radius-medium, 10px);
    background: var(--o-color-neutral-0, #fff);
    font-weight: bold;
    font-size: var(--o-font-size-medium, 16px);
  }

  .tabulator .tabulator-alert .tabulator-alert-msg.tabulator-alert-state-msg {
    border: 4px solid var(--o-color-neutral-900, #333);
    color: var(--o-color-neutral-1000, #000);
  }

  .tabulator .tabulator-alert .tabulator-alert-msg.tabulator-alert-state-error {
    border: 4px solid var(--o-color-danger-600, #d00);
    color: var(--o-color-danger-950, #590000);
  }

  /* Menu */

  .tabulator-menu .tabulator-menu-item {
    position: relative;
    box-sizing: border-box;
    padding: 5px 10px;
    user-select: none;
  }

  .tabulator-menu .tabulator-menu-item.tabulator-menu-item-disabled {
    opacity: 0.5;
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator-menu .tabulator-menu-item:not(.tabulator-menu-item-disabled):hover {
      cursor: pointer;
      background: var(--o-color-neutral-0, #efefef);
    }
  }

  .tabulator-menu .tabulator-menu-item.tabulator-menu-item-submenu {
    padding-right: 25px;
  }

  .tabulator-menu .tabulator-menu-item.tabulator-menu-item-submenu::after {
    display: inline-block;
    position: absolute;
    top: calc(5px + 0.4em);
    right: 10px;
    height: 7px;
    width: 7px;
    content: '';
    border-width: 1px 1px 0 0;
    border-style: solid;
    border-color: var(--o-color-neutral-200, #ddd);
    vertical-align: top;
    transform: rotate(45deg);
  }

  .tabulator-menu .tabulator-menu-separator {
    border-top: 1px solid var(--o-color-neutral-200, #ddd);
  }

  .tabulator-menu {
    background: var(--o-color-neutral-0, #fff);
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator-menu .tabulator-menu-item:not(.tabulator-menu-item-disabled):hover {
      background: #f9fafb;
    }
  }

  /* Edit list */

  .tabulator-edit-list {
    max-height: 200px;
    font-size: 14px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .tabulator-edit-list .tabulator-edit-list-item {
    padding: 4px;
    color: var(--o-color-neutral-900, #333);
    outline: none;
  }

  .tabulator-edit-list .tabulator-edit-list-item.active {
    color: var(--o-color-neutral-0, #fff);
    background: var(--o-color-primary-700, #1d68cd);
  }

  .tabulator-edit-list .tabulator-edit-list-item.active.focused {
    outline: 1px solid rgba(255, 255, 255, 0.5);
  }

  .tabulator-edit-list .tabulator-edit-list-item.focused {
    outline: 1px solid var(--o-color-primary-700, #1d68cd);
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator-edit-list .tabulator-edit-list-item:hover {
      cursor: pointer;
      color: var(--o-color-neutral-0, #fff);
      background: var(--o-color-primary-700, #1d68cd);
    }
  }

  .tabulator-edit-list .tabulator-edit-list-placeholder {
    padding: 4px;
    color: var(--o-color-neutral-900, #333);
    text-align: center;
  }

  .tabulator-edit-list .tabulator-edit-list-group {
    border-bottom: 1px solid var(--o-color-neutral-200, #ddd);
    padding: 4px;
    padding-top: 6px;
    color: var(--o-color-neutral-900, #333);
    font-weight: bold;
  }

  .tabulator-edit-list .tabulator-edit-list-item.tabulator-edit-list-group-level-2,
  .tabulator-edit-list .tabulator-edit-list-group.tabulator-edit-list-group-level-2 {
    padding-left: 12px;
  }

  .tabulator-edit-list .tabulator-edit-list-item.tabulator-edit-list-group-level-3,
  .tabulator-edit-list .tabulator-edit-list-group.tabulator-edit-list-group-level-3 {
    padding-left: 20px;
  }

  .tabulator-edit-list .tabulator-edit-list-item.tabulator-edit-list-group-level-4,
  .tabulator-edit-list .tabulator-edit-list-group.tabulator-edit-list-group-level-4 {
    padding-left: 28px;
  }

  .tabulator-edit-list .tabulator-edit-list-item.tabulator-edit-list-group-level-5,
  .tabulator-edit-list .tabulator-edit-list-group.tabulator-edit-list-group-level-5 {
    padding-left: 36px;
  }

  .tabulator-edit-select-list {
    background: var(--o-color-neutral-0, #fff);
  }

  .tabulator-edit-select-list .tabulator-edit-select-list-item.active {
    color: var(--o-color-neutral-0, #fff);
  }

  .tabulator-edit-select-list .tabulator-edit-select-list-item.active.focused {
    outline: 1px solid rgba(255, 255, 255, 0.5);
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator-edit-select-list .tabulator-edit-select-list-item:hover {
      color: var(--o-color-neutral-0, #fff);
    }
  }

  .tabulator-edit-select-list .tabulator-edit-select-list-notice {
    color: inherit;
  }

  /* Print */

  .tabulator-print-fullscreen {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
  }

  body.tabulator-print-fullscreen-hide > *:not(.tabulator-print-fullscreen) {
    display: none !important;
  }

  .tabulator-print-table {
    border-collapse: collapse;
  }

  .tabulator-print-table .tabulator-data-tree-branch {
    display: inline-block;
    vertical-align: middle;
    height: 9px;
    width: 7px;
    margin-top: -9px;
    margin-right: 5px;
    border-bottom-left-radius: 1px;
    border-left: 2px solid var(--o-color-neutral-200, #ddd);
    border-bottom: 2px solid var(--o-color-neutral-200, #ddd);
  }

  .tabulator-print-table .tabulator-print-table-group {
    box-sizing: border-box;
    border-bottom: 1px solid var(--o-color-neutral-400, #999);
    border-right: 1px solid var(--o-color-neutral-200, #ddd);
    border-top: 1px solid var(--o-color-neutral-400, #999);
    padding: 5px;
    padding-left: 10px;
    background: var(--o-color-neutral-300, #ccc);
    font-weight: bold;
    min-width: 100%;
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator-print-table .tabulator-print-table-group:hover {
      cursor: pointer;
      background-color: var(--o-color-neutral-1000, rgba(0, 0, 0, 0.1));
    }
  }

  .tabulator-print-table .tabulator-print-table-group.tabulator-group-visible .tabulator-arrow {
    margin-right: 10px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--o-color-neutral-600, #666);
    border-bottom: 0;
  }

  .tabulator-print-table .tabulator-print-table-group.tabulator-group-level-1 td {
    padding-left: 30px !important;
  }

  .tabulator-print-table .tabulator-print-table-group.tabulator-group-level-2 td {
    padding-left: 50px !important;
  }

  .tabulator-print-table .tabulator-print-table-group.tabulator-group-level-3 td {
    padding-left: 70px !important;
  }

  .tabulator-print-table .tabulator-print-table-group.tabulator-group-level-4 td {
    padding-left: 90px !important;
  }

  .tabulator-print-table .tabulator-print-table-group.tabulator-group-level-5 td {
    padding-left: 110px !important;
  }

  .tabulator-print-table .tabulator-print-table-group .tabulator-group-toggle {
    display: inline-block;
  }

  .tabulator-print-table .tabulator-print-table-group .tabulator-arrow {
    display: inline-block;
    width: 0;
    height: 0;
    margin-right: 16px;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 0;
    border-left: 6px solid var(--o-color-neutral-600, #666);
    vertical-align: middle;
  }

  .tabulator-print-table .tabulator-print-table-group span {
    margin-left: 10px;
    color: var(--o-color-danger-600, #d00);
  }

  .tabulator-print-table .tabulator-data-tree-control {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    height: 11px;
    width: 11px;
    margin-right: 5px;
    border: 1px solid var(--o-color-neutral-900, #333);
    border-radius: 2px;
    background: var(--o-color-neutral-1000, rgba(0, 0, 0, 0.1));
    overflow: hidden;
  }

  @media (hover: hover) and (pointer: fine) {
    .tabulator-print-table .tabulator-data-tree-control:hover {
      cursor: pointer;
      background: var(--o-color-neutral-1000, rgba(0, 0, 0, 0.2));
    }
  }

  .tabulator-print-table .tabulator-data-tree-control .tabulator-data-tree-control-collapse {
    display: inline-block;
    position: relative;
    height: 7px;
    width: 1px;
    background: transparent;
  }

  .tabulator-print-table .tabulator-data-tree-control .tabulator-data-tree-control-collapse:after {
    position: absolute;
    content: '';
    left: -3px;
    top: 3px;
    height: 1px;
    width: 7px;
    background: var(--o-color-neutral-900, #333);
  }

  .tabulator-print-table .tabulator-data-tree-control .tabulator-data-tree-control-expand {
    display: inline-block;
    position: relative;
    height: 7px;
    width: 1px;
    background: var(--o-color-neutral-900, #333);
  }

  .tabulator-print-table .tabulator-data-tree-control .tabulator-data-tree-control-expand:after {
    position: absolute;
    content: '';
    left: -3px;
    top: 3px;
    height: 1px;
    width: 7px;
    background: var(--o-color-neutral-900, #333);
  }

  .tabulator-print-table .tabulator-print-table-group {
    background: #fafafa;
  }

  .tabulator-print-table .tabulator-print-table-group span {
    color: var(--o-color-neutral-600, #666);
  }

  /* Grid variants */
  /* Inverted */
  .tabulator.inverted {
    background: var(--o-color-neutral-900, #333);
    color: var(--o-color-neutral-0, rgba(255, 255, 255, 0.9));
    border: none;
  }

  .tabulator.inverted .tabulator-header {
    background-color: rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.1) !important;
    color: rgba(255, 255, 255, 0.9);
  }

  .tabulator.inverted .tabulator-header .tabulator-col {
    border-color: rgba(255, 255, 255, 0.1) !important;
  }

  .tabulator.inverted .tabulator-tableholder .tabulator-table .tabulator-row {
    color: rgba(255, 255, 255, 0.9);
    border: none;
  }

  .tabulator.inverted .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell {
    border-color: rgba(255, 255, 255, 0.1) !important;
  }

  .tabulator.inverted .tabulator-footer {
    background: var(--o-color-neutral-0, #fff);
  }

  /* Striped */
  .tabulator.striped .tabulator-row:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  /* Celled */
  .tabulator.celled {
    border: 1px solid rgba(34, 36, 38, 0.15);
  }

  .tabulator.celled .tabulator-header .tabulator-col {
    border-right: 1px solid rgba(34, 36, 38, 0.1);
  }

  .tabulator.celled .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell {
    border-right: 1px solid rgba(34, 36, 38, 0.1);
  }

  .tabulator[class*='single line'] .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell {
    border-right: none;
  }

  /* Red */
  .tabulator.red {
    border-top: 0.2em solid var(--o-color-danger-600, #db2828);
  }

  .tabulator.inverted.red {
    background-color: var(--o-color-danger-600, #db2828) !important;
    color: var(--o-color-neutral-0, #fff) !important;
  }

  /* Orange */
  .tabulator.orange {
    border-top: 0.2em solid #f2711c;
  }

  .tabulator.inverted.orange {
    background-color: #f2711c !important;
    color: var(--o-color-neutral-0, #fff) !important;
  }

  /* Yellow */
  .tabulator.yellow {
    border-top: 0.2em solid #fbbd08;
  }

  .tabulator.inverted.yellow {
    background-color: #fbbd08 !important;
    color: var(--o-color-neutral-0, #fff) !important;
  }

  /* Olive */
  .tabulator.olive {
    border-top: 0.2em solid #b5cc18;
  }

  .tabulator.inverted.olive {
    background-color: #b5cc18 !important;
    color: var(--o-color-neutral-0, #fff) !important;
  }

  /* Green */
  .tabulator.green {
    border-top: 0.2em solid #21ba45;
  }

  .tabulator.inverted.green {
    background-color: #21ba45 !important;
    color: var(--o-color-neutral-0, #fff) !important;
  }

  /* Teal */
  .tabulator.teal {
    border-top: 0.2em solid #00b5ad;
  }

  .tabulator.inverted.teal {
    background-color: #00b5ad !important;
    color: var(--o-color-neutral-0, #fff) !important;
  }

  /* Blue */
  .tabulator.blue {
    border-top: 0.2em solid #2185d0;
  }

  .tabulator.inverted.blue {
    background-color: #2185d0 !important;
    color: var(--o-color-neutral-0, #fff) !important;
  }

  /* Violet */
  .tabulator.violet {
    border-top: 0.2em solid #6435c9;
  }

  .tabulator.inverted.violet {
    background-color: #6435c9 !important;
    color: var(--o-color-neutral-0, #fff) !important;
  }

  /* Purple */
  .tabulator.purple {
    border-top: 0.2em solid #a333c8;
  }

  .tabulator.inverted.purple {
    background-color: #a333c8 !important;
    color: var(--o-color-neutral-0, #fff) !important;
  }

  /* Pink */
  .tabulator.pink {
    border-top: 0.2em solid #e03997;
  }

  .tabulator.inverted.pink {
    background-color: #e03997 !important;
    color: var(--o-color-neutral-0, #fff) !important;
  }

  /* Brown */
  .tabulator.brown {
    border-top: 0.2em solid #a5673f;
  }

  .tabulator.inverted.brown {
    background-color: #a5673f !important;
    color: var(--o-color-neutral-0, #fff) !important;
  }

  /* Grey */
  .tabulator.grey {
    border-top: 0.2em solid #767676;
  }

  .tabulator.inverted.grey {
    background-color: #767676 !important;
    color: var(--o-color-neutral-0, #fff) !important;
  }

  /* Black */
  .tabulator.black {
    border-top: 0.2em solid #1b1c1d;
  }

  .tabulator.inverted.black {
    background-color: #1b1c1d !important;
    color: var(--o-color-neutral-0, #fff) !important;
  }

  /* Padded */
  .tabulator.padded .tabulator-header .tabulator-col .tabulator-col-content {
    padding: 1em 1em;
  }

  .tabulator.padded .tabulator-header .tabulator-col .tabulator-col-content .tabulator-arrow {
    top: 20px;
  }

  .tabulator.padded .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell {
    padding: 1em 1em;
  }

  /* Very padded */
  .tabulator.padded.very .tabulator-header .tabulator-col .tabulator-col-content {
    padding: 1.5em 1.5em;
  }

  .tabulator.padded.very .tabulator-header .tabulator-col .tabulator-col-content .tabulator-arrow {
    top: 26px;
  }

  .tabulator.padded.very .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell {
    padding: 1.5em 1.5em;
  }

  /* Compact */
  .tabulator.compact .tabulator-header .tabulator-col .tabulator-col-content {
    padding: 0.5em 0.7em;
  }

  .tabulator.compact .tabulator-header .tabulator-col .tabulator-col-content .tabulator-arrow {
    top: 12px;
  }

  .tabulator.compact .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell {
    padding: 0.5em 0.7em;
  }

  .tabulator.compact.very .tabulator-header .tabulator-col .tabulator-col-content {
    padding: 0.4em 0.6em;
  }

  .tabulator.compact.very .tabulator-header .tabulator-col .tabulator-col-content .tabulator-arrow {
    top: 10px;
  }

  .tabulator.compact.very .tabulator-tableholder .tabulator-table .tabulator-row .tabulator-cell {
    padding: 0.4em 0.6em;
  }
`;
