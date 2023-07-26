type OStartEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-start': OStartEvent;
  }
}

export default OStartEvent;
