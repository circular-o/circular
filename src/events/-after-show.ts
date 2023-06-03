type OAfterShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-after-show': OAfterShowEvent;
  }
}

export default OAfterShowEvent;
