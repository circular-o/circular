type OCloseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-close': OCloseEvent;
  }
}

export default OCloseEvent;
