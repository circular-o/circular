type ORequestCloseEvent = CustomEvent<{ source: 'close-button' | 'keyboard' | 'overlay' }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-request-close': ORequestCloseEvent;
  }
}

export default ORequestCloseEvent;
