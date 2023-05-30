import { expect, fixture, html } from '@open-wc/testing';

describe('<o-popup>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <o-popup></o-popup> `);

    expect(el).to.exist;
  });
});
