type OCollapseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-collapse': OCollapseEvent;
  }
}

export default OCollapseEvent;
