# Format Date

[component-header:o-format-date]

Localization is handled by the browser's [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). No language packs are required.

```html preview
<!-- Shoelace 2 release date 🎉 -->
<o-format-date date="2020-07-15T09:17:00-04:00"></o-format-date>
```

```jsx react
import { OFormatDate } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => <OFormatDate date="2020-07-15T09:17:00-04:00" />;
```

The `date` attribute determines the date/time to use when formatting. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript. If omitted, the current date/time will be assumed.

?> When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.

## Examples

### Date & Time Formatting

Formatting options are based on those found in the [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). When formatting options are provided, the date/time will be formatted according to those values. When no formatting options are provided, a localized, numeric date will be displayed instead.

```html preview
<!-- Human-readable date -->
<o-format-date month="long" day="numeric" year="numeric"></o-format-date><br />

<!-- Time -->
<o-format-date hour="numeric" minute="numeric"></o-format-date><br />

<!-- Weekday -->
<o-format-date weekday="long"></o-format-date><br />

<!-- Month -->
<o-format-date month="long"></o-format-date><br />

<!-- Year -->
<o-format-date year="numeric"></o-format-date><br />

<!-- No formatting options -->
<o-format-date></o-format-date>
```

```jsx react
import { OFormatDate } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    {/* Human-readable date */}
    <OFormatDate month="long" day="numeric" year="numeric" />
    <br />

    {/* Time */}
    <OFormatDate hour="numeric" minute="numeric" />
    <br />

    {/* Weekday */}
    <OFormatDate weekday="long" />
    <br />

    {/* Month */}
    <OFormatDate month="long" />
    <br />

    {/* Year */}
    <OFormatDate year="numeric" />
    <br />

    {/* No formatting options */}
    <OFormatDate />
  </>
);
```

### Hour Formatting

By default, the browser will determine whether to use 12-hour or 24-hour time. To force one or the other, set the `hour-format` attribute to `12` or `24`.

```html preview
<o-format-date hour="numeric" minute="numeric" hour-format="12"></o-format-date><br />
<o-format-date hour="numeric" minute="numeric" hour-format="24"></o-format-date>
```

```jsx react
import { OFormatDate } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <OFormatDate hour="numeric" minute="numeric" hour-format="12" />
    <br />
    <OFormatDate hour="numeric" minute="numeric" hour-format="24" />
  </>
);
```

### Localization

Use the `lang` attribute to set the date/time formatting locale.

```html preview
English: <o-format-date lang="en"></o-format-date><br />
French: <o-format-date lang="fr"></o-format-date><br />
Russian: <o-format-date lang="ru"></o-format-date>
```

```jsx react
import { OFormatDate } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    English: <OFormatDate lang="en" />
    <br />
    French: <OFormatDate lang="fr" />
    <br />
    Russian: <OFormatDate lang="ru" />
  </>
);
```

[component-metadata:o-format-date]
