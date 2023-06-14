type ODisconnectedEvent = CustomEvent;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-disconnected': ODisconnectedEvent;
  }
}

export default ODisconnectedEvent;
