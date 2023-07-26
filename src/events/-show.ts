type OShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-show': OShowEvent;
  }
}

export default OShowEvent;
