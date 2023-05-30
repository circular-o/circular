type OLazyChangeEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-lazy-change': OLazyChangeEvent;
  }
}

export default OLazyChangeEvent;
