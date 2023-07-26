import '../icon-button/icon-button.js';
import { animateTo, stopAnimations } from '../../internal/animate.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import LibraryBaseElement from '../../internal/library-base-element.js';
import styles from './alert.styles.js';
import type { CSSResultGroup } from 'lit';

const toastStack = Object.assign(document.createElement('div'), { className: 'o-toast-stack' });

/**
 * @summary Alerts are used to display important messages inline or as toast notifications.
 * @documentation /components/alert
 * @status stable
 * @since 1.5
 *
 * @dependency o-icon-button
 *
 * @slot - The alert's main content.
 * @slot icon - An icon to show in the alert. Works best with `<o-icon>`.
 *
 * @event o-show - Emitted when the alert opens.
 * @event o-after-show - Emitted after the alert opens and all animations are complete.
 * @event o-hide - Emitted when the alert closes.
 * @event o-after-hide - Emitted after the alert closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The container that wraps the optional icon.
 * @csspart message - The container that wraps the alert's main content.
 * @csspart close-button - The close button, an `<o-icon-button>`.
 * @csspart close-button__base - The close button's exported `base` part.
 *
 * @animation alert.show - The animation to use when showing the alert.
 * @animation alert.hide - The animation to use when hiding the alert.
 */

@customElement('o-alert')
export default class OAlert extends LibraryBaseElement {
  static styles: CSSResultGroup = styles;

  private autoHideTimeout: number;
  private readonly hasSlotController = new HasSlotController(this, 'icon', 'suffix');
  private readonly localize = new LocalizeController(this);

  private toastElement: OAlert | undefined;

  @query('[part~="base"]') base: HTMLElement;

  /**
   * Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the alert's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /** Enables a close button that allows the user to dismiss the alert. */
  @property({ type: Boolean, reflect: true }) closable = false;

  /** The alert's theme variant. */
  @property({ reflect: true }) variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' = 'primary';

  /**
   * The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with
   * the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning
   * the alert will not close on its own.
   */
  @property({ type: Number }) duration = Infinity;

  /**
   * Indicates whether or not the alert should open using toast function. You can toggle this attribute to show the
   * alert as toast, or you can use the `toast()` method and this attribute will reflect the alert's open-toast state.
   */
  @property({ type: Boolean, reflect: true, attribute: 'open-toast' }) openToast = false;

  firstUpdated() {
    this.base.hidden = !this.open;
    this.handleOpenToastChange();
  }

  private restartAutoHide() {
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
    }
  }

  private handleCloseClick() {
    this.hide();
  }

  private handleMouseMove() {
    this.restartAutoHide();
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      this.emit('o-show');

      if (this.duration < Infinity) {
        this.restartAutoHide();
      }

      await stopAnimations(this.base);
      this.base.hidden = false;
      const { keyframes, options } = getAnimation(this, 'alert.show', { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);

      this.emit('o-after-show');
    } else {
      // Hide
      this.emit('o-hide');

      clearTimeout(this.autoHideTimeout);

      await stopAnimations(this.base);
      const { keyframes, options } = getAnimation(this, 'alert.hide', { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);
      this.base.hidden = true;

      this.emit('o-after-hide');
    }
  }

  @watch('duration')
  handleDurationChange() {
    this.restartAutoHide();
  }

  @watch('openToast', { waitUntilFirstUpdate: true })
  async handleOpenToastChange() {
    if (this.openToast) {
      await this.toast();
      this.openToast = false;
    } else if (!this.openToast && this.isToast()) {
      this.hide();
    }
  }

  /** Shows the alert. */
  async show() {
    const el = this.toastElement || this;

    if (el.open) {
      return undefined;
    }

    el.open = true;
    return waitForEvent(el, 'o-after-show');
  }

  /** Hides the alert */
  async hide() {
    const el = this.toastElement || this;

    if (!el.open) {
      return undefined;
    }

    el.open = false;
    return waitForEvent(el, 'o-after-hide');
  }

  private toastClone() {
    const el = this.cloneNode(true) as OAlert;

    // Set the attributes of the cloned element
    el.open = false;
    // It is very important to set the openToast property to false before appending the element to the toast stack
    // if not, the handleOpenToastChange method will be called again and the toast will be duplicated and running into an infinite loop
    el.openToast = false;
    el.closable = this.closable;
    el.duration = this.duration;
    el.variant = this.variant;

    // Emit cloned events on the original element
    el.addEventListener('o-show', () => this.emit('o-show'), { once: true });
    el.addEventListener('o-after-show', () => this.emit('o-after-show'), { once: true });
    el.addEventListener('o-hide', () => this.emit('o-hide'), { once: true });
    el.addEventListener('o-after-hide', () => this.emit('o-after-hide'), { once: true });

    this.setToastElement(el);

    return this.getToastElement()!;
  }

  private setToastElement(el: OAlert | undefined) {
    this.toastElement = el;
  }

  getToastElement() {
    return this.toastElement;
  }

  isToast() {
    return !!this.toastElement;
  }

  /**
   * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   */
  async toast() {
    return new Promise<void>(resolve => {
      if (toastStack.parentElement === null) {
        document.body.append(toastStack);
      }

      const el = this.toastClone();

      // Hide the current element, only the cloned element will be visible
      const prevDisplay = this.style.display;
      this.style.display = 'none';

      toastStack.append(el);

      // Wait for the toast stack to render
      requestAnimationFrame(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions -- force a reflow for the initial transition
        el.clientWidth;
        el.show();
      });

      el.addEventListener(
        'o-after-hide',
        () => {
          el.remove();

          this.setToastElement(undefined);
          this.style.display = prevDisplay;

          resolve();

          // Remove the toast stack from the DOM when there are no more alerts
          if (toastStack.querySelector('o-alert') === null) {
            toastStack.remove();
          }
        },
        { once: true }
      );
    });
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          alert: true,
          'alert--open': this.open,
          'alert--closable': this.closable,
          'alert--has-icon': this.hasSlotController.test('icon'),
          'alert--primary': this.variant === 'primary',
          'alert--success': this.variant === 'success',
          'alert--neutral': this.variant === 'neutral',
          'alert--warning': this.variant === 'warning',
          'alert--danger': this.variant === 'danger'
        })}
        role="alert"
        aria-hidden=${this.open ? 'false' : 'true'}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable
          ? html`
              <o-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term('close')}
                @click=${this.handleCloseClick}
              ></o-icon-button>
            `
          : ''}
      </div>
    `;
  }
}

setDefaultAnimation('alert.show', {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('alert.hide', {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 250, easing: 'ease' }
});

declare global {
  interface HTMLElementTagNameMap {
    'o-alert': OAlert;
  }
}
