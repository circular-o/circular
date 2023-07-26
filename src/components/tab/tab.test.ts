import '../../../dist/circular.js';
import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type OIconButton from '../icon-button/icon-button.js';
import type OTab from './tab.js';
import type OTabGroup from '../tab-group/tab-group.js';

describe('<o-tab>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<OTab>(html`
      <o-tab-group>
        <o-tab slot="nav">Test</o-tab>
      </o-tab-group>
    `);
    await expect(el).to.be.accessible();
  });

  it('should render default tab', async () => {
    const el = await fixture<OTab>(html` <o-tab>Test</o-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.getAttribute('role')).to.equal('tab');
    expect(el.getAttribute('aria-disabled')).to.equal('false');
    expect(el.getAttribute('aria-selected')).to.equal('false');
    expect(base.getAttribute('tabindex')).to.equal('0');
    expect(base.getAttribute('class')).to.equal(' tab ');
    expect(el.active).to.equal(false);
    expect(el.closable).to.equal(false);
    expect(el.disabled).to.equal(false);
  });

  it('should disable tab by attribute', async () => {
    const el = await fixture<OTab>(html` <o-tab disabled>Test</o-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.disabled).to.equal(true);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
    expect(base.getAttribute('class')).to.equal(' tab tab--disabled ');
    expect(base.getAttribute('tabindex')).to.equal('-1');
  });

  it('should set active tab by attribute', async () => {
    const el = await fixture<OTab>(html` <o-tab active>Test</o-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.active).to.equal(true);
    expect(el.getAttribute('aria-selected')).to.equal('true');
    expect(base.getAttribute('class')).to.equal(' tab tab--active ');
    expect(base.getAttribute('tabindex')).to.equal('0');
  });

  it('should set closable by attribute', async () => {
    const el = await fixture<OTab>(html` <o-tab closable>Test</o-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const closeButton = el.shadowRoot!.querySelector('[part~="close-button"]');

    expect(el.closable).to.equal(true);
    expect(base.getAttribute('class')).to.equal(' tab tab--closable ');
    expect(closeButton).not.to.be.null;
  });

  describe('focus', () => {
    it('should focus inner div', async () => {
      const el = await fixture<OTab>(html` <o-tab>Test</o-tab> `);

      const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

      el.focus();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(base);
    });
  });

  describe('blur', () => {
    it('should blur inner div', async () => {
      const el = await fixture<OTab>(html` <o-tab>Test</o-tab> `);

      el.focus();
      await el.updateComplete;

      el.blur();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(null);
    });
  });

  describe('closable', () => {
    it('should emit close event when the close button is clicked', async () => {
      const tabGroup = await fixture<OTabGroup>(html`
        <o-tab-group>
          <o-tab slot="nav" panel="general" closable>General</o-tab>
          <o-tab slot="nav" panel="custom" closable>Custom</o-tab>
          <o-tab-panel name="general">This is the general tab panel.</o-tab-panel>
          <o-tab-panel name="custom">This is the custom tab panel.</o-tab-panel>
        </o-tab-group>
      `);
      const closeButton = tabGroup
        .querySelectorAll('o-tab')[0]!
        .shadowRoot!.querySelector<OIconButton>('[part~="close-button"]')!;

      const handleClose = sinon.spy();
      const handleTabShow = sinon.spy();

      tabGroup.addEventListener('o-close', handleClose, { once: true });
      // The o-tab-show event shouldn't be emitted when clicking the close button
      tabGroup.addEventListener('o-tab-show', handleTabShow);

      closeButton.click();
      await closeButton?.updateComplete;

      expect(handleClose.called).to.equal(true);
      expect(handleTabShow.called).to.equal(false);
    });
  });
});
