type OHoverEvent = CustomEvent<{
  phase: 'start' | 'move' | 'end';
  value: number;
}>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-hover': OHoverEvent;
  }
}

export default OHoverEvent;
