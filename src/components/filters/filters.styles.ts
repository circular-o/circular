import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --base-padding: var(--o-spacing-small, 0.75rem);
    --base-width: 100%;
    --filter-max-width: 250px;
    --filter-divider-height: var(--o-input-height-medium);
    --filter-divider-width: 100%;
    --filter-row-padding: 0;
    --filter-border: 0;
    display: block;
  }

  /*
  .filter:not(.filter.filter-row) {
    max-width: var(--filter-max-width);
  }
  */

  .base-row,
  .filter-row {
    width: var(--base-width);
    min-width: var(--base-width);
  }

  .base-row::part(body),
  .filter-row::part(body) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: var(--base-padding);
  }

  .filter-row:not(.base-row)::part(body) {
    padding: var(--filter-row-padding);
  }

  .filter-row:not(.base-row)::part(base) {
    border: var(--filter-border);
  }

  .filter-divider[vertical] {
    min-height: var(--filter-divider-height);
    margin: 0 var(--o-spacing-3x-small);
  }

  .filter-divider:not([vertical]) {
    min-width: var(--filter-divider-width);
    margin: var(--o-spacing-3x-small) 0;
  }
`;
