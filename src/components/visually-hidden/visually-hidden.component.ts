import { html } from 'lit';
import LibraryBaseElement from '../../internal/library-base-element.js';
import styles from './visually-hidden.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.
 * @documentation /components/visually-hidden
 * @status stable
 * @since 1.5
 *
 * @slot - The content to be visually hidden.
 */
export default class OVisuallyHidden extends LibraryBaseElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-visually-hidden': OVisuallyHidden;
  }
}
