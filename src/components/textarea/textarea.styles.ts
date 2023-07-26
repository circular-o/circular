import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';
import formControlStyles from '../../styles/form-control.styles.js';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--o-input-font-family);
    font-weight: var(--o-input-font-weight);
    line-height: var(--o-line-height-normal);
    letter-spacing: var(--o-input-letter-spacing);
    vertical-align: middle;
    transition: var(--o-transition-fast) color, var(--o-transition-fast) border, var(--o-transition-fast) box-shadow,
      var(--o-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--o-input-background-color);
    border: solid var(--o-input-border-width) var(--o-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--o-input-background-color-hover);
    border-color: var(--o-input-border-color-hover);
  }
  /*.textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--o-input-color-hover);
  }*/

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--o-input-background-color-focus);
    border-color: var(--o-input-border-color-focus);
    border-width: var(--o-input-border-width-medium);
    // box-shadow: 0 0 0 var(--o-focus-ring-width) var(--o-input-focus-ring-color);
  }

  /*.textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--o-input-color-focus);
  }*/

  .textarea--standard.textarea--disabled {
    background-color: var(--o-input-background-color-disabled);
    border-color: var(--o-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  /*.textarea--standard.textarea--disabled .textarea__control {
    color: var(--o-input-color-disabled);
  }*/

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--o-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--o-input-filled-background-color);
    color: var(--o-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--o-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--o-input-filled-background-color-focus);
    outline: var(--o-focus-ring);
    outline-offset: var(--o-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--o-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--o-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--o-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--o-input-border-radius-small);
    font-size: var(--o-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--o-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--o-input-border-radius-medium);
    font-size: var(--o-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--o-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--o-input-border-radius-large);
    font-size: var(--o-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--o-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;
