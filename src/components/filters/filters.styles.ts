import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --base-padding: var(--o-spacing-small, 0.75rem);
    --base-width: 100%;
    --filter-default-width: 240px;
    --filter-input-date-width: 190px;
    --filter-divider-width: 100%;
    --filter-divider-height: var(--o-input-height-medium, 2.5rem);
    --filter-row-padding: 0;
    --filter-row-border: 0;
    --clear-all-label-padding: 0 0.1rem;
    display: block;
  }

  .base-row::part(body) {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: 'base-row-items clear-all';
  }

  .base-row-items {
    grid-area: base-row-items;
  }

  .filters__clear-all {
    grid-area: clear-all;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .filter-row {
    width: var(--base-width);
  }

  .filter-input[type='date'] {
    width: var(--filter-input-date-width);
  }

  .filter-row:not(.base-row)::part(body) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--base-padding);
  }

  .filter-row:not(.base-row)::part(body) {
    flex-wrap: wrap;
    padding: var(--filter-row-padding);
  }

  .filter-row:not(.base-row)::part(base) {
    border: var(--filter-row-border);
  }

  .filter:not(.filter-row, .filter-divider) {
    width: var(--filter-default-width);
  }

  .filter-divider[vertical] {
    min-height: var(--filter-divider-height);
    margin: 0 var(--o-spacing-3x-small);
  }

  .filter-divider:not([vertical]) {
    min-width: var(--filter-divider-width);
    margin: var(--o-spacing-3x-small) 0;
  }

  .filters__clear-all .filters__button__clear-all::part(label) {
    text-decoration: underline;
    text-underline-offset: 0.25rem;
    padding: var(--clear-all-label-padding);
  }
`;
