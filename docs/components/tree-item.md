# Tree Item

[component-header:o-tree-item]

```html preview
<o-tree>
  <o-tree-item>
    Item 1
    <o-tree-item>Item A</o-tree-item>
    <o-tree-item>Item B</o-tree-item>
    <o-tree-item>Item C</o-tree-item>
  </o-tree-item>
  <o-tree-item>Item 2</o-tree-item>
  <o-tree-item>Item 3</o-tree-item>
</o-tree>
```

<!-- prettier-ignore -->
```jsx react
import { OTree, OTreeItem } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <OTree>
    <OTreeItem>
      Item 1
      <OTreeItem>Item A</OTreeItem>
      <OTreeItem>Item B</OTreeItem>
      <OTreeItem>Item C</OTreeItem>
    </OTreeItem>
    <OTreeItem>Item 2</OTreeItem>
    <OTreeItem>Item 3</OTreeItem>
  </OTree>
);
```

## Examples

### Nested tree items

A tree item can contain other tree items. This allows the node to be expanded or collapsed by the user.

```html preview
<o-tree>
  <o-tree-item>
    Item 1
    <o-tree-item>
      Item A
      <o-tree-item>Item Z</o-tree-item>
      <o-tree-item>Item Y</o-tree-item>
      <o-tree-item>Item X</o-tree-item>
    </o-tree-item>
    <o-tree-item>Item B</o-tree-item>
    <o-tree-item>Item C</o-tree-item>
  </o-tree-item>
  <o-tree-item>Item 2</o-tree-item>
  <o-tree-item>Item 3</o-tree-item>
</o-tree>
```

<!-- prettier-ignore -->
```jsx react
import { OTree, OTreeItem } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <OTree>
    <OTreeItem>
      Item 1
      <OTreeItem>
        Item A
        <OTreeItem>Item Z</OTreeItem>
        <OTreeItem>Item Y</OTreeItem>
        <OTreeItem>Item X</OTreeItem>
      </OTreeItem>
      <OTreeItem>Item B</OTreeItem>
      <OTreeItem>Item C</OTreeItem>
    </OTreeItem>
    <OTreeItem>Item 2</OTreeItem>
    <OTreeItem>Item 3</OTreeItem>
  </OTree>
);
```

### Selected

Use the `selected` attribute to select a tree item initially.

```html preview
<o-tree>
  <o-tree-item selected>
    Item 1
    <o-tree-item>Item A</o-tree-item>
    <o-tree-item>Item B</o-tree-item>
    <o-tree-item>Item C</o-tree-item>
  </o-tree-item>
  <o-tree-item>Item 2</o-tree-item>
  <o-tree-item>Item 3</o-tree-item>
</o-tree>
```

<!-- prettier-ignore -->
```jsx react
import { OTree, OTreeItem } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <OTree>
    <OTreeItem selected>
      Item 1
      <OTreeItem>Item A</OTreeItem>
      <OTreeItem>Item B</OTreeItem>
      <OTreeItem>Item C</OTreeItem>
    </OTreeItem>
    <OTreeItem>Item 2</OTreeItem>
    <OTreeItem>Item 3</OTreeItem>
  </OTree>
);
```

### Expanded

Use the `expanded` attribute to expand a tree item initially.

```html preview
<o-tree>
  <o-tree-item expanded>
    Item 1
    <o-tree-item expanded>
      Item A
      <o-tree-item>Item Z</o-tree-item>
      <o-tree-item>Item Y</o-tree-item>
      <o-tree-item>Item X</o-tree-item>
    </o-tree-item>
    <o-tree-item>Item B</o-tree-item>
    <o-tree-item>Item C</o-tree-item>
  </o-tree-item>
  <o-tree-item>Item 2</o-tree-item>
  <o-tree-item>Item 3</o-tree-item>
</o-tree>
```

<!-- prettier-ignore -->
```jsx react
import { OTree, OTreeItem } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <OTree>
    <OTreeItem expanded>
      Item 1
      <OTreeItem expanded>
        Item A
        <OTreeItem>Item Z</OTreeItem>
        <OTreeItem>Item Y</OTreeItem>
        <OTreeItem>Item X</OTreeItem>
      </OTreeItem>
      <OTreeItem>Item B</OTreeItem>
      <OTreeItem>Item C</OTreeItem>
    </OTreeItem>
    <OTreeItem>Item 2</OTreeItem>
    <OTreeItem>Item 3</OTreeItem>
  </OTree>
);
```

[component-metadata:o-tree-item]
