type OAfterExpandEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-after-expand': OAfterExpandEvent;
  }
}

export default OAfterExpandEvent;
