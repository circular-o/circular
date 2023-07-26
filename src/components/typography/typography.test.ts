import '../../../dist/circular.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<o-typography>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <o-typography></o-typography> `);

    expect(el).to.exist;
  });
});
