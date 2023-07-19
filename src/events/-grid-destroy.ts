type OGridDestroyEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-grid-destroy': OGridDestroyEvent;
  }
}

export default OGridDestroyEvent;
