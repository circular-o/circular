import { DEFAULT_PROPS_TO_IGNORE, type Filter, type FilterType } from '../filters.types';
import type { nothing, TemplateResult } from 'lit';
import type OFilters from '../filters';

export abstract class FilterAbstractRender {
  abstract type: FilterType;
  abstract render(filtersComponent: OFilters, filter: Filter): typeof nothing | TemplateResult<1 | 2>;

  protected removeIgnoredKeysFromFilterConfig(keysToIgnore: string[], filter: Filter) {
    const props: { [key: string]: unknown } = {};

    Object.keys(filter)
      .filter(prop => !keysToIgnore.includes(prop))
      .forEach(prop => {
        props[prop] = filter[prop as keyof Filter];
      });

    return props;
  }

  getValidPropsFromFilterConfig(filter: Filter) {
    return this.removeIgnoredKeysFromFilterConfig([...DEFAULT_PROPS_TO_IGNORE], filter);
  }

  isPropMandatory(prop: string) {
    // name is mandatory for all filters
    return !['name', 'type'].includes(prop);
  }
}
