# Progress Bar

[component-header:o-progress-bar]

```html preview
<o-progress-bar value="50"></o-progress-bar>
```

```jsx react
import { OProgressBar } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OProgressBar value={50} />;
```

## Examples

### Labels

Use the `label` attribute to label the progress bar and tell assistive devices how to announce it.

```html preview
<o-progress-bar value="50" label="Upload progress"></o-progress-bar>
```

```jsx react
import { OProgressBar } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OProgressBar value="50" label="Upload progress" />;
```

### Custom Height

Use the `--height` custom property to set the progress bar's height.

```html preview
<o-progress-bar value="50" style="--height: 6px;"></o-progress-bar>
```

```jsx react
import { OProgressBar } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OProgressBar value={50} style={{ '--height': '6px' }} />;
```

### Showing Values

Use the default slot to show a value.

```html preview
<o-progress-bar value="50" class="progress-bar-values">50%</o-progress-bar>

<br />

<o-button circle><o-icon name="dash" label="Decrease"></o-icon></o-button>
<o-button circle><o-icon name="plus" label="Increase"></o-icon></o-button>

<script>
  const progressBar = document.querySelector('.progress-bar-values');
  const subtractButton = progressBar.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressBar.value + 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressBar.value - 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });
</script>
```

```jsx react
import { useState } from 'react';
import { OButton, OIcon, OProgressBar } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => {
  const [value, setValue] = useState(50);

  function adjustValue(amount) {
    let newValue = value + amount;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setValue(newValue);
  }

  return (
    <>
      <OProgressBar value={value}>{value}%</OProgressBar>

      <br />

      <OButton circle onClick={() => adjustValue(-10)}>
        <OIcon name="dash" label="Decrease" />
      </OButton>

      <OButton circle onClick={() => adjustValue(10)}>
        <OIcon name="plus" label="Increase" />
      </OButton>
    </>
  );
};
```

### Indeterminate

The `indeterminate` attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, `value` is ignored and the label, if present, will not be shown.

```html preview
<o-progress-bar indeterminate></o-progress-bar>
```

```jsx react
import { OProgressBar } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OProgressBar indeterminate />;
```

[component-metadata:o-progress-bar]
