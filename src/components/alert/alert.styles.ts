import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--o-panel-background-color);
    border: solid var(--o-panel-border-width) var(--o-panel-border-color);
    border-top-width: calc(var(--o-panel-border-width) * 3);
    border-radius: var(--o-border-radius-medium);
    font-family: var(--o-font-sans);
    font-size: var(--o-font-size-small);
    font-weight: var(--o-font-weight-normal);
    line-height: 1.6;
    color: var(--o-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--o-font-size-large);
    padding-inline-start: var(--o-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--o-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--o-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--o-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--o-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--o-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--o-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--o-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--o-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--o-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--o-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--o-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--o-font-size-medium);
    padding-inline-end: var(--o-spacing-medium);
  }
`;
