import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--o-color-primary-50);
    border-color: var(--o-color-primary-200);
    color: var(--o-color-primary-800);
  }

  .tag--primary:active > o-icon-button {
    color: var(--o-color-primary-600);
  }

  .tag--success {
    background-color: var(--o-color-success-50);
    border-color: var(--o-color-success-200);
    color: var(--o-color-success-800);
  }

  .tag--success:active > o-icon-button {
    color: var(--o-color-success-600);
  }

  .tag--neutral {
    background-color: var(--o-color-neutral-50);
    border-color: var(--o-color-neutral-200);
    color: var(--o-color-neutral-800);
  }

  .tag--neutral:active > o-icon-button {
    color: var(--o-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--o-color-warning-50);
    border-color: var(--o-color-warning-200);
    color: var(--o-color-warning-800);
  }

  .tag--warning:active > o-icon-button {
    color: var(--o-color-warning-600);
  }

  .tag--danger {
    background-color: var(--o-color-danger-50);
    border-color: var(--o-color-danger-200);
    color: var(--o-color-danger-800);
  }

  .tag--danger:active > o-icon-button {
    color: var(--o-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--o-button-font-size-small);
    height: calc(var(--o-input-height-small) * 0.8);
    line-height: calc(var(--o-input-height-small) - var(--o-input-border-width) * 2);
    border-radius: var(--o-input-border-radius-small);
    padding: 0 var(--o-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--o-button-font-size-medium);
    height: calc(var(--o-input-height-medium) * 0.8);
    line-height: calc(var(--o-input-height-medium) - var(--o-input-border-width) * 2);
    border-radius: var(--o-input-border-radius-medium);
    padding: 0 var(--o-spacing-small);
  }

  .tag--large {
    font-size: var(--o-button-font-size-large);
    height: calc(var(--o-input-height-large) * 0.8);
    line-height: calc(var(--o-input-height-large) - var(--o-input-border-width) * 2);
    border-radius: var(--o-input-border-radius-large);
    padding: 0 var(--o-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--o-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--o-border-radius-pill);
  }
`;
