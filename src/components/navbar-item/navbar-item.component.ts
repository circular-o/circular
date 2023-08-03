/* eslint-disable lit-a11y/tabindex-no-positive */
/* eslint-disable wc/no-self-class */

import { html } from 'lit';
import { numberAbbreviate } from '../../internal/math.js';
import { property, query } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import LibraryBaseElement from '../../internal/library-base-element.js';
import styles from './navbar-item.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 * @documentation /components/navbar-item
 * @status wip
 * @since 1.5
 *
 * @dependency o-icon
 * @dependency o-typography
 *
 * @slot - The default slot - for sub-categories.
 * @slot icon to pass the default icon (unselected)
 * @slot icon-selected to pass the default icon for selected
 *
 * @csspart icon
 * @csspart icon-selected
 *
 * @cssproperty [--o-navbar-item-text-color=var(--o-color-neutral-1000)]
 * @cssproperty [--o-navbar-item-text-color-selected=var(--o-color-primary-600)]
 * @cssproperty [--o-navbar-item-background=var(--o-color-neutral-0, white)]
 * @cssproperty [--o-navbar-item-background-selected=var(--o-color-neutral-100)]
 * @cssproperty [--o-navbar-item-background-hover=var(--o-color-neutral-100)]
 * @cssproperty [--o-navbar-item-background-active=var(--o-color-neutral-100)]
 * @cssproperty [--o-navbar-item-indicator-selected=var(--o-color-primary-600)]
 * @cssproperty [--o-navbar-item-count-border-color=var(--o-color-neutral-100)]
 * @cssproperty [--o-navbar-item-count-background-color=var(--o-color-neutral-50)]
 * @cssproperty [--o-navbar-item-count-background-color-selected=var(--o-color-neutral-100)]
 */
export default class ONavbarItem extends LibraryBaseElement {
  static styles: CSSResultGroup = styles;

  @property() text = '';
  @property({ type: Number }) count?: number;
  @property({ reflect: true, type: Boolean, attribute: 'is-parent' }) isParent = false;
  @property({ reflect: true, type: Boolean, attribute: 'accordion-open' }) accordionOpen = false;

  // elements
  @query('div.accordion') accordionElement!: HTMLDivElement;

  // watchers
  @watch('accordionOpen')
  onAccordionOpenUpdate() {
    if (this.accordionElement) {
      this.accordionElement.setAttribute('open', this.accordionOpen.toString());
    }
  }

  private subitems: ONavbarItem[] = [];
  private currentSubItemSelected = 0;

  // public functions
  public deselect() {
    this.classList.remove('selected');
    this.subitems.forEach(elm => elm.deselect());
  }

  // event handlers
  public handleClick = () => {
    if (this.isParent) {
      if (this.getBoundingClientRect().width < 100) {
        // start selecting the subitems
        const savedCurrent = this.currentSubItemSelected;
        this.subitems[this.currentSubItemSelected]?.handleClick();

        // make sure we click through all children
        // we make sure to only call if same value (since there could be a update in between line 94 and this)
        if (this.currentSubItemSelected === savedCurrent && !this.subitems[this.currentSubItemSelected].isParent) {
          this.currentSubItemSelected++;
          if (this.currentSubItemSelected >= this.subitems.length) {
            this.currentSubItemSelected = 0;
            this.dispatchEvent(new Event('reached-max'));
          }
        }
      } else {
        this.accordionOpen = !this.accordionOpen;
      }
    } else {
      if (this.hasAttribute('navbar-subitem')) {
        this.dispatchEvent(new CustomEvent<ONavbarItem>('child-select', { detail: this }));
      }
      this.dispatchEvent(new Event('select'));
      this.classList.add('selected');
    }
  };

  private handleSlotChange = (e: Event) => {
    if (e.target instanceof HTMLSlotElement) {
      const elements = e.target.assignedElements();
      elements.forEach(element => {
        if (element instanceof ONavbarItem) {
          if (!element.hasAttribute('navbar-subitem')) {
            if (!this.isParent) {
              this.isParent = true;
            }

            element.setAttribute('subitem-index', this.subitems.length.toString());
            this.subitems.push(element);
            element.addEventListener('reached-max', this.handleReachedMax);
            element.addEventListener('child-select', this.handleChildSelect);
            element.setAttribute('navbar-subitem', 'true');
          }
        }
      });
    }
  };

  // if we reached the current max of our subitems we tell our parents so it can progress further with clicking
  private handleReachedMax = () => {
    this.currentSubItemSelected++;

    if (this.currentSubItemSelected >= this.subitems.length) {
      this.currentSubItemSelected = 0;
      this.dispatchEvent(new Event('reached-max'));
    }
  };

  private handleChildSelect = (e: Event) => {
    let currentString: null | string = null;
    if (e.target instanceof ONavbarItem) {
      currentString = e.target.getAttribute('subitem-index');
      this.currentSubItemSelected = Number(currentString);
    }

    this.subitems.forEach(element => {
      if (element.getAttribute('subitem-index') !== currentString) {
        element.deselect();
      }
    });

    if (e instanceof CustomEvent) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.dispatchEvent(new CustomEvent<ONavbarItem>('child-select', { detail: e.detail }));

      if (!this.hasAttribute('navbar-subitem') && !this.classList.contains('selected')) {
        this.classList.add('selected');
      }
    }
  };

  render() {
    const fallback = this.text ? this.text.substring(0, 2).toUpperCase() : '';

    return html`
      <div class="box" tabindex="1" @click="${this.handleClick}" mode="fill" radius="medium" size="large">
        <span class="prefix">
          <span class="indicator"></span>
          <span class="caret"
            ><o-icon library="material" name="expand_more" style="font-size: var(--o-font-size-large)"></o-icon
          ></span>
        </span>

        <span class="group">
          <slot part="icon" name="icon"><o-typography class="fallback unselected">${fallback}</o-typography></slot>
          <slot part="icon-selected" name="icon-selected"
            ><o-typography class="fallback selected">${fallback}</o-typography></slot
          >
          <o-typography>${this.text}</o-typography>
        </span>
        <span class="suffix">
          ${this.count !== undefined
            ? html`<div class="box counter" radius="pill">
                <o-typography variant="c4">${numberAbbreviate(this.count)}</o-typography>
              </div>`
            : ''}
        </span>
      </div>

      <div class="accordion sub">
        <div class="group">
          <slot @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-navbar-item': ONavbarItem;
  }
}
