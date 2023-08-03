---
meta:
  title: Tooltip
  description: Tooltips display additional information based on a specific action.
layout: component
---

A tooltip's target is its _first child element_, so you should only wrap one element inside of the tooltip. If you need the tooltip to show up for multiple elements, nest them inside a container first.

Tooltips use `display: contents` so they won't interfere with how elements are positioned in a flex or grid layout.

```html:preview
<o-tooltip content="This is a tooltip">
  <o-button>Hover Me</o-button>
</o-tooltip>
```

```jsx:react
import { OButton, OTooltip } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OTooltip content="This is a tooltip">
    <OButton>Hover Me</OButton>
  </OTooltip>
);
```

## Examples

### Placement

Use the `placement` attribute to set the preferred placement of the tooltip.

```html:preview
<div class="tooltip-placement-example">
  <div class="tooltip-placement-example-row">
    <o-tooltip content="top-start" placement="top-start">
      <o-button></o-button>
    </o-tooltip>

    <o-tooltip content="top" placement="top">
      <o-button></o-button>
    </o-tooltip>

    <o-tooltip content="top-end" placement="top-end">
      <o-button></o-button>
    </o-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <o-tooltip content="left-start" placement="left-start">
      <o-button></o-button>
    </o-tooltip>

    <o-tooltip content="right-start" placement="right-start">
      <o-button></o-button>
    </o-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <o-tooltip content="left" placement="left">
      <o-button></o-button>
    </o-tooltip>

    <o-tooltip content="right" placement="right">
      <o-button></o-button>
    </o-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <o-tooltip content="left-end" placement="left-end">
      <o-button></o-button>
    </o-tooltip>

    <o-tooltip content="right-end" placement="right-end">
      <o-button></o-button>
    </o-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <o-tooltip content="bottom-start" placement="bottom-start">
      <o-button></o-button>
    </o-tooltip>

    <o-tooltip content="bottom" placement="bottom">
      <o-button></o-button>
    </o-tooltip>

    <o-tooltip content="bottom-end" placement="bottom-end">
      <o-button></o-button>
    </o-tooltip>
  </div>
</div>

<style>
  .tooltip-placement-example {
    width: 250px;
    margin: 1rem;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example o-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) o-tooltip:first-child o-button,
  .tooltip-placement-example-row:nth-child(5) o-tooltip:first-child o-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) o-tooltip:nth-child(2) o-button,
  .tooltip-placement-example-row:nth-child(3) o-tooltip:nth-child(2) o-button,
  .tooltip-placement-example-row:nth-child(4) o-tooltip:nth-child(2) o-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
</style>
```

```jsx:react
import { OButton, OTooltip } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const css = `
  .tooltip-placement-example {
    width: 250px;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example o-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) o-tooltip:first-child o-button,
  .tooltip-placement-example-row:nth-child(5) o-tooltip:first-child o-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) o-tooltip:nth-child(2) o-button,
  .tooltip-placement-example-row:nth-child(3) o-tooltip:nth-child(2) o-button,
  .tooltip-placement-example-row:nth-child(4) o-tooltip:nth-child(2) o-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
`;

const App = () => (
  <>
    <div className="tooltip-placement-example">
      <div className="tooltip-placement-example-row">
        <OTooltip content="top-start" placement="top-start">
          <OButton />
        </OTooltip>

        <OTooltip content="top" placement="top">
          <OButton />
        </OTooltip>

        <OTooltip content="top-end" placement="top-end">
          <OButton />
        </OTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <OTooltip content="left-start" placement="left-start">
          <OButton />
        </OTooltip>

        <OTooltip content="right-start" placement="right-start">
          <OButton />
        </OTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <OTooltip content="left" placement="left">
          <OButton />
        </OTooltip>

        <OTooltip content="right" placement="right">
          <OButton />
        </OTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <OTooltip content="left-end" placement="left-end">
          <OButton />
        </OTooltip>

        <OTooltip content="right-end" placement="right-end">
          <OButton />
        </OTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <OTooltip content="bottom-start" placement="bottom-start">
          <OButton />
        </OTooltip>

        <OTooltip content="bottom" placement="bottom">
          <OButton />
        </OTooltip>

        <OTooltip content="bottom-end" placement="bottom-end">
          <OButton />
        </OTooltip>
      </div>
    </div>

    <style>{css}</style>
  </>
);
```

### Click Trigger

Set the `trigger` attribute to `click` to toggle the tooltip on click instead of hover.

```html:preview
<o-tooltip content="Click again to dismiss" trigger="click">
  <o-button>Click to Toggle</o-button>
</o-tooltip>
```

```jsx:react
import { OButton, OTooltip } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OTooltip content="Click again to dismiss" trigger="click">
    <OButton>Click to Toggle</OButton>
  </OTooltip>
);
```

### Manual Trigger

Tooltips can be controller programmatically by setting the `trigger` attribute to `manual`. Use the `open` attribute to control when the tooltip is shown.

```html:preview
<o-button style="margin-right: 4rem;">Toggle Manually</o-button>

<o-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip">
  <o-avatar label="User"></o-avatar>
</o-tooltip>

<script>
  const tooltip = document.querySelector('.manual-tooltip');
  const toggle = tooltip.previousElementSibling;

  toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { OAvatar, OButton, OTooltip } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <OButton style={{ marginRight: '4rem' }} onClick={() => setOpen(!open)}>
        Toggle Manually
      </OButton>

      <OTooltip open={open} content="This is an avatar" trigger="manual">
        <OAvatar />
      </OTooltip>
    </>
  );
};
```

{% endraw %}

### Removing Arrows

You can control the size of tooltip arrows by overriding the `--o-tooltip-arrow-size` design token. To remove them, set the value to `0` as shown below.

```html:preview
<o-tooltip content="This is a tooltip" style="--o-tooltip-arrow-size: 0;">
  <o-button>No Arrow</o-button>
</o-tooltip>
```

{% raw %}

```jsx:react
import { OButton, OTooltip } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <div style={{ '--o-tooltip-arrow-size': '0' }}>
    <OTooltip content="This is a tooltip">
      <OButton>Above</OButton>
    </OTooltip>

    <OTooltip content="This is a tooltip" placement="bottom">
      <OButton>Below</OButton>
    </OTooltip>
  </div>
);
```

{% endraw %}

To override it globally, set it in a root block in your stylesheet after the O-LIBRARY-NAME-O stylesheet is loaded.

```css
:root {
  --o-tooltip-arrow-size: 0;
}
```

### HTML in Tooltips

Use the `content` slot to create tooltips with HTML content. Tooltips are designed only for text and presentational elements. Avoid placing interactive content, such as buttons, links, and form controls, in a tooltip.

```html:preview
<o-tooltip>
  <div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>

  <o-button>Hover me</o-button>
</o-tooltip>
```

```jsx:react
import { OButton, OTooltip } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OTooltip>
    <div slot="content">
      I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!
    </div>

    <OButton>Hover Me</OButton>
  </OTooltip>
);
```

### Setting a Maximum Width

Use the `--max-width` custom property to change the width the tooltip can grow to before wrapping occurs.

```html:preview
<o-tooltip style="--max-width: 80px;" content="This tooltip will wrap after only 80 pixels.">
  <o-button>Hover me</o-button>
</o-tooltip>
```

{% raw %}

```jsx:react
import { OButton, OTooltip } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OTooltip style={{ '--max-width': '80px' }} content="This tooltip will wrap after only 80 pixels.">
    <OButton>Hover Me</OButton>
  </OTooltip>
);
```

{% endraw %}

### Hoisting

Tooltips will be clipped if they're inside a container that has `overflow: auto|hidden|scroll`. The `hoist` attribute forces the tooltip to use a fixed positioning strategy, allowing it to break out of the container. In this case, the tooltip will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html:preview
<div class="tooltip-hoist">
  <o-tooltip content="This is a tooltip">
    <o-button>No Hoist</o-button>
  </o-tooltip>

  <o-tooltip content="This is a tooltip" hoist>
    <o-button>Hoist</o-button>
  </o-tooltip>
</div>

<style>
  .tooltip-hoist {
    position: relative;
    border: solid 2px var(--o-panel-border-color);
    overflow: hidden;
    padding: var(--o-spacing-medium);
  }
</style>
```

```jsx:react
import { OButton, OTooltip } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const css = `
  .tooltip-hoist {
    border: solid 2px var(--o-panel-border-color);
    overflow: hidden;
    padding: var(--o-spacing-medium);
    position: relative;
  }
`;

const App = () => (
  <>
    <div class="tooltip-hoist">
      <OTooltip content="This is a tooltip">
        <OButton>No Hoist</OButton>
      </OTooltip>

      <OTooltip content="This is a tooltip" hoist>
        <OButton>Hoist</OButton>
      </OTooltip>
    </div>

    <style>{css}</style>
  </>
);
```
