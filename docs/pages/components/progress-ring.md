---
meta:
  title: Progress Ring
  description: Progress rings are used to show the progress of a determinate operation in a circular fashion.
layout: component
---

```html:preview
<o-progress-ring value="25"></o-progress-ring>
```

```jsx:react
import { OProgressRing } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => <OProgressRing value="25" />;
```

## Examples

### Size

Use the `--size` custom property to set the diameter of the progress ring.

```html:preview
<o-progress-ring value="50" style="--size: 200px;"></o-progress-ring>
```

{% raw %}

```jsx:react
import { OProgressRing } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => <OProgressRing value="50" style={{ '--size': '200px' }} />;
```

{% endraw %}

### Track and Indicator Width

Use the `--track-width` and `--indicator-width` custom properties to set the width of the progress ring's track and indicator.

```html:preview
<o-progress-ring value="50" style="--track-width: 6px; --indicator-width: 12px;"></o-progress-ring>
```

{% raw %}

```jsx:react
import { OProgressRing } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => <OProgressRing value="50" style={{ '--track-width': '6px', '--indicator-width': '12px' }} />;
```

{% endraw %}

### Colors

To change the color, use the `--track-color` and `--indicator-color` custom properties.

```html:preview
<o-progress-ring
  value="50"
  style="
    --track-color: pink;
    --indicator-color: deeppink;
  "
></o-progress-ring>
```

{% raw %}

```jsx:react
import { OProgressRing } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OProgressRing
    value="50"
    style={{
      '--track-color': 'pink',
      '--indicator-color': 'deeppink'
    }}
  />
);
```

{% endraw %}

### Labels

Use the `label` attribute to label the progress ring and tell assistive devices how to announce it.

```html:preview
<o-progress-ring value="50" label="Upload progress"></o-progress-ring>
```

```jsx:react
import { OProgressRing } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => <OProgressRing value="50" label="Upload progress" />;
```

### Showing Values

Use the default slot to show a label inside the progress ring.

```html:preview
<o-progress-ring value="50" class="progress-ring-values" style="margin-bottom: .5rem;">50%</o-progress-ring>

<br />

<o-button circle><o-icon name="dash" label="Decrease"></o-icon></o-button>
<o-button circle><o-icon name="plus" label="Increase"></o-icon></o-button>

<script>
  const progressRing = document.querySelector('.progress-ring-values');
  const subtractButton = progressRing.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressRing.value + 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressRing.value - 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { OButton, OIcon, OProgressRing } from 'O-PACKAGE-FULL-NAME-O/dist/react';

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
      <OProgressRing value={value} style={{ marginBottom: '.5rem' }}>
        {value}%
      </OProgressRing>

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

{% endraw %}
