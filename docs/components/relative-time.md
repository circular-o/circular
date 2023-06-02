# Relative Time

[component-header:o-relative-time]

Localization is handled by the browser's [`Intl.RelativeTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat). No language packs are required.

```html preview
<!-- Shoelace 2 release date 🎉 -->
<o-relative-time date="2020-07-15T09:17:00-04:00"></o-relative-time>
```

```jsx react
import { ORelativeTime } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <ORelativeTime date="2020-07-15T09:17:00-04:00" />;
```

The `date` attribute determines when the date/time is calculated from. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript.

?> When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.

## Examples

### Keeping Time in Sync

Use the `sync` attribute to update the displayed value automatically as time passes.

```html preview
<div class="relative-time-sync">
  <o-relative-time sync></o-relative-time>
</div>

<script>
  const container = document.querySelector('.relative-time-sync');
  const relativeTime = container.querySelector('o-relative-time');

  relativeTime.date = new Date(new Date().getTime() - 60000);
</script>
```

```jsx react
import { ORelativeTime } from '%PACKAGE-FULL-PATH%/dist/react';

const date = new Date(new Date().getTime() - 60000);

const App = () => <ORelativeTime date={date} sync />;
```

### Formatting Styles

You can change how the time is displayed using the `format` attribute. Note that some locales may display the same values for `narrow` and `short` formats.

```html preview
<o-relative-time date="2020-07-15T09:17:00-04:00" format="narrow"></o-relative-time><br />
<o-relative-time date="2020-07-15T09:17:00-04:00" format="short"></o-relative-time><br />
<o-relative-time date="2020-07-15T09:17:00-04:00" format="long"></o-relative-time>
```

```jsx react
import { ORelativeTime } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <ORelativeTime date="2020-07-15T09:17:00-04:00" format="narrow" />
    <br />
    <ORelativeTime date="2020-07-15T09:17:00-04:00" format="short" />
    <br />
    <ORelativeTime date="2020-07-15T09:17:00-04:00" format="long" />
  </>
);
```

### Localization

Use the `lang` attribute to set the desired locale.

```html preview
English: <o-relative-time date="2020-07-15T09:17:00-04:00" lang="en-US"></o-relative-time><br />
Chinese: <o-relative-time date="2020-07-15T09:17:00-04:00" lang="zh-CN"></o-relative-time><br />
German: <o-relative-time date="2020-07-15T09:17:00-04:00" lang="de"></o-relative-time><br />
Greek: <o-relative-time date="2020-07-15T09:17:00-04:00" lang="el"></o-relative-time><br />
Russian: <o-relative-time date="2020-07-15T09:17:00-04:00" lang="ru"></o-relative-time>
```

```jsx react
import { ORelativeTime } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    English: <ORelativeTime date="2020-07-15T09:17:00-04:00" lang="en-US" />
    <br />
    Chinese: <ORelativeTime date="2020-07-15T09:17:00-04:00" lang="zh-CN" />
    <br />
    German: <ORelativeTime date="2020-07-15T09:17:00-04:00" lang="de" />
    <br />
    Greek: <ORelativeTime date="2020-07-15T09:17:00-04:00" lang="el" />
    <br />
    Russian: <ORelativeTime date="2020-07-15T09:17:00-04:00" lang="ru" />
  </>
);
```

[component-metadata:o-relative-time]
