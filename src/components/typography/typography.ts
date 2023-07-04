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
 * @cssproperty --o-typography-h1-fontfamily - var(--default-fontfamily)
 * @cssproperty --o-typography-h1-fontsize - 140px
 * @cssproperty --o-typography-h1-fontweight - 800
 * @cssproperty --o-typography-h1-lineheight - 168px
 * @cssproperty --o-typography-h1-letterspacing - 0em

 * @cssproperty --o-typography-h2-fontfamily - var(--default-fontfamily)
 * @cssproperty --o-typography-h2-fontsize - 88px
 * @cssproperty --o-typography-h2-fontweight - 800
 * @cssproperty --o-typography-h2-lineheight - 106px
 * @cssproperty --o-typography-h2-letterspacing - 0em

 * @cssproperty --o-typography-h3-fontfamily - var(--default-fontfamily)
 * @cssproperty --o-typography-h3-fontsize - 72px
 * @cssproperty --o-typography-h3-fontweight - 700
 * @cssproperty --o-typography-h3-lineheight - 86px
 * @cssproperty --o-typography-h3-letterspacing - 0em

 * @cssproperty --o-typography-h4-fontfamily - var(--default-fontfamily)
 * @cssproperty --o-typography-h4-fontsize - 64px
 * @cssproperty --o-typography-h4-fontweight - 700
 * @cssproperty --o-typography-h4-lineheight - 77px
 * @cssproperty --o-typography-h4-letterspacing - 0em

 * @cssproperty --o-typography-h5-fontfamily - var(--default-fontfamily)
 * @cssproperty --o-typography-h5-fontsize - 56px
 * @cssproperty --o-typography-h5-fontweight - 700
 * @cssproperty --o-typography-h5-lineheight - 67px
 * @cssproperty --o-typography-h5-letterspacing - 0em

 * @cssproperty --o-typography-t1-fontfamily - var(--default-fontfamily)
 * @cssproperty --o-typography-t1-fontsize - 48px
 * @cssproperty --o-typography-t1-fontweight - 700
 * @cssproperty --o-typography-t1-lineheight - 58px
 * @cssproperty --o-typography-t1-letterspacing - 0em

 * @cssproperty --o-typography-t2-fontfamily - var(--default-fontfamily)
 * @cssproperty --o-typography-t2-fontsize - 40px
 * @cssproperty --o-typography-t2-fontweight - 700
 * @cssproperty --o-typography-t2-lineheight - 56px
 * @cssproperty --o-typography-t2-letterspacing - 0em

 * @cssproperty --o-typography-t3-fontfamily - var(--default-fontfamily)
 * @cssproperty --o-typography-t3-fontsize - 32px
 * @cssproperty --o-typography-t3-fontweight - 600
 * @cssproperty --o-typography-t3-lineheight - 38px
 * @cssproperty --o-typography-t3-letterspacing - 0em

 * @cssproperty --o-typography-t4-fontfamily - var(--default-fontfamily)
 * @cssproperty --o-typography-t4-fontsize - 24px
 * @cssproperty --o-typography-t4-fontweight - 600
 * @cssproperty --o-typography-t4-lineheight - 34px
 * @cssproperty --o-typography-t4-letterspacing - 0em

 * @cssproperty --o-typography-c1-fontfamily - var(--default-fontfamily)
 * @cssproperty --o-typography-c1-fontsize - 24px
 * @cssproperty --o-typography-c1-fontweight - 500
 * @cssproperty --o-typography-c1-lineheight - 34px
 * @cssproperty --o-typography-c1-letterspacing - 0.01em

 * @cssproperty --o-typography-c2-fontfamily - var(--default-fontfamily)
 * @cssproperty --o-typography-c2-fontsize - 16px
 * @cssproperty --o-typography-c2-fontweight - 600
 * @cssproperty --o-typography-c2-lineheight - 22px
 * @cssproperty --o-typography-c2-letterspacing - 0.01em

 * @cssproperty --o-typography-c3-fontfamily - var(--default-fontfamily)
 * @cssproperty --o-typography-c3-fontsize - 16px
 * @cssproperty --o-typography-c3-fontweight - 400
 * @cssproperty --o-typography-c3-lineheight - 24px
 * @cssproperty --o-typography-c3-letterspacing - 0.01em

 * @cssproperty --o-typography-c4-fontfamily - var(--default-fontfamily)
 * @cssproperty --o-typography-c4-fontsize - 14px
 * @cssproperty --o-typography-c4-fontweight - 400
 * @cssproperty --o-typography-c4-lineheight - 20px
 * @cssproperty --o-typography-c4-letterspacing - 0.01em
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
