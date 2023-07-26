type ORepositionEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-reposition': ORepositionEvent;
  }
}

export default ORepositionEvent;
