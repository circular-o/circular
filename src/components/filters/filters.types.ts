export type FilterType = 'input' | 'select' | 'multi-select' | 'switch' | 'autocomplete' | 'divider' | 'row';

/**
 * @summary Base filter type.
 * @description
 * Defines the props for the base filters, the useful ones are defined to provide auto-complete options for the IDE (i.e.: vscode),
 * the rest are passed to the component.
 *
 * Please check each component documentation for more details.
 */
interface BaseFilter {
  // All other props are passed to the component
  [key: string]: string | boolean | number | Filter[] | FilterType | undefined;
  // Type of the filter
  type: FilterType;
  // Name of the filter, useful to identify the filter in the DOM, the attribute name is 'data-filter-name'
  name: string;
  // Pass styles to the component using the style attribute
  style?: string;
  // Pass css classes to the component
  css?: string;
}

/**
 * @summary Input filter type.
 * @description
 * Defines the properties for the input filter, the useful ones are defined to provide auto-complete options for the IDE (i.e.: vscode),
 * the rest are passed to the input component
 *
 * Please take into account here can be only passed properties that are not functions, promises, etc, because the filter configurations
 * are serialized to JSON
 *
 * Please check the OInput component documentation for more details about the properties that can be passed.
 */
export interface InputFilter extends BaseFilter {
  type: 'input';
  inputType: 'date' | 'datetime-local' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url';
  inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
  value?: string;
  label?: string;
  placeholder?: string;
  // Default value is true
  clearable?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  prefix?: string;
  suffix?: string;
  // Default value is 'icon'
  prefixType?: 'icon' | 'text';
  // Default value is 'icon'
  suffixType?: 'icon' | 'text';
  suffixText?: string;
  size?: 'small' | 'medium' | 'large';
}

/**
 * @summary Divider filter type.
 * @description
 * Defines the props for the divider filter, the useful ones are defined to provide auto-complete options for the IDE (i.e.: vscode),
 * the rest are passed to the divider component.
 *
 * Please take into account here can be only passed properties that are not functions, promises, etc, because the filter configurations
 * are serialized to JSON
 *
 * Please check the ODivider component documentation for more details about the properties that can be passed.
 */
export interface DividerFilter extends Omit<BaseFilter, 'name'> {
  type: 'divider';
  name?: string;
  /** Default value is true */
  vertical?: boolean;
}

/**
 * @summary Row filter type.
 * @description
 * Defines the props for the row filter, the useful ones are defined to provide auto-complete options for the IDE (i.e.: vscode),
 * the rest are passed to the card component.
 *
 * Please take into account here can be only passed properties that are not functions, promises, etc, because the filter configurations
 * are serialized to JSON
 *
 * Please check the OCard component documentation for more details about the properties that can be passed.
 */
export interface RowFilter extends Omit<BaseFilter, 'name'> {
  type: 'row';
  name?: string;
  items: Filter[];
}

export type Filter = InputFilter | DividerFilter | RowFilter;

export type Filters = Filter | Filter[];

export const DEFAULT_PROPS_TO_IGNORE = ['type', 'name', 'style', 'css'];
