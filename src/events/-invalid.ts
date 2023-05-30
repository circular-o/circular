type OInvalidEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-invalid': OInvalidEvent;
  }
}

export default OInvalidEvent;
