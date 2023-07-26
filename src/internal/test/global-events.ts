import { expect, fixture, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type LibraryBaseElement from '../library-base-element.js';

export function runGlobalEventTests<T extends LibraryBaseElement>(tagName: string) {
  describe(`Global events for ${tagName}`, () => {
    it('should fire o-connected and o-disconnected events', async () => {
      const el = await fixture<T>(`<${tagName}></${tagName}>`);

      const connectedHandler = sinon.spy();
      el.addEventListener('o-connected', connectedHandler);
      await waitUntil(() => connectedHandler.calledOnce);

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      expect(connectedHandler, 'Connected handler was called').to.have.been.calledOnce;

      const disconnectedHandler = sinon.spy();
      el.addEventListener('o-disconnected', disconnectedHandler);
      el.remove();
      await waitUntil(() => disconnectedHandler.calledOnce);

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      expect(disconnectedHandler, 'Disconnected handler was called').to.have.been.calledOnce;
    });
  });
}
