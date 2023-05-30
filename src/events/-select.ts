import type OMenuItem from '../components/menu-item/menu-item';

type OSelectEvent = CustomEvent<{ item: OMenuItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-select': OSelectEvent;
  }
}

export default OSelectEvent;
