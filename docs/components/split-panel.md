# Split Panel

[component-header:o-split-panel]

```html preview
<o-split-panel>
  <div
    slot="start"
    style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</o-split-panel>
```

```jsx react
import { OSplitPanel } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <OSplitPanel>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--o-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--o-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </OSplitPanel>
);
```

## Examples

### Initial Position

To set the initial position, use the `position` attribute. If no position is provided, it will default to 50% of the available space.

```html preview
<o-split-panel position="75">
  <div
    slot="start"
    style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</o-split-panel>
```

### Initial Position in Pixels

To set the initial position in pixels instead of a percentage, use the `position-in-pixels` attribute.

```html preview
<o-split-panel position-in-pixels="150">
  <div
    slot="start"
    style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</o-split-panel>
```

```jsx react
import { OSplitPanel } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <OSplitPanel position="200">
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--o-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--o-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </OSplitPanel>
);
```

### Vertical

Add the `vertical` attribute to render the split panel in a vertical orientation where the start and end panels are stacked. You also need to set a height when using the vertical orientation.

```html preview
<o-split-panel vertical style="height: 400px;">
  <div
    slot="start"
    style="height: 100%; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 100%; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</o-split-panel>
```

```jsx react
import { OSplitPanel } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <OSplitPanel vertical style={{ height: '400px' }}>
    <div
      slot="start"
      style={{
        height: '100%',
        background: 'var(--o-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '100%',
        background: 'var(--o-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </OSplitPanel>
);
```

### Snapping

To snap panels at specific positions while dragging, add the `snap` attribute with one or more space-separated values. Values must be in pixels or percentages. For example, to snap the panel at `100px` and `50%`, use `snap="100px 50%"`. You can also customize how close the divider must be before snapping with the `snap-threshold` attribute.

```html preview
<div class="split-panel-snapping">
  <o-split-panel snap="100px 50%">
    <div
      slot="start"
      style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      End
    </div>
  </o-split-panel>

  <div class="split-panel-snapping-dots"></div>
</div>

<style>
  .split-panel-snapping {
    position: relative;
  }

  .split-panel-snapping-dots::before,
  .split-panel-snapping-dots::after {
    content: '';
    position: absolute;
    bottom: -12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--o-color-neutral-400);
    transform: translateX(-3px);
  }

  .split-panel-snapping-dots::before {
    left: 100px;
  }

  .split-panel-snapping-dots::after {
    left: 50%;
  }
</style>
```

```jsx react
import { OSplitPanel } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .split-panel-snapping {
    position: relative;
  }

  .split-panel-snapping-dots::before,
  .split-panel-snapping-dots::after {
    content: '';
    position: absolute;
    bottom: -12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--o-color-neutral-400);
    transform: translateX(-3px);
  }

  .split-panel-snapping-dots::before {
    left: 100px;
  }

  .split-panel-snapping-dots::after {
    left: 50%;
  }
`;

const App = () => (
  <>
    <div className="split-panel-snapping">
      <OSplitPanel snap="100px 50%">
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--o-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--o-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </OSplitPanel>

      <div className="split-panel-snapping-dots" />
    </div>

    <style>{css}</style>
  </>
);
```

### Disabled

Add the `disabled` attribute to prevent the divider from being repositioned.

```html preview
<o-split-panel disabled>
  <div
    slot="start"
    style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</o-split-panel>
```

```jsx react
import { OSplitPanel } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <OSplitPanel disabled>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--o-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--o-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </OSplitPanel>
);
```

### Setting the Primary Panel

By default, both panels will grow or shrink proportionally when the host element is resized. If a primary panel is designated, it will maintain its size and the secondary panel will grow or shrink to fit the remaining space. You can set the primary panel to `start` or `end` using the `primary` attribute.

Try resizing the example below with each option and notice how the panels respond.

```html preview
<div class="split-panel-primary">
  <o-split-panel>
    <div
      slot="start"
      style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      End
    </div>
  </o-split-panel>

  <o-select label="Primary Panel" value="" style="max-width: 200px; margin-top: 1rem;">
    <o-option value="">None</o-option>
    <o-option value="start">Start</o-option>
    <o-option value="end">End</o-option>
  </o-select>
</div>

<script>
  const container = document.querySelector('.split-panel-primary');
  const splitPanel = container.querySelector('o-split-panel');
  const select = container.querySelector('o-select');

  select.addEventListener('o-change', () => (splitPanel.primary = select.value));
</script>
```

```jsx react
import { useState } from 'react';
import { OSplitPanel, OSelect, OMenuItem } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => {
  const [primary, setPrimary] = useState('');

  return (
    <>
      <OSplitPanel primary={primary}>
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--o-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--o-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </OSplitPanel>

      <OSelect
        label="Primary Panel"
        value={primary}
        style={{ maxWidth: '200px', marginTop: '1rem' }}
        onOChange={event => setPrimary(event.target.value)}
      >
        <OMenuItem value="">None</OMenuItem>
        <OMenuItem value="start">Start</OMenuItem>
        <OMenuItem value="end">End</OMenuItem>
      </OSelect>
    </>
  );
};
```

### Min & Max

To set a minimum or maximum size of the primary panel, use the `--min` and `--max` custom properties. Since the secondary panel is flexible, size constraints can only be applied to the primary panel. If no primary panel is designated, these constraints will be applied to the `start` panel.

This examples demonstrates how you can ensure both panels are at least 150px using `--min`, `--max`, and the `calc()` function.

```html preview
<o-split-panel style="--min: 150px; --max: calc(100% - 150px);">
  <div
    slot="start"
    style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</o-split-panel>
```

```jsx react
import { OSplitPanel } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <OSplitPanel style={{ '--min': '150px', '--max': 'calc(100% - 150px)' }}>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--o-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--o-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </OSplitPanel>
);
```

### Nested Split Panels

Create complex layouts that can be repositioned independently by nesting split panels.

```html preview
<o-split-panel>
  <div
    slot="start"
    style="height: 400px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div slot="end">
    <o-split-panel vertical style="height: 400px;">
      <div
        slot="start"
        style="height: 100%; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
      >
        Top
      </div>
      <div
        slot="end"
        style="height: 100%; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
      >
        Bottom
      </div>
    </o-split-panel>
  </div>
</o-split-panel>
```

```jsx react
import { OSplitPanel } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <OSplitPanel>
    <div
      slot="start"
      style={{
        height: '400px',
        background: 'var(--o-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div slot="end">
      <OSplitPanel vertical style={{ height: '400px' }}>
        <div
          slot="start"
          style={{
            height: '100%',
            background: 'var(--o-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '100%',
            background: 'var(--o-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </OSplitPanel>
    </div>
  </OSplitPanel>
);
```

### Customizing the Divider

You can target the `divider` part to apply CSS properties to the divider. To add a custom handle, slot an icon into the `divider` slot. When customizing the divider, make sure to think about focus styles for keyboard users.

```html preview
<o-split-panel style="--divider-width: 20px;">
  <o-icon slot="divider" name="grip-vertical"></o-icon>
  <div
    slot="start"
    style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</o-split-panel>
```

```jsx react
import { OSplitPanel, OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <OSplitPanel style={{ '--divider-width': '20px' }}>
    <OIcon slot="divider" name="grip-vertical" />
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--o-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--o-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </OSplitPanel>
);
```

Here's a more elaborate example that changes the divider's color and width and adds a styled handle.

```html preview
<div class="split-panel-divider">
  <o-split-panel>
    <o-icon slot="divider" name="grip-vertical"></o-icon>
    <div
      slot="start"
      style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--o-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      End
    </div>
  </o-split-panel>
</div>

<style>
  .split-panel-divider o-split-panel {
    --divider-width: 2px;
  }

  .split-panel-divider o-split-panel::part(divider) {
    background-color: var(--o-color-pink-600);
  }

  .split-panel-divider o-icon {
    position: absolute;
    border-radius: var(--o-border-radius-small);
    background: var(--o-color-pink-600);
    color: var(--o-color-neutral-0);
    padding: 0.5rem 0.125rem;
  }

  .split-panel-divider o-split-panel::part(divider):focus-visible {
    background-color: var(--o-color-primary-600);
  }

  .split-panel-divider o-split-panel:focus-within o-icon {
    background-color: var(--o-color-primary-600);
    color: var(--o-color-neutral-0);
  }
</style>
```

```jsx react
import { OSplitPanel, OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .split-panel-divider o-split-panel {
    --divider-width: 2px;
  }

  .split-panel-divider o-split-panel::part(divider) {
    background-color: var(--o-color-pink-600);
  }

  .split-panel-divider o-icon {
    position: absolute;
    border-radius: var(--o-border-radius-small);
    background: var(--o-color-pink-600);
    color: var(--o-color-neutral-0);
    padding: .5rem .125rem;
  }

  .split-panel-divider o-split-panel::part(divider):focus-visible {
    background-color: var(--o-color-primary-600);
  }

  .split-panel-divider o-split-panel:focus-within o-icon {
    background-color: var(--o-color-primary-600);
    color: var(--o-color-neutral-0);
  }
`;

const App = () => (
  <>
    <div className="split-panel-divider">
      <OSplitPanel>
        <OIcon slot="divider" name="grip-vertical" />
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--o-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--o-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </OSplitPanel>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:o-split-panel]
