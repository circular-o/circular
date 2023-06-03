import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--o-font-sans);
    font-size: var(--o-font-size-small);
    font-weight: var(--o-font-weight-semibold);
    line-height: var(--o-line-height-normal);
    letter-spacing: var(--o-letter-spacing-normal);
    color: var(--o-color-neutral-500);
    padding: var(--o-spacing-2x-small) var(--o-spacing-x-large);
    user-select: none;
  }
`;
