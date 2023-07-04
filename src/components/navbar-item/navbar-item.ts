/* eslint-disable lit-a11y/tabindex-no-positive */
/* eslint-disable wc/no-self-class */

import { customElement, property, query } from 'lit/decorators.js';
import { FormatNumber } from '../../internal/math';
import { html } from 'lit';
import { watch } from '../../internal/watch';
import LibraryBaseElement from '../../internal/library-base-element';
import styles from './navbar-item.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://circular-o.github.io/circular/#/components/navbar-item
 * @status experimental
 * @since 2.0
 *
 * @dependency o-icon
 * @dependency o-typography
 *
 * @event o-event-name - Emitted as an example.
 *
 * @slot - The default slot - for sub-categories.
 * @slot icon to pass the default icon (unselected)
 * @slot icon_selected to pass the default icon for selected
 *
 * @csspart icon
 * @csspart icon_selected
 *
 * @cssproperty --o-navbaritem-light-text-color
 * @cssproperty --o-navbaritem-light-text-color-selected
 * @cssproperty --o-navbaritem-light-background
 * @cssproperty --o-navbaritem-light-background-selected
 * @cssproperty --o-navbaritem-light-background-hover
 * @cssproperty --o-navbaritem-light-background-active
 * @cssproperty --o-navbaritem-light-indicator-selected
 * @cssproperty --o-navbaritem-light-count-border-color
 * @cssproperty --o-navbaritem-light-count-background-color
 * @cssproperty --o-navbaritem-light-count-background-color-selected
 */

@customElement('o-navbar-item')
export default class ONavbarItem extends LibraryBaseElement {
  static styles: CSSResultGroup = styles;

  @property() text = '';
  @property({ type: Number }) count?: number;
  @property({ reflect: true, type: Boolean }) isparent = false;
  @property({ reflect: true, type: Boolean }) accordionopen = false;

  // elements
  @query('div.accordion') accordionElement!: HTMLDivElement;

  // watchers
  @watch('accordionopen')
  onaccordionopenupdate() {
    if (this.accordionElement) {
      this.accordionElement.setAttribute('open', this.accordionopen.toString());
    }
  }

  private subitems: ONavbarItem[] = [];
  private currentsubitemselected = 0;

  // public functions
  public deselect() {
    this.classList.remove('selected');
    this.subitems.forEach(elm => elm.deselect());
  }

  // event handlers
  public handleclick = () => {
    if (this.isparent) {
      if (this.getBoundingClientRect().width < 100) {
        // start selecting the subitems
        const savedcurrent = this.currentsubitemselected;
        this.subitems[this.currentsubitemselected]?.handleclick();

        // make sure we click through all children
        // we make sure to only call if same value (since there could be a update inbetween line 94 and this)
        if (this.currentsubitemselected === savedcurrent && !this.subitems[this.currentsubitemselected].isparent) {
          this.currentsubitemselected++;
          if (this.currentsubitemselected >= this.subitems.length) {
            this.currentsubitemselected = 0;
            this.dispatchEvent(new Event('reached-max'));
          }
        }
      } else {
        this.accordionopen = !this.accordionopen;
      }
    } else {
      if (this.hasAttribute('navbar-subitem')) {
        this.dispatchEvent(new CustomEvent<ONavbarItem>('child-select', { detail: this }));
      }
      this.dispatchEvent(new Event('select'));
      this.classList.add('selected');
    }
  };
  private handleslotchange = (e: Event) => {
    if (e.target instanceof HTMLSlotElement) {
      const elements = e.target.assignedElements();
      elements.forEach(element => {
        if (element instanceof ONavbarItem) {
          if (!element.hasAttribute('navbar-subitem')) {
            if (!this.isparent) {
              this.isparent = true;
            }

            element.setAttribute('subitem-index', this.subitems.length.toString());
            this.subitems.push(element);
            element.addEventListener('reached-max', this.handlereachedmax);
            element.addEventListener('child-select', this.hanlechildselect);
            element.setAttribute('navbar-subitem', 'true');
          }
        }
      });
    }
  };
  // if we reached the current max of our subitems we tell our parents so it can progress further with clicking
  private handlereachedmax = () => {
    this.currentsubitemselected++;

    if (this.currentsubitemselected >= this.subitems.length) {
      this.currentsubitemselected = 0;
      this.dispatchEvent(new Event('reached-max'));
    }
  };
  private hanlechildselect = (e: Event) => {
    let currentstring: null | string = null;
    if (e.target instanceof ONavbarItem) {
      currentstring = e.target.getAttribute('subitem-index');
      this.currentsubitemselected = Number(currentstring);
    }

    this.subitems.forEach(element => {
      if (element.getAttribute('subitem-index') !== currentstring) {
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
      <div class="box" tabindex="1" @click="${this.handleclick}" mode="fill" radius="medium" size="large">
        <span class="prefix">
          <span class="indicator"></span>
          <span class="caret"><o-icon src="assets/images/caret.svg"></o-icon></span>
        </span>

        <span class="group">
          <slot part="icon" name="icon"><o-typography class="fallback unselected">${fallback}</o-typography></slot>
          <slot part="icon_selected" name="icon_selected"
            ><o-typography class="fallback selected">${fallback}</o-typography></slot
          >
          <o-typography>${this.text}</o-typography>
        </span>
        <span class="suffix">
          ${this.count !== undefined
            ? html`<div class="box counter" radius="pill">
                <o-typography variant="c4">${FormatNumber(this.count)}</o-typography>
              </div>`
            : ''}
        </span>
      </div>

      <div class="accordion sub">
        <div class="group">
          <slot @slotchange="${this.handleslotchange}"></slot>
        </div>
      </div>
    `;
  }
}
// ${icon ? html`<o-icon class="unselected" name="${icon}">${fallback}</o-icon>` : ''}
// ${icon_selected ? html`<o-icon class="selected" name="${icon_selected}">${fallback}</o-icon>` : ''}

declare global {
  interface HTMLElementTagNameMap {
    'o-navbar-item': ONavbarItem;
  }
}
