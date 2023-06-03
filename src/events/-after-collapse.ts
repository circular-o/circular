type OAfterCollapseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-after-collapse': OAfterCollapseEvent;
  }
}

export default OAfterCollapseEvent;
