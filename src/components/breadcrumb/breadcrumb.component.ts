import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query } from 'lit/decorators.js';
import LibraryBaseElement from '../../internal/library-base-element.js';
import OIcon from '../icon/icon.component.js';
import styles from './breadcrumb.styles.js';
import type { CSSResultGroup } from 'lit';
import type OBreadcrumbItem from '../breadcrumb-item/breadcrumb-item.js';

/**
 * @summary Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
 * @documentation /components/breadcrumb
 * @status stable
 * @since 1.5
 *
 * @slot - One or more breadcrumb items to display.
 * @slot separator - The separator to use between breadcrumb items. Works best with `<o-icon>`.
 *
 * @dependency o-icon
 *
 * @csspart base - The component's base wrapper.
 */
export default class OBreadcrumb extends LibraryBaseElement {
  static styles: CSSResultGroup = styles;
  static dependencies = { 'o-icon': OIcon };

  private readonly localize = new LocalizeController(this);
  private separatorDir = this.localize.dir();

  @query('slot') defaultSlot: HTMLSlotElement;
  @query('slot[name="separator"]') separatorSlot: HTMLSlotElement;

  /**
   * The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
   * screen readers and other assistive devices to provide more context for users.
   */
  @property() label = '';

  // Generates a clone of the separator element to use for each breadcrumb item
  private getSeparator() {
    const separator = this.separatorSlot.assignedElements({ flatten: true })[0] as HTMLElement;

    // Clone it, remove ids, and slot it
    const clone = separator.cloneNode(true) as HTMLElement;
    [clone, ...clone.querySelectorAll('[id]')].forEach(el => el.removeAttribute('id'));
    clone.setAttribute('data-default', '');
    clone.slot = 'separator';

    return clone;
  }

  private handleSlotChange() {
    const items = [...this.defaultSlot.assignedElements({ flatten: true })].filter(
      item => item.tagName.toLowerCase() === 'o-breadcrumb-item'
    ) as OBreadcrumbItem[];

    items.forEach((item, index) => {
      // Append separators to each item if they don't already have one
      const separator = item.querySelector('[slot="separator"]');
      if (separator === null) {
        // No separator exists, add one
        item.append(this.getSeparator());
      } else if (separator.hasAttribute('data-default')) {
        // A default separator exists, replace it
        separator.replaceWith(this.getSeparator());
      } else {
        // The user provided a custom separator, leave it alone
      }

      // The last breadcrumb item is the "current page"
      if (index === items.length - 1) {
        item.setAttribute('aria-current', 'page');
      } else {
        item.removeAttribute('aria-current');
      }
    });
  }

  render() {
    // We clone the separator and inject them into breadcrumb items, so we need to regenerate the default ones when
    // directionality changes. We do this by storing the current separator direction, waiting for render, then calling
    // the function that regenerates them.
    if (this.separatorDir !== this.localize.dir()) {
      this.separatorDir = this.localize.dir();
      this.updateComplete.then(() => this.handleSlotChange());
    }

    return html`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <o-icon name=${this.localize.dir() === 'rtl' ? 'chevron-left' : 'chevron-right'} library="system"></o-icon>
        </slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-breadcrumb': OBreadcrumb;
  }
}
