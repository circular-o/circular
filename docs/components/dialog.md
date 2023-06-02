<!-- cspell:dictionaries lorem-ipsum -->

# Dialog

[component-header:o-dialog]

```html preview
<o-dialog label="Dialog" class="dialog-overview">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <o-button slot="footer" variant="primary">Close</o-button>
</o-dialog>

<o-button>Open Dialog</o-button>

<script>
  const dialog = document.querySelector('.dialog-overview');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('o-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { OButton, ODialog } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ODialog label="Dialog" open={open} onSlAfterHide={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <OButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </OButton>
      </ODialog>

      <OButton onClick={() => setOpen(true)}>Open Dialog</OButton>
    </>
  );
};
```

## UX Tips

- Use a dialog when you immediately require the user's attention, e.g. confirming a destructive action.
- Always provide an obvious way for the user to dismiss the dialog.
- Don't nest dialogs. It almost always leads to a poor experience for the user.

## Examples

### Custom Width

Use the `--width` custom property to set the dialog's width.

```html preview
<o-dialog label="Dialog" class="dialog-width" style="--width: 50vw;">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <o-button slot="footer" variant="primary">Close</o-button>
</o-dialog>

<o-button>Open Dialog</o-button>

<script>
  const dialog = document.querySelector('.dialog-width');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('o-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { OButton, ODialog } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ODialog label="Dialog" open={open} style={{ '--width': '50vw' }} onSlAfterHide={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <OButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </OButton>
      </ODialog>

      <OButton onClick={() => setOpen(true)}>Open Dialog</OButton>
    </>
  );
};
```

### Scrolling

By design, a dialog's height will never exceed that of the viewport. As such, dialogs will not scroll with the page ensuring the header and footer are always accessible to the user.

```html preview
<o-dialog label="Dialog" class="dialog-scrolling">
  <div style="height: 150vh; border: dashed 2px var(--o-color-neutral-200); padding: 0 1rem;">
    <p>Scroll down and give it a try! 👇</p>
  </div>
  <o-button slot="footer" variant="primary">Close</o-button>
</o-dialog>

<o-button>Open Dialog</o-button>

<script>
  const dialog = document.querySelector('.dialog-scrolling');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('o-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { OButton, ODialog } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ODialog label="Dialog" open={open} onSlAfterHide={() => setOpen(false)}>
        <div
          style={{
            height: '150vh',
            border: 'dashed 2px var(--o-color-neutral-200)',
            padding: '0 1rem'
          }}
        >
          <p>Scroll down and give it a try! 👇</p>
        </div>

        <OButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </OButton>
      </ODialog>

      <OButton onClick={() => setOpen(true)}>Open Dialog</OButton>
    </>
  );
};
```

### Header Actions

The header shows a functional close button by default. You can use the `header-actions` slot to add additional [icon buttons](/components/icon-button) if needed.

```html preview
<o-dialog label="Dialog" class="dialog-header-actions">
  <o-icon-button class="new-window" slot="header-actions" name="box-arrow-up-right"></o-icon-button>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <o-button slot="footer" variant="primary">Close</o-button>
</o-dialog>

<o-button>Open Dialog</o-button>

<script>
  const dialog = document.querySelector('.dialog-header-actions');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('o-button[slot="footer"]');
  const newWindowButton = dialog.querySelector('.new-window');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
  newWindowButton.addEventListener('click', () => window.open(location.href));
</script>
```

```jsx react
import { useState } from 'react';
import { OButton, ODialog, OIconButton } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ODialog label="Dialog" open={open} onSlAfterHide={() => setOpen(false)}>
        <OIconButton
          class="new-window"
          slot="header-actions"
          name="box-arrow-up-right"
          onClick={() => window.open(location.href)}
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <OButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </OButton>
      </ODialog>

      <OButton onClick={() => setOpen(true)}>Open Dialog</OButton>
    </>
  );
};
```

### Preventing the Dialog from Closing

By default, dialogs will close when the user clicks the close button, clicks the overlay, or presses the <kbd>Escape</kbd> key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.

To keep the dialog open in such cases, you can cancel the `o-request-close` event. When canceled, the dialog will remain open and pulse briefly to draw the user's attention to it.

You can use `event.detail.source` to determine what triggered the request to close. This example prevents the dialog from closing when the overlay is clicked, but allows the close button or <kbd>Escape</kbd> to dismiss it.

```html preview
<o-dialog label="Dialog" class="dialog-deny-close">
  This dialog will not close when you click on the overlay.
  <o-button slot="footer" variant="primary">Close</o-button>
</o-dialog>

<o-button>Open Dialog</o-button>

<script>
  const dialog = document.querySelector('.dialog-deny-close');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('o-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());

  // Prevent the dialog from closing when the user clicks on the overlay
  dialog.addEventListener('o-request-close', event => {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  });
</script>
```

```jsx react
import { useState } from 'react';
import { OButton, ODialog } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  // Prevent the dialog from closing when the user clicks on the overlay
  function handleRequestClose(event) {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  }

  return (
    <>
      <ODialog label="Dialog" open={open} onSlRequestClose={handleRequestClose} onSlAfterHide={() => setOpen(false)}>
        This dialog will not close when you click on the overlay.
        <OButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </OButton>
      </ODialog>

      <OButton onClick={() => setOpen(true)}>Open Dialog</OButton>
    </>
  );
};
```

### Customizing Initial Focus

By default, the dialog's panel will gain focus when opened. This allows a subsequent tab press to focus on the first tabbable element in the dialog. If you want a different element to have focus, add the `autofocus` attribute to it as shown below.

```html preview
<o-dialog label="Dialog" class="dialog-focus">
  <o-input autofocus placeholder="I will have focus when the dialog is opened"></o-input>
  <o-button slot="footer" variant="primary">Close</o-button>
</o-dialog>

<o-button>Open Dialog</o-button>

<script>
  const dialog = document.querySelector('.dialog-focus');
  const input = dialog.querySelector('o-input');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('o-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { OButton, ODialog, OInput } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ODialog label="Dialog" open={open} onSlAfterHide={() => setOpen(false)}>
        <OInput autofocus placeholder="I will have focus when the dialog is opened" />
        <OButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </OButton>
      </ODialog>

      <OButton onClick={() => setOpen(true)}>Open Dialog</OButton>
    </>
  );
};
```

?> You can further customize initial focus behavior by canceling the `o-initial-focus` event and setting focus yourself inside the event handler.

[component-metadata:o-dialog]
