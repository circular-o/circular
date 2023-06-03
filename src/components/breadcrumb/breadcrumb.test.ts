import { expect, fixture, html } from '@open-wc/testing';
import type OBreadcrumb from './breadcrumb';

// The default link color just misses AA contrast, but the next step up is way too dark. Maybe we can solve this in the
// future with a prefers-contrast media query.
const ignoredRules = ['color-contrast'];

describe('<o-breadcrumb>', () => {
  let el: OBreadcrumb;

  describe('when provided a standard list of el-breadcrumb-item children and no parameters', () => {
    before(async () => {
      el = await fixture<OBreadcrumb>(html`
        <o-breadcrumb>
          <o-breadcrumb-item>Catalog</o-breadcrumb-item>
          <o-breadcrumb-item>Clothing</o-breadcrumb-item>
          <o-breadcrumb-item>Women's</o-breadcrumb-item>
          <o-breadcrumb-item>Shirts &amp; Tops</o-breadcrumb-item>
        </o-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it('should render o-icon as separator', () => {
      expect(el.querySelectorAll('o-icon').length).to.eq(4);
    });

    it('should attach aria-current "page" on the last breadcrumb item.', () => {
      const breadcrumbItems = el.querySelectorAll('o-breadcrumb-item');
      const lastNode = breadcrumbItems[3];
      expect(lastNode).attribute('aria-current', 'page');
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "separator" to support Custom Separators', () => {
    before(async () => {
      el = await fixture<OBreadcrumb>(html`
        <o-breadcrumb>
          <span class="replacement-separator" slot="separator">/</span>
          <o-breadcrumb-item>First</o-breadcrumb-item>
          <o-breadcrumb-item>Second</o-breadcrumb-item>
          <o-breadcrumb-item>Third</o-breadcrumb-item>
        </o-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it('should accept "separator" as an assigned child in the shadow root', () => {
      const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name=separator]')!;
      const childNodes = slot.assignedNodes({ flatten: true });

      expect(childNodes.length).to.eq(1);
    });

    it('should replace the o-icon separator with the provided separator', () => {
      expect(el.querySelectorAll('.replacement-separator').length).to.eq(4);
      expect(el.querySelectorAll('o-icon').length).to.eq(0);
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "prefix" to support prefix icons', () => {
    before(async () => {
      el = await fixture<OBreadcrumb>(html`
        <o-breadcrumb>
          <o-breadcrumb-item>
            <span class="prefix-example" slot="prefix">/</span>
            Home
          </o-breadcrumb-item>
          <o-breadcrumb-item>First</o-breadcrumb-item>
          <o-breadcrumb-item>Second</o-breadcrumb-item>
          <o-breadcrumb-item>Third</o-breadcrumb-item>
        </o-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "suffix" to support suffix icons', () => {
    before(async () => {
      el = await fixture<OBreadcrumb>(html`
        <o-breadcrumb>
          <o-breadcrumb-item>First</o-breadcrumb-item>
          <o-breadcrumb-item>Second</o-breadcrumb-item>
          <o-breadcrumb-item>Third</o-breadcrumb-item>
          <o-breadcrumb-item>
            <span class="prefix-example" slot="suffix">/</span>
            Security
          </o-breadcrumb-item>
        </o-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });
});
