type OErrorEvent = CustomEvent<{ status?: number }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-error': OErrorEvent;
  }
}

export default OErrorEvent;
