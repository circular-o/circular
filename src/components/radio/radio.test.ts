import { expect, fixture, html } from '@open-wc/testing';
import type ORadio from './radio';
import type ORadioGroup from '../radio-group/radio-group';

describe('<o-radio>', () => {
  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<ORadioGroup>(html`
      <o-radio-group value="1">
        <o-radio id="radio-1" value="1"></o-radio>
        <o-radio id="radio-2" value="2" disabled></o-radio>
      </o-radio-group>
    `);
    const radio1 = radioGroup.querySelector<ORadio>('#radio-1')!;
    const radio2 = radioGroup.querySelector<ORadio>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });
});
