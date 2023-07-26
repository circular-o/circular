import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    /* Base */
    --base-padding: var(--o-spacing-small, 0.75rem);
    --base-min-width: fit-content;
    --base-border-width: 1px;
    --base-background-color: var(--o-panel-background-color);
    --base-border-color: var(--o-color-neutral-200);
    --base-border-radius: var(--o-border-radius-medium);

    /* Filter */
    --filter-default-width: 240px;
    --filter-row-width: 100%;
    --filter-input-date-width: 190px;
    --filter-divider-width: 100%;
    --filter-divider-height: var(--o-input-height-medium, 2.5rem);
    --filter-row-padding: 0;
    --filter-row-border: 0;
    --clear-all-label-padding: 0 0.1rem;

    /* Host styles */
    display: block;
    min-width: var(--base-min-width);
  }

  .base-row {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: 'base-row-items clear-all';
    /*gap: var(--base-padding);*/
    min-width: var(--base-min-width);

    /* From .card */
    background-color: var(--base-background-color);
    box-shadow: var(--o-shadow-x-small);
    border: solid var(--base-border-width) var(--base-border-color);
    padding: var(--base-padding);
    border-radius: var(--base-border-radius);
  }

  .base-row-items {
    grid-area: base-row-items;
  }

  .filters__clear-all {
    grid-area: clear-all;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: var(--base-padding);
  }

  .filter-row:not(.base-row) {
    width: var(--filter-row-width);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--base-padding);
    flex-wrap: wrap;
    padding: var(--filter-row-padding);
    border: var(--filter-row-border);
  }

  .filter-input[type='date'] {
    width: var(--filter-input-date-width);
  }

  .filter:not(.filter-row, .filter-divider) {
    width: var(--filter-default-width);
  }

  .filter-divider[vertical] {
    height: var(--filter-divider-height);
    margin: 0 var(--o-spacing-3x-small);
  }

  .filter-divider:not([vertical]) {
    width: var(--filter-divider-width);
    margin: var(--o-spacing-3x-small) 0;
  }

  .filters__clear-all .filters__button__clear-all::part(label) {
    text-decoration: underline;
    text-underline-offset: 0.25rem;
    padding: var(--clear-all-label-padding);
  }
`;
