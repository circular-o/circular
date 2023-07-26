import { AbstractTypePlugin } from './abstract.type.plugin.js';
import { addPrefixSuffixToElement, appendIconToElement } from '../utilities.type.plugin.js';
import { DEFAULT_PROPS_TO_IGNORE, type FilterType, type InputFilter } from '../filters.types.js';
import type OInput from '../../input/input.js';

export class InputTypePlugin extends AbstractTypePlugin {
  type: FilterType = 'input';

  render(filter: InputFilter) {
    const el = this.filtersComponent.createFilterElement('o-input', filter) as OInput;

    el.type = filter.inputType ?? 'text';

    el.clearable = filter.clearable ?? true;
    if (el.clearable && filter.clearIconName) {
      appendIconToElement(el, filter.clearIconName, { slot: 'clear-icon' });
    }

    addPrefixSuffixToElement(el, filter);

    return el;
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

  getElementValue(el: OInput) {
    if (el.type === 'number') {
      return el.valueAsNumber;
    }

    return el.value;
  }
}
