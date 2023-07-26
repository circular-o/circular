type OFinishEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-finish': OFinishEvent;
  }
}

export default OFinishEvent;
