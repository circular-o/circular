import { cancelEvent, convertFiltersToObject, filterValueAdapter } from './utilities.type.plugin.js';
import { DividerTypePlugin } from './types-plugins/divider.type.plugin.js';
import { type Filter, type Filters, type RowFilter } from './filters.types.js';
import { getBasePath } from '../../utilities/base-path.js';
import { html, nothing } from 'lit';
import { InputTypePlugin } from './types-plugins/input.type.plugin.js';
import { property } from 'lit/decorators.js';
import { RowTypePlugin } from './types-plugins/row.type.plugin.js';
import { SelectTypePlugin } from './types-plugins/select.type.plugin.js';
import { SwitchTypePlugin } from './types-plugins/switch.type.plugin.js';
import { watch } from '../../internal/watch.js';
import LibraryBaseElement from '../../internal/library-base-element.js';
import OButton from '../button/button.component.js';
import ODivider from '../divider/divider.component.js';
import OIcon from '../icon/icon.component.js';
import OInput from '../input/input.component.js';
import OOption from '../option/option.component.js';
import OSelect from '../select/select.component.js';
import OSwitch from '../switch/switch.component.js';
import styles from './filters.styles.js';
import type { AbstractTypePlugin } from './types-plugins/abstract.type.plugin.js';
import type { CSSResultGroup, TemplateResult } from 'lit';
import type OChangeEvent from '../../events/-change.js';

interface FilterMasterData {
  config: Filter;
  elementRef: LibraryBaseElement | undefined;
}

const DATA_FILTER_NAME_ATTRIBUTE = 'data-filter-name';

/**
 * @summary A component that renders a list of filters based on a JSON configuration.
 * @documentation /components/filters
 * @status beta
 * @since 1.6
 *
 * @dependency o-input
 * @dependency o-select
 * @dependency o-switch
 * @dependency o-divider
 * @dependency o-button
 * @dependency o-icon
 *
 * @event {{ filter: Filter; value: any; filtersData: { [filterName: string]: any } }} o-filter-change - Emitted when an alteration to a filter's value is committed by the user.
 *
 * @slot clear-all - Clear all button's slot.
 * @slot clear-all-label - Clear all button label's slot.
 *
 * @csspart base - The component's base wrapper.
 * @csspart row - Each row filter's container.
 *
 * @cssproperty [--base-padding=var(--o-spacing-small, 0.75rem)] - CSS custom property to change the filters component container's padding.
 * @cssproperty [--base-min-width=fit-content] - CSS custom property to set the filters component container's (base row) minimum width.
 * @cssproperty [--base-border-width=1px] - CSS custom property to set the filters component container's border width.
 * @cssproperty [--base-background-color=var(--o-panel-background-color)] - CSS custom property to set the filters component container's background color.
 * @cssproperty [--base-border-color=var(--o-color-neutral-200)] - CSS custom property to set the filters component container's border color.
 * @cssproperty [--base-border-radius=var(--o-border-radius-medium)] - CSS custom property to set the filters component container's border radius.
 * @cssproperty [--filter-default-width=240px] - Sets the default width of each filter (except row, divider and input date).
 * @cssproperty [--filter-row-width=100%] - CSS custom property to set the filters row component's width.
 * @cssproperty [--filter-input-date-width=190px] - Sets the width of filter input type date.
 * @cssproperty [--filter-divider-width=100%] - Sets the width of each horizontal divider filter.
 * @cssproperty [--filter-divider-height=var(--o-input-height-medium, 2.5rem)] - Sets the height of each vertical divider filter.
 * @cssproperty [--filter-row-padding=0] - Sets the padding of each row filter.
 * @cssproperty [--filter-row-border=0] - CSS custom property to set the border of each row filter.
 * @cssproperty [--clear-all-label-padding=0 0.1rem] - CSS custom property to set the padding of the clear all label.
 */
export default class OFilters extends LibraryBaseElement {
  static styles: CSSResultGroup = styles;
  static dependencies = {
    'o-input': OInput,
    'o-select': OSelect,
    'o-option': OOption,
    'o-switch': OSwitch,
    'o-divider': ODivider,
    'o-button': OButton,
    'o-icon': OIcon
  };

  /** Filters configuration in JSON format. */
  @property({
    type: Object,
    converter: {
      fromAttribute: value => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
        return convertFiltersToObject(value);
      },
      toAttribute: value => {
        return JSON.stringify(value);
      }
    }
  })
  filters: Filters | undefined;

  /** Sets whetter the clear all button has to be shown or not  */
  @property({ type: Boolean, reflect: true, attribute: 'hide-clear-all' }) hideClearAll = false;

  // All the filters are contained in a row, it means that the root filter is always a row
  private filtersConfigs: RowFilter | undefined;

  // Map of the types plugins, they include the render functions and the instances of the plugins
  private typesPluginsMap: {
    [filterType: string]: {
      render: (filter: Filter) => typeof nothing | TemplateResult | LibraryBaseElement | HTMLElement;
      instance: AbstractTypePlugin;
    };
  } = {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private filtersData: { [key: string]: any } = {};
  private filtersMasterMap: { [key: string]: FilterMasterData } = {};
  private lastFocusedFilterName: string | undefined;
  private clearAllContainer: HTMLDivElement;

  constructor() {
    super();

    // Initializing the default type plugins' map
    // Row filter
    this.registerTypePlugin(new RowTypePlugin(this));

    // Input filter
    this.registerTypePlugin(new InputTypePlugin(this));

    // Divider filter
    this.registerTypePlugin(new DividerTypePlugin(this));

    // Select filter
    this.registerTypePlugin(new SelectTypePlugin(this));

    // Switch filter
    this.registerTypePlugin(new SwitchTypePlugin(this));

    // TODO: Add the rest of the type plugins
    // Autocomplete filter

    const clearAllSlot = document.createElement('slot');
    clearAllSlot.name = 'clear-all';
    clearAllSlot.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      this.clearAll();
    });

    this.clearAllContainer = document.createElement('div');
    this.clearAllContainer.classList.add('filters__clear-all');
    this.clearAllContainer.append(clearAllSlot);
  }

  @watch('filters')
  filtersConfigUpdated() {
    this.initConfig();
  }

  private isFiltersConfigValid(): boolean {
    if (typeof this.filters === 'string') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.filters = convertFiltersToObject(this.filters);
    }

    return (
      !!this.filters &&
      ((Array.isArray(this.filters) && this.filters.length > 0) || Object.keys(this.filters).length > 0)
    );
  }

  private initConfig() {
    this.filtersConfigs = undefined;

    if (!this.filters || !this.isFiltersConfigValid()) {
      return;
    }

    // Set the root element of the filters which is always a row
    this.filtersConfigs = {
      type: 'row',
      part: 'base',
      style: '--padding: var(--base-padding);',
      css: 'base-row',
      items: [
        {
          type: 'row',
          css: 'base-row-items',
          items: Array.isArray(this.filters) ? [...this.filters] : [this.filters]
        }
      ]
    };
  }

  private getTypePluginMap({ type }: Partial<Filter>) {
    if (!type || !this.typesPluginsMap[type]) {
      return undefined;
    }

    return this.typesPluginsMap[type];
  }

  private getTypePluginInstance({ type }: Partial<Filter>) {
    return this.getTypePluginMap({ type })?.instance;
  }

  private getTypePluginFunction({ type }: Partial<Filter>) {
    return this.getTypePluginMap({ type })?.render;
  }

  private getValidPropsFromFilterConfig(filter: Filter) {
    return this.getTypePluginInstance(filter)?.getValidPropsFromFilterConfig(filter);
  }

  private isPropMandatory(prop: string, filter: Filter) {
    return this.getTypePluginInstance(filter)?.isPropMandatory(prop);
  }

  private checkFilterConfigValidity(filter: Filter) {
    if (!this.getTypePluginMap(filter)) {
      console.warn(
        `Filter type "${filter?.type}" is not supported, please register the type plugin to add the support`,
        filter
      );
      return false;
    }

    // Exceptions for name property
    if (this.isPropMandatory('name', filter) && !filter.name) {
      console.warn('Filter name is required', filter);
      return false;
    }

    return true;
  }

  private async checkCustomElementDefinition(tag: string) {
    return new Promise(resolve => {
      const isLibraryElement = tag.includes('o-');
      // Check if the custom element is defined, only if the tag is not a native element
      if (!isLibraryElement || customElements.get(tag)) {
        resolve(true);
        return;
      }

      // Trying to import the component
      if (isLibraryElement) {
        const tagWithoutPrefix = tag.replace(/^o-/i, '');
        const path = getBasePath(`components/${tagWithoutPrefix}/${tagWithoutPrefix}.js`);
        console.warn(`The web component "${tag}" is not defined, trying to import it from "${path}"...`);
        import(path)
          .then(() => {
            this.requestUpdate();
            console.warn(`✅ The web component "${tag}" has been imported successfully.`);
            resolve(true);
          })
          .catch(error => {
            console.warn(`❗ The web component "${tag}" could not be imported from "${path}".`);
            console.error(error);
            resolve(false);
          });
        return;
      }

      console.warn(`The web component "${tag}" is not defined, please import it before using it as a filter.
      \nIf you are using the autoloader you could ignore this message.`);
      resolve(false);
    });
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

    const parts = (filter.part as string)?.split(' ') ?? [];
    parts.push('filter');
    parts.push(filter.type);

    // Apply the css class if it is defined
    if (filter.css) {
      `${filter.css as string}`.split(' ').forEach((cssClass: string) => {
        el.classList.add(cssClass);
        parts.push(cssClass);
      });
    }

    el.setAttribute('part', parts.join(' '));

    try {
      // Apply the rest of the properties
      Object.assign(el, this.getValidPropsFromFilterConfig(filter));
    } catch (error) {
      console.warn(`Error setting the properties to the filter`, filter);
      console.error(error);
    }

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
    const filterName = filter.name;
    const typePluginInstance = this.getTypePluginInstance(filter)!;

    const changeHandler = (event: OChangeEvent) => {
      cancelEvent(event);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const value = typePluginInstance.getElementValue(el);
      this.setFilterDataByFilterConfig(filter, value, { emitEvent: true });
    };

    // event: OFocusEvent
    const focusHandler = () => {
      this.setLastFocusedFilterName(filterName!);
    };

    typePluginInstance.addConnectedListener(el, connectedEvent => {
      // Check if the event is coming from the filter control by using the DATA_FILTER_NAME_ATTRIBUTE
      const elementRef = connectedEvent.detail.ref;
      const tagName = connectedEvent.detail.tagName;

      if (!filterName || elementRef.getAttribute(DATA_FILTER_NAME_ATTRIBUTE) !== filterName) {
        return;
      }

      cancelEvent(connectedEvent);

      const detail = {
        ref: elementRef,
        tagName,
        data: { filter }
      };

      this.updateFilterMasterMap(filterName, { elementRef });
      this.focusFilterControlAfterConnectedEvent(filterName);

      typePluginInstance.addChangeListener(el, changeHandler);
      typePluginInstance.addFocusListener(el, focusHandler);

      typePluginInstance.addDisconnectedListener(el, disconnectedEvent => {
        cancelEvent(disconnectedEvent);

        this.emit('o-disconnected', { detail });

        typePluginInstance.removeEventListener(el, 'o-change', changeHandler);
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

  private getFilterMasterMap({ name }: Partial<Filter>) {
    if (!name || !this.filtersMasterMap[name]) {
      console.warn(`getFilterMasterMap: Filter with name "${name ?? ''}" is not defined`);
      return undefined;
    }

    return name ? this.filtersMasterMap[name] : undefined;
  }

  private updateFilterMasterMap(name: string, filterMasterData: Partial<FilterMasterData>) {
    if (!name || !filterMasterData || !this.getFilterMasterMap({ name })) {
      return;
    }

    this.filtersMasterMap[name] = { ...this.getFilterMasterMap({ name })!, ...filterMasterData };
  }

  /** Focus a filter control, it is useful when the filters config is updated and a filter control was already focused, so, it keeps the focus */
  private focusFilterControlAfterConnectedEvent(filterName: string) {
    if (!filterName || !this.getLastFocusedFilterName()) {
      return;
    }

    const name = this.getLastFocusedFilterName()!;
    const isSameFilter = name === filterName;

    if (isSameFilter) {
      this.getFilterMasterMap({ name })?.elementRef?.focus();
    }
  }

  private renderClearAllButton() {
    const clearAllButton = document.createElement('o-button');
    clearAllButton.variant = 'text';
    clearAllButton.classList.add('filters__button__clear-all');

    const clearAllSlotLabel = document.createElement('slot');
    clearAllSlotLabel.name = 'clear-all-label';
    clearAllSlotLabel.innerHTML = 'Clear all';

    clearAllButton.appendChild(clearAllSlotLabel);

    return clearAllButton;
  }

  private shouldRenderClearAllButton() {
    // Only checks if there is any filter data if the clear all button is not hidden
    const hasFiltersDataSomeValue = () => Object.keys(this.filtersData).some(key => !!this.filtersData[key]);
    return !this.hideClearAll && hasFiltersDataSomeValue();
  }

  private showClearAllButtonIfNecessary() {
    this.clearAllContainer.hidden = !this.shouldRenderClearAllButton();
  }

  private setFilterDataByFilterConfig(
    filter: Partial<Filter>,
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

    this.showClearAllButtonIfNecessary();

    if (emitEvent) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.emit('o-filter-change', {
        detail: { filter: filter as Filter, value: filterValue, filtersData: this.getFiltersData() }
      });
    }
  }

  private getLastFocusedFilterName() {
    if (this.lastFocusedFilterName && !this.getFilterMasterMap({ name: this.lastFocusedFilterName })) {
      this.lastFocusedFilterName = undefined;
    }

    return this.lastFocusedFilterName;
  }

  private setLastFocusedFilterName(name: string) {
    if (!name) {
      return;
    }

    if (!this.getFilterMasterMap({ name })) {
      this.lastFocusedFilterName = undefined;
      return;
    }

    this.lastFocusedFilterName = name;
  }

  /** Adds a new type instance which can be used to extend the filters types support */
  private registerTypePlugin(instance: AbstractTypePlugin) {
    this.typesPluginsMap[instance.type] = { instance, render: (filter: Filter) => instance.render(filter) };
  }

  private registerTypePluginRequestUpdateTimerId: NodeJS.Timeout | undefined;

  // ========================================================
  // Filters API, methods that can be called from outside
  // ========================================================

  /**
   * Register a new type plugin
   * @param typePluginCtor type plugin constructor
   */
  registerType(typePluginCtor: new (filtersComponent: OFilters) => AbstractTypePlugin) {
    const instance = new typePluginCtor(this);
    this.registerTypePlugin(instance);

    // Debounce the request update to avoid multiple updates
    if (this.registerTypePluginRequestUpdateTimerId) {
      clearTimeout(this.registerTypePluginRequestUpdateTimerId);
    }

    this.registerTypePluginRequestUpdateTimerId = setTimeout(() => {
      this.requestUpdate();
    }, 250);
  }

  /** Sets a filter value by name */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFilterValue(name: string, value: any, { emitEvent }: { emitEvent: boolean } = { emitEvent: false }) {
    const filter = this.getFilterConfigByName(name);
    if (!filter) {
      console.warn(`setFilterValue: Can't set the filter value, filter with name "${name}" is not defined`);
      return;
    }

    this.setFilterValueByFilterConfig(filter, value, { emitEvent });
  }

  /** Sets a filter value by filter config */
  setFilterValueByFilterConfig(
    filter: Filter,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
    { emitEvent }: { emitEvent: boolean } = { emitEvent: false }
  ) {
    if (!filter.name || !filter.type) {
      console.warn("setFilterValue: Can't set the filter value, filter name/type is not defined", filter);
      return;
    }

    const el = this.getFilterMasterMap({ name: filter.name })?.elementRef;
    if (!el) {
      console.warn(
        `setFilterValue: Can't set the filter value, filter element with name "${filter.name}" is not defined`
      );
      return;
    }

    this.getTypePluginInstance(filter)?.setElementValue(el, value);
    this.setFilterDataByFilterConfig(filter, value, { emitEvent });
  }

  /** Gets a filter value by name */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getFilterValue(name: string) {
    if (!name || !this.filtersData[name]) {
      return undefined;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.filtersData[name];
  }

  /** Gets all filters data */
  getFiltersData() {
    return this.filtersData;
  }

  /** Shows a filter by name, if the `show` param is `false`, the filter will be `hidden` */
  showFilter(name: string, show = true) {
    if (!name) {
      return;
    }

    if (!show) {
      this.hideFilter(name);
      return;
    }

    const el = this.getFilterMasterMap({ name })?.elementRef;
    if (!el) {
      return;
    }

    el.hidden = false;
  }

  /** Hides a filter by name, the of the filter value is set to `undefined` */
  hideFilter(name: string) {
    if (!name) {
      console.warn('hideFilter: Can not hide filter, name is not defined');
      return;
    }

    const el = this.getFilterMasterMap({ name })?.elementRef;
    if (!el) {
      console.warn(`hideFilter: Can not hide filter, filter element with name "${name}" is not defined`);
      return;
    }

    el.hidden = true;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const currentValue = this.getFilterValue(name);
    if (currentValue === undefined) {
      return;
    }

    this.setFilterValue(name, '', { emitEvent: true });
  }

  /** Gets a filter config by name */
  getFilterConfigByName(name: string) {
    return this.getFilterMasterMap({ name })?.config;
  }

  /** Gets a filter control (Circular element reference) by name */
  getFilterControlByName(name: string) {
    return this.getFilterMasterMap({ name })?.elementRef;
  }

  /** Clear all the filters, sets every value to `undefined` */
  clearAll() {
    const filtersData = this.getFiltersData();

    Object.keys(filtersData).forEach((name: string) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const value = filtersData[name];

      // Only clear the filter if it has a value
      if (value === undefined) {
        return;
      }

      // Clear the filter value
      this.setFilterValue(name, undefined, { emitEvent: true });
    });

    this.emit('o-clear');
  }

  // ========================================================
  // End of filters API, methods that can be called from outside
  // ========================================================

  createFilterElement(tag: string, filter: Filter) {
    this.checkCustomElementDefinition(tag);

    const el = this.setPropsToElement(document.createElement(tag) as LibraryBaseElement, filter);

    const existsDataValue = filter.name && !!this.filtersData[filter.name];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const filterValue = existsDataValue ? this.filtersData[filter.name!] : filter.value;
    this.setFilterDataByFilterConfig(filter, filterValue);

    if (filterValue) {
      this.getTypePluginInstance(filter)?.setElementValue(el, filterValue);
    }

    this.setDefaultFilterEvents(el, filter);

    return el;
  }

  renderFilters(filters: Filter[]) {
    return filters.map(filter => {
      const render = this.getTypePluginFunction(filter);

      if (!this.checkFilterConfigValidity(filter) || !render) {
        return nothing;
      }

      return render(filter);
    });
  }

  render() {
    if (!this.filtersConfigs) {
      return nothing;
    }

    const css = `filter filter-row ${(this.filtersConfigs.css as string) ?? ''}`;
    const part = (this.filtersConfigs.part as string) || 'row';
    const style = (this.filtersConfigs.style as string) || '';

    // Get slot from the clear all container
    const slot = this.clearAllContainer.querySelector('slot')!;
    slot.innerHTML = '';
    slot.append(this.renderClearAllButton());

    // Rendering all the filters
    const result = html`
      <div part=${part} style=${style} class=${css}>
        ${this.renderFilters(this.filtersConfigs.items)} ${this.clearAllContainer}
      </div>
    `;

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
