type OClearEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-clear': OClearEvent;
  }
}

export default OClearEvent;
