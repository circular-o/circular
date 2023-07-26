type OMutationEvent = CustomEvent<{ mutationList: MutationRecord[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-mutation': OMutationEvent;
  }
}

export default OMutationEvent;
