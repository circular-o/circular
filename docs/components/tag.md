# Tag

[component-header:o-tag]

```html preview
<o-tag variant="primary">Primary</o-tag>
<o-tag variant="success">Success</o-tag>
<o-tag variant="neutral">Neutral</o-tag>
<o-tag variant="warning">Warning</o-tag>
<o-tag variant="danger">Danger</o-tag>
```

```jsx react
import { OTag } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <OTag variant="primary">Primary</OTag>
    <OTag variant="success">Success</OTag>
    <OTag variant="neutral">Neutral</OTag>
    <OTag variant="warning">Warning</OTag>
    <OTag variant="danger">Danger</OTag>
  </>
);
```

## Examples

### Sizes

Use the `size` attribute to change a tab's size.

```html preview
<o-tag size="small">Small</o-tag>
<o-tag size="medium">Medium</o-tag>
<o-tag size="large">Large</o-tag>
```

```jsx react
import { OTag } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <OTag size="small">Small</OTag>
    <OTag size="medium">Medium</OTag>
    <OTag size="large">Large</OTag>
  </>
);
```

### Pill

Use the `pill` attribute to give tabs rounded edges.

```html preview
<o-tag size="small" pill>Small</o-tag>
<o-tag size="medium" pill>Medium</o-tag>
<o-tag size="large" pill>Large</o-tag>
```

```jsx react
import { OTag } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <>
    <OTag size="small" pill>
      Small
    </OTag>
    <OTag size="medium" pill>
      Medium
    </OTag>
    <OTag size="large" pill>
      Large
    </OTag>
  </>
);
```

### Removable

Use the `removable` attribute to add a remove button to the tag.

```html preview
<div class="tags-removable">
  <o-tag size="small" removable>Small</o-tag>
  <o-tag size="medium" removable>Medium</o-tag>
  <o-tag size="large" removable>Large</o-tag>
</div>

<script>
  const div = document.querySelector('.tags-removable');

  div.addEventListener('o-remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-removable o-tag {
    transition: var(--o-transition-medium) opacity;
  }
</style>
```

```jsx react
import { OTag } from '%PACKAGE_FULL_PATH%/dist/react';

const css = `
  .tags-removable o-tag {
    transition: var(--o-transition-medium) opacity;
  }
`;

const App = () => {
  function handleRemove(event) {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  }

  return (
    <>
      <div className="tags-removable">
        <OTag size="small" removable onSlRemove={handleRemove}>
          Small
        </OTag>

        <OTag size="medium" removable onSlRemove={handleRemove}>
          Medium
        </OTag>

        <OTag size="large" removable onSlRemove={handleRemove}>
          Large
        </OTag>
      </div>

      <style>{css}</style>
    </>
  );
};
```

[component-metadata:o-tag]
