import { DEFAULT_PROPS_TO_IGNORE, type Filter, type FilterType } from '../filters.types';
import type { nothing, TemplateResult } from 'lit';
import type { OChangeEvent, OConnectedEvent, ODisconnectedEvent, OFocusEvent } from '../../../circular';
import type LibraryBaseElement from '../../../internal/library-base-element';
import type OFilters from '../filters';

export const DEFAULT_MANDATORY_PROPS = ['name', 'type'];

export abstract class AbstractTypePlugin {
  abstract type: FilterType;
  abstract render(filter: Filter): typeof nothing | TemplateResult<1 | 2> | LibraryBaseElement | HTMLElement;

  protected filtersComponent: OFilters;

  constructor(filtersComponent: OFilters) {
    this.filtersComponent = filtersComponent;
  }

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
    return DEFAULT_MANDATORY_PROPS.includes(prop);
  }

  getElementValue(el: LibraryBaseElement) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    return (el as any).value;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  setElementValue(el: LibraryBaseElement, value: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    (el as any).value = value ?? '';
  }

  addConnectedListener(el: LibraryBaseElement | HTMLElement, listener: (connectedEvent: OConnectedEvent) => void) {
    el.addEventListener('o-connected', (connectedEvent: OConnectedEvent) => listener(connectedEvent));
  }

  addDisconnectedListener(
    el: LibraryBaseElement | HTMLElement,
    listener: (disconnectedEvent: ODisconnectedEvent) => void
  ) {
    el.addEventListener('o-disconnected', (disconnectedEvent: ODisconnectedEvent) => listener(disconnectedEvent));
  }

  addChangeListener(el: LibraryBaseElement | HTMLElement, listener: (changeEvent: OChangeEvent) => void) {
    el.addEventListener('o-change', (changeEvent: OChangeEvent) => listener(changeEvent));
  }

  addFocusListener(el: LibraryBaseElement | HTMLElement, listener: (focusEvent: OFocusEvent) => void) {
    el.addEventListener('o-focus', (focusEvent: OFocusEvent) => listener(focusEvent));
  }

  removeEventListener(el: LibraryBaseElement | HTMLElement, eventName: string, listener: (event: Event) => void) {
    el.removeEventListener(eventName, listener);
  }
}
