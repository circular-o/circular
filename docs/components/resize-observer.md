# Resize Observer

[component-header:o-resize-observer]

The resize observer will report changes to the dimensions of the elements it wraps through the `o-resize` event. When emitted, a collection of [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) objects will be attached to `event.detail` that contains the target element and information about its dimensions.

```html preview
<div class="resize-observer-overview">
  <o-resize-observer>
    <div>Resize this box and watch the console 👉</div>
  </o-resize-observer>
</div>

<script>
  const container = document.querySelector('.resize-observer-overview');
  const resizeObserver = container.querySelector('o-resize-observer');

  resizeObserver.addEventListener('o-resize', event => {
    console.log(event.detail);
  });
</script>

<style>
  .resize-observer-overview div {
    display: flex;
    border: solid 2px var(--o-input-border-color);
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 2rem;
  }
</style>
```

```jsx react
import { OResizeObserver } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .resize-observer-overview div {
    display: flex; 
    border: solid 2px var(--o-input-border-color); 
    align-items: center; 
    justify-content: center;
    text-align: center;
    padding: 4rem 2rem;
  }
`;

const App = () => (
  <>
    <div className="resize-observer-overview">
      <OResizeObserver onSlResize={event => console.log(event.detail)}>
        <div>Resize this box and watch the console 👉</div>
      </OResizeObserver>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:o-resize-observer]
