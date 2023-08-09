import { css } from 'lit';
import boxStyles from '../../styles/box.styles.js';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}
  ${boxStyles}

  :host {
    --background: var(--o-navbar-background-color, var(--o-color-neutral-0, white));
    --hamburger-background: var(--o-navbar-hamburger-background-color, transparent);
    --hamburger-background-hover: var(--o-navbar-hamburger-background-color-hover, var(--o-color-neutral-300, #f1f1f4));
    --hamburger-background-active: var(
      --o-navbar-hamburger-background-color-active,
      var(--o-color-neutral-500, #c7cbd4)
    );
    --logo-width: var(--o-font-size-8x-large, 124px);
    --margin-small: var(--o-spacing-2x-small, 8px);
  }

  :host {
    position: sticky;
    top: 0;
    left: 0;
    display: grid;
    height: 100vh;
    grid-template-rows: 1fr;
  }

  :host div.box {
    container-type: inline-size;
    display: block;
    background-color: var(--background);
    padding: var(--padding-small, 8px);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  :host header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--margin-small, 8px);
    padding-block: var(--padding-small, 8px);
  }

  :host header o-icon.logo {
    margin-left: var(--margin-medium, 16px);
    height: auto;
    width: var(--logo-width, 124px);
  }

  :host header o-button {
    background-color: var(--hamburger-background);
    color: var(--primary-600, black);
  }

  :host header o-button::part(base) {
    display: flex;
    align-items: center;
  }

  /* NO HAMBURGER */
  :host([no-hamburger]) header > o-button {
    display: none;
  }

  :host([no-hamburger]) header {
    justify-content: center;
  }

  :host div.box o-divider {
    margin-block: var(--margin-small, 8px);
  }

  :host div.box div.body ::slotted(o-navbar-item) {
    margin-bottom: var(--margin-small, 8px);
  }

  :host([mode='open']) {
    width: 310px;
  }

  :host([mode='collapsed']) {
    width: 72px;
  }

  :host([mode='hover']) {
    width: 72px;
    --hamburger-background-hover: var(
      --o-navbar-light-hamburger-hover-background-color-hover,
      var(--o-color-neutral-0, #ffffff)
    );
  }

  :host([mode='hover']) div.box {
    position: absolute;
  }

  :host([mode='hover']) div.box:hover {
    width: 310px;
    transition: width 60ms ease-in;
  }

  :host([mode='hover']) div.box header o-button o-icon.open {
    display: none;
  }

  :host([mode='hover']) div.box header o-button o-icon.collapsed {
    display: block;
  }

  :host([mode='hover']) div.box header o-button span.hover {
    display: none;
  }

  @container (min-width: 72px) {
    :host div.box {
      transition: width 60ms ease-in;
    }

    :host div.box header o-button o-icon.open {
      display: block;
    }

    :host div.box header o-button o-icon.collapsed {
      display: none;
    }

    :host div.box header o-button span.hover {
      display: none;
    }
  }

  @container (max-width: 72px) {
    :host div.box {
      transition: width 150ms ease-in;
      background-color: red;
    }

    :host div.box header {
      justify-content: center;
    }

    :host div.box header ::slotted(*) {
      display: none;
    }

    :host div.box header o-icon.logo {
      display: none;
    }

    :host div.box header o-button o-icon.open {
      display: none;
    }

    :host div.box header o-button o-icon.collapsed {
      display: none !important;
    }

    :host div.box header o-button span.hover {
      display: block !important;
    }
  }
`;
