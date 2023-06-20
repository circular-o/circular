import { customElement, property } from 'lit/decorators.js';
import { DividerFilterRender } from './renders/filter.divider.render';
import { type Filter, type Filters, type RowFilter } from './filters.types';
import { html, nothing } from 'lit';
import { InputFilterRender } from './renders/filter.input.render';
import { RowFilterRender } from './renders/filter.row.render';
import { SelectFilterRender } from './renders/filter.select.render';
import { SwitchFilterRender } from './renders/filter.switch.render';
import { watch } from '../../internal/watch';
import LibraryBaseElement from '../../internal/library-base-element';
import styles from './filters.styles';
import type { CSSResultGroup, TemplateResult } from 'lit';
import type { FilterAbstractRender } from './renders/filter.abstract.render';

/**
 * @summary Component that renders a list of filters based on a JSON configuration.
 * @documentation https://circular-o.github.io/circular/#/components/filters
 * @status experimental
 * @since 1.5
 *
 * @dependency o-input
 * @dependency o-select
 * @dependency o-switch
 * @dependency o-divider
 * @dependency o-card
 * @dependency o-button
 * @dependency o-icon
 *
 * @event o-filter-change - Emitted when an alteration to a filter's value is committed by the user.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('o-filters')
export default class OFilters extends LibraryBaseElement {
  static styles: CSSResultGroup = styles;

  /** Filters configuration in JSON format. */
  @property({
    type: Object,
    converter: {
      fromAttribute: value => {
        try {
          return JSON.parse(value || '{}') as Filters;
        } catch (error) {
          console.warn('Filters configuration:', value);
          console.error('Error parsing filters configuration', error);
          return undefined;
        }
      },
      toAttribute: value => {
        return JSON.stringify(value);
      }
    }
  })
  filters: Filters;

  // All the filters are contained in a row, it means that the root filter is always a row
  private config: RowFilter | undefined;

  // Map of the filter types and its render functions, this is necessary to avoid using eval or calling the function by this[`render${filterType}Filter`]
  // because it is not allowed by the linter for safety reasons
  rendersMap: {
    [filterType: string]: {
      render: (filter: Filter) => typeof nothing | TemplateResult;
      instance: FilterAbstractRender;
    };
  } = {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private data: { [key: string]: any } = {};

  constructor() {
    super();

    // Initializing the default renders map
    // Row filter
    const rowRender = new RowFilterRender();
    this.addRender(rowRender);

    // Input filter
    const inputRender = new InputFilterRender();
    this.addRender(inputRender);

    // Divider filter
    const dividerRender = new DividerFilterRender();
    this.addRender(dividerRender);

    // Select filter
    const selectRender = new SelectFilterRender();
    this.addRender(selectRender);

    // Switch filter
    const switchRender = new SwitchFilterRender();
    this.addRender(switchRender);

    // TODO: Add the rest of the renders
    // Autocomplete filter
  }

  @watch('filters')
  filtersConfigUpdated() {
    this.initConfig();
  }

  addRender(renderInstance: FilterAbstractRender) {
    this.rendersMap[renderInstance.type] = {
      render: (filter: Filter) => renderInstance.render(this, filter),
      instance: renderInstance
    };
  }

  private isFiltersConfigValid(): boolean {
    return (
      this.filters && ((Array.isArray(this.filters) && this.filters.length > 0) || Object.keys(this.filters).length > 0)
    );
  }

  private initConfig() {
    this.config = undefined;

    if (!this.isFiltersConfigValid()) {
      return;
    }

    // Set the root element of the filters which is always a row
    this.config = {
      type: 'row',
      name: 'filters-container',
      part: 'base',
      style: '--padding: var(--base-padding);',
      css: 'base-row',
      items: Array.isArray(this.filters) ? [...this.filters] : [this.filters]
    };
  }

  private getValidPropsFromFilterConfig(filter: Filter) {
    return this.rendersMap[filter.type].instance.getValidPropsFromFilterConfig(filter);
  }

  private isPropMandatory(prop: string, filter: Filter) {
    return this.rendersMap[filter.type].instance.isPropMandatory(prop);
  }

  private checkFilterConfigValidity(filter: Filter) {
    if (!filter.type) {
      console.warn('Filter type is required', filter);
      return false;
    }

    if (!this.rendersMap[filter.type]) {
      console.warn(`Filter type "${filter.type}" is not supported`, filter);
      return false;
    }

    // Exceptions for name property
    if (this.isPropMandatory('name', filter) && !filter.name) {
      console.warn('Filter name is required', filter);
      return false;
    }

    return true;
  }

  private checkCustomElementDefinition(tag: string) {
    if (customElements.get(tag)) {
      return true;
    }

    console.warn(`The web component "${tag}" is not defined, please import it before using it as a filter.
      \nIf you are using the autoloader you could ignore this message.`);
    return false;
  }

  createFilterElement(tag: string, filter: Filter) {
    this.checkCustomElementDefinition(tag);

    const el = this.setPropsToElement(document.createElement(tag) as LibraryBaseElement, filter);

    this.setFilterData(filter, filter.value);

    this.setDefaultFilterEvents(el, filter);

    return el;
  }

  private setPropsToElement(el: LibraryBaseElement, filter: Filter) {
    // Set the name of the filter as a data attribute
    if (this.isPropMandatory('name', filter)) {
      el.setAttribute('data-filter-name', filter.name!);
    }

    // Apply the style to the element
    if (filter.style) {
      el.setAttribute('style', `${filter.style as string}`);
    }

    // Default css classes
    `filter filter-${filter.type}`.split(' ').forEach((cssClass: string) => el.classList.add(cssClass));

    // Apply the css class if it is defined
    if (filter.css) {
      `${filter.css as string}`.split(' ').forEach((cssClass: string) => el.classList.add(cssClass));
    }

    // Apply the rest of the properties
    Object.assign(el, this.getValidPropsFromFilterConfig(filter));

    return el;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFilterData(filter: Filter, value: any, emitEvent = false) {
    if (!filter.name) {
      return;
    }

    this.data[filter.name] = value as object | undefined;

    if (emitEvent) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.emit('o-filter-change', { detail: { filter, value, filtersData: this.getFiltersData() } });
    }
  }

  getFilterData({ name }: Filter) {
    if (!name || !this.data[name]) {
      return undefined;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.data[name];
  }

  getFiltersData() {
    return this.data;
  }

  private setDefaultFilterEvents(el: LibraryBaseElement, filter: Filter) {
    const cancelEvent = (event: CustomEvent) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    };

    const changeHandler = (event: CustomEvent) => {
      cancelEvent(event);

      const renderInstance = this.rendersMap[filter.type].instance;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const value = renderInstance.getElementValue(el);
      this.setFilterData(filter, value, true);
    };

    el.addEventListener('o-connected', connectedEvent => {
      cancelEvent(connectedEvent);

      const detail = {
        ref: connectedEvent.detail.ref,
        className: connectedEvent.detail.className,
        data: { filter }
      };

      el.addEventListener('o-change', changeHandler);

      el.addEventListener('o-disconnected', disconnectedEvent => {
        cancelEvent(disconnectedEvent);

        this.emit('o-disconnected', { detail });

        el.removeEventListener('o-change', changeHandler);
      });

      this.emit('o-connected', { detail });
    });
  }

  renderFilters(filters: Filter[]) {
    return filters.map(filter => {
      if (!this.checkFilterConfigValidity(filter)) {
        return nothing;
      }

      return this.rendersMap[filter.type].render(filter);
    });
  }

  render() {
    if (!this.config) {
      return nothing;
    }

    return html`${this.renderFilters([this.config])}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-filters': OFilters;
  }
}
