type OExpandEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-expand': OExpandEvent;
  }
}

export default OExpandEvent;
