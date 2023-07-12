import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import LibraryBaseElement from '../../internal/library-base-element';
import styles from './typography.styles';
import type { CSSResultGroup } from 'lit';
import type { Variant } from './typography.types';

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://circular-o.github.io/circular/#/components/typography
 * @status experimental
 * @since 2.0
 *
 * @dependency o-example
 *
 * @event o-event-name - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --o-typography-font-family - 'Poppins', sans-serif
 * @cssproperty --example - An example CSS custom property.
 * @cssproperty --o-typography-h1-font-family - var(--default-font-family)
 * @cssproperty --o-typography-h1-fontsize - 140px
 * @cssproperty --o-typography-h1-font-weight - 800
 * @cssproperty --o-typography-h1-line-height - 168px
 * @cssproperty --o-typography-h1-letter-spacing - 0em

 * @cssproperty --o-typography-h2-font-family - var(--default-font-family)
 * @cssproperty --o-typography-h2-fontsize - 88px
 * @cssproperty --o-typography-h2-font-weight - 800
 * @cssproperty --o-typography-h2-line-height - 106px
 * @cssproperty --o-typography-h2-letter-spacing - 0em

 * @cssproperty --o-typography-h3-font-family - var(--default-font-family)
 * @cssproperty --o-typography-h3-fontsize - 72px
 * @cssproperty --o-typography-h3-font-weight - 700
 * @cssproperty --o-typography-h3-line-height - 86px
 * @cssproperty --o-typography-h3-letter-spacing - 0em

 * @cssproperty --o-typography-h4-font-family - var(--default-font-family)
 * @cssproperty --o-typography-h4-fontsize - 64px
 * @cssproperty --o-typography-h4-font-weight - 700
 * @cssproperty --o-typography-h4-line-height - 77px
 * @cssproperty --o-typography-h4-letter-spacing - 0em

 * @cssproperty --o-typography-h5-font-family - var(--default-font-family)
 * @cssproperty --o-typography-h5-fontsize - 56px
 * @cssproperty --o-typography-h5-font-weight - 700
 * @cssproperty --o-typography-h5-line-height - 67px
 * @cssproperty --o-typography-h5-letter-spacing - 0em

 * @cssproperty --o-typography-t1-font-family - var(--default-font-family)
 * @cssproperty --o-typography-t1-fontsize - 48px
 * @cssproperty --o-typography-t1-font-weight - 700
 * @cssproperty --o-typography-t1-line-height - 58px
 * @cssproperty --o-typography-t1-letter-spacing - 0em

 * @cssproperty --o-typography-t2-font-family - var(--default-font-family)
 * @cssproperty --o-typography-t2-fontsize - 40px
 * @cssproperty --o-typography-t2-font-weight - 700
 * @cssproperty --o-typography-t2-line-height - 56px
 * @cssproperty --o-typography-t2-letter-spacing - 0em

 * @cssproperty --o-typography-t3-font-family - var(--default-font-family)
 * @cssproperty --o-typography-t3-fontsize - 32px
 * @cssproperty --o-typography-t3-font-weight - 600
 * @cssproperty --o-typography-t3-line-height - 38px
 * @cssproperty --o-typography-t3-letter-spacing - 0em

 * @cssproperty --o-typography-t4-font-family - var(--default-font-family)
 * @cssproperty --o-typography-t4-fontsize - 24px
 * @cssproperty --o-typography-t4-font-weight - 600
 * @cssproperty --o-typography-t4-line-height - 34px
 * @cssproperty --o-typography-t4-letter-spacing - 0em

 * @cssproperty --o-typography-c1-font-family - var(--default-font-family)
 * @cssproperty --o-typography-c1-fontsize - 24px
 * @cssproperty --o-typography-c1-font-weight - 500
 * @cssproperty --o-typography-c1-line-height - 34px
 * @cssproperty --o-typography-c1-letter-spacing - 0.01em

 * @cssproperty --o-typography-c2-font-family - var(--default-font-family)
 * @cssproperty --o-typography-c2-fontsize - 16px
 * @cssproperty --o-typography-c2-font-weight - 600
 * @cssproperty --o-typography-c2-line-height - 22px
 * @cssproperty --o-typography-c2-letter-spacing - 0.01em

 * @cssproperty --o-typography-c3-font-family - var(--default-font-family)
 * @cssproperty --o-typography-c3-fontsize - 16px
 * @cssproperty --o-typography-c3-font-weight - 400
 * @cssproperty --o-typography-c3-line-height - 24px
 * @cssproperty --o-typography-c3-letter-spacing - 0.01em

 * @cssproperty --o-typography-c4-font-family - var(--default-font-family)
 * @cssproperty --o-typography-c4-fontsize - 14px
 * @cssproperty --o-typography-c4-font-weight - 400
 * @cssproperty --o-typography-c4-line-height - 20px
 * @cssproperty --o-typography-c4-letter-spacing - 0.01em
*/

@customElement('o-typography')
export default class OTypography extends LibraryBaseElement {
  static styles: CSSResultGroup = styles;

  @property({ reflect: true }) variant: Variant = 'c3';

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-typography': OTypography;
  }
}
