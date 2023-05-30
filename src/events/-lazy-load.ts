type OLazyLoadEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-lazy-load': OLazyLoadEvent;
  }
}

export default OLazyLoadEvent;
