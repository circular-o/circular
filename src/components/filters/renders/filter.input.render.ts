import { DEFAULT_PROPS_TO_IGNORE, type FilterType, type InputFilter } from '../filters.types';
import { FilterAbstractRender } from './filter.abstract.render';
import { html } from 'lit';
import type OFilters from '../filters';
import type OIcon from '../../icon/icon';
import type OInput from '../../input/input';

export class InputFilterRender extends FilterAbstractRender {
  type: FilterType = 'input';

  render(filtersComponent: OFilters, filter: InputFilter) {
    const el = filtersComponent.createFilterElement('o-input', filter) as OInput;
    el.type = filter.inputType ?? 'text';
    el.clearable = filter.clearable ?? true;

    ['prefix', 'suffix'].forEach((slot: string) => {
      if (!filter[slot]) {
        return;
      }

      const content = filter[slot] as string;

      const elType = filter[`${slot}Type`] || 'icon';
      const elTag = elType === 'icon' ? 'o-icon' : 'span';
      const iconEl = Object.assign(document.createElement(elTag), { slot });

      if (elType === 'icon') {
        (iconEl as OIcon).name = content;
      } else {
        iconEl.textContent = content;
      }

      el.appendChild(iconEl);
    });

    return html`${el}`;
  }

  getValidPropsFromFilterConfig(filter: InputFilter) {
    const keysToIgnore = [...DEFAULT_PROPS_TO_IGNORE];
    keysToIgnore.push('inputType');
    keysToIgnore.push('prefix');
    keysToIgnore.push('suffix');
    keysToIgnore.push('prefixType');
    keysToIgnore.push('suffixType');

    return this.removeIgnoredKeysFromFilterConfig(keysToIgnore, filter);
  }
}
