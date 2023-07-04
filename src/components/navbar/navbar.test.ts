import { expect, fixture, html } from '@open-wc/testing';

describe('<o-navbar>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <o-navbar></o-navbar> `);

    expect(el).to.exist;
  });
});
