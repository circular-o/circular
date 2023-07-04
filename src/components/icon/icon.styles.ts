import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }

  :host([data-hide-slot])::part(fallback) {
    display: none;
  }

  :host(:not([data-hide-slot])) {
    width: fit-content;
  }
  :host(:not([data-hide-slot])) svg {
    display: none;
  }
`;
