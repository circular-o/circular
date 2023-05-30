import { expect, fixture, html } from '@open-wc/testing';

describe('<o-mutation-observer>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <o-mutation-observer></o-mutation-observer> `);

    expect(el).to.exist;
  });
});
