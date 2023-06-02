# Format Number

[component-header:o-format-number]

Localization is handled by the browser's [`Intl.NumberFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required.

```html preview
<div class="format-number-overview">
  <o-format-number value="1000"></o-format-number>
  <br /><br />
  <o-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></o-input>
</div>

<script>
  const container = document.querySelector('.format-number-overview');
  const formatter = container.querySelector('o-format-number');
  const input = container.querySelector('o-input');

  input.addEventListener('o-input', () => (formatter.value = input.value || 0));
</script>
```

```jsx react
import { useState } from 'react';
import { OFormatNumber, OInput } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      <OFormatNumber value={value} />
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

### Percentages

To get the value as a percent, set the `type` attribute to `percent`.

```html preview
<o-format-number type="percent" value="0"></o-format-number><br />
<o-format-number type="percent" value="0.25"></o-format-number><br />
<o-format-number type="percent" value="0.50"></o-format-number><br />
<o-format-number type="percent" value="0.75"></o-format-number><br />
<o-format-number type="percent" value="1"></o-format-number>
```

```jsx react
import { OFormatNumber } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <OFormatNumber type="percent" value={0} />
    <br />
    <OFormatNumber type="percent" value={0.25} />
    <br />
    <OFormatNumber type="percent" value={0.5} />
    <br />
    <OFormatNumber type="percent" value={0.75} />
    <br />
    <OFormatNumber type="percent" value={1} />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html preview
English: <o-format-number value="2000" lang="en" minimum-fraction-digits="2"></o-format-number><br />
German: <o-format-number value="2000" lang="de" minimum-fraction-digits="2"></o-format-number><br />
Russian: <o-format-number value="2000" lang="ru" minimum-fraction-digits="2"></o-format-number>
```

```jsx react
import { OFormatNumber } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    English: <OFormatNumber value="2000" lang="en" minimum-fraction-digits="2" />
    <br />
    German: <OFormatNumber value="2000" lang="de" minimum-fraction-digits="2" />
    <br />
    Russian: <OFormatNumber value="2000" lang="ru" minimum-fraction-digits="2" />
  </>
);
```

### Currency

To format a number as a monetary value, set the `type` attribute to `currency` and set the `currency` attribute to the desired ISO 4217 currency code. You should also specify `lang` to ensure the the number is formatted correctly for the target locale.

```html preview
<o-format-number type="currency" currency="USD" value="2000" lang="en-US"></o-format-number><br />
<o-format-number type="currency" currency="GBP" value="2000" lang="en-GB"></o-format-number><br />
<o-format-number type="currency" currency="EUR" value="2000" lang="de"></o-format-number><br />
<o-format-number type="currency" currency="RUB" value="2000" lang="ru"></o-format-number><br />
<o-format-number type="currency" currency="CNY" value="2000" lang="zh-cn"></o-format-number>
```

```jsx react
import { OFormatNumber } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <OFormatNumber type="currency" currency="USD" value="2000" lang="en-US" />
    <br />
    <OFormatNumber type="currency" currency="GBP" value="2000" lang="en-GB" />
    <br />
    <OFormatNumber type="currency" currency="EUR" value="2000" lang="de" />
    <br />
    <OFormatNumber type="currency" currency="RUB" value="2000" lang="ru" />
    <br />
    <OFormatNumber type="currency" currency="CNY" value="2000" lang="zh-cn" />
  </>
);
```

[component-metadata:o-format-number]
