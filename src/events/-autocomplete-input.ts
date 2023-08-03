import type OInput from '../components/input/input.component';

type OAutocompleteInputEvent = CustomEvent<{ ref: OInput; value: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'o-autocomplete-input': OAutocompleteInputEvent;
  }
}

export default OAutocompleteInputEvent;
