type OLoadEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-load': OLoadEvent;
  }
}

export default OLoadEvent;
