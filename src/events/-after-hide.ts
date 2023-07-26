type OAfterHideEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-after-hide': OAfterHideEvent;
  }
}

export default OAfterHideEvent;
