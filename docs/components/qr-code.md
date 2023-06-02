# QR Code

[component-header:o-qr-code]

QR codes are useful for providing small pieces of information to users who can quickly scan them with a smartphone. Most smartphones have built-in QR code scanners, so simply pointing the camera at a QR code will decode it and allow the user to visit a website, dial a phone number, read a message, etc.

```html preview
<div class="qr-overview">
  <o-qr-code value="%DOCS_WEBSITE%/" label="Scan this code to visit Shoelace on the web!"></o-qr-code>
  <br />

  <o-input maxlength="255" clearable label="Value"></o-input>
</div>

<script>
  const container = document.querySelector('.qr-overview');
  const qrCode = container.querySelector('o-qr-code');
  const input = container.querySelector('o-input');

  customElements.whenDefined('o-qr-code').then(() => {
    input.value = qrCode.value;
    input.addEventListener('o-input', () => (qrCode.value = input.value));
  });
</script>

<style>
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview o-input {
    margin-top: 1rem;
  }
</style>
```

```jsx react
import { useState } from 'react';
import { OQrCode, OInput } from '%PACKAGE_FULL_PATH%/dist/react';

const css = `
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview o-input {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [value, setValue] = useState('%DOCS_WEBSITE%/');

  return (
    <>
      <div className="qr-overview">
        <OQrCode value={value} label="Scan this code to visit Shoelace on the web!" />
        <br />

        <OInput maxlength="255" clearable onInput={event => setValue(event.target.value)} />
      </div>

      <style>{css}</style>
    </>
  );
};
```

## Examples

### Colors

Use the `fill` and `background` attributes to modify the QR code's colors. You should always ensure good contrast for optimal compatibility with QR code scanners.

```html preview
<o-qr-code value="%DOCS_WEBSITE%/" fill="deeppink" background="white"></o-qr-code>
```

```jsx react
import { OQrCode } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => <OQrCode value="%DOCS_WEBSITE%/" fill="deeppink" background="white" />;
```

### Size

Use the `size` attribute to change the size of the QR code.

```html preview
<o-qr-code value="%DOCS_WEBSITE%/" size="64"></o-qr-code>
```

```jsx react
import { OQrCode } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => <OQrCode value="%DOCS_WEBSITE%/" size="64" />;
```

### Radius

Create a rounded effect with the `radius` attribute.

```html preview
<o-qr-code value="%DOCS_WEBSITE%/" radius="0.5"></o-qr-code>
```

```jsx react
import { OQrCode } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => <OQrCode value="%DOCS_WEBSITE%/" radius="0.5" />;
```

### Error Correction

QR codes can be rendered with various levels of [error correction](https://www.qrcode.com/en/about/error_correction.html) that can be set using the `error-correction` attribute. This example generates four codes with the same value using different error correction levels.

```html preview
<div class="qr-error-correction">
  <o-qr-code value="%DOCS_WEBSITE%/" error-correction="L"></o-qr-code>
  <o-qr-code value="%DOCS_WEBSITE%/" error-correction="M"></o-qr-code>
  <o-qr-code value="%DOCS_WEBSITE%/" error-correction="Q"></o-qr-code>
  <o-qr-code value="%DOCS_WEBSITE%/" error-correction="H"></o-qr-code>
</div>

<style>
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
```

```jsx react
import { OQrCode } from '%PACKAGE_FULL_PATH%/dist/react';

const css = `
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const App = () => {
  return (
    <>
      <div className="qr-error-correction">
        <OQrCode value="%DOCS_WEBSITE%/" error-correction="L" />
        <OQrCode value="%DOCS_WEBSITE%/" error-correction="M" />
        <OQrCode value="%DOCS_WEBSITE%/" error-correction="Q" />
        <OQrCode value="%DOCS_WEBSITE%/" error-correction="H" />
      </div>

      <style>{css}</style>
    </>
  );
};
```

[component-metadata:o-qr-code]
