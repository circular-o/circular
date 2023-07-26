import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--o-input-font-family);
    font-weight: var(--o-input-font-weight);
    color: var(--o-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--o-toggle-size-small);
    font-size: var(--o-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--o-toggle-size-medium);
    font-size: var(--o-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--o-toggle-size-large);
    font-size: var(--o-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--o-input-border-width) var(--o-input-border-color);
    border-radius: 2px;
    background-color: var(--o-input-background-color);
    color: var(--o-color-neutral-0);
    transition: var(--o-transition-fast) border-color, var(--o-transition-fast) background-color,
      var(--o-transition-fast) color, var(--o-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--o-input-border-color-hover);
    background-color: var(--o-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--o-focus-ring);
    outline-offset: var(--o-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--o-color-primary-600);
    background-color: var(--o-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--o-color-primary-500);
    background-color: var(--o-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--o-focus-ring);
    outline-offset: var(--o-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--o-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--o-input-required-content);
    margin-inline-start: var(--o-input-required-content-offset);
  }
`;
