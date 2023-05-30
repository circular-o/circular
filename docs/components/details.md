<!-- cspell:dictionaries lorem-ipsum -->

# Details

[component-header:o-details]

```html preview
<o-details summary="Toggle Me">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</o-details>
```

```jsx react
import { ODetails } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <ODetails summary="Toggle Me">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </ODetails>
);
```

## Examples

### Disabled

Use the `disable` attribute to prevent the details from expanding.

```html preview
<o-details summary="Disabled" disabled>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</o-details>
```

```jsx react
import { ODetails } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <ODetails summary="Disabled" disabled>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </ODetails>
);
```

### Customizing the Summary Icon

Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. To disable the animation, override the `rotate` property on the `summary-icon` part as shown below.

```html preview
<o-details summary="Toggle Me" class="custom-icons">
  <o-icon name="plus-square" slot="expand-icon"></o-icon>
  <o-icon name="dash-square" slot="collapse-icon"></o-icon>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</o-details>

<style>
  o-details.custom-icons::part(summary-icon) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
</style>
```

```jsx react
import { ODetails, OIcon } from '%PACKAGE_NAME%/dist/react';

const css = `
  o-details.custom-icon::part(summary-icon) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
`;

const App = () => (
  <>
    <ODetails summary="Toggle Me" class="custom-icon">
      <OIcon name="plus-square" slot="expand-icon" />
      <OIcon name="dash-square" slot="collapse-icon" />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </ODetails>

    <style>{css}</style>
  </>
);
```

### Grouping Details

Details are designed to function independently, but you can simulate a group or "accordion" where only one is shown at a time by listening for the `o-show` event.

```html preview
<div class="details-group-example">
  <o-details summary="First" open>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </o-details>

  <o-details summary="Second">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </o-details>

  <o-details summary="Third">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </o-details>
</div>

<script>
  const container = document.querySelector('.details-group-example');

  // Close all other details when one is shown
  container.addEventListener('o-show', event => {
    [...container.querySelectorAll('o-details')].map(details => (details.open = event.target === details));
  });
</script>

<style>
  .details-group-example o-details:not(:last-of-type) {
    margin-bottom: var(--o-spacing-2x-small);
  }
</style>
```

[component-metadata:o-details]
