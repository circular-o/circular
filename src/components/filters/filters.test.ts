import '../../../dist/circular.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<o-filters>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <o-filters></o-filters> `);

    expect(el).to.exist;
  });

  // Single filter, one per type
});
