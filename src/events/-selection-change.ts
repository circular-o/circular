import type OTreeItem from '../components/tree-item/tree-item';

type OSelectionChangeEvent = CustomEvent<{ selection: OTreeItem[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-selection-change': OSelectionChangeEvent;
  }
}

export default OSelectionChangeEvent;
