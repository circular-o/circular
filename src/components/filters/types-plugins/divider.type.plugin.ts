import { AbstractTypePlugin } from './abstract.type.plugin.js';
import { type DividerFilter, type FilterType } from '../filters.types.js';
import { html } from 'lit';

export class DividerTypePlugin extends AbstractTypePlugin {
  type: FilterType = 'divider';

  render(filter: DividerFilter) {
    // By default the divider is vertical
    const el = this.filtersComponent.createFilterElement('o-divider', { ...filter, vertical: filter.vertical ?? true });
    return html`${el}`;
  }

  isPropMandatory(prop: string) {
    // No mandatory props, returns always false
    return ![prop].includes(prop);
  }
}
