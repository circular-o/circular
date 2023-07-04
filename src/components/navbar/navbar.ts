import { customElement, property, query } from 'lit/decorators.js';
import { html } from 'lit';
import { watch } from '../../internal/watch';
import LibraryBaseElement from '../../internal/library-base-element';
// import { LocalizeController } from '../../utilities/localize';
import ONavbarItem from '../navbar-item/navbar-item';
import styles from './navbar.styles';
import type { CSSResultGroup } from 'lit';
import type { Mode, SelectEvent } from './navbar.types';
// import type { SelectEvent, Mode } from './navbar.types';

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://circular-o.github.io/circular/#/components/navbar
 * @status experimental
 * @since 2.0
 *
 * @dependency o-icon
 * @dependency o-button
 * @dependency o-navbar-item
 *
 * @event o-select - { id: string } of selected navbar-item
 *
 * @slot - The default slot for navbar-items.
 *
 * @csspart base - The component's base wrapper.
 * @csspart header - The component's header wrapper.
 * @csspart body - The component's body wrapper.
 *
 * @cssproperty --o-navbar-light-background-color
 * @cssproperty --o-navbar-light-hamburger-background-color
 * @cssproperty --o-navbar-light-hamburger-background-color-hover
 * @cssproperty --o-navbar-light-hamburger-background-color-active
 * @cssproperty --o-navbar-light-hamburger-hover-background-color-hover
 */
@customElement('o-navbar')
export default class ONavbar extends LibraryBaseElement {
  static styles: CSSResultGroup = styles;

  // private readonly localize = new LocalizeController(this);

  @property({ reflect: true }) mode: Mode = 'open';
  @property() selected?: string;

  @query('div.box') boxtemplateElement!: HTMLDivElement;

  private items: ONavbarItem[] = [];
  private currentSelected?: ONavbarItem;
  private currentAncestorSelected?: ONavbarItem;

  // update handlers
  @watch('selected')
  updateSelected() {
    const element = this.items.find(e => e.id === this.selected || e.text === this.selected);
    if (element) {
      element.click();
    }
  }

  // event handlers
  private handlehamburgerclick = () => {
    // this.open = !this.open;
    if (this.boxtemplateElement) this.boxtemplateElement.setAttribute('elevation', 'none');
    if (this.mode === 'open') {
      this.mode = 'collapsed';
    } else if (this.mode === 'collapsed') {
      this.mode = 'hover';
      if (this.boxtemplateElement) this.boxtemplateElement.setAttribute('elevation', 'medium');
    } else if (this.mode === 'hover') {
      this.mode = 'open';
    }

    this.dispatchEvent(new Event('change'));
  };
  private handleslotchange = (e: Event) => {
    if (e.target instanceof HTMLSlotElement) {
      const elements = e.target.assignedElements();
      elements.forEach(element => {
        if (element instanceof ONavbarItem) {
          if (!element.hasAttribute('navbar-init')) {
            element.addEventListener('select', this.handleitemselect);
            element.addEventListener('child-select', this.handleancestorselect);
            element.setAttribute('navbar-init', 'true');
            this.items.push(element);
          }
        }
      });
    }
  };
  private handleitemselect = (e: Event) => {
    if (e.target instanceof ONavbarItem) {
      this.currentAncestorSelected?.deselect();
      if (e.target !== this.currentSelected) {
        this.currentSelected?.deselect();
      }
      this.currentSelected = e.target;

      this.dispatchEvent(new CustomEvent<SelectEvent>('o-select', { detail: { id: e.target.id || e.target.text } }));
    }
  };
  private handleancestorselect = (e: Event) => {
    if (e instanceof CustomEvent && e.target instanceof ONavbarItem) {
      const childtarget = e.detail as ONavbarItem;
      if (e.target !== this.currentAncestorSelected) {
        this.currentAncestorSelected?.deselect();
      }
      if (childtarget !== this.currentSelected) {
        this.currentSelected?.deselect();
        this.currentSelected = childtarget;

        this.dispatchEvent(
          new CustomEvent<SelectEvent>('o-select', { detail: { id: childtarget.id || childtarget.text } })
        );
      }
      this.currentAncestorSelected = e.target;
    }
  };

  render() {
    return html`
      <div class="box" part="base">
        <header part="header">
          <o-icon class="logo" style="width:124px" size="large" src="assets/images/navbar-interzero-logo.svg"></o-icon>
          <o-button variant="text" circle size="small" @click="${this.handlehamburgerclick}">
            <o-icon src="assets/images/navbar-circular-logo.svg" style="font-size: 32px;" class="hover"></o-icon>
            <o-icon name="menu" library="material" style="font-size: 24px;" class="open"></o-icon>
            <o-icon name="menu_open" library="material" style="font-size: 24px;" class="collapsed"></o-icon>
          </o-button>
        </header>
        <o-divider></o-divider>
        <div part="body" class="body">
          <slot @slotchange="${this.handleslotchange}"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-navbar': ONavbar;
  }
}
