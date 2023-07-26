import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--o-font-sans);
    font-size: var(--o-font-size-small);
    font-weight: var(--o-font-weight-semibold);
    border-radius: var(--o-border-radius-medium);
    color: var(--o-color-neutral-600);
    padding: var(--o-spacing-medium) var(--o-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--o-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--o-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--o-focus-ring);
    outline-offset: calc(-1 * var(--o-focus-ring-width) - var(--o-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--o-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--o-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--o-font-size-small);
    margin-inline-start: var(--o-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--o-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;
