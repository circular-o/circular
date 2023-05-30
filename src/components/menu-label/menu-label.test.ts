import { expect, fixture, html } from '@open-wc/testing';
import type OMenuLabel from './menu-label';

describe('<o-menu-label>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<OMenuLabel>(html` <o-menu-label>Test</o-menu-label> `);
    await expect(el).to.be.accessible();
  });
});
