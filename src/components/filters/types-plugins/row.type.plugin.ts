import { AbstractTypePlugin } from './abstract.type.plugin.js';
import { DEFAULT_PROPS_TO_IGNORE, type FilterType, type RowFilter } from '../filters.types.js';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

export class RowTypePlugin extends AbstractTypePlugin {
  type: FilterType = 'row';

  render(filter: RowFilter) {
    if (!filter.items || filter.items.length === 0) {
      return nothing;
    }

    const css = `filter filter-row ${(filter.css as string) ?? ''}`;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    const validProps: any = this.getValidPropsFromFilterConfig(filter);

    const parts = `${(filter.part as string) ?? ''} ${(filter.css as string) ?? ''}`?.split(' ') ?? [];
    parts.push('filter');
    parts.push(filter.type);

    return html`
      <div part=${parts.join(' ')} style=${ifDefined(filter.style as string)} class=${css} ${{ ...validProps }}>
        ${this.filtersComponent.renderFilters(filter.items)}
      </div>
    `;
  }

  getValidPropsFromFilterConfig(filter: RowFilter) {
    return this.removeIgnoredKeysFromFilterConfig([...DEFAULT_PROPS_TO_IGNORE, 'items'], filter);
  }

  isPropMandatory(prop: string) {
    return ['type', 'items'].includes(prop);
  }
}
