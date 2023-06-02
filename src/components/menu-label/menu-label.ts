import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import LibraryBaseElement from '../../internal/library-base-element';
import styles from './menu-label.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Menu labels are used to describe a group of menu items.
 * @documentation https://circular-o.github.io/circular/#/components/menu-label
 * @status stable
 * @since 2.0
 *
 * @slot - The menu label's content.
 *
 * @csspart base - The component's base wrapper.
 */
@customElement('o-menu-label')
export default class OMenuLabel extends LibraryBaseElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot part="base" class="menu-label"></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-menu-label': OMenuLabel;
  }
}
