import type { Grid, GridOptions } from '../components/grid/grid-types';

type OGridInitEvent = CustomEvent<{ grid: Grid; options: GridOptions }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-grid-init': OGridInitEvent;
  }
}

export default OGridInitEvent;
