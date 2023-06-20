import type { Filter } from '../components/filters/filters.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OFilterChangeEvent = CustomEvent<{ filter: Filter; value: any; filtersData: { [key: string]: any } }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-filter-change': OFilterChangeEvent;
  }
}

export default OFilterChangeEvent;
