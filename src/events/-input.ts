type OInputEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-input': OInputEvent;
  }
}

export default OInputEvent;
