import { css } from 'lit';
import boxStyles from '../../styles/box.styles';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}
  ${boxStyles}
  
  :host {
    --color: var(--o-navbar-item-text-color, var(--o-color-neutral-1000));
    --color-selected: var(--o-navbar-item-text-color-selected, var(--o-color-primary-600));
    --background: var(--o-navbar-item-background, var(--o-color-neutral-0, white));
    --background-selected: var(--o-navbar-item-background-selected, var(--o-color-neutral-100));
    --background-hover: var(--o-navbar-item-background-hover, var(--o-color-neutral-100));
    --background-active: var(--o-navbar-item-background-active, var(--o-color-neutral-100));
    --indicator: var(--background);
    --indicator-selected: var(--o-navbar-item-indicator-selected, var(--o-color-primary-600));
    --count-border: var(--o-navbar-item-count-border-color, var(--o-color-neutral-100));
    --count-background: var(--o-navbar-item-count-background-color, var(--o-color-neutral-50));
    --count-background-selected: var(--o-navbar-item-count-background-color-selected, var(--o-color-neutral-100));
  }

  :host {
    display: block;
    min-width: 56px;
    container-type: inline-size;
  }

  :host div.box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    gap: 0.5rem;
    padding-inline: 0.5rem;

    cursor: pointer;
    color: var(--color);
    /* --text-color-filled-hover: var(--color-selected); */
    /* --text-color-filled-active: var(--color-selected); */
    background-color: var(--background);
    /* --background-color-filled-hover: var(--background-hover); */
    /* --background-color-filled-active: var(--background-active);  */
  }

  :host div.box span.prefix {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :host div.box span.prefix > span.indicator::after {
    display: block;
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--indicator);
  }

  :host div.box span.prefix > span.caret {
    display: none;
  }

  :host div.box span.group {
    flex-grow: 1;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    white-space: nowrap;
  }

  :host div.box:hover {
    --indicator: var(--background-hover);
    background-color: var(--background-hover);
  }

  :host div.box:active {
    --indicator: var(--background-active);
    background-color: var(--background-active);
  }

  :host div.box div.box.counter {
    background-color: var(--count-background);
    border: 1px solid var(--count-border);
    color: var(--color);
    padding: 0;
    width: 48px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    box-sizing: border-box;
  }

  :host ::slotted(o-icon[name='selected']),
  .fallback.selected {
    /* outline: 4px solid coral; */
    display: none;
  }

  :host div.accordion {
    padding-left: 1rem;
  }

  :host div.accordion div.group ::slotted(o-navbar-item) {
    margin-block: var(--margin-small, 8px);
  }

  :host([is-parent]) span.prefix > span.indicator {
    display: none;
  }

  :host([is-parent]) span.prefix > span.caret {
    display: flex !important;
  }

  :host(.selected) {
    --indicator: var(--indicator-selected);
  }

  :host(.selected) div.box {
    background-color: var(--background-selected);
    color: var(--color-selected);
  }

  :host(.selected) div.box:hover {
    background-color: var(--background-hover);
    --indicator: var(--indicator-selected);
  }

  :host(.selected) div.box:active {
    background-color: var(--background-active);
    color: var(--color);
    --indicator: var(--indicator-selected);
  }

  :host(.selected) ::slotted(*[slot='icon']),
  .fallback.unselected {
    display: none;
  }

  :host(.selected) ::slotted(*[slot='icon-selected']),
  .fallback.selected {
    display: initial;
  }

  :host(:not(.selected)) ::slotted(*[slot='icon']),
  .fallback.unselected {
    display: initial;
  }

  :host(:not(.selected)) ::slotted(*[slot='icon-selected']),
  .fallback.selected {
    display: none;
  }

  :host(:not([accordion-open])) span.prefix > span.caret {
    transform: rotate(-90deg);
  }

  div.accordion {
    display: grid;
    grid-template-rows: 0fr;
    transition: 0.1s opacity,
      grid-template-rows var(--o-accordion-easing, cubic-bezier(1, 0, 0, 1))
        var(--o-accordion-duration, var(--o-transition-fast, 150ms)) !important;
    overflow: hidden;
  }

  div.accordion div.group {
    overflow: hidden;
  }

  div.accordion[open='true'] {
    grid-template-rows: 1fr;
  }

  @container (max-width: 150px) {
    :host div.box > span.suffix,
    :host div.box > span.group > o-typography,
    :host div.box > span.prefix {
      display: none !important;
    }
    :host div.box {
      gap: 0;
    }
    :host div.box span.group {
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    :host div.accordion {
      display: none;
    }
  }

  @container (min-width: 150px) {
    :host div.box {
      padding-left: 0;
    }
  }
`;
