import type LibraryBaseElement from '../internal/library-base-element';

type OConnectedEvent = CustomEvent<{ ref: LibraryBaseElement; className: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-connected': OConnectedEvent;
  }
}

export default OConnectedEvent;
