type OFocusEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-focus': OFocusEvent;
  }
}

export default OFocusEvent;
