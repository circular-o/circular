type OCancelEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-cancel': OCancelEvent;
  }
}

export default OCancelEvent;
