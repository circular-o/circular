import { DEFAULT_PROPS_TO_IGNORE, type DividerFilter, type FilterType } from '../filters.types';
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

  getValidPropsFromFilterConfig(filter: DividerFilter) {
    const keysToIgnore = [...DEFAULT_PROPS_TO_IGNORE];
    return this.removeIgnoredKeysFromFilterConfig(keysToIgnore, filter);
  }

  isPropMandatory(prop: string) {
    // No mandatory props
    return ![prop].includes(prop);
  }
}
