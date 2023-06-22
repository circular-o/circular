import { customElement, property } from 'lit/decorators.js';
import { DividerFilterRender } from './renders/filter.divider.render';
import { type Filter, type Filters, type RowFilter } from './filters.types';
import { filterValueAdapter } from './renders/filter.utilities';
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
import type { OChangeEvent } from '../../circular';

interface FilterMasterData {
  config: Filter;
  elementRef: LibraryBaseElement | undefined;
}

const DATA_FILTER_NAME_ATTRIBUTE = 'data-filter-name';

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
  private filtersConfigs: RowFilter | undefined;

  // Map of the filter types and its render functions, this is necessary to avoid using eval or calling the function by this[`render${filterType}Filter`]
  // because it is not allowed by the linter for safety reasons
  private rendersMap: {
    [filterType: string]: {
      render: (filter: Filter) => typeof nothing | TemplateResult;
      instance: FilterAbstractRender;
    };
  } = {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private filtersData: { [key: string]: any } = {};

  private filtersMasterMap: { [key: string]: FilterMasterData } = {};

  private currentFilterFocus: string | undefined;

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
    this.filtersConfigs = undefined;

    if (!this.isFiltersConfigValid()) {
      return;
    }

    // Set the root element of the filters which is always a row
    this.filtersConfigs = {
      type: 'row',
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

  private setPropsToElement(el: LibraryBaseElement, filter: Filter) {
    // Set the name of the filter as a data attribute
    if (filter.name) {
      el.setAttribute(DATA_FILTER_NAME_ATTRIBUTE, filter.name);
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

  /** Loop over all the filters and internal items (RowFilter) and return an object with the filter name as a key and the filter config as the value */
  private getFiltersConfigGroupByName(filters: Filter[]) {
    const filtersConfig: { [key: string]: Filter } = {};

    const getFiltersConfig = (filtersConfigs: Filter[]) => {
      for (const filter of filtersConfigs) {
        if (filter.name) {
          filtersConfig[filter.name] = filter;
        }

        if (filter.items) {
          getFiltersConfig((filter as RowFilter).items);
        }
      }
    };

    getFiltersConfig(filters);

    return filtersConfig;
  }

  private setDefaultFilterEvents(el: LibraryBaseElement, filter: Filter) {
    const cancelEvent = (event: CustomEvent) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    };

    const changeHandler = (event: OChangeEvent) => {
      cancelEvent(event);

      const renderInstance = this.rendersMap[filter.type].instance;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const value = renderInstance.getElementValue(el);
      this.setFilterDataByFilterConfig(filter, value, { emitEvent: true });
    };

    // event: OFocusEvent
    const focusHandler = () => {
      this.setCurrentFilterFocus(filter.name!);
    };

    el.addEventListener('o-connected', connectedEvent => {
      // Check if the event is coming from the filter control by using the DATA_FILTER_NAME_ATTRIBUTE
      const eventEl = connectedEvent.detail.ref;
      if (filter.name && eventEl.getAttribute(DATA_FILTER_NAME_ATTRIBUTE) !== filter.name) {
        return;
      }

      cancelEvent(connectedEvent);

      const detail = {
        ref: connectedEvent.detail.ref,
        className: connectedEvent.detail.className,
        data: { filter }
      };

      this.updateFilterMasterMap(filter.name!, { elementRef: connectedEvent.detail.ref });
      this.focusFilterControlAfterConnectedEvent(filter.name!);

      el.addEventListener('o-change', changeHandler);
      el.addEventListener('o-focus', focusHandler);

      el.addEventListener('o-disconnected', disconnectedEvent => {
        cancelEvent(disconnectedEvent);

        this.emit('o-disconnected', { detail });

        el.removeEventListener('o-change', changeHandler);
      });

      this.emit('o-connected', { detail });
    });
  }

  private setFiltersMasterMap(filters: Filter[]) {
    const filtersByName = this.getFiltersConfigGroupByName(filters);
    // Get the current filters names
    const currentFiltersNames = Object.keys(filtersByName);

    // Set the filters master data
    this.filtersMasterMap = {};
    currentFiltersNames.forEach(name => {
      this.filtersMasterMap[name] = { config: filtersByName[name], elementRef: undefined };
    });

    // remove the ones that are not in the master map from the data
    Object.keys(this.filtersData).forEach(dataKey => {
      if (!currentFiltersNames.includes(dataKey)) {
        delete this.filtersData[dataKey];
      }
    });
  }

  private updateFilterMasterMap(name: string, filterMasterData: Partial<FilterMasterData>) {
    if (!name || !filterMasterData || !this.filtersMasterMap[name]) {
      return;
    }

    this.filtersMasterMap[name] = { ...this.filtersMasterMap[name], ...filterMasterData };
  }

  /** Focus a filter control, it is useful when the filters config is updated and a filter control was already focused, so, it keeps the focus */
  private focusFilterControlAfterConnectedEvent(filterName: string) {
    if (!filterName || !this.getCurrentFilterFocus()) {
      return;
    }

    const name = this.getCurrentFilterFocus()!;
    const isSameFilter = name === filterName;
    const isElementRefDefined = !!this.filtersMasterMap[name].elementRef;

    if (isSameFilter && isElementRefDefined) {
      this.filtersMasterMap[name].elementRef?.focus();
    }
  }

  private getFilterMasterData(name: string) {
    if (!name || !this.filtersMasterMap[name]) {
      console.warn(`Filter with name "${name}" is not defined`);
      return undefined;
    }

    return this.filtersMasterMap[name];
  }

  /** Filters API, methods that can be called from outside */

  createFilterElement(tag: string, filter: Filter) {
    this.checkCustomElementDefinition(tag);

    const el = this.setPropsToElement(document.createElement(tag) as LibraryBaseElement, filter);

    const existsDataValue = filter.name && !!this.filtersData[filter.name];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const filterValue = existsDataValue ? this.filtersData[filter.name!] : filter.value;
    this.setFilterDataByFilterConfig(filter, filterValue);

    if (filterValue) {
      const renderInstance = this.rendersMap[filter.type].instance;
      renderInstance.setElementValue(el, filterValue);
    }

    this.setDefaultFilterEvents(el, filter);

    return el;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFilterData(name: string, value: any, { emitEvent }: { emitEvent: boolean } = { emitEvent: false }) {
    const filter = this.getFilterConfigByName(name);
    if (!filter) {
      return;
    }

    this.setFilterDataByFilterConfig(filter, value, { emitEvent });
  }

  setFilterDataByFilterConfig(
    filter: Filter,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
    { emitEvent }: { emitEvent: boolean } = { emitEvent: false }
  ) {
    if (!filter.name) {
      return;
    }

    const filterValue = filterValueAdapter(value, filter);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.filtersData[filter.name] = filterValue;

    if (emitEvent) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.emit('o-filter-change', { detail: { filter, value: filterValue, filtersData: this.getFiltersData() } });
    }
  }

  getFilterData({ name }: Filter) {
    if (!name || !this.filtersData[name]) {
      return undefined;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.filtersData[name];
  }

  getFiltersData() {
    return this.filtersData;
  }

  getCurrentFilterFocus() {
    if (this.currentFilterFocus && !this.filtersMasterMap[this.currentFilterFocus]) {
      this.currentFilterFocus = undefined;
    }

    return this.currentFilterFocus;
  }

  setCurrentFilterFocus(name: string) {
    if (!name) {
      return;
    }

    if (!this.filtersMasterMap[name]) {
      this.currentFilterFocus = undefined;
      return;
    }

    this.currentFilterFocus = name;
  }

  showFilter(name: string, show = true) {
    if (!name || !this.filtersMasterMap[name]) {
      return;
    }

    if (!show) {
      this.hideFilter(name);
      return;
    }

    const el = this.filtersMasterMap[name].elementRef;
    if (!el) {
      return;
    }

    el.hidden = false;
  }

  hideFilter(name: string) {
    if (!name || !this.filtersMasterMap[name]) {
      return;
    }

    const el = this.filtersMasterMap[name].elementRef;
    if (!el) {
      return;
    }

    el.hidden = true;

    const filterConfig = this.getFilterConfigByName(name);
    const renderInstance = this.rendersMap[filterConfig!.type].instance;
    renderInstance.setElementValue(el, '');
    this.setFilterDataByFilterConfig(filterConfig!, '', { emitEvent: true });
  }

  getFilterConfigByName(name: string) {
    return this.getFilterMasterData(name)?.config;
  }

  getFilterControlByName(name: string) {
    return this.getFilterMasterData(name)?.elementRef;
  }

  /**
   * ========================================================
   * End of Filters API
   * ========================================================
   */

  renderFilters(filters: Filter[]) {
    return filters.map(filter => {
      if (!this.checkFilterConfigValidity(filter)) {
        return nothing;
      }

      return this.rendersMap[filter.type].render(filter);
    });
  }

  render() {
    if (!this.filtersConfigs) {
      return nothing;
    }

    // Rendering all the filters
    const result = html`${this.renderFilters([this.filtersConfigs])}`;

    // After rendering all the filters, get the filters by name, only the ones that have a name
    this.setFiltersMasterMap(this.filtersConfigs.items);

    return result;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-filters': OFilters;
  }
}
