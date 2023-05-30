import { clickOnElement } from '../../internal/test';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type OMenuItem from './menu-item';

describe('<o-menu-item>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<OMenuItem>(html`
      <o-menu>
        <o-menu-item>Item 1</o-menu-item>
        <o-menu-item>Item 2</o-menu-item>
        <o-menu-item>Item 3</o-menu-item>
        <o-divider></o-divider>
        <o-menu-item type="checkbox" checked>Checked</o-menu-item>
        <o-menu-item type="checkbox">Unchecked</o-menu-item>
      </o-menu>
    `);
    await expect(el).to.be.accessible();
  });

  it('should have the correct default properties', async () => {
    const el = await fixture<OMenuItem>(html` <o-menu-item>Test</o-menu-item> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('should render the correct aria attributes when disabled', async () => {
    const el = await fixture<OMenuItem>(html` <o-menu-item disabled>Test</o-menu-item> `);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('should not emit the click event when disabled', async () => {
    const el = await fixture<OMenuItem>(html` <o-menu-item disabled>Test</o-menu-item> `);
    const clickHandler = sinon.spy();
    el.addEventListener('click', clickHandler);
    await clickOnElement(el);
    await el.updateComplete;

    expect(clickHandler).to.not.have.been.called;
  });

  it('should return a text label when calling getTextLabel()', async () => {
    const el = await fixture<OMenuItem>(html` <o-menu-item>Test</o-menu-item> `);
    expect(el.getTextLabel()).to.equal('Test');
  });

  it('should emit the slotchange event when the label changes', async () => {
    const el = await fixture<OMenuItem>(html` <o-menu-item>Text</o-menu-item> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it('should render a hidden menu item when the inert attribute is used', async () => {
    const menu = await fixture<OMenuItem>(html`
      <o-menu>
        <o-menu-item inert>Item 1</o-menu-item>
        <o-menu-item>Item 2</o-menu-item>
        <o-menu-item>Item 3</o-menu-item>
      </o-menu>
    `);
    const item1 = menu.querySelector('o-menu-item')!;

    expect(getComputedStyle(item1).display).to.equal('none');
  });
});
