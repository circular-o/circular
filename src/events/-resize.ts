type OResizeEvent = CustomEvent<{ entries: ResizeObserverEntry[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-resize': OResizeEvent;
  }
}

export default OResizeEvent;
