type ORemoveEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-remove': ORemoveEvent;
  }
}

export default ORemoveEvent;
