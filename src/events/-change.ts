type OChangeEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-change': OChangeEvent;
  }
}

export default OChangeEvent;
