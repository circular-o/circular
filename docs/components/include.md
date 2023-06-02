# Include

[component-header:o-include]

Included files are asynchronously requested using `window.fetch()`. Requests are cached, so the same file can be included multiple times, but only one request will be made.

The included content will be inserted into the `<o-include>` element's default slot so it can be easily accessed and styled through the light DOM.

```html preview
<o-include src="assets/examples/include.html"></o-include>
```

```jsx react
import { OInclude } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => <OInclude src="assets/examples/include.html" />;
```

## Examples

### Listening for Events

When an include file loads successfully, the `o-load` event will be emitted. You can listen for this event to add custom loading logic to your includes.

If the request fails, the `o-error` event will be emitted. In this case, `event.detail.status` will contain the resulting HTTP status code of the request, e.g. 404 (not found).

```html
<o-include src="assets/examples/include.html"></o-include>

<script>
  const include = document.querySelector('o-include');

  include.addEventListener('o-load', event => {
    if (event.eventPhase === Event.AT_TARGET) {
      console.log('Success');
    }
  });

  include.addEventListener('o-error', event => {
    if (event.eventPhase === Event.AT_TARGET) {
      console.log('Error', event.detail.status);
    }
  });
</script>
```

[component-metadata:o-include]
