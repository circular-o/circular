import '../../../dist/circular.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<o-navbar-item>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <o-navbar-item></o-navbar-item> `);

    expect(el).to.exist;
  });
});
