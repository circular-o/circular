import { addPrefixSuffixToElement, appendIconToElement } from './filter.utilities';
import { DEFAULT_PROPS_TO_IGNORE, type FilterType, type InputFilter } from '../filters.types';
import { FilterAbstractRender } from './filter.abstract.render';
import { html } from 'lit';
import type OFilters from '../filters';
import type OInput from '../../input/input';

export class InputFilterRender extends FilterAbstractRender {
  type: FilterType = 'input';

  render(filtersComponent: OFilters, filter: InputFilter) {
    const el = filtersComponent.createFilterElement('o-input', filter) as OInput;

    el.type = filter.inputType ?? 'text';

    el.clearable = filter.clearable ?? true;
    if (el.clearable && filter.clearIconName) {
      appendIconToElement(el, filter.clearIconName, { slot: 'clear-icon' });
    }

    addPrefixSuffixToElement(el, filter);

    return html`${el}`;
  }

  getValidPropsFromFilterConfig(filter: InputFilter) {
    const keysToIgnore = [
      ...DEFAULT_PROPS_TO_IGNORE,
      'inputType',
      'prefix',
      'suffix',
      'prefixType',
      'suffixType',
      'clearIconName'
    ];
    return this.removeIgnoredKeysFromFilterConfig(keysToIgnore, filter);
  }
}
