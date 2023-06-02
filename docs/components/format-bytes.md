# Format Bytes

[component-header:o-format-bytes]

```html preview
<div class="format-bytes-overview">
  The file is <o-format-bytes value="1000"></o-format-bytes> in size. <br /><br />
  <o-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></o-input>
</div>

<script>
  const container = document.querySelector('.format-bytes-overview');
  const formatter = container.querySelector('o-format-bytes');
  const input = container.querySelector('o-input');

  input.addEventListener('o-input', () => (formatter.value = input.value || 0));
</script>
```

```jsx react
import { useState } from 'react';
import { OButton, OFormatBytes, OInput } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      The file is <OFormatBytes value={value} /> in size.
      <br />
      <br />
      <OInput
        type="number"
        value={value}
        label="Number to Format"
        style={{ maxWidth: '180px' }}
        onOInput={event => setValue(event.target.value)}
      />
    </>
  );
};
```

## Examples

### Formatting Bytes

Set the `value` attribute to a number to get the value in bytes.

```html preview
<o-format-bytes value="12"></o-format-bytes><br />
<o-format-bytes value="1200"></o-format-bytes><br />
<o-format-bytes value="1200000"></o-format-bytes><br />
<o-format-bytes value="1200000000"></o-format-bytes>
```

```jsx react
import { OFormatBytes } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <OFormatBytes value="12" />
    <br />
    <OFormatBytes value="1200" />
    <br />
    <OFormatBytes value="1200000" />
    <br />
    <OFormatBytes value="1200000000" />
  </>
);
```

### Formatting Bits

To get the value in bits, set the `unit` attribute to `bit`.

```html preview
<o-format-bytes value="12" unit="bit"></o-format-bytes><br />
<o-format-bytes value="1200" unit="bit"></o-format-bytes><br />
<o-format-bytes value="1200000" unit="bit"></o-format-bytes><br />
<o-format-bytes value="1200000000" unit="bit"></o-format-bytes>
```

```jsx react
import { OFormatBytes } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <OFormatBytes value="12" unit="bit" />
    <br />
    <OFormatBytes value="1200" unit="bit" />
    <br />
    <OFormatBytes value="1200000" unit="bit" />
    <br />
    <OFormatBytes value="1200000000" unit="bit" />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html preview
<o-format-bytes value="12" lang="de"></o-format-bytes><br />
<o-format-bytes value="1200" lang="de"></o-format-bytes><br />
<o-format-bytes value="1200000" lang="de"></o-format-bytes><br />
<o-format-bytes value="1200000000" lang="de"></o-format-bytes>
```

```jsx react
import { OFormatBytes } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <OFormatBytes value="12" lang="de" />
    <br />
    <OFormatBytes value="1200" lang="de" />
    <br />
    <OFormatBytes value="1200000" lang="de" />
    <br />
    <OFormatBytes value="1200000000" lang="de" />
  </>
);
```

[component-metadata:o-format-bytes]
