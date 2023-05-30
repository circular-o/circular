import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    position: relative;
    background: var(--o-panel-background-color);
    border: solid var(--o-panel-border-width) var(--o-panel-border-color);
    border-radius: var(--o-border-radius-medium);
    padding: var(--o-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(o-divider) {
    --spacing: var(--o-spacing-x-small);
  }
`;
