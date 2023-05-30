type OTabHideEvent = CustomEvent<{ name: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-tab-hide': OTabHideEvent;
  }
}

export default OTabHideEvent;
