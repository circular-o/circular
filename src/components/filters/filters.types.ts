export type FilterType = 'input' | 'select' | 'switch' | 'divider' | 'row'; // | 'autocomplete'

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  // Type of the filter
  type: FilterType;
  // Name of the filter, useful to identify the filter in the DOM, the attribute name is 'data-filter-name'
  name: string;
  // Pass styles to the component using the style attribute
  style?: string;
  // Pass css classes to the component
  css?: string;
  hidden?: boolean;
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
  // Custom input filter properties, these ones are treated in a special way by the filter component, usually they are not passed to the input component,
  // it means that are ignored in the getValidPropsFromFilterConfig method
  type: 'input';
  inputType?: 'date' | 'datetime-local' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url';
  prefix?: string;
  suffix?: string;
  // Default value is 'icon'
  prefixType?: 'icon' | 'text';
  // Default value is 'icon'
  suffixType?: 'icon' | 'text';
  clearIconName?: string;
  // Default value is true
  clearable?: boolean;

  // Native input attributes, these ones are passed as is to the input component. Please check the OInput component documentation for more details
  inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
  value?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
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
  // Custom input filter properties, these ones are treated in a special way by the filter component, usually they are not passed to the input component,
  // it means that are ignored in the getValidPropsFromFilterConfig method
  type: 'divider';
  name?: string;
  // Default value is true
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
  // Custom input filter properties, these ones are treated in a special way by the filter component, usually they are not passed to the input component,
  // it means that are ignored in the getValidPropsFromFilterConfig method
  type: 'row';
  name?: string;
  items: Filter[];
}

/**
 * @summary Select (and multi-select) filter type.
 * @description
 * Defines the properties for the select filter, the useful ones are defined to provide auto-complete options for the IDE (i.e.: vscode),
 * the rest are passed to the select component
 *
 * Please take into account here can be only passed properties that are not functions, promises, etc, because the filter configurations
 * are serialized to JSON
 *
 * Please check the OSelect component documentation for more details about the properties that can be passed.
 */
export interface SelectFilter extends BaseFilter {
  // Custom select filter properties, these ones are treated in a special way by the filter component, usually they are not passed to the select component,
  // it means that are ignored in the getValidPropsFromFilterConfig method
  type: 'select';
  options: OptionSelectFilter[];
  prefix?: string;
  // Default value is 'icon'
  prefixType?: 'icon' | 'text';
  clearIconName?: string;
  expandIconName?: string;
  // Default value is true
  clearable?: boolean;

  // Native select attributes, these ones are passed as is to the select component. Please check the OSelect component documentation for more details
  value?: string;
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  multiple?: boolean;
  disabled?: boolean;
  label?: string;
}
// Options for the select filter
export interface OptionSelectFilter {
  // Custom option properties, these ones are treated in a special way by the select filter component, usually they are not passed to the option component
  label: string;
  prefix?: string;
  suffix?: string;
  // Default value is 'icon'
  prefixType?: 'icon' | 'text';
  // Default value is 'icon'
  suffixType?: 'icon' | 'text';

  // Native option attributes, these ones are passed as is to the option component. Please check the OOption component documentation for more details
  value: string;
  disabled?: boolean;
}

/**
 * @summary Switch filter type.
 * @description
 * Defines the properties for the switch filter, the useful ones are defined to provide auto-complete options for the IDE (i.e.: vscode),
 * the rest are passed to the switch component
 *
 * Please take into account here can be only passed properties that are not functions, promises, etc, because the filter configurations
 * are serialized to JSON
 *
 * Please check the OSwitch component documentation for more details about the properties that can be passed.
 */
export interface SwitchFilter extends BaseFilter {
  // Custom switch filter properties, these ones are treated in a special way by the filter component, usually they are not passed to the input component,
  // it means that are ignored in the getValidPropsFromFilterConfig method
  type: 'switch';
  label: string;

  // Native switch attributes, these ones are passed as is to the switch component. Please check the OSwitch component documentation for more details
  value?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  checked?: boolean;
}

export type Filter = InputFilter | DividerFilter | RowFilter | SelectFilter | SwitchFilter;

export type Filters = Filter | Filter[];

export const DEFAULT_PROPS_TO_IGNORE = ['type', 'style', 'css']; //, 'name'
