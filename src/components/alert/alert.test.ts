import { aTimeout, expect, fixture, html, oneEvent } from '@open-wc/testing';
import { clickOnElement, moveMouseOnElement } from '../../internal/test';
import { queryByTestId } from '../../internal/test/data-testid-helpers';
import { resetMouse } from '@web/test-runner-commands';
import { runGlobalEventTests } from '../../internal/test/global-events';
import sinon from 'sinon';
import type OAlert from './alert';
import type OIconButton from '../icon-button/icon-button';

const getAlertContainer = (alert: OAlert): HTMLElement => {
  return alert.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
};

const expectAlertToBeVisible = (alert: OAlert): void => {
  const alertContainer = getAlertContainer(alert);
  const style = window.getComputedStyle(alertContainer);
  expect(style.display).not.to.equal('none');
  expect(style.visibility).not.to.equal('hidden');
  expect(style.visibility).not.to.equal('collapse');
};

const expectAlertToBeInvisible = (alert: OAlert): void => {
  const alertContainer = getAlertContainer(alert);
  const style = window.getComputedStyle(alertContainer);
  expect(style.display, 'alert should be invisible').to.equal('none');
};

const expectHideAndAfterHideToBeEmittedInCorrectOrder = async (alert: OAlert, action: () => void | Promise<void>) => {
  const hidePromise = oneEvent(alert, 'o-hide');
  const afterHidePromise = oneEvent(alert, 'o-after-hide');
  let afterHideHappened = false;
  oneEvent(alert, 'o-after-hide').then(() => (afterHideHappened = true));

  action();

  await hidePromise;
  expect(afterHideHappened).to.be.false;

  await afterHidePromise;
  expectAlertToBeInvisible(alert);
};

const expectShowAndAfterShowToBeEmittedInCorrectOrder = async (alert: OAlert, action: () => void | Promise<void>) => {
  const showPromise = oneEvent(alert, 'o-show');
  const afterShowPromise = oneEvent(alert, 'o-after-show');
  let afterShowHappened = false;
  oneEvent(alert, 'o-after-show').then(() => (afterShowHappened = true));

  action();

  await showPromise;
  expect(afterShowHappened).to.be.false;

  await afterShowPromise;
  expectAlertToBeVisible(alert);
};

const getCloseButton = (alert: OAlert): OIconButton | null | undefined =>
  (alert.isToast() ? alert.getToastElement()! : alert).shadowRoot?.querySelector<OIconButton>('[part="close-button"]');

describe('<o-alert>', () => {
  let clock: sinon.SinonFakeTimers | null = null;

  afterEach(async () => {
    clock?.restore();
    await resetMouse();
  });

  it('renders', async () => {
    const alert = await fixture<OAlert>(html`<o-alert open>I am an alert</o-alert>`);

    expectAlertToBeVisible(alert);
  });

  it('is accessible', async () => {
    const alert = await fixture<OAlert>(html`<o-alert open>I am an alert</o-alert>`);

    await expect(alert).to.be.accessible();
  });

  describe('alert visibility', () => {
    it('should be visible with the open attribute', async () => {
      const alert = await fixture<OAlert>(html`<o-alert open>I am an alert</o-alert>`);

      expectAlertToBeVisible(alert);
    });

    it('should not be visible without the open attribute', async () => {
      const alert = await fixture<OAlert>(html` <o-alert>I am an alert</o-alert>`);

      expectAlertToBeInvisible(alert);
    });

    it('should emit o-show and o-after-show when calling show()', async () => {
      const alert = await fixture<OAlert>(html` <o-alert>I am an alert</o-alert>`);

      expectAlertToBeInvisible(alert);

      await expectShowAndAfterShowToBeEmittedInCorrectOrder(alert, () => alert.show());
    });

    it('should emit o-hide and o-after-hide when calling hide()', async () => {
      const alert = await fixture<OAlert>(html` <o-alert open>I am an alert</o-alert>`);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => alert.hide());
    });

    it('should emit o-show and o-after-show when setting open = true', async () => {
      const alert = await fixture<OAlert>(html` <o-alert>I am an alert</o-alert> `);

      await expectShowAndAfterShowToBeEmittedInCorrectOrder(alert, () => {
        alert.open = true;
      });
    });

    it('should emit o-hide and o-after-hide when setting open = false', async () => {
      const alert = await fixture<OAlert>(html` <o-alert open>I am an alert</o-alert> `);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        alert.open = false;
      });
    });
  });

  describe('close button', () => {
    it('shows a close button if the alert has the closable attribute', () => async () => {
      const alert = await fixture<OAlert>(html` <o-alert open closable>I am an alert</o-alert> `);
      const closeButton = getCloseButton(alert);

      expect(closeButton).to.be.visible;
    });

    it('clicking the close button closes the alert', () => async () => {
      const alert = await fixture<OAlert>(html` <o-alert open closable>I am an alert</o-alert> `);
      const closeButton = getCloseButton(alert);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clickOnElement(closeButton!);
      });
    });
  });

  describe('toast', () => {
    const getToastStack = (): HTMLDivElement | null => document.querySelector<HTMLDivElement>('.o-toast-stack');

    const closeRemainingAlerts = async (): Promise<void> => {
      const toastStack = getToastStack();
      if (toastStack?.children) {
        for (const element of toastStack.children) {
          await (element as OAlert).hide();
        }
      }
    };

    beforeEach(async () => {
      await closeRemainingAlerts();
    });

    it('can be rendered as a toast', async () => {
      const alert = await fixture<OAlert>(html`<o-alert>I am an alert</o-alert>`);

      expectShowAndAfterShowToBeEmittedInCorrectOrder(alert, () => alert.toast());
      const toastStack = getToastStack();
      expect(toastStack).to.be.visible;
      expect(alert.isToast()).to.be.true;
      expect(toastStack?.firstChild).to.be.equal(alert.getToastElement()!);
      alert.remove();
    });

    it('resolves only after being closed', async () => {
      const alert = await fixture<OAlert>(html`<o-alert closable>I am an alert</o-alert>`);

      const afterShowEvent = oneEvent(alert, 'o-after-show');
      let toastPromiseResolved = false;

      alert.toast().then(() => {
        toastPromiseResolved = true;
        alert.remove();
      });

      await afterShowEvent;
      expect(toastPromiseResolved).to.be.false;

      const closePromise = oneEvent(alert, 'o-after-hide');
      const closeButton = getCloseButton(alert);
      clickOnElement(closeButton!);

      await closePromise;
      await aTimeout(0);

      expect(toastPromiseResolved).to.be.true;
    });

    const expectToastStack = () => {
      const toastStack = getToastStack();
      expect(toastStack).not.to.be.null;
      return toastStack;
    };

    const expectNoToastStack = () => {
      const toastStack = getToastStack();
      expect(toastStack).to.be.null;
    };

    const openToast = async (alert: OAlert): Promise<void> => {
      const openPromise = oneEvent(alert, 'o-after-show');
      alert.toast();
      await openPromise;
    };

    const closeToast = async (alert: OAlert): Promise<void> => {
      const closePromise = oneEvent(alert, 'o-after-hide');
      const closeButton = getCloseButton(alert);
      await clickOnElement(closeButton!);
      await closePromise;
      await aTimeout(0);
    };

    it('deletes the toast stack after the last alert is done', async () => {
      const container = await fixture<HTMLElement>(html`<div>
        <o-alert data-testid="alert1" closable>alert 1</o-alert>
        <o-alert data-testid="alert2" closable>alert 2</o-alert>
      </div>`);

      const alert1 = queryByTestId<OAlert>(container, 'alert1');
      const alert2 = queryByTestId<OAlert>(container, 'alert2');

      await openToast(alert1!);

      expectToastStack();

      await openToast(alert2!);

      expectToastStack();

      await closeToast(alert1!);

      expectToastStack();

      await closeToast(alert2!);

      expectNoToastStack();
    });

    const expectToastProperlyOpen = (alert: OAlert, msgsPrefix = '1') => {
      expect(alert.open, `${msgsPrefix}. open = false`).to.be.false;
      expect(alert.openToast, `${msgsPrefix}. openToast = true}`).to.be.true;
      expect(alert.isToast(), `${msgsPrefix}. isToast() = true`).to.be.true;

      const toastStack = expectToastStack();

      const toastElement = alert.getToastElement();
      expect(toastStack?.firstChild, `${msgsPrefix}. toastStack?.firstChild`).to.be.equal(toastElement);

      expect(toastElement?.open, `${msgsPrefix}. toast element open = true`).to.be.true;
      expect(toastElement?.openToast, `${msgsPrefix}. toast element openToast = false`).to.be.false;
      expect(toastElement?.isToast(), `${msgsPrefix}. toast element isToast() = false`).to.be.false;
    };

    const expectToastProperlyClosed = (alert: OAlert, msgPrefix = '1') => {
      expectNoToastStack();

      expect(alert.open, `${msgPrefix}. open = false`).to.be.false;
      expect(alert.openToast, `${msgPrefix}. openToast = false`).to.be.false;
      expect(alert.isToast(), `${msgPrefix}. isToast() = false`).to.be.false;
      expect(alert.getToastElement(), `${msgPrefix}. toastElement is undefined`).to.be.undefined;
    };

    const waitAfterShow = async (alert: OAlert): Promise<void> => {
      await oneEvent(alert, 'o-after-show');
      await aTimeout(0);
    };

    const waitAfterClose = async (alert: OAlert): Promise<void> => {
      await oneEvent(alert, 'o-after-hide');
      await aTimeout(0);
    };

    it('uses open-toast property to show and hide the alert as toast', async () => {
      const alert = await fixture<OAlert>(html`<o-alert open-toast>I am an alert</o-alert>`);

      /**
       * Case: 1
       * The alert is shown automatically as toast because the open-toast property is set
       * The alert is hidden as toast when the openToast property is set to false
       */
      await waitAfterShow(alert);
      expectToastProperlyOpen(alert);
      // Hide the alert by setting the openToast property to false
      alert.openToast = false;
      await waitAfterClose(alert);
      expectToastProperlyClosed(alert);

      /**
       * Case: 2
       * The alert is shown as toast when the openToast property is set to true
       * The alert is hidden as toast when hide method is called
       */
      // Show the alert using the open-toast property
      alert.openToast = true;
      await waitAfterShow(alert);
      expectToastProperlyOpen(alert, '2');
      // Hide the alert by using the hide method
      alert.hide();
      await waitAfterClose(alert);
      expectToastProperlyClosed(alert, '2');
    });
  });

  describe('timer controlled closing', () => {
    it('closes after a predefined amount of time', async () => {
      clock = sinon.useFakeTimers();
      const alert = await fixture<OAlert>(html` <o-alert open duration="3000">I am an alert</o-alert>`);

      expectAlertToBeVisible(alert);

      clock.tick(2999);

      expectAlertToBeVisible(alert);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clock?.tick(1);
      });
    });

    it('resets the closing timer after mouse-over', async () => {
      clock = sinon.useFakeTimers();
      const alert = await fixture<OAlert>(html` <o-alert open duration="3000">I am an alert</o-alert>`);

      expectAlertToBeVisible(alert);

      clock.tick(1000);

      await moveMouseOnElement(alert);

      clock.tick(2999);

      expectAlertToBeVisible(alert);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clock?.tick(1);
      });
    });

    it('resets the closing timer after opening', async () => {
      clock = sinon.useFakeTimers();
      const alert = await fixture<OAlert>(html` <o-alert duration="3000">I am an alert</o-alert>`);

      expectAlertToBeInvisible(alert);

      clock.tick(1000);

      const afterShowPromise = oneEvent(alert, 'o-after-show');
      alert.show();
      await afterShowPromise;

      clock.tick(2999);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clock?.tick(1);
      });
    });
  });

  describe('alert variants', () => {
    const variants = ['primary', 'success', 'neutral', 'warning', 'danger'];

    variants.forEach(variant => {
      it(`adapts to the variant: ${variant}`, async () => {
        const alert = await fixture<OAlert>(html`<o-alert variant="${variant}" open>I am an alert</o-alert>`);

        const alertContainer = getAlertContainer(alert);
        expect(alertContainer).to.have.class(`alert--${variant}`);
      });
    });
  });

  runGlobalEventTests<OAlert>('o-alert');
});
