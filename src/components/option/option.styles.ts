import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: block;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--o-font-sans);
    font-size: var(--o-font-size-medium);
    font-weight: var(--o-font-weight-normal);
    line-height: var(--o-line-height-normal);
    letter-spacing: var(--o-letter-spacing-normal);
    color: var(--o-color-neutral-700);
    padding: var(--o-spacing-x-small) var(--o-spacing-medium) var(--o-spacing-x-small) var(--o-spacing-x-small);
    transition: var(--o-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--o-color-neutral-100);
    color: var(--o-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--o-color-primary-600);
    color: var(--o-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--o-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--o-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--o-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--o-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;
