import { AbstractTypePlugin, DEFAULT_MANDATORY_PROPS } from './abstract.type.plugin.js';
import { DEFAULT_PROPS_TO_IGNORE, type FilterType, type SwitchFilter } from '../filters.types.js';
import { html } from 'lit';
import type OSwitch from '../../switch/switch.js';

export class SwitchTypePlugin extends AbstractTypePlugin {
  type: FilterType = 'switch';

  render(filter: SwitchFilter) {
    const el = this.filtersComponent.createFilterElement('o-switch', filter) as OSwitch;
    el.innerHTML = filter.label ?? '';

    return html`${el}`;
  }

  getValidPropsFromFilterConfig(filter: SwitchFilter) {
    const keysToIgnore = [...DEFAULT_PROPS_TO_IGNORE, 'label'];
    return this.removeIgnoredKeysFromFilterConfig(keysToIgnore, filter);
  }

  isPropMandatory(prop: string) {
    return [...DEFAULT_MANDATORY_PROPS, 'label'].includes(prop);
  }

  getElementValue(el: OSwitch) {
    return el.checked;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  setElementValue(el: OSwitch, checked: any) {
    el.checked = !!checked;
  }
}
