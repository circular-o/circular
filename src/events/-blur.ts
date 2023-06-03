type OBlurEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-blur': OBlurEvent;
  }
}

export default OBlurEvent;
