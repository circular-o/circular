import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { clickOnElement } from '../../internal/test';
import { runFormControlBaseTests } from '../../internal/test/form-control-base-tests';
import { sendKeys } from '@web/test-runner-commands';
import { serialize } from '../../utilities/form';
import sinon from 'sinon';
import type OOption from '../option/option';
import type OSelect from './select';

describe('<o-select>', () => {
  describe('accessibility', () => {
    it('should pass accessibility tests when closed', async () => {
      const select = await fixture<OSelect>(html`
        <o-select label="Select one">
          <o-option value="option-1">Option 1</o-option>
          <o-option value="option-2">Option 2</o-option>
          <o-option value="option-3">Option 3</o-option>
        </o-select>
      `);
      await expect(select).to.be.accessible();
    });

    it('should pass accessibility tests when open', async () => {
      const select = await fixture<OSelect>(html`
        <o-select label="Select one">
          <o-option value="option-1">Option 1</o-option>
          <o-option value="option-2">Option 2</o-option>
          <o-option value="option-3">Option 3</o-option>
        </o-select>
      `);

      await select.show();

      await expect(select).to.be.accessible();
    });
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<OSelect>(html`
      <o-select disabled>
        <o-option value="option-1">Option 1</o-option>
        <o-option value="option-2">Option 2</o-option>
        <o-option value="option-3">Option 3</o-option>
      </o-select>
    `);
    expect(el.displayInput.disabled).to.be.true;
  });

  it('should show a placeholder when no options are selected', async () => {
    const el = await fixture<OSelect>(html`
      <o-select placeholder="Select one">
        <o-option value="option-1">Option 1</o-option>
        <o-option value="option-2">Option 2</o-option>
        <o-option value="option-3">Option 3</o-option>
      </o-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="display-input"]')!;

    expect(getComputedStyle(displayInput).opacity).to.not.equal('0');
    expect(displayInput.placeholder).to.equal('Select one');
  });

  it('should show a placeholder when no options are selected and multiple is set', async () => {
    const el = await fixture<OSelect>(html`
      <o-select placeholder="Select a few" multiple>
        <o-option value="option-1">Option 1</o-option>
        <o-option value="option-2">Option 2</o-option>
        <o-option value="option-3">Option 3</o-option>
      </o-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="display-input"]')!;

    expect(getComputedStyle(displayInput).opacity).to.not.equal('0');
    expect(displayInput.placeholder).to.equal('Select a few');
  });

  it('should not allow selection when the option is disabled', async () => {
    const el = await fixture<OSelect>(html`
      <o-select value="option-1">
        <o-option value="option-1">Option 1</o-option>
        <o-option value="option-2" disabled>Option 2</o-option>
      </o-select>
    `);
    const disabledOption = el.querySelector('o-option[disabled]')!;

    await el.show();
    await clickOnElement(disabledOption);
    await el.updateComplete;

    expect(el.value).to.equal('option-1');
  });

  it('should focus the select when clicking on the label', async () => {
    const el = await fixture<OSelect>(html`
      <o-select label="Select One">
        <o-option value="option-1">Option 1</o-option>
        <o-option value="option-2">Option 2</o-option>
        <o-option value="option-3">Option 3</o-option>
      </o-select>
    `);
    const label = el.shadowRoot!.querySelector('[part~="form-control-label"]')!;
    const focusHandler = sinon.spy();

    el.addEventListener('o-focus', focusHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => focusHandler.calledOnce);

    expect(focusHandler).to.have.been.calledOnce;
  });

  describe('when the value changes', () => {
    it('should emit o-change when the value is changed with the mouse', async () => {
      const el = await fixture<OSelect>(html`
        <o-select value="option-1">
          <o-option value="option-1">Option 1</o-option>
          <o-option value="option-2">Option 2</o-option>
          <o-option value="option-3">Option 3</o-option>
        </o-select>
      `);
      const secondOption = el.querySelectorAll<OOption>('o-option')[1];
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('o-change', changeHandler);
      el.addEventListener('o-input', inputHandler);

      await el.show();
      await clickOnElement(secondOption);
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
      expect(el.value).to.equal('option-2');
    });

    it('should emit o-change and o-input when the value is changed with the keyboard', async () => {
      const el = await fixture<OSelect>(html`
        <o-select value="option-1">
          <o-option value="option-1">Option 1</o-option>
          <o-option value="option-2">Option 2</o-option>
          <o-option value="option-3">Option 3</o-option>
        </o-select>
      `);
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('o-change', changeHandler);
      el.addEventListener('o-input', inputHandler);

      el.focus();
      await el.updateComplete;
      await sendKeys({ press: ' ' }); // open the dropdown
      await aTimeout(500); // wait for the dropdown to open
      await sendKeys({ press: 'ArrowDown' }); // move selection to the second option
      await el.updateComplete;
      await sendKeys({ press: 'ArrowDown' }); // move selection to the third option
      await el.updateComplete;
      await sendKeys({ press: 'Enter' }); // commit the selection
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
      expect(el.value).to.equal('option-3');
    });

    it('should not emit o-change or o-input when the value is changed programmatically', async () => {
      const el = await fixture<OSelect>(html`
        <o-select value="option-1">
          <o-option value="option-1">Option 1</o-option>
          <o-option value="option-2">Option 2</o-option>
          <o-option value="option-3">Option 3</o-option>
        </o-select>
      `);

      el.addEventListener('o-change', () => expect.fail('o-change should not be emitted'));
      el.addEventListener('o-input', () => expect.fail('o-input should not be emitted'));
      el.value = 'option-2';

      await el.updateComplete;
    });

    it('should emit o-change and o-input with the correct validation message when the value changes', async () => {
      const el = await fixture<OSelect>(html`
        <o-select required>
          <o-option value="option-1">Option 1</o-option>
          <o-option value="option-2">Option 2</o-option>
          <o-option value="option-3">Option 3</o-option>
        </o-select>
      `);
      const option2 = el.querySelectorAll('o-option')[1];
      const handler = sinon.spy((event: CustomEvent) => {
        if (el.validationMessage) {
          expect.fail(`Validation message should be empty when ${event.type} is emitted and a value is set`);
        }
      });

      el.addEventListener('o-change', handler);
      el.addEventListener('o-input', handler);

      await clickOnElement(el);
      await aTimeout(500);
      await clickOnElement(option2);
      await el.updateComplete;

      expect(handler).to.be.calledTwice;
    });
  });

  it('should open the listbox when any letter key is pressed with o-select is on focus', async () => {
    const el = await fixture<OSelect>(html`
      <o-select>
        <o-option value="option-1">Option 1</o-option>
        <o-option value="option-2">Option 2</o-option>
        <o-option value="option-3">Option 3</o-option>
      </o-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__display-input')!;

    el.focus();
    await sendKeys({ press: 'r' });
    await el.updateComplete;

    expect(displayInput.getAttribute('aria-expanded')).to.equal('true');
  });

  it('should not open the listbox when ctrl + R is pressed with o-select is on focus', async () => {
    const el = await fixture<OSelect>(html`
      <o-select>
        <o-option value="option-1">Option 1</o-option>
        <o-option value="option-2">Option 2</o-option>
        <o-option value="option-3">Option 3</o-option>
      </o-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__display-input')!;

    el.focus();
    await sendKeys({ down: 'Control' });
    await sendKeys({ press: 'r' });
    await sendKeys({ up: 'Control' });
    await el.updateComplete;
    expect(displayInput.getAttribute('aria-expanded')).to.equal('false');
  });

  describe('when using constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <o-select>
            <o-option value="option-1">Option 1</o-option>
            <o-option value="option-2">Option 2</o-option>
            <o-option value="option-3">Option 3</o-option>
          </o-select>
        </form>
      `);
      const select = el.querySelector<OSelect>('o-select')!;
      expect(select.checkValidity()).to.be.true;
    });

    it('should be invalid when required and empty', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <o-select required>
            <o-option value="option-1">Option 1</o-option>
            <o-option value="option-2">Option 2</o-option>
            <o-option value="option-3">Option 3</o-option>
          </o-select>
        </form>
      `);
      const select = el.querySelector<OSelect>('o-select')!;
      expect(select.checkValidity()).to.be.false;
    });

    it('should focus on the displayInput when constraint validation occurs', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <o-select required>
            <o-option value="option-1">Option 1</o-option>
            <o-option value="option-2">Option 2</o-option>
            <o-option value="option-3">Option 3</o-option>
          </o-select>
        </form>
      `);
      const select = el.querySelector<OSelect>('o-select')!;
      el.requestSubmit();
      expect(select.shadowRoot!.activeElement).to.equal(select.displayInput);
    });

    it('should receive the correct validation attributes ("states") when valid', async () => {
      const el = await fixture<OSelect>(html`
        <o-select label="Select one" required value="option-1">
          <o-option value="option-1">Option 1</o-option>
          <o-option value="option-2">Option 2</o-option>
          <o-option value="option-3">Option 3</o-option>
        </o-select>
      `);
      const secondOption = el.querySelectorAll('o-option')[1]!;

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.false;
      expect(el.hasAttribute('data-valid')).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      await el.show();
      await clickOnElement(secondOption);
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const el = await fixture<OSelect>(html`
        <o-select label="Select one" required>
          <o-option value="option-1">Option 1</o-option>
          <o-option value="option-2">Option 2</o-option>
          <o-option value="option-3">Option 3</o-option>
        </o-select>
      `);
      const secondOption = el.querySelectorAll('o-option')[1]!;

      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.true;
      expect(el.hasAttribute('data-valid')).to.be.false;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      await el.show();
      await clickOnElement(secondOption);
      el.value = '';
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.hasAttribute('data-user-invalid')).to.be.true;
      expect(el.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form novalidate>
          <o-select required>
            <o-option value="option-1">Option 1</o-option>
            <o-option value="option-2">Option 2</o-option>
            <o-option value="option-3">Option 3</o-option>
          </o-select>
        </form>
      `);
      const select = el.querySelector<OSelect>('o-select')!;

      expect(select.hasAttribute('data-required')).to.be.true;
      expect(select.hasAttribute('data-optional')).to.be.false;
      expect(select.hasAttribute('data-invalid')).to.be.true;
      expect(select.hasAttribute('data-valid')).to.be.false;
      expect(select.hasAttribute('data-user-invalid')).to.be.false;
      expect(select.hasAttribute('data-user-valid')).to.be.false;
    });
  });

  describe('when submitting a form', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <o-select name="a" value="option-1">
            <o-option value="option-1">Option 1</o-option>
            <o-option value="option-2">Option 2</o-option>
            <o-option value="option-3">Option 3</o-option>
          </o-select>
        </form>
      `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('option-1');
    });

    it('should serialize its name and value in FormData when multiple options are selected', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <o-select name="a" value="option-2 option-3" multiple>
            <o-option value="option-1">Option 1</o-option>
            <o-option value="option-2">Option 2</o-option>
            <o-option value="option-3">Option 3</o-option>
          </o-select>
        </form>
      `);
      const formData = new FormData(form);
      expect(formData.getAll('a')).to.include('option-2');
      expect(formData.getAll('a')).to.include('option-3');
    });

    it('should serialize its name and value in JSON', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <o-select name="a" value="option-1">
            <o-option value="option-1">Option 1</o-option>
            <o-option value="option-2">Option 2</o-option>
            <o-option value="option-3">Option 3</o-option>
          </o-select>
        </form>
      `);
      const json = serialize(form);
      expect(json.a).to.equal('option-1');
    });

    it('should serialize its name and value in JSON when multiple options are selected', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <o-select name="a" value="option-2 option-3" multiple>
            <o-option value="option-1">Option 1</o-option>
            <o-option value="option-2">Option 2</o-option>
            <o-option value="option-3">Option 3</o-option>
          </o-select>
        </form>
      `);
      const json = serialize(form);
      expect(JSON.stringify(json)).to.equal(JSON.stringify({ a: ['option-2', 'option-3'] }));
    });

    it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <o-button type="submit">Submit</o-button>
          </form>
          <o-select form="f" name="a" value="option-1">
            <o-option value="option-1">Option 1</o-option>
            <o-option value="option-2">Option 2</o-option>
            <o-option value="option-3">Option 3</o-option>
          </o-select>
        </div>
      `);
      const form = el.querySelector('form')!;
      const formData = new FormData(form);

      expect(formData.get('a')).to.equal('option-1');
    });
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <o-select value="option-1">
            <o-option value="option-1">Option 1</o-option>
            <o-option value="option-2">Option 2</o-option>
            <o-option value="option-3">Option 3</o-option>
          </o-select>
          <o-button type="reset">Reset</o-button>
        </form>
      `);
      const resetButton = form.querySelector('o-button')!;
      const select = form.querySelector('o-select')!;

      select.value = 'option-3';
      await select.updateComplete;
      expect(select.value).to.equal('option-3');

      setTimeout(() => clickOnElement(resetButton));
      await oneEvent(form, 'reset');
      await select.updateComplete;
      expect(select.value).to.equal('option-1');
    });
  });

  it('should update the display label when an option changes', async () => {
    const el = await fixture<OSelect>(html`
      <o-select value="option-1">
        <o-option value="option-1">Option 1</o-option>
        <o-option value="option-2">Option 2</o-option>
        <o-option value="option-3">Option 3</o-option>
      </o-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__display-input')!;
    const option = el.querySelector('o-option')!;

    expect(displayInput.value).to.equal('Option 1');

    option.textContent = 'updated';
    await oneEvent(option, 'slotchange');
    await el.updateComplete;

    expect(displayInput.value).to.equal('updated');
  });

  it('should emit o-focus and o-blur when receiving and losing focus', async () => {
    const el = await fixture<OSelect>(html`
      <o-select value="option-1">
        <o-option value="option-1">Option 1</o-option>
        <o-option value="option-2">Option 2</o-option>
        <o-option value="option-3">Option 3</o-option>
      </o-select>
    `);
    const focusHandler = sinon.spy();
    const blurHandler = sinon.spy();

    el.addEventListener('o-focus', focusHandler);
    el.addEventListener('o-blur', blurHandler);

    el.focus();
    await el.updateComplete;
    el.blur();
    await el.updateComplete;

    expect(focusHandler).to.have.been.calledOnce;
    expect(blurHandler).to.have.been.calledOnce;
  });

  it('should emit o-clear when the clear button is clicked', async () => {
    const el = await fixture<OSelect>(html`
      <o-select value="option-1" clearable>
        <o-option value="option-1">Option 1</o-option>
        <o-option value="option-2">Option 2</o-option>
        <o-option value="option-3">Option 3</o-option>
      </o-select>
    `);
    const clearHandler = sinon.spy();
    const clearButton = el.shadowRoot!.querySelector('[part~="clear-button"]')!;

    el.addEventListener('o-clear', clearHandler);
    await el.show();
    await clickOnElement(clearButton);
    await el.updateComplete;

    expect(clearHandler).to.have.been.calledOnce;
  });

  it('should emit o-change and o-input when a tag is removed', async () => {
    const el = await fixture<OSelect>(html`
      <o-select value="option-1 option-2 option-3" multiple>
        <o-option value="option-1">Option 1</o-option>
        <o-option value="option-2">Option 2</o-option>
        <o-option value="option-3">Option 3</o-option>
      </o-select>
    `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();
    const tag = el.shadowRoot!.querySelector('[part~="tag"]')!;
    const removeButton = tag.shadowRoot!.querySelector('[part~="remove-button"]')!;

    el.addEventListener('o-change', changeHandler);
    el.addEventListener('o-input', inputHandler);

    await clickOnElement(removeButton);
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
  });

  it('should emit o-show, o-after-show, o-hide, and o-after-hide events when the listbox opens and closes', async () => {
    const el = await fixture<OSelect>(html`
      <o-select value="option-1">
        <o-option value="option-1">Option 1</o-option>
        <o-option value="option-2">Option 2</o-option>
        <o-option value="option-3">Option 3</o-option>
      </o-select>
    `);
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('o-show', showHandler);
    el.addEventListener('o-after-show', afterShowHandler);
    el.addEventListener('o-hide', hideHandler);
    el.addEventListener('o-after-hide', afterHideHandler);

    await el.show();
    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;

    await el.hide();
    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
  });

  it('should have rounded tags when using the pill attribute', async () => {
    const el = await fixture<OSelect>(html`
      <o-select value="option-1 option-2" multiple pill>
        <o-option value="option-1">Option 1</o-option>
        <o-option value="option-2">Option 2</o-option>
        <o-option value="option-3">Option 3</o-option>
      </o-select>
    `);
    const tag = el.shadowRoot!.querySelector('[part~="tag"]')!;

    expect(tag.hasAttribute('pill')).to.be.true;
  });

  describe('when using autocomplete', () => {
    it('should not have autocomplete input if autocomplete is not set', async () => {
      const el = await fixture<OSelect>(html` <o-select> </o-select> `);
      const autocompleteInput = el.shadowRoot!.querySelector('[part~="autocomplete-input"]')!;
      expect(autocompleteInput).to.be.null;
    });

    it('should have autocomplete input if autocomplete is set', async () => {
      const el = await fixture<OSelect>(html` <o-select autocomplete></o-select> `);

      const autocompleteInput = el.shadowRoot!.querySelector('[part~="autocomplete-input"]')!;
      expect(autocompleteInput).to.be.not.null;
    });

    it('should have autocomplete input focused when opens the listbox', async () => {
      const el = await fixture<OSelect>(html` <o-select autocomplete></o-select> `);
      const autocompleteInput = el.shadowRoot!.querySelector('[part~="autocomplete-input"]')!;

      await el.show();
      await el.updateComplete;
      // Wait for 300 milliseconds for the listbox to open and the input to be focused
      await new Promise(resolve => setTimeout(resolve, 300));

      expect(el.shadowRoot!.activeElement).to.equal(autocompleteInput);
    });

    const testAutocompleteFiltering = async (el: OSelect, { external = false } = {}) => {
      await el.show();
      // Wait for 300 milliseconds for the listbox to open and the input to be focused
      await new Promise(resolve => setTimeout(resolve, 300));
      await sendKeys({ type: 'm' });

      const options = el.querySelectorAll<OOption>('o-option');
      expect(options.length).to.equal(3);

      if (external) {
        expect(options[0].hidden).to.be.false;
        expect(options[1].hidden).to.be.false;
        expect(options[2].hidden).to.be.false;
      } else {
        expect(options[0].hidden).to.be.true;
        expect(options[1].hidden).to.be.false;
        expect(options[2].hidden).to.be.true;
      }
    };

    it('should filter the list of options when typing on the autocomplete input', async () => {
      const el = await fixture<OSelect>(html`
        <o-select autocomplete>
          <o-option value="option-1">Option 1</o-option>
          <o-option value="matrix">Matrix</o-option>
          <o-option value="option-3">Option 3</o-option>
        </o-select>
      `);

      await testAutocompleteFiltering(el);
    });

    it('should not filter the list of options when typing on the autocomplete input and autocomplete-external is set', async () => {
      const el = await fixture<OSelect>(html`
        <o-select autocomplete autocomplete-external>
          <o-option value="option-1">Option 1</o-option>
          <o-option value="matrix">Matrix</o-option>
          <o-option value="option-3">Option 3</o-option>
        </o-select>
      `);

      await testAutocompleteFiltering(el, { external: true });
    });

    it('should dispatch the o-autocomplete-input event when typing on the autocomplete input', async () => {
      const el = await fixture<OSelect>(html`<o-select autocomplete autocomplete-external></o-select>`);

      // Inspect if the event is dispatched
      const autocompleteInputHandler = sinon.spy();
      el.addEventListener('o-autocomplete-input', autocompleteInputHandler);

      await el.show();
      // Wait for 300 milliseconds for the listbox to open and the input to be focused
      await new Promise(resolve => setTimeout(resolve, 300));
      await sendKeys({ type: 'm' });
      // Wait for 300 milliseconds for the event to be dispatched
      await new Promise(resolve => setTimeout(resolve, 300));

      expect(autocompleteInputHandler).to.have.been.calledOnce;
    });

    it('should focus the autocomplete input and select the first option after an autocomplete external update', async () => {
      const el = await fixture<OSelect>(html`<o-select autocomplete autocomplete-external></o-select>`);

      // Inspect if the event is dispatched
      el.addEventListener('o-autocomplete-input', () => {
        el.innerHTML = `
          <o-option value="matrix">Matrix</o-option>
        `;
      });

      await el.show();
      // Wait for 300 milliseconds for the listbox to open and the input to be focused
      await new Promise(resolve => setTimeout(resolve, 300));
      await sendKeys({ type: 'm' });
      // Wait for 300 milliseconds for the event to be dispatched
      await new Promise(resolve => setTimeout(resolve, 300));

      const autocompleteInput = el.shadowRoot!.querySelector('[part~="autocomplete-input"]')!;
      expect(el.shadowRoot!.activeElement).to.equal(autocompleteInput);

      const option = el.querySelector<OOption>('o-option');
      expect(option?.current).to.be.true;
      expect(option).to.equal(el.currentOption);
    });

    const testNavigationWithAutocompleteInput = (option: OOption, el: OSelect) => {
      const autocompleteInput = el.shadowRoot!.querySelector('[part~="autocomplete-input"]')!;
      expect(option).to.equal(el.currentOption);
      expect(el.shadowRoot!.activeElement).to.equal(autocompleteInput);
    };

    const navigateWithArrows = async (key: string, el: OSelect) => {
      await sendKeys({ press: key });
      await el.updateComplete;
    };

    it('should navigate the autocomplete input when using the arrows keys', async () => {
      const el = await fixture<OSelect>(html`
        <o-select autocomplete>
          <o-option value="first">First option</o-option>
          <o-option value="last">Last option</o-option>
        </o-select>
      `);

      const options = el.querySelectorAll<OOption>('o-option');
      const FIRST_OPTION = options[0];
      const LAST_OPTION = options[1];

      await el.show();
      // Wait for 300 milliseconds for the listbox to open and the input to be focused
      await new Promise(resolve => setTimeout(resolve, 300));

      // First option should be the current one
      testNavigationWithAutocompleteInput(FIRST_OPTION, el);

      // Focus the last option
      await navigateWithArrows('ArrowDown', el);
      // Last option should be the current one
      testNavigationWithAutocompleteInput(LAST_OPTION, el);

      // Focus the first option again
      await navigateWithArrows('ArrowDown', el);
      testNavigationWithAutocompleteInput(FIRST_OPTION, el);

      // Focus the last option
      await navigateWithArrows('ArrowUp', el);
      // Last option should be the current one
      testNavigationWithAutocompleteInput(LAST_OPTION, el);

      // Focus the first option again
      await navigateWithArrows('ArrowUp', el);
      testNavigationWithAutocompleteInput(FIRST_OPTION, el);
    });
  });

  runFormControlBaseTests('o-select');
});
