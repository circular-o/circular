# Popup

[component-header:o-popup]

This component's name is inspired by [`<popup>`](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/Popup/explainer.md). It uses [Floating UI](https://floating-ui.com/) under the hood to provide a well-tested, lightweight, and fully declarative positioning utility for tooltips, dropdowns, and more.

Popup doesn't provide any styles — just positioning! The popup's preferred placement, distance, and skidding (offset) can be configured using attributes. An arrow that points to the anchor can be shown and customized to your liking. Additional positioning options are available and described in more detail below.

!> Popup is a low-level utility built specifically for positioning elements. Do not mistake it for a [tooltip](/components/tooltip) or similar because _it does not facilitate an accessible experience!_ Almost every correct usage of `<o-popup>` will involve building other components. It should rarely, if ever, occur directly in your HTML.

```html preview
<div class="popup-overview">
  <o-popup placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </o-popup>

  <div class="popup-overview-options">
    <o-select label="Placement" name="placement" value="top" class="popup-overview-select">
      <o-option value="top">top</o-option>
      <o-option value="top-start">top-start</o-option>
      <o-option value="top-end">top-end</o-option>
      <o-option value="bottom">bottom</o-option>
      <o-option value="bottom-start">bottom-start</o-option>
      <o-option value="bottom-end">bottom-end</o-option>
      <o-option value="right">right</o-option>
      <o-option value="right-start">right-start</o-option>
      <o-option value="right-end">right-end</o-option>
      <o-option value="left">left</o-option>
      <o-option value="left-start">left-start</o-option>
      <o-option value="left-end">left-end</o-option>
    </o-select>
    <o-input type="number" name="distance" label="distance" value="0"></o-input>
    <o-input type="number" name="skidding" label="Skidding" value="0"></o-input>
  </div>

  <div class="popup-overview-options">
    <o-switch name="active" checked>Active</o-switch>
    <o-switch name="arrow">Arrow</o-switch>
  </div>
</div>

<script>
  const container = document.querySelector('.popup-overview');
  const popup = container.querySelector('o-popup');
  const select = container.querySelector('o-select[name="placement"]');
  const distance = container.querySelector('o-input[name="distance"]');
  const skidding = container.querySelector('o-input[name="skidding"]');
  const active = container.querySelector('o-switch[name="active"]');
  const arrow = container.querySelector('o-switch[name="arrow"]');

  select.addEventListener('o-change', () => (popup.placement = select.value));
  distance.addEventListener('o-input', () => (popup.distance = distance.value));
  skidding.addEventListener('o-input', () => (popup.skidding = skidding.value));
  active.addEventListener('o-change', () => (popup.active = active.checked));
  arrow.addEventListener('o-change', () => (popup.arrow = arrow.checked));
</script>

<style>
  .popup-overview o-popup {
    --arrow-color: var(--o-color-primary-600);
  }

  .popup-overview span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 50px;
  }

  .popup-overview .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }

  .popup-overview-options {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: 1rem;
  }

  .popup-overview-options o-select {
    width: 160px;
  }

  .popup-overview-options o-input {
    width: 100px;
  }

  .popup-overview-options + .popup-overview-options {
    margin-top: 1rem;
  }
</style>
```

```jsx react
import { useState } from 'react';
import { OPopup, OSelect, OMenuItem, OInput, OSwitch } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .popup-overview o-popup {
    --arrow-color: var(--o-color-primary-600);
  }

  .popup-overview span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 50px;
  }

  .popup-overview .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }

  .popup-overview-options {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: 1rem;
  }

  .popup-overview-options o-select {
    width: 160px;
  }

  .popup-overview-options o-input {
    width: 100px;
  }

  .popup-overview-options + .popup-overview-options {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [placement, setPlacement] = useState('top');
  const [distance, setDistance] = useState(0);
  const [skidding, setSkidding] = useState(0);
  const [active, setActive] = useState(true);
  const [arrow, setArrow] = useState(false);

  return (
    <>
      <div className="popup-overview">
        <OPopup
          placement={placement}
          active={active || null}
          distance={distance}
          skidding={skidding}
          arrow={arrow || null}
        >
          <span slot="anchor" />
          <div className="box" />
        </OPopup>

        <div className="popup-overview-options">
          <OSelect
            label="Placement"
            name="placement"
            value={placement}
            className="popup-overview-select"
            onOChange={event => setPlacement(event.target.value)}
          >
            <OMenuItem value="top">top</OMenuItem>
            <OMenuItem value="top-start">top-start</OMenuItem>
            <OMenuItem value="top-end">top-end</OMenuItem>
            <OMenuItem value="bottom">bottom</OMenuItem>
            <OMenuItem value="bottom-start">bottom-start</OMenuItem>
            <OMenuItem value="bottom-end">bottom-end</OMenuItem>
            <OMenuItem value="right">right</OMenuItem>
            <OMenuItem value="right-start">right-start</OMenuItem>
            <OMenuItem value="right-end">right-end</OMenuItem>
            <OMenuItem value="left">left</OMenuItem>
            <OMenuItem value="left-start">left-start</OMenuItem>
            <OMenuItem value="left-end">left-end</OMenuItem>
          </OSelect>
          <OInput
            type="number"
            name="distance"
            label="distance"
            value={distance}
            onOInput={event => setDistance(event.target.value)}
          />
          <OInput
            type="number"
            name="skidding"
            label="Skidding"
            value={skidding}
            onOInput={event => setSkidding(event.target.value)}
          />
        </div>

        <div className="popup-overview-options">
          <OSwitch checked={active} onOChange={event => setActive(event.target.checked)}>
            Active
          </OSwitch>
          <OSwitch checked={arrow} onOChange={event => setArrow(event.target.checked)}>
            Arrow
          </OSwitch>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

?> A popup's anchor should not be styled with `display: contents` since the coordinates will not be eligible for calculation. However, if the anchor is a `<slot>` element, popup will use the first assigned element as the anchor. This behavior allows other components to pass anchors through more easily via composition.

## Examples

### Activating

Popups are inactive and hidden until the `active` attribute is applied. Removing the attribute will tear down all positioning logic and listeners, meaning you can have many idle popups on the page without affecting performance.

```html preview
<div class="popup-active">
  <o-popup placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </o-popup>

  <br />
  <o-switch checked>Active</o-switch>
</div>

<style>
  .popup-active span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 50px;
  }

  .popup-active .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }
</style>

<script>
  const container = document.querySelector('.popup-active');
  const popup = container.querySelector('o-popup');
  const active = container.querySelector('o-switch');

  active.addEventListener('o-change', () => (popup.active = active.checked));
</script>
```

```jsx react
import { useState } from 'react';
import { OPopup, OSwitch } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .popup-active span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 50px;
  }

  .popup-active .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }
`;

const App = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="popup-active">
        <OPopup placement="top" active={active}>
          <span slot="anchor" />
          <div className="box" />
        </OPopup>

        <br />
        <OSwitch checked={active} onOChange={event => setActive(event.target.checked)}>
          Active
        </OSwitch>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### External Anchors

By default, anchors are slotted into the popup using the `anchor` slot. If your anchor needs to live outside of the popup, you can pass the anchor's `id` to the `anchor` attribute. Alternatively, you can pass an element reference to the `anchor` property to achieve the same effect without using an `id`.

```html preview
<span id="external-anchor"></span>

<o-popup anchor="external-anchor" placement="top" active>
  <div class="box"></div>
</o-popup>

<style>
  #external-anchor {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 50px 0 0 50px;
  }

  #external-anchor ~ o-popup .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }
</style>
```

```jsx react
import { OPopup } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  #external-anchor {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 50px 0 0 50px;
  }

  #external-anchor ~ o-popup .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }
`;

const App = () => {
  return (
    <>
      <span id="external-anchor" />

      <OPopup anchor="external-anchor" placement="top" active>
        <div class="box" />
      </OPopup>

      <style>{css}</style>
    </>
  );
};
```

### Placement

Use the `placement` attribute to tell the popup the preferred placement of the popup. Note that the actual position will vary to ensure the panel remains in the viewport if you're using positioning features such as `flip` and `shift`.

Since placement is preferred when using `flip`, you can observe the popup's current placement when it's active by looking at the `data-current-placement` attribute. This attribute will update as the popup flips to find available space and it will be removed when the popup is deactivated.

```html preview
<div class="popup-placement">
  <o-popup placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </o-popup>

  <o-select label="Placement" value="top">
    <o-option value="top">top</o-option>
    <o-option value="top-start">top-start</o-option>
    <o-option value="top-end">top-end</o-option>
    <o-option value="bottom">bottom</o-option>
    <o-option value="bottom-start">bottom-start</o-option>
    <o-option value="bottom-end">bottom-end</o-option>
    <o-option value="right">right</o-option>
    <o-option value="right-start">right-start</o-option>
    <o-option value="right-end">right-end</o-option>
    <o-option value="left">left</o-option>
    <o-option value="left-start">left-start</o-option>
    <o-option value="left-end">left-end</o-option>
  </o-select>
</div>

<style>
  .popup-placement span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 50px;
  }

  .popup-placement .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }

  .popup-placement o-select {
    max-width: 280px;
  }
</style>

<script>
  const container = document.querySelector('.popup-placement');
  const popup = container.querySelector('o-popup');
  const select = container.querySelector('o-select');

  select.addEventListener('o-change', () => (popup.placement = select.value));
</script>
```

```jsx react
import { useState } from 'react';
import { OPopup, OSelect, OMenuItem } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .popup-placement span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 50px;
  }

  .popup-placement .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }

  .popup-placement o-select {
    max-width: 280px;
  }
`;

const App = () => {
  const [placement, setPlacement] = useState('top');

  return (
    <div className="popup-active">
      <div className="popup-placement">
        <OPopup placement={placement} active>
          <span slot="anchor" />
          <div className="box" />
        </OPopup>

        <OSelect label="Placement" value={placement} onOChange={event => setPlacement(event.target.value)}>
          <OMenuItem value="top">top</OMenuItem>
          <OMenuItem value="top-start">top-start</OMenuItem>
          <OMenuItem value="top-end">top-end</OMenuItem>
          <OMenuItem value="bottom">bottom</OMenuItem>
          <OMenuItem value="bottom-start">bottom-start</OMenuItem>
          <OMenuItem value="bottom-end">bottom-end</OMenuItem>
          <OMenuItem value="right">right</OMenuItem>
          <OMenuItem value="right-start">right-start</OMenuItem>
          <OMenuItem value="right-end">right-end</OMenuItem>
          <OMenuItem value="left">left</OMenuItem>
          <OMenuItem value="left-start">left-start</OMenuItem>
          <OMenuItem value="left-end">left-end</OMenuItem>
        </OSelect>
      </div>

      <style>{css}</style>
    </div>
  );
};
```

### Distance

Use the `distance` attribute to change the distance between the popup and its anchor. A positive value will move the popup further away and a negative value will move it closer.

```html preview
<div class="popup-distance">
  <o-popup placement="top" distance="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </o-popup>

  <o-range min="-50" max="50" step="1" value="0" label="Distance"></o-range>
</div>

<style>
  .popup-distance span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 50px;
  }

  .popup-distance .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }

  .popup-distance o-range {
    max-width: 260px;
  }
</style>

<script>
  const container = document.querySelector('.popup-distance');
  const popup = container.querySelector('o-popup');
  const distance = container.querySelector('o-range');

  distance.addEventListener('o-input', () => (popup.distance = distance.value));
</script>
```

```jsx react
import { useState } from 'react';
import { OPopup, ORange } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .popup-distance span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 50px;
  }

  .popup-distance .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }

  .popup-distance o-range {
    max-width: 260px;
  }
`;

const App = () => {
  const [distance, setDistance] = useState(0);

  return (
    <>
      <div className="popup-distance">
        <OPopup placement="top" distance={distance} active>
          <span slot="anchor" />
          <div class="box" />
        </OPopup>

        <ORange
          label="Distance"
          min="-50"
          max="50"
          step="1"
          value={distance}
          onOChange={event => setDistance(event.target.value)}
        />
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Skidding

The `skidding` attribute is similar to `distance`, but instead allows you to offset the popup along the anchor's axis. Both positive and negative values are allowed.

```html preview
<div class="popup-skidding">
  <o-popup placement="top" skidding="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </o-popup>

  <o-range min="-50" max="50" step="1" value="0" label="Skidding"></o-range>
</div>

<style>
  .popup-skidding span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 50px;
  }

  .popup-skidding .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }

  .popup-skidding o-range {
    max-width: 260px;
  }
</style>

<script>
  const container = document.querySelector('.popup-skidding');
  const popup = container.querySelector('o-popup');
  const skidding = container.querySelector('o-range');

  skidding.addEventListener('o-input', () => (popup.skidding = skidding.value));
</script>
```

```jsx react
import { useState } from 'react';
import { OPopup, ORange } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .popup-skidding span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 50px;
  }

  .popup-skidding .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }

  .popup-skidding o-range {
    max-width: 260px;
  }
`;

const App = () => {
  const [skidding, setSkidding] = useState(0);

  return (
    <>
      <div className="popup-skidding">
        <OPopup placement="top" skidding={skidding} active>
          <span slot="anchor"></span>
          <div className="box"></div>
        </OPopup>

        <ORange
          label="Skidding"
          min="-50"
          max="50"
          step="1"
          value={skidding}
          onOChange={event => setSkidding(event.target.value)}
        />
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Arrows

Add an arrow to your popup with the `arrow` attribute. It's usually a good idea to set a `distance` to make room for the arrow. To adjust the arrow's color and size, use the `--arrow-color` and `--arrow-size` custom properties, respectively. You can also target the `arrow` part to add additional styles such as shadows and borders.

By default, the arrow will be aligned as close to the center of the _anchor_ as possible, considering available space and `arrow-padding`. You can use the `arrow-placement` attribute to force the arrow to align to the start, end, or center of the _popup_ instead.

```html preview
<div class="popup-arrow">
  <o-popup placement="top" arrow arrow-placement="anchor" distance="8" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </o-popup>

  <div class="popup-arrow-options">
    <o-select label="Placement" name="placement" value="top" class="popup-overview-select">
      <o-option value="top">top</o-option>
      <o-option value="top-start">top-start</o-option>
      <o-option value="top-end">top-end</o-option>
      <o-option value="bottom">bottom</o-option>
      <o-option value="bottom-start">bottom-start</o-option>
      <o-option value="bottom-end">bottom-end</o-option>
      <o-option value="right">right</o-option>
      <o-option value="right-start">right-start</o-option>
      <o-option value="right-end">right-end</o-option>
      <o-option value="left">left</o-option>
      <o-option value="left-start">left-start</o-option>
      <o-option value="left-end">left-end</o-option>
    </o-select>

    <o-select label="Arrow Placement" name="arrow-placement" value="anchor">
      <o-option value="anchor">anchor</o-option>
      <o-option value="start">start</o-option>
      <o-option value="end">end</o-option>
      <o-option value="center">center</o-option>
    </o-select>
  </div>

  <div class="popup-arrow-options">
    <o-switch name="arrow" checked>Arrow</o-switch>
  </div>

  <style>
    .popup-arrow o-popup {
      --arrow-color: var(--o-color-primary-600);
    }

    .popup-arrow span[slot='anchor'] {
      display: inline-block;
      width: 150px;
      height: 150px;
      border: dashed 2px var(--o-color-neutral-600);
      margin: 50px;
    }

    .popup-arrow .box {
      width: 100px;
      height: 50px;
      background: var(--o-color-primary-600);
      border-radius: var(--o-border-radius-medium);
    }

    .popup-arrow-options {
      display: flex;
      flex-wrap: wrap;
      align-items: end;
      gap: 1rem;
    }

    .popup-arrow-options o-select {
      width: 160px;
    }

    .popup-arrow-options + .popup-arrow-options {
      margin-top: 1rem;
    }
  </style>

  <script>
    const container = document.querySelector('.popup-arrow');
    const popup = container.querySelector('o-popup');
    const placement = container.querySelector('[name="placement"]');
    const arrowPlacement = container.querySelector('[name="arrow-placement"]');
    const arrow = container.querySelector('[name="arrow"]');

    placement.addEventListener('o-change', () => (popup.placement = placement.value));
    arrowPlacement.addEventListener('o-change', () => (popup.arrowPlacement = arrowPlacement.value));
    arrow.addEventListener('o-change', () => (popup.arrow = arrow.checked));
  </script>
</div>
```

```jsx react
import { useState } from 'react';
import { OPopup, OSelect, OMenuItem, OSwitch } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .popup-arrow o-popup {
    --arrow-color: var(--o-color-primary-600);
  }

  .popup-arrow span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 50px;
  }

  .popup-arrow .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }

  .popup-arrow-options {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: 1rem;
  }

  .popup-arrow-options o-select {
    width: 160px;
  }

  .popup-arrow-options + .popup-arrow-options {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [placement, setPlacement] = useState('top');
  const [arrowPlacement, setArrowPlacement] = useState('anchor');
  const [arrow, setArrow] = useState(true);

  return (
    <>
      <div className="popup-arrow">
        <OPopup placement={placement} arrow={arrow || null} arrow-placement={arrowPlacement} distance="8" active>
          <span slot="anchor" />
          <div className="box" />
        </OPopup>

        <div className="popup-arrow-options">
          <OSelect
            label="Placement"
            name="placement"
            value={placement}
            className="popup-overview-select"
            onOChange={event => setPlacement(event.target.value)}
          >
            <OMenuItem value="top">top</OMenuItem>
            <OMenuItem value="top-start">top-start</OMenuItem>
            <OMenuItem value="top-end">top-end</OMenuItem>
            <OMenuItem value="bottom">bottom</OMenuItem>
            <OMenuItem value="bottom-start">bottom-start</OMenuItem>
            <OMenuItem value="bottom-end">bottom-end</OMenuItem>
            <OMenuItem value="right">right</OMenuItem>
            <OMenuItem value="right-start">right-start</OMenuItem>
            <OMenuItem value="right-end">right-end</OMenuItem>
            <OMenuItem value="left">left</OMenuItem>
            <OMenuItem value="left-start">left-start</OMenuItem>
            <OMenuItem value="left-end">left-end</OMenuItem>
          </OSelect>

          <OSelect
            label="Arrow Placement"
            name="arrow-placement"
            value={arrowPlacement}
            onOChange={event => setArrowPlacement(event.target.value)}
          >
            <OMenuItem value="anchor">anchor</OMenuItem>
            <OMenuItem value="start">start</OMenuItem>
            <OMenuItem value="end">end</OMenuItem>
            <OMenuItem value="center">center</OMenuItem>
          </OSelect>
        </div>

        <div className="popup-arrow-options">
          <OSwitch name="arrow" checked={arrow} onOChange={event => setArrow(event.target.checked)}>
            Arrow
          </OSwitch>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Syncing with the Anchor's Dimensions

Use the `sync` attribute to make the popup the same width or height as the anchor element. This is useful for controls that need the popup to stay the same width or height as the trigger.

```html preview
<div class="popup-sync">
  <o-popup placement="top" sync="width" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </o-popup>

  <o-select value="width" label="Sync">
    <o-option value="width">Width</o-option>
    <o-option value="height">Height</o-option>
    <o-option value="both">Both</o-option>
    <o-option value="">None</o-option>
  </o-select>
</div>

<style>
  .popup-sync span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 50px;
  }

  .popup-sync .box {
    width: 100%;
    height: 100%;
    min-width: 50px;
    min-height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }

  .popup-sync o-select {
    width: 160px;
  }
</style>

<script>
  const container = document.querySelector('.popup-sync');
  const popup = container.querySelector('o-popup');
  const fixed = container.querySelector('o-switch');
  const sync = container.querySelector('o-select');

  sync.addEventListener('o-change', () => (popup.sync = sync.value));
</script>
```

```jsx react
import { useState } from 'react';
import { OPopup, OSelect, OMenuItem } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .popup-sync span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 50px;
  }

  .popup-sync .box {
    width: 100%;
    height: 100%;
    min-width: 50px;
    min-height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }

  .popup-sync o-switch {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [sync, setSync] = useState('width');

  return (
    <>
      <div class="popup-sync">
        <OPopup placement="top" sync={sync} active>
          <span slot="anchor" />
          <div class="box" />
        </OPopup>

        <OSelect value={sync} label="Sync" onOChange={event => setSync(event.target.value)}>
          <OMenuItem value="width">Width</OMenuItem>
          <OMenuItem value="height">Height</OMenuItem>
          <OMenuItem value="both">Both</OMenuItem>
          <OMenuItem value="">None</OMenuItem>
        </OSelect>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Positioning Strategy

By default, the popup is positioned using an absolute positioning strategy. However, if your anchor is fixed or exists within a container that has `overflow: auto|hidden`, the popup risks being clipped. To work around this, you can use a fixed positioning strategy by setting the `strategy` attribute to `fixed`.

The fixed positioning strategy reduces jumpiness when the anchor is fixed and allows the popup to break out containers that clip. When using this strategy, it's important to note that the content will be positioned _relative to its containing block_, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

In this example, you can see how the popup breaks out of the overflow container when it's fixed. The fixed positioning strategy tends to be less performant than absolute, so avoid using it unnecessarily.

Toggle the switch and scroll the container to see the difference.

```html preview
<div class="popup-strategy">
  <div class="overflow">
    <o-popup placement="top" strategy="fixed" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </o-popup>
  </div>

  <o-switch checked>Fixed</o-switch>
</div>

<style>
  .popup-strategy .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--o-color-neutral-200);
    overflow: auto;
  }

  .popup-strategy span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 150px 50px;
  }

  .popup-strategy .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }

  .popup-strategy o-switch {
    margin-top: 1rem;
  }
</style>

<script>
  const container = document.querySelector('.popup-strategy');
  const popup = container.querySelector('o-popup');
  const fixed = container.querySelector('o-switch');

  fixed.addEventListener('o-change', () => (popup.strategy = fixed.checked ? 'fixed' : 'absolute'));
</script>
```

```jsx react
import { useState } from 'react';
import { OPopup, OSwitch } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .popup-strategy .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--o-color-neutral-200);
    overflow: auto;
  }

  .popup-strategy span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 150px 50px;
  }

  .popup-strategy .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }

  .popup-strategy o-switch {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [fixed, setFixed] = useState(true);

  return (
    <>
      <div className="popup-strategy">
        <div className="overflow">
          <OPopup placement="top" strategy={fixed ? 'fixed' : 'absolute'} active>
            <span slot="anchor" />
            <div className="box" />
          </OPopup>
        </div>

        <OSwitch checked={fixed} onOChange={event => setFixed(event.target.checked)}>
          Fixed
        </OSwitch>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Flip

When the popup doesn't have enough room in its preferred placement, it can automatically flip to keep it in view. To enable this, use the `flip` attribute. By default, the popup will flip to the opposite placement, but you can configure preferred fallback placements using `flip-fallback-placement` and `flip-fallback-strategy`. Additional options are available to control the flip behavior's boundary and padding.

Scroll the container to see how the popup flips to prevent clipping.

```html preview
<div class="popup-flip">
  <div class="overflow">
    <o-popup placement="top" flip active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </o-popup>
  </div>

  <br />
  <o-switch checked>Flip</o-switch>
</div>

<style>
  .popup-flip .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--o-color-neutral-200);
    overflow: auto;
  }

  .popup-flip span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 150px 50px;
  }

  .popup-flip .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }
</style>

<script>
  const container = document.querySelector('.popup-flip');
  const popup = container.querySelector('o-popup');
  const flip = container.querySelector('o-switch');

  flip.addEventListener('o-change', () => (popup.flip = flip.checked));
</script>
```

```jsx react
import { useState } from 'react';
import { OPopup, OSwitch } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .popup-flip .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--o-color-neutral-200);
    overflow: auto;
  }

  .popup-flip span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 150px 50px;
  }

  .popup-flip .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }
`;

const App = () => {
  const [flip, setFlip] = useState(true);

  return (
    <>
      <div className="popup-flip">
        <div className="overflow">
          <OPopup placement="top" flip={flip} active>
            <span slot="anchor" />
            <div className="box" />
          </OPopup>
        </div>

        <br />
        <OSwitch checked={flip} onOChange={event => setFlip(event.target.checked)}>
          Flip
        </OSwitch>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Flip Fallbacks

While using the `flip` attribute, you can customize the placement of the popup when the preferred placement doesn't have room. For this, use `flip-fallback-placements` and `flip-fallback-strategy`.

If the preferred placement doesn't have room, the first suitable placement found in `flip-fallback-placement` will be used. The value of this attribute must be a string including any number of placements separated by a space, e.g. `"right bottom"`.

If no fallback placement works, the final placement will be determined by `flip-fallback-strategy`. This value can be either `initial` (default), where the placement reverts to the position in `placement`, or `best-fit`, where the placement is chosen based on available space.

Scroll the container to see how the popup changes it's fallback placement to prevent clipping.

```html preview
<div class="popup-flip-fallbacks">
  <div class="overflow">
    <o-popup placement="top" flip flip-fallback-placements="right bottom" flip-fallback-strategy="initial" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </o-popup>
  </div>
</div>

<style>
  .popup-flip-fallbacks .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--o-color-neutral-200);
    overflow: auto;
  }

  .popup-flip-fallbacks span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 250px 50px;
  }

  .popup-flip-fallbacks .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }
</style>
```

```jsx react
import { OPopup } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .popup-flip-fallbacks .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--o-color-neutral-200);
    overflow: auto;
  }

  .popup-flip-fallbacks span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 250px 50px;
  }

  .popup-flip-fallbacks .box {
    width: 100px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }
`;

const App = () => {
  return (
    <>
      <div className="popup-flip-fallbacks">
        <div className="overflow">
          <OPopup placement="top" flip flip-fallback-placements="right bottom" flip-fallback-strategy="initial" active>
            <span slot="anchor" />
            <div className="box" />
          </OPopup>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Shift

When a popup is longer than its anchor, it risks being clipped by an overflowing container. In this case, use the `shift` attribute to shift the popup along its axis and back into view. You can customize the shift behavior using `shiftBoundary` and `shift-padding`.

Toggle the switch to see the difference.

```html preview
<div class="popup-shift">
  <div class="overflow">
    <o-popup placement="top" shift shift-padding="10" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </o-popup>
  </div>

  <o-switch checked>Shift</o-switch>
</div>

<style>
  .popup-shift .overflow {
    position: relative;
    border: solid 2px var(--o-color-neutral-200);
    overflow: auto;
  }

  .popup-shift span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 60px 0 0 10px;
  }

  .popup-shift .box {
    width: 300px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }
</style>

<script>
  const container = document.querySelector('.popup-shift');
  const popup = container.querySelector('o-popup');
  const shift = container.querySelector('o-switch');

  shift.addEventListener('o-change', () => (popup.shift = shift.checked));
</script>
```

```jsx react
import { useState } from 'react';
import { OPopup, OSwitch } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .popup-shift .overflow {
    position: relative;
    border: solid 2px var(--o-color-neutral-200);
    overflow: auto;
  }

  .popup-shift span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 60px 0 0 10px;
  }

  .popup-shift .box {
    width: 300px;
    height: 50px;
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);
  }
`;

const App = () => {
  const [shift, setShift] = useState(true);

  return (
    <>
      <div className="popup-shift">
        <div className="overflow">
          <OPopup placement="top" shift={shift} shift-padding="10" active>
            <span slot="anchor" />
            <div className="box" />
          </OPopup>
        </div>

        <OSwitch checked={shift} onOChange={event => setShift(event.target.checked)}>
          Shift
        </OSwitch>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Auto-size

Use the `auto-size` attribute to tell the popup to resize when necessary to prevent it from getting clipped. Possible values are `horizontal`, `vertical`, and `both`. You can use `autoSizeBoundary` and `auto-size-padding` to customize the behavior of this option. Auto-size works well with `flip`, but if you're using `auto-size-padding` make sure `flip-padding` is the same value.

When using `auto-size`, one or both of `--auto-size-available-width` and `--auto-size-available-height` will be applied to the host element. These values determine the available space the popover has before clipping will occur. Since they cascade, you can use them to set a max-width/height on your popup's content and easily control its overflow.

Scroll the container to see the popup resize as its available space changes.

```html preview
<div class="popup-auto-size">
  <div class="overflow">
    <o-popup placement="top" auto-size="both" auto-size-padding="10" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </o-popup>
  </div>

  <br />
  <o-switch checked>Auto-size</o-switch>
</div>

<style>
  .popup-auto-size .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--o-color-neutral-200);
    overflow: auto;
  }

  .popup-auto-size span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 250px 50px 100px 50px;
  }

  .popup-auto-size .box {
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);

    /* This sets the preferred size of the popup's content */
    width: 100px;
    height: 200px;

    /* This sets the maximum dimensions and allows scrolling when auto-size kicks in */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
    overflow: auto;
  }
</style>

<script>
  const container = document.querySelector('.popup-auto-size');
  const popup = container.querySelector('o-popup');
  const autoSize = container.querySelector('o-switch');

  autoSize.addEventListener('o-change', () => (popup.autoSize = autoSize.checked ? 'both' : ''));
</script>
```

```jsx react
import { useState } from 'react';
import { OPopup, OSwitch } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .popup-auto-size .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--o-color-neutral-200);
    overflow: auto;
  }

  .popup-auto-size span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--o-color-neutral-600);
    margin: 250px 50px 100px 50px;
  }

  .popup-auto-size .box {
    background: var(--o-color-primary-600);
    border-radius: var(--o-border-radius-medium);

    /* This sets the preferred size of the popup's content */
    width: 100px;
    height: 200px;

    /* This sets the maximum dimensions and allows scrolling when auto-size kicks in */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
    overflow: auto;
  }
`;

const App = () => {
  const [autoSize, setAutoSize] = useState(true);

  return (
    <>
      <div className="popup-auto-size">
        <div className="overflow">
          <OPopup placement="top" auto-size={autoSize ? 'both' || null} auto-size-padding="10" active>
            <span slot="anchor" />
            <div className="box" />
          </OPopup>
        </div>

        <br />
        <OSwitch checked={autoSize} onOChange={event => setAutoSize(event.target.checked)}>
          Auto-size
        </OSwitch>
      </div>

      <style>{css}</style>
    </>
  );
};
```

[component-metadata:o-popup]
