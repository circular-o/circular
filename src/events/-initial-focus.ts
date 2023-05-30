type OInitialFocusEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-initial-focus': OInitialFocusEvent;
  }
}

export default OInitialFocusEvent;
