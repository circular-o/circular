import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--o-tooltip-arrow-size);
    --arrow-color: var(--o-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--o-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--o-tooltip-border-radius);
    background-color: var(--o-tooltip-background-color);
    font-family: var(--o-tooltip-font-family);
    font-size: var(--o-tooltip-font-size);
    font-weight: var(--o-tooltip-font-weight);
    line-height: var(--o-tooltip-line-height);
    color: var(--o-tooltip-color);
    padding: var(--o-tooltip-padding);
    pointer-events: none;
  }
`;
