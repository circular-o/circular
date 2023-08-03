import { animateTo, stopAnimations } from '../../internal/animate.js';
import { classMap } from 'lit/directives/class-map.js';
import { defaultValue } from '../../internal/default-value.js';
import { FormControlController } from '../../internal/form.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query, state } from 'lit/decorators.js';
import { scrollIntoView } from '../../internal/scroll.js';
import { waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import LibraryBaseElement from '../../internal/library-base-element.js';
import OIcon from '../icon/icon.component.js';
import OInput from '../input/input.component.js';
import OPopup from '../popup/popup.component.js';
import OTag from '../tag/tag.component.js';
import styles from './select.styles.js';
import type { CSSResultGroup } from 'lit';
import type { LibraryBaseFormControl } from '../../internal/library-base-element.js';
import type OOption from '../option/option.component.js';
import type ORemoveEvent from '../../events/-remove.js';

/**
 * @summary Selects allow you to choose items from a menu of predefined options.
 * @documentation /components/select
 * @status stable
 * @since 1.5
 *
 * @dependency o-icon
 * @dependency o-input
 * @dependency o-popup
 * @dependency o-tag
 *
 * @slot - The listbox options. Must be `<o-option>` elements. You can use `<o-divider>` to group items visually.
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot expand-icon - The icon to show when the control is expanded and collapsed. Rotates on open and close.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 * @slot options-prefix - Used to prepend any content to the options list.
 * @slot options-suffix - Used to append any content to the options list.
 *
 * @event o-change - Emitted when the control's value changes.
 * @event o-clear - Emitted when the control's value is cleared.
 * @event o-input - Emitted when the control receives input.
 * @event o-focus - Emitted when the control gains focus.
 * @event o-blur - Emitted when the control loses focus.
 * @event o-show - Emitted when the select's menu opens.
 * @event o-after-show - Emitted after the select's menu opens and all animations are complete.
 * @event o-hide - Emitted when the select's menu closes.
 * @event o-after-hide - Emitted after the select's menu closes and all animations are complete.
 * @event o-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 * @event {{ value: string; ref: OInput }} o-autocomplete-input - Emitted when the autocomplete control receives input.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The select's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart combobox - The container the wraps the prefix, combobox, clear icon, and expand button.
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart display-input - The element that displays the selected option's label, an `<input>` element.
 * @csspart listbox - The listbox container where options are slotted.
 * @csspart tags - The container that houses option tags when `multiselect` is used.
 * @csspart tag - The individual tags that represent each multiselect option.
 * @csspart tag__base - The tag's base part.
 * @csspart tag__content - The tag's content part.
 * @csspart tag__remove-button - The tag's remove button.
 * @csspart tag__remove-button__base - The tag's remove button base part.
 * @csspart clear-button - The clear button.
 * @csspart expand-icon - The container that wraps the expand icon.
 */
export default class OSelect extends LibraryBaseElement implements LibraryBaseFormControl {
  static styles: CSSResultGroup = styles;
  static dependencies = {
    'o-icon': OIcon,
    'o-input': OInput,
    'o-popup': OPopup,
    'o-tag': OTag
  };

  private readonly formControlController = new FormControlController(this, {
    assumeInteractionOn: ['o-blur', 'o-input']
  });
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');
  private readonly localize = new LocalizeController(this);
  private typeToSelectString = '';
  private typeToSelectTimeout: number;

  @query('.select') popup: OPopup;
  @query('.select__combobox') combobox: HTMLSlotElement;
  @query('.select__display-input') displayInput: HTMLInputElement;
  @query('.select__value-input') valueInput: HTMLInputElement;
  @query('.select__listbox') listbox: HTMLSlotElement;
  @query('.autocomplete__input') autocompleteInput: OInput;

  @state() private hasFocus = false;
  @state() displayLabel = '';
  @state() currentOption: OOption;
  @state() selectedOptions: OOption[] = [];

  /** The name of the select, submitted as a name/value pair with form data. */
  @property() name = '';

  /**
   * The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the
   * value will be a space-delimited list of values based on the options selected.
   */
  @property({
    converter: {
      fromAttribute: (value: string) => value.split(' '),
      toAttribute: (value: string[]) => value.join(' ')
    }
  })
  value: string | string[] = '';

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue() defaultValue: string | string[] = '';

  /** The select's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Placeholder text to show as a hint when the select is empty. */
  @property() placeholder = '';

  /** Allows more than one option to be selected. */
  @property({ type: Boolean, reflect: true }) multiple = false;

  /**
   * The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
   * indicate the number of additional items that are selected. Set to 0 to remove the limit.
   */
  @property({ attribute: 'max-options-visible', type: Number }) maxOptionsVisible = 3;

  /** Disables the select control. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Adds a clear button when the select is not empty. */
  @property({ type: Boolean }) clearable = false;

  /**
   * Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the select's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
   */
  @property({ type: Boolean }) hoist = false;

  /** Draws a filled select. */
  @property({ type: Boolean, reflect: true }) filled = false;

  /** Draws a pill-style select with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** The select's label. If you need to display HTML, use the `label` slot instead. */
  @property() label = '';

  /**
   * The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
   * inside of the viewport.
   */
  @property({ reflect: true }) placement: 'top' | 'bottom' = 'bottom';

  /** The select's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ attribute: 'help-text' }) helpText = '';

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = '';

  /** The select's required attribute. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Shows an input on top of the options list, it helps the user to filter the options while typing */
  @property({ type: Boolean, reflect: true }) autocomplete = false;

  /** When autocomplete and autocomplete-external are set, the options filtering has to be done externally, out of the component context */
  @property({ type: Boolean, reflect: true, attribute: 'autocomplete-external' }) autocompleteExternal = false;

  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }

  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }

  connectedCallback() {
    super.connectedCallback();

    // If the property open is true, we need to show the popup
    if (this.open) {
      this.open = false;
      setTimeout(() => {
        this.show();
      }, 10);
    }
  }

  private addOpenListeners() {
    document.addEventListener('focusin', this.handleDocumentFocusIn);
    document.addEventListener('keydown', this.handleDocumentKeyDown);
    document.addEventListener('mousedown', this.handleDocumentMouseDown);
  }

  private removeOpenListeners() {
    document.removeEventListener('focusin', this.handleDocumentFocusIn);
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
    document.removeEventListener('mousedown', this.handleDocumentMouseDown);
  }

  private handleFocus() {
    this.hasFocus = true;
    this.displayInput.setSelectionRange(0, 0);
    this.emit('o-focus');
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('o-blur');
  }

  private handleDocumentFocusIn = (event: KeyboardEvent) => {
    // Close when focusing out of the select
    const path = event.composedPath();
    if (this && !path.includes(this)) {
      this.hide();
    }
  };

  private handleDocumentKeyDown = (event: KeyboardEvent) => {
    const target = event.target as HTMLElement;
    const isClearButton = target.closest('.select__clear') !== null;
    const isIconButton = target.closest('o-icon-button') !== null;

    // Ignore presses when the target is an icon button (e.g. the remove button in <o-tag>)
    if (isClearButton || isIconButton) {
      return;
    }

    // Ignore presses when the target is inside the options-prefix or options-suffix slot
    // and there is no o-option inside the slot
    const isInsideOptionsPrefix = target.closest('[slot="options-prefix"]') !== null;
    const isInsideOptionsSuffix = target.closest('[slot="options-suffix"]') !== null;
    // Check if the target is not in the slots and is not an o-option
    if ((isInsideOptionsPrefix || isInsideOptionsSuffix) && target.closest('o-option') === null) {
      return;
    }

    // Close when pressing escape
    if (event.key === 'Escape' && this.open) {
      event.preventDefault();
      event.stopPropagation();
      this.hide();
      this.displayInput.focus({ preventScroll: true });
    }

    // Handle enter and space. When pressing space, we allow for type to select behaviors so if there's anything in the
    // buffer we _don't_ close it.
    if (event.key === 'Enter' || (event.key === ' ' && this.typeToSelectString === '')) {
      event.preventDefault();
      event.stopImmediatePropagation();

      // If it's not open, open it
      if (!this.open) {
        this.show();
        return;
      }

      // If it is open, update the value based on the current selection and close it
      if (this.currentOption && !this.currentOption.disabled) {
        if (this.multiple) {
          this.toggleOptionSelection(this.currentOption);
        } else {
          this.setSelectedOptions(this.currentOption);
        }

        // Emit after updating
        this.updateComplete.then(() => {
          this.emit('o-input');
          this.emit('o-change');
        });

        if (!this.multiple) {
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
      }

      return;
    }

    // Navigate options
    if (['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      const allOptions = this.getAllOptions().filter(option => !option.hidden);
      const currentIndex = allOptions.indexOf(this.currentOption);
      let newIndex = Math.max(0, currentIndex);

      // Prevent scrolling
      event.preventDefault();

      // Open it
      if (!this.open) {
        this.show();

        // If an option is already selected, stop here because we want that one to remain highlighted when the listbox
        // opens for the first time
        if (this.currentOption) {
          return;
        }
      }

      const focusAutocompleteInput = () => {
        if (this.autocomplete && this.autocompleteInput) {
          event.stopPropagation();
          event.stopImmediatePropagation();
          window.setTimeout(() => {
            this.autocompleteInput.focus();
          }, 250);

          return true;
        }

        return false;
      };

      if (event.key === 'ArrowDown') {
        newIndex = currentIndex + 1;
        if (newIndex > allOptions.length - 1) {
          // If the autocomplete attribute is set, then at this point we want to focus the input so the user can type
          // to select. If it's not set, then we want to focus the first option.
          if (focusAutocompleteInput()) return;

          newIndex = 0;
        }
      } else if (event.key === 'ArrowUp') {
        newIndex = currentIndex - 1;
        if (newIndex < 0) {
          // If the autocomplete attribute is set, then at this point we want to focus the input so the user can type
          // to select. If it's not set, then we want to focus the first option.
          if (focusAutocompleteInput()) return;

          newIndex = allOptions.length - 1;
        }
      } else if (event.key === 'Home') {
        newIndex = 0;
      } else if (event.key === 'End') {
        newIndex = allOptions.length - 1;
      }

      this.setCurrentOption(allOptions[newIndex]);
    }

    // All other "printable" keys trigger type to select
    if (event.key.length === 1 || event.key === 'Backspace') {
      const allOptions = this.getAllOptions();

      // Don't block important key combos like CMD+R
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      // Open, unless the key that triggered is backspace
      if (!this.open) {
        if (event.key === 'Backspace') {
          return;
        }

        this.show();
      }

      event.stopPropagation();
      event.preventDefault();

      clearTimeout(this.typeToSelectTimeout);
      this.typeToSelectTimeout = window.setTimeout(() => (this.typeToSelectString = ''), 1000);

      if (event.key === 'Backspace') {
        this.typeToSelectString = this.typeToSelectString.slice(0, -1);
      } else {
        this.typeToSelectString += event.key.toLowerCase();
      }

      for (const option of allOptions) {
        const label = option.getTextLabel().toLowerCase();

        if (label.startsWith(this.typeToSelectString)) {
          this.setCurrentOption(option);
          break;
        }
      }
    }
  };

  private handleDocumentMouseDown = (event: MouseEvent) => {
    // Close when clicking outside of the select
    const path = event.composedPath();
    if (this && !path.includes(this)) {
      this.hide();
    }
  };

  private handleLabelClick() {
    this.displayInput.focus();
  }

  private handleComboboxMouseDown(event: MouseEvent) {
    const path = event.composedPath();
    const isIconButton = path.some(el => el instanceof Element && el.tagName.toLowerCase() === 'o-icon-button');

    // Ignore disabled controls and clicks on tags (remove buttons)
    if (this.disabled || isIconButton) {
      return;
    }

    event.preventDefault();
    this.displayInput.focus({ preventScroll: true });
    this.open = !this.open;
  }

  private handleComboboxKeyDown(event: KeyboardEvent) {
    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }

  private handleClearClick(event: MouseEvent) {
    event.stopPropagation();

    if (this.value !== '') {
      this.setSelectedOptions([]);
      this.displayInput.focus({ preventScroll: true });

      // Emit after update
      this.updateComplete.then(() => {
        this.emit('o-clear');
        this.emit('o-input');
        this.emit('o-change');
      });
    }
  }

  private handleClearMouseDown(event: MouseEvent) {
    // Don't lose focus or propagate events when clicking the clear button
    event.stopPropagation();
    event.preventDefault();
  }

  private handleOptionClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const option = target.closest('o-option');
    const oldValue = this.value;

    if (option && !option.disabled) {
      if (this.multiple) {
        this.toggleOptionSelection(option);
      } else {
        this.setSelectedOptions(option);
      }

      // Set focus after updating so the value is announced by screen readers
      this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));

      if (this.value !== oldValue) {
        // Emit after updating
        this.updateComplete.then(() => {
          this.emit('o-input');
          this.emit('o-change');
        });
      }

      if (!this.multiple) {
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
    }
  }

  private handleDefaultSlotChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    const values: string[] = [];

    // Check for duplicate values in menu items
    if (customElements.get('o-option')) {
      allOptions.forEach(option => values.push(option.value));

      // Select only the options that match the new value
      this.setSelectedOptions(allOptions.filter(el => value.includes(el.value)));
    } else {
      // Rerun this handler when <o-option> is registered
      customElements.whenDefined('o-option').then(() => this.handleDefaultSlotChange());
    }
  }

  private handleTagRemove(event: ORemoveEvent, option: OOption) {
    event.stopPropagation();

    if (!this.disabled) {
      this.toggleOptionSelection(option, false);

      // Emit after updating
      this.updateComplete.then(() => {
        this.emit('o-input');
        this.emit('o-change');
      });
    }
  }

  private getOptionsInSlot(slotName: string): OOption[] {
    const slot = this.querySelector(`[slot="${slotName}"]`);

    // if slot is not defined, return an empty array
    if (!slot) {
      return [];
    }

    // if slot is defined, and it is an o-option itself, return an array with the slot
    if (slot.tagName.toLowerCase() === 'o-option') {
      return [slot as OOption];
    }

    // if slot is defined, and it is not an HTMLSlotElement nor an o-option, the select all the o-options inside the slot
    return Array.from(slot.querySelectorAll<OOption>('o-option'));
  }

  // Gets an array of all <o-option> elements
  private getAllOptions() {
    const optionsInPrefixSlot = this.getOptionsInSlot('options-prefix');
    const optionsInSuffixSlot = this.getOptionsInSlot('options-suffix');
    const options = [...this.querySelectorAll<OOption>('o-option')];

    // Filter from options the ones that are in the prefix or suffix slots
    const optionsNotInPrefixOrSuffixSlot = options.filter(
      (option: OOption) => !optionsInPrefixSlot.includes(option) && !optionsInSuffixSlot.includes(option)
    );

    // Select all options except the ones having the attribute slot="options-prefix" or slot="options-suffix"
    return [...optionsInPrefixSlot, ...optionsNotInPrefixOrSuffixSlot, ...optionsInSuffixSlot];
  }

  // Gets the first <o-option> element
  private getFirstOption() {
    const optionsInPrefixSlot = this.getOptionsInSlot('options-prefix');
    if (optionsInPrefixSlot.length) return optionsInPrefixSlot[0];
    return this.querySelector<OOption>('o-option');
  }

  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  private setCurrentOption(option: OOption | null, { focus = true } = {}) {
    const allOptions = this.getAllOptions();

    // Clear selection
    allOptions.forEach(el => {
      el.current = false;
      el.tabIndex = -1;
    });

    // Select the target option
    if (option) {
      this.currentOption = option;
      option.current = true;
      option.tabIndex = 0;
      if (focus) option.focus();
    }
  }

  // Sets the selected option(s)
  private setSelectedOptions(option: OOption | OOption[]) {
    const allOptions = this.getAllOptions();
    const newSelectedOptions = Array.isArray(option) ? option : [option];

    // Clear existing selection
    allOptions.forEach(el => (el.selected = false));

    // Set the new selection
    if (newSelectedOptions.length) {
      newSelectedOptions.forEach(el => (el.selected = true));
    }

    // Update selection, value, and display label
    this.selectionChanged();
  }

  // Toggles an option's selected state
  private toggleOptionSelection(option: OOption, force?: boolean) {
    if (force === true || force === false) {
      option.selected = force;
    } else {
      option.selected = !option.selected;
    }

    this.selectionChanged();
  }

  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  private selectionChanged() {
    // Update selected options cache
    this.selectedOptions = this.getAllOptions().filter(el => el.selected);

    // Update the value and display label
    if (this.multiple) {
      this.value = this.selectedOptions.map(el => el.value);

      if (this.placeholder && this.value.length === 0) {
        // When no items are selected, keep the value empty so the placeholder shows
        this.displayLabel = '';
      } else {
        this.displayLabel = this.localize.term('numOptionsSelected', this.selectedOptions.length);
      }
    } else {
      this.value = this.selectedOptions[0]?.value ?? '';
      this.displayLabel = this.selectedOptions[0]?.getTextLabel() ?? '';
    }

    // Update validity
    this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private handleAutocompleteInput(event: KeyboardEvent) {
    if (event.type === 'keydown') {
      event.stopPropagation();
      event.stopImmediatePropagation();
      if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
      }
      return;
    }

    const allOptions = this.getAllOptions();

    // Navigate options
    if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      const allVisibleOptions = allOptions.filter(option => !option.hidden);

      // If there are no visible options, do nothing
      if (allVisibleOptions.length === 0) {
        return;
      }

      const currentIndex = allVisibleOptions.indexOf(this.currentOption);
      let newIndex = Math.max(0, currentIndex);

      if (event.key === 'ArrowDown') {
        newIndex = currentIndex + 1;
        if (newIndex > allVisibleOptions.length - 1) newIndex = 0;
      } else if (event.key === 'ArrowUp') {
        newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = allVisibleOptions.length - 1;
      }

      // Avoid negative indexes
      newIndex = Math.max(0, newIndex);

      this.setCurrentOption(allVisibleOptions[newIndex], { focus: false });
      return;
    }

    // Close when pressing escape
    if (event.key === 'Escape') {
      this.hide();
      this.displayInput.focus({ preventScroll: true });
    }

    // Handle enter and space. When pressing space, we allow for type to select behaviors so if there's anything in the
    // buffer we _don't_ close it.
    if (event.key === 'Enter') {
      this.handleDocumentKeyDown(event);
      return;
    }

    // If autocomplete is external, do nothing
    if (this.autocompleteExternal) {
      return;
    }

    // Handle value changes
    const currentAutocompleteInputValue = this.autocompleteInput.value ?? '';
    allOptions.forEach(el => {
      el.hidden = !el.getTextLabel().toLocaleLowerCase().includes(currentAutocompleteInputValue.toLocaleLowerCase());
    });

    // Get the current option and check if it's visible, otherwise select the first visible option
    const allVisibleOptions = allOptions.filter(option => !option.hidden);
    // If there are no visible options, do nothing
    if (allVisibleOptions.length === 0) {
      this.setCurrentOption(null, { focus: false });
      return;
    }

    const currentIndex = allVisibleOptions.indexOf(this.currentOption);
    const currentOptionIsVisible = currentIndex !== -1;
    if (!currentOptionIsVisible) {
      this.setCurrentOption(allVisibleOptions[0], { focus: false });
    }
  }

  private autocompleteInputEventTimer: number | null = null;
  private dispatchAutocompleteInputEvent() {
    if (this.autocompleteInputEventTimer) {
      clearTimeout(this.autocompleteInputEventTimer);
    }

    this.autocompleteInputEventTimer = window.setTimeout(() => {
      this.emit('o-autocomplete-input', {
        detail: { ref: this.autocompleteInput, value: this.autocompleteInput.value }
      });
    }, 100);
  }

  private autocompleteExternalSelectOption() {
    const doAutocompleteExternalSelectOption = this.autocomplete && this.autocompleteExternal && this.open;

    if (!doAutocompleteExternalSelectOption) {
      return;
    }

    // If there is no current option, select the first one
    if (!this.currentOption) {
      window.setTimeout(() => {
        this.setCurrentOption(this.getFirstOption());
        this.autocompleteInput.focus();
      }, 100);
      return;
    }

    window.setTimeout(() => {
      const allOptions = this.getAllOptions();
      const currentIndex = allOptions.indexOf(this.currentOption);

      // If the current option is not in the list, select the first one
      if (currentIndex === -1) {
        this.setCurrentOption(allOptions[0]);
        this.autocompleteInput.focus();
      }
    }, 100);
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Close the listbox when the control is disabled
    if (this.disabled) {
      this.open = false;
      this.handleOpenChange();
    }
  }

  @watch('value', { waitUntilFirstUpdate: true })
  handleValueChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];

    // Select only the options that match the new value
    this.setSelectedOptions(allOptions.filter(el => value.includes(el.value)));
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      // Reset the current option
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());

      // Show
      this.emit('o-show');
      this.addOpenListeners();

      await stopAnimations(this);
      this.listbox.hidden = false;
      this.popup.active = true;

      // Select the appropriate option based on value after the listbox opens
      requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });

      const { keyframes, options } = getAnimation(this, 'select.show', { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);

      // Make sure the current option is scrolled into view (required for Safari)
      if (this.currentOption) {
        scrollIntoView(this.currentOption, this.listbox, 'vertical', 'auto');
      }

      // Focus the input if autocomplete is enabled
      if (this.autocomplete && this.autocompleteInput) {
        this.autocompleteInput.focus();
      }

      this.emit('o-after-show');
    } else {
      // Hide
      this.emit('o-hide');
      this.removeOpenListeners();

      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, 'select.hide', { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.listbox.hidden = true;
      this.popup.active = false;

      this.emit('o-after-hide');
    }
  }

  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = false;
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'o-after-show');
  }

  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = false;
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'o-after-hide');
  }

  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message: string) {
    this.valueInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  /** Sets focus on the control. */
  focus(options?: FocusOptions) {
    this.displayInput.focus(options);
  }

  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
    const isPlaceholderVisible = this.placeholder && this.value.length === 0;

    // Select the current option after an external change when autocomplete-external is enabled
    this.autocompleteExternalSelectOption();

    return html`
      <div
        part="form-control"
        class=${classMap({
          'form-control': true,
          'form-control--small': this.size === 'small',
          'form-control--medium': this.size === 'medium',
          'form-control--large': this.size === 'large',
          'form-control--has-label': hasLabel,
          'form-control--has-help-text': hasHelpText
        })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${hasLabel ? 'false' : 'true'}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <o-popup
            class=${classMap({
              select: true,
              'select--standard': true,
              'select--filled': this.filled,
              'select--pill': this.pill,
              'select--open': this.open,
              'select--disabled': this.disabled,
              'select--multiple': this.multiple,
              'select--focused': this.hasFocus,
              'select--placeholder-visible': isPlaceholderVisible,
              'select--top': this.placement === 'top',
              'select--bottom': this.placement === 'bottom',
              'select--small': this.size === 'small',
              'select--medium': this.size === 'medium',
              'select--large': this.size === 'large',
              'select--has-autocomplete': this.autocomplete
            })}
            placement=${this.placement}
            strategy=${this.hoist ? 'fixed' : 'absolute'}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open ? 'true' : 'false'}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? 'true' : 'false'}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple
                ? html`
                    <div part="tags" class="select__tags">
                      ${this.selectedOptions.map((option, index) => {
                        if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
                          return html`
                            <o-tag
                              part="tag"
                              exportparts="
                                base:tag__base,
                                content:tag__content,
                                remove-button:tag__remove-button,
                                remove-button__base:tag__remove-button__base
                              "
                              ?pill=${this.pill}
                              size=${this.size}
                              removable
                              @o-remove=${(event: ORemoveEvent) => this.handleTagRemove(event, option)}
                            >
                              ${option.getTextLabel()}
                            </o-tag>
                          `;
                        } else if (index === this.maxOptionsVisible) {
                          return html` <o-tag size=${this.size}> +${this.selectedOptions.length - index} </o-tag> `;
                        } else {
                          return null;
                        }
                      })}
                    </div>
                  `
                : ''}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(', ') : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${hasClearIcon
                ? html`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term('clearEntry')}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <o-icon name="x-circle-fill" library="system"></o-icon>
                      </slot>
                    </button>
                  `
                : ''}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <o-icon library="system" name="chevron-down"></o-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? 'true' : 'false'}
              aria-multiselectable=${this.multiple ? 'true' : 'false'}
              aria-labelledby="label"
              part="listbox"
              class=${classMap({
                select__listbox: true,
                'with-autocomplete': this.autocomplete,
                'with-autocomplete--multiple': this.multiple,
                'with-autocomplete--small': this.autocomplete && this.size === 'small',
                'with-autocomplete--medium': this.autocomplete && this.size === 'medium',
                'with-autocomplete--large': this.autocomplete && this.size === 'large'
              })}
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              ${this.autocomplete
                ? html`<o-input
                    part="autocomplete-input"
                    data-input-name="select-autocomplete-input"
                    class="autocomplete__input"
                    clearable
                    @keyup=${this.handleAutocompleteInput}
                    @keydown=${this.handleAutocompleteInput}
                    @o-input=${(event: Event) => {
                      this.dispatchAutocompleteInputEvent();
                      event.stopPropagation();
                    }}
                    @o-clear=${this.handleAutocompleteInput}
                    @o-change=${(event: Event) => event.stopPropagation()}
                    .size=${this.size}
                  ></o-input>`
                : ''}
              <slot name="options-prefix"></slot>
              <slot></slot>
              <slot name="options-suffix"></slot>
            </div>
          </o-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? 'false' : 'true'}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
}

setDefaultAnimation('select.show', {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: 'ease' }
});

setDefaultAnimation('select.hide', {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: 'ease' }
});

declare global {
  interface HTMLElementTagNameMap {
    'o-select': OSelect;
  }
}
