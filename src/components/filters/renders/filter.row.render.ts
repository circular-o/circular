import { DEFAULT_PROPS_TO_IGNORE, type FilterType, type RowFilter } from '../filters.types';
import { FilterAbstractRender } from './filter.abstract.render';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type OFilters from '../filters';

export class RowFilterRender extends FilterAbstractRender {
  type: FilterType = 'row';

  render(filtersComponent: OFilters, filter: RowFilter) {
    if (!filter.items || filter.items.length === 0) {
      return nothing;
    }

    const css = `filter filter-row ${(filter.css as string) ?? ''}`;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    const validProps: any = this.getValidPropsFromFilterConfig(filter);

    return html`
      <o-card
        part=${(filter.part as string) || 'row'}
        style=${ifDefined(filter.style as string)}
        class=${css}
        ${{ ...validProps }}
      >
        ${filtersComponent.renderFilters(filter.items)}
      </o-card>
    `;
  }

  getValidPropsFromFilterConfig(filter: RowFilter) {
    const keysToIgnore = [...DEFAULT_PROPS_TO_IGNORE];
    keysToIgnore.push('items');

    return this.removeIgnoredKeysFromFilterConfig(keysToIgnore, filter);
  }

  isPropMandatory(prop: string) {
    // items are mandatory
    return !['name', 'items'].includes(prop);
  }
}
