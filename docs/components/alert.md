# Alert

[component-header:o-alert]

```html preview
<o-alert open>
  <o-icon slot="icon" name="info-circle"></o-icon>
  This is a standard alert. You can customize its content and even the icon.
</o-alert>
```

```jsx react
import { OAlert, OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <OAlert open>
    <OIcon slot="icon" name="info-circle" />
    This is a standard alert. You can customize its content and even the icon.
  </OAlert>
);
```

?> Alerts will not be visible if the `open` attribute is not present.

## Examples

### Variants

Set the `variant` attribute to change the alert's variant.

```html preview
<o-alert variant="primary" open>
  <o-icon slot="icon" name="info-circle"></o-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</o-alert>

<br />

<o-alert variant="success" open>
  <o-icon slot="icon" name="check2-circle"></o-icon>
  <strong>Your changes have been saved</strong><br />
  You can safely exit the app now.
</o-alert>

<br />

<o-alert variant="neutral" open>
  <o-icon slot="icon" name="gear"></o-icon>
  <strong>Your settings have been updated</strong><br />
  Settings will take affect on next login.
</o-alert>

<br />

<o-alert variant="warning" open>
  <o-icon slot="icon" name="exclamation-triangle"></o-icon>
  <strong>Your session has ended</strong><br />
  Please login again to continue.
</o-alert>

<br />

<o-alert variant="danger" open>
  <o-icon slot="icon" name="exclamation-octagon"></o-icon>
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!
</o-alert>
```

```jsx react
import { OAlert, OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <OAlert variant="primary" open>
      <OIcon slot="icon" name="info-circle" />
      <strong>This is super informative</strong>
      <br />
      You can tell by how pretty the alert is.
    </OAlert>

    <br />

    <OAlert variant="success" open>
      <OIcon slot="icon" name="check2-circle" />
      <strong>Your changes have been saved</strong>
      <br />
      You can safely exit the app now.
    </OAlert>

    <br />

    <OAlert variant="neutral" open>
      <OIcon slot="icon" name="gear" />
      <strong>Your settings have been updated</strong>
      <br />
      Settings will take affect on next login.
    </OAlert>

    <br />

    <OAlert variant="warning" open>
      <OIcon slot="icon" name="exclamation-triangle" />
      <strong>Your session has ended</strong>
      <br />
      Please login again to continue.
    </OAlert>

    <br />

    <OAlert variant="danger" open>
      <OIcon slot="icon" name="exclamation-octagon" />
      <strong>Your account has been deleted</strong>
      <br />
      We're very sorry to see you go!
    </OAlert>
  </>
);
```

### Closable

Add the `closable` attribute to show a close button that will hide the alert.

```html preview
<o-alert variant="primary" open closable class="alert-closable">
  <o-icon slot="icon" name="info-circle"></o-icon>
  You can close this alert any time!
</o-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('o-after-hide', () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

```jsx react
import { useState } from 'react';
import { OAlert, OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => {
  const [open, setOpen] = useState(true);

  function handleHide() {
    setOpen(false);
    setTimeout(() => setOpen(true), 2000);
  }

  return (
    <OAlert open={open} closable onOAfterHide={handleHide}>
      <OIcon slot="icon" name="info-circle" />
      You can close this alert any time!
    </OAlert>
  );
};
```

### Without Icons

Icons are optional. Simply omit the `icon` slot if you don't want them.

```html preview
<o-alert variant="primary" open> Nothing fancy here, just a simple alert. </o-alert>
```

```jsx react
import { OAlert } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <OAlert variant="primary" open>
    Nothing fancy here, just a simple alert.
  </OAlert>
);
```

### Duration

Set the `duration` attribute to automatically hide an alert after a period of time. This is useful for alerts that don't require acknowledgement.

```html preview
<div class="alert-duration">
  <o-button variant="primary">Show Alert</o-button>

  <o-alert variant="primary" duration="3000" closable>
    <o-icon slot="icon" name="info-circle"></o-icon>
    This alert will automatically hide itself after three seconds, unless you interact with it.
  </o-alert>
</div>

<script>
  const container = document.querySelector('.alert-duration');
  const button = container.querySelector('o-button');
  const alert = container.querySelector('o-alert');

  button.addEventListener('click', () => alert.show());
</script>

<style>
  .alert-duration o-alert {
    margin-top: var(--o-spacing-medium);
  }
</style>
```

```jsx react
import { useState } from 'react';
import { OAlert, OButton, OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .alert-duration o-alert {
    margin-top: var(--o-spacing-medium);
  }
`;

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="alert-duration">
        <OButton variant="primary" onClick={() => setOpen(true)}>
          Show Alert
        </OButton>

        <OAlert variant="primary" duration="3000" open={open} closable onOAfterHide={() => setOpen(false)}>
          <OIcon slot="icon" name="info-circle" />
          This alert will automatically hide itself after three seconds, unless you interact with it.
        </OAlert>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Toast Notifications

To display an alert as a toast notification, or "toast", create the alert and call its `toast()` method. This will clone the alert and then add the cloned element into [the toast stack](#the-toast-stack) where it will be shown. Once dismissed, the cloned element will be removed from the DOM completely, and the original alert element will remain in the DOM. You can call `toast()` again as you wish.

You should always use the `closable` attribute so users can dismiss the notification. It's also common to set a reasonable `duration` when the notification doesn't require acknowledgement.

```html preview
<div class="alert-toast">
  <o-button variant="primary">Primary</o-button>
  <o-button variant="success">Success</o-button>
  <o-button variant="neutral">Neutral</o-button>
  <o-button variant="warning">Warning</o-button>
  <o-button variant="danger">Danger</o-button>

  <o-alert variant="primary" duration="3000" closable>
    <o-icon slot="icon" name="info-circle"></o-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
  </o-alert>

  <o-alert variant="success" duration="3000" closable>
    <o-icon slot="icon" name="check2-circle"></o-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
  </o-alert>

  <o-alert variant="neutral" duration="3000" closable>
    <o-icon slot="icon" name="gear"></o-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take affect on next login.
  </o-alert>

  <o-alert variant="warning" duration="3000" closable>
    <o-icon slot="icon" name="exclamation-triangle"></o-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </o-alert>

  <o-alert variant="danger" duration="3000" closable>
    <o-icon slot="icon" name="exclamation-octagon"></o-icon>
    <strong>Your account has been deleted</strong><br />
    We're very sorry to see you go!
  </o-alert>
</div>

<script>
  const container = document.querySelector('.alert-toast');

  ['primary', 'success', 'neutral', 'warning', 'danger'].map(variant => {
    const button = container.querySelector(`o-button[variant="${variant}"]`);
    const alert = container.querySelector(`o-alert[variant="${variant}"]`);

    button.addEventListener('click', () => alert.toast());
  });
</script>
```

```jsx react
import { useRef } from 'react';
import { OAlert, OButton, OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

function showToast(alert) {
  alert.toast();
}

const App = () => {
  const primary = useRef(null);
  const success = useRef(null);
  const neutral = useRef(null);
  const warning = useRef(null);
  const danger = useRef(null);

  return (
    <>
      <OButton variant="primary" onClick={() => primary.current.toast()}>
        Primary
      </OButton>

      <OButton variant="success" onClick={() => success.current.toast()}>
        Success
      </OButton>

      <OButton variant="neutral" onClick={() => neutral.current.toast()}>
        Neutral
      </OButton>

      <OButton variant="warning" onClick={() => warning.current.toast()}>
        Warning
      </OButton>

      <OButton variant="danger" onClick={() => danger.current.toast()}>
        Danger
      </OButton>

      <OAlert ref={primary} variant="primary" duration="3000" closable>
        <OIcon slot="icon" name="info-circle" />
        <strong>This is super informative</strong>
        <br />
        You can tell by how pretty the alert is.
      </OAlert>

      <OAlert ref={success} variant="success" duration="3000" closable>
        <OIcon slot="icon" name="check2-circle" />
        <strong>Your changes have been saved</strong>
        <br />
        You can safely exit the app now.
      </OAlert>

      <OAlert ref={neutral} variant="neutral" duration="3000" closable>
        <OIcon slot="icon" name="gear" />
        <strong>Your settings have been updated</strong>
        <br />
        Settings will take affect on next login.
      </OAlert>

      <OAlert ref={warning} variant="warning" duration="3000" closable>
        <OIcon slot="icon" name="exclamation-triangle" />
        <strong>Your session has ended</strong>
        <br />
        Please login again to continue.
      </OAlert>

      <OAlert ref={danger} variant="danger" duration="3000" closable>
        <OIcon slot="icon" name="exclamation-octagon" />
        <strong>Your account has been deleted</strong>
        <br />
        We're very sorry to see you go!
      </OAlert>
    </>
  );
};
```

### Open Toast automatically

Some times you need to display an alert immediately as a toast notification, without needing to get the reference and then call the `toast()` method.

If you have an alert reference already, you can set the property `openToast = true` and it will display the alert as a toast notification.

```html preview
<div class="alert-open-toast">
  <o-button variant="success">Open toast</o-button>

  <o-alert variant="success" open-toast duration="5000" closable>
    <o-icon slot="icon" name="info-circle"></o-icon>
    This alert will automatically open as a toast and then hide itself after few seconds. It is using
    <a href="%DOCS-WEBSITE%/components/alert?id=open-toast-automatically"><code>open-toast</code></a>
    property
  </o-alert>
</div>

<script>
  const container = document.querySelector('.alert-open-toast');
  const button = container.querySelector('o-button');
  const alert = container.querySelector('o-alert');

  button.addEventListener('click', () => (alert.openToast = true));
</script>

<style>
  .alert-duration o-alert {
    margin-top: var(--o-spacing-medium);
  }
</style>
```

```jsx react
import { useState } from 'react';
import { OAlert, OButton, OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .alert-duration o-alert {
    margin-top: var(--o-spacing-medium);
  }
`;

const App = () => {
  const [openToast, setOpenToast] = useState(false);

  return (
    <>
      <div className="alert-duration">
        <OButton variant="primary" onClick={() => setOpenToast(true)}>
          Open toast
        </OButton>

        <OAlert
          variant="primary"
          duration="5000"
          open-toast={openToast}
          closable
          onOAfterHide={() => setOpenToast(false)}
        >
          <OIcon slot="icon" name="info-circle" />
          This alert will automatically open as a toast and then hide itself after few seconds. It is using
          <a href="%DOCS-WEBSITE%/components/alert?id=open-toast-automatically">
            <code>open-toast</code>
          </a>
          property
        </OAlert>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Creating Toasts Imperatively

For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the `toast()` method as shown in the example below.

```html preview
<div class="alert-toast-wrapper">
  <o-button variant="primary">Create Toast</o-button>
</div>

<script>
  const container = document.querySelector('.alert-toast-wrapper');
  const button = container.querySelector('o-button');
  let count = 0;

  // Always escape HTML for text arguments!
  function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Custom function to emit toast notifications
  function notify(message, variant = 'primary', icon = 'info-circle', duration = 3000) {
    const alert = Object.assign(document.createElement('o-alert'), {
      variant,
      closable: true,
      duration: duration,
      innerHTML: `
        <o-icon name="${icon}" slot="icon"></o-icon>
        ${escapeHtml(message)}
      `
    });

    container.append(alert);

    return alert.toast().then(() => alert.remove());
  }

  button.addEventListener('click', () => {
    notify(`This is custom toast #${++count}`);
  });
</script>
```

### The Toast Stack

The toast stack is a fixed position singleton element created and managed internally by the alert component. It will be added and removed from the DOM as needed when toasts are shown. When more than one toast is visible, they will stack vertically in the toast stack.

By default, the toast stack is positioned at the top-right of the viewport. You can change its position by targeting `.o-toast-stack` in your stylesheet. To make toasts appear at the top-left of the viewport, for example, use the following styles.

```css
.o-toast-stack {
  left: 0;
  right: auto;
}
```

?> By design, it is not possible to show toasts in more than one stack simultaneously. Such behavior is confusing and makes for a poor user experience.

[component-metadata:o-alert]
