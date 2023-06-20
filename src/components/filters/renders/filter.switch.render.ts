import { DEFAULT_MANDATORY_PROPS, FilterAbstractRender } from './filter.abstract.render';
import { DEFAULT_PROPS_TO_IGNORE, type FilterType, type SwitchFilter } from '../filters.types';
import { html } from 'lit';
import type OFilters from '../filters';
import type OSwitch from '../../switch/switch';

export class SwitchFilterRender extends FilterAbstractRender {
  type: FilterType = 'switch';

  render(filtersComponent: OFilters, filter: SwitchFilter) {
    const el = filtersComponent.createFilterElement('o-switch', filter) as OSwitch;
    el.innerHTML = filter.label ?? '';

    return html`${el}`;
  }

  getValidPropsFromFilterConfig(filter: SwitchFilter) {
    const keysToIgnore = [...DEFAULT_PROPS_TO_IGNORE, 'label'];
    return this.removeIgnoredKeysFromFilterConfig(keysToIgnore, filter);
  }

  isPropMandatory(prop: string) {
    // name is mandatory for all filters
    return ![...DEFAULT_MANDATORY_PROPS, 'label'].includes(prop);
  }

  getElementValue(el: OSwitch) {
    return el.checked;
  }
}
