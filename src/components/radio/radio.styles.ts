import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--o-input-font-family);
    font-size: var(--o-input-font-size-medium);
    font-weight: var(--o-input-font-weight);
    color: var(--o-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--o-toggle-size-small);
    font-size: var(--o-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--o-toggle-size-medium);
    font-size: var(--o-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--o-toggle-size-large);
    font-size: var(--o-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--o-input-border-width) var(--o-input-border-color);
    border-radius: 50%;
    background-color: var(--o-input-background-color);
    color: transparent;
    transition: var(--o-transition-fast) border-color, var(--o-transition-fast) background-color,
      var(--o-transition-fast) color, var(--o-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--o-input-border-color-hover);
    background-color: var(--o-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--o-color-neutral-0);
    border-color: var(--o-color-primary-600);
    background-color: var(--o-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--o-color-primary-500);
    background-color: var(--o-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--o-focus-ring);
    outline-offset: var(--o-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--o-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`;
