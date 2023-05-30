type OHideEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-hide': OHideEvent;
  }
}

export default OHideEvent;
