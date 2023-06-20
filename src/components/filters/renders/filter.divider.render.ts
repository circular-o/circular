import { type DividerFilter, type FilterType } from '../filters.types';
import { FilterAbstractRender } from './filter.abstract.render';
import { html } from 'lit';
import type OFilters from '../filters';

export class DividerFilterRender extends FilterAbstractRender {
  type: FilterType = 'divider';

  render(filtersComponent: OFilters, filter: DividerFilter) {
    // By default the divider is vertical
    const el = filtersComponent.createFilterElement('o-divider', { ...filter, vertical: filter.vertical ?? true });
    return html`${el}`;
  }

  isPropMandatory(prop: string) {
    // No mandatory props
    return ![prop].includes(prop);
  }
}
