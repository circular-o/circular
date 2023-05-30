type OTabShowEvent = CustomEvent<{ name: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-tab-show': OTabShowEvent;
  }
}

export default OTabShowEvent;
