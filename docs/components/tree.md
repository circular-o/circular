# Tree

[component-header:o-tree]

```html preview
<o-tree>
  <o-tree-item>
    Deciduous
    <o-tree-item>Birch</o-tree-item>
    <o-tree-item>
      Maple
      <o-tree-item>Field maple</o-tree-item>
      <o-tree-item>Red maple</o-tree-item>
      <o-tree-item>Sugar maple</o-tree-item>
    </o-tree-item>
    <o-tree-item>Oak</o-tree-item>
  </o-tree-item>

  <o-tree-item>
    Coniferous
    <o-tree-item>Cedar</o-tree-item>
    <o-tree-item>Pine</o-tree-item>
    <o-tree-item>Spruce</o-tree-item>
  </o-tree-item>

  <o-tree-item>
    Non-trees
    <o-tree-item>Bamboo</o-tree-item>
    <o-tree-item>Cactus</o-tree-item>
    <o-tree-item>Fern</o-tree-item>
  </o-tree-item>
</o-tree>
```

<!-- prettier-ignore -->
```jsx react
import { OTree, OTreeItem } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <OTree>
    <OTreeItem>
      Deciduous
      <OTreeItem>Birch</OTreeItem>
      <OTreeItem>
        Maple
        <OTreeItem>Field maple</OTreeItem>
        <OTreeItem>Red maple</OTreeItem>
        <OTreeItem>Sugar maple</OTreeItem>
      </OTreeItem>
      <OTreeItem>Oak</OTreeItem>
    </OTreeItem>

    <OTreeItem>
      Coniferous
      <OTreeItem>Cedar</OTreeItem>
      <OTreeItem>Pine</OTreeItem>
      <OTreeItem>Spruce</OTreeItem>
    </OTreeItem>

    <OTreeItem>
      Non-trees
      <OTreeItem>Bamboo</OTreeItem>
      <OTreeItem>Cactus</OTreeItem>
      <OTreeItem>Fern</OTreeItem>
    </OTreeItem>
  </OTree>
);
```

## Examples

### Selection Modes

The `selection` attribute lets you change the selection behavior of the tree.

- Use `single` to allow the selection of a single item (default).
- Use `multiple` to allow the selection of multiple items.
- Use `leaf` to only allow leaf nodes to be selected.

```html preview
<o-select id="selection-mode" value="single" label="Selection">
  <o-option value="single">Single</o-option>
  <o-option value="multiple">Multiple</o-option>
  <o-option value="leaf">Leaf</o-option>
</o-select>

<br />

<o-tree class="tree-selectable">
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

<script>
  const selectionMode = document.querySelector('#selection-mode');
  const tree = document.querySelector('.tree-selectable');

  selectionMode.addEventListener('o-change', () => {
    tree.querySelectorAll('o-tree-item').forEach(item => (item.selected = false));
    tree.selection = selectionMode.value;
  });
</script>
```

<!-- prettier-ignore -->
```jsx react
import { OTree, OTreeItem } from '%PACKAGE_NAME%/dist/react';

const App = () => {
  const [selection, setSelection] = useState('single');

  return (
    <>
      <OSelect label="Selection" value={selection} onSlChange={event => setSelection(event.target.value)}>
        <OMenuItem value="single">single</OMenuItem>
        <OMenuItem value="multiple">multiple</OMenuItem>
        <OMenuItem value="leaf">leaf</OMenuItem>
      </OSelect>

      <br />

      <OTree selection={selection}>
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
    </>
  );
};
```

### Showing Indent Guides

Indent guides can be drawn by setting `--indent-guide-width`. You can also change the color, offset, and style, using `--indent-guide-color`, `--indent-guide-style`, and `--indent-guide-offset`, respectively.

```html preview
<o-tree class="tree-with-lines">
  <o-tree-item expanded>
    Deciduous
    <o-tree-item>Birch</o-tree-item>
    <o-tree-item expanded>
      Maple
      <o-tree-item>Field maple</o-tree-item>
      <o-tree-item>Red maple</o-tree-item>
      <o-tree-item>Sugar maple</o-tree-item>
    </o-tree-item>
    <o-tree-item>Oak</o-tree-item>
  </o-tree-item>

  <o-tree-item>
    Coniferous
    <o-tree-item>Cedar</o-tree-item>
    <o-tree-item>Pine</o-tree-item>
    <o-tree-item>Spruce</o-tree-item>
  </o-tree-item>

  <o-tree-item>
    Non-trees
    <o-tree-item>Bamboo</o-tree-item>
    <o-tree-item>Cactus</o-tree-item>
    <o-tree-item>Fern</o-tree-item>
  </o-tree-item>
</o-tree>

<style>
  .tree-with-lines {
    --indent-guide-width: 1px;
  }
</style>
```

<!-- prettier-ignore -->
```jsx react
import { OTree, OTreeItem } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <OTree class="tree-with-lines" style={{ '--indent-guide-width': '1px' }}>
    <OTreeItem expanded>
      Deciduous
      <OTreeItem>Birch</OTreeItem>
      <OTreeItem expanded>
        Maple
        <OTreeItem>Field maple</OTreeItem>
        <OTreeItem>Red maple</OTreeItem>
        <OTreeItem>Sugar maple</OTreeItem>
      </OTreeItem>
      <OTreeItem>Oak</OTreeItem>
    </OTreeItem>

    <OTreeItem>
      Coniferous
      <OTreeItem>Cedar</OTreeItem>
      <OTreeItem>Pine</OTreeItem>
      <OTreeItem>Spruce</OTreeItem>
    </OTreeItem>

    <OTreeItem>
      Non-trees
      <OTreeItem>Bamboo</OTreeItem>
      <OTreeItem>Cactus</OTreeItem>
      <OTreeItem>Fern</OTreeItem>
    </OTreeItem>
  </OTree>
);
```

### Lazy Loading

Use the `lazy` attribute on a tree item to indicate that the content is not yet present and will be loaded later. When the user tries to expand the node, the `loading` state is set to `true` and the `o-lazy-load` event will be emitted to allow you to load data asynchronously. The item will remain in a loading state until its content is changed.

If you want to disable this behavior after the first load, simply remove the `lazy` attribute and, on the next expand, the existing content will be shown instead.

```html preview
<o-tree>
  <o-tree-item lazy>Available Trees</o-tree-item>
</o-tree>

<script type="module">
  const lazyItem = document.querySelector('o-tree-item[lazy]');

  lazyItem.addEventListener('o-lazy-load', () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      const subItems = ['Birch', 'Cedar', 'Maple', 'Pine'];

      for (const item of subItems) {
        const treeItem = document.createElement('o-tree-item');
        treeItem.innerText = item;
        lazyItem.append(treeItem);
      }

      // Disable lazy mode once the content has been loaded
      lazyItem.lazy = false;
    }, 1000);
  });
</script>
```

```jsx react
import { OTree, OTreeItem } from '%PACKAGE_NAME%/dist/react';

const App = () => {
  const [childItems, setChildItems] = useState([]);
  const [lazy, setLazy] = useState(true);

  const handleLazyLoad = () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      setChildItems(['Birch', 'Cedar', 'Maple', 'Pine']);

      // Disable lazy mode once the content has been loaded
      setLazy(false);
    }, 1000);
  };

  return (
    <OTree>
      <OTreeItem lazy={lazy} onSlLazyLoad={handleLazyLoad}>
        Available Trees
        {childItems.map(item => (
          <OTreeItem>{item}</OTreeItem>
        ))}
      </OTreeItem>
    </OTree>
  );
};
```

### Customizing the Expand and Collapse Icons

Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. To disable the animation, override the `rotate` property on the `expand-button` part as shown below.

```html preview
<o-tree class="custom-icons">
  <o-icon name="plus-square" slot="expand-icon"></o-icon>
  <o-icon name="dash-square" slot="collapse-icon"></o-icon>

  <o-tree-item>
    Deciduous
    <o-tree-item>Birch</o-tree-item>
    <o-tree-item>
      Maple
      <o-tree-item>Field maple</o-tree-item>
      <o-tree-item>Red maple</o-tree-item>
      <o-tree-item>Sugar maple</o-tree-item>
    </o-tree-item>
    <o-tree-item>Oak</o-tree-item>
  </o-tree-item>

  <o-tree-item>
    Coniferous
    <o-tree-item>Cedar</o-tree-item>
    <o-tree-item>Pine</o-tree-item>
    <o-tree-item>Spruce</o-tree-item>
  </o-tree-item>

  <o-tree-item>
    Non-trees
    <o-tree-item>Bamboo</o-tree-item>
    <o-tree-item>Cactus</o-tree-item>
    <o-tree-item>Fern</o-tree-item>
  </o-tree-item>
</o-tree>

<style>
  .custom-icons o-tree-item::part(expand-button) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
</style>
```

<!-- prettier-ignore -->
```jsx react
import { OTree, OTreeItem } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <OTree>
    <OIcon name="plus-square" slot="expand-icon"></OIcon>
    <OIcon name="dash-square" slot="collapse-icon"></OIcon>

    <OTreeItem>
      Deciduous
      <OTreeItem>Birch</OTreeItem>
      <OTreeItem>
        Maple
        <OTreeItem>Field maple</OTreeItem>
        <OTreeItem>Red maple</OTreeItem>
        <OTreeItem>Sugar maple</OTreeItem>
      </OTreeItem>
      <OTreeItem>Oak</OTreeItem>
    </OTreeItem>

    <OTreeItem>
      Coniferous
      <OTreeItem>Cedar</OTreeItem>
      <OTreeItem>Pine</OTreeItem>
      <OTreeItem>Spruce</OTreeItem>
    </OTreeItem>

    <OTreeItem>
      Non-trees
      <OTreeItem>Bamboo</OTreeItem>
      <OTreeItem>Cactus</OTreeItem>
      <OTreeItem>Fern</OTreeItem>
    </OTreeItem>
  </OTree>
);
```

### With Icons

Decorative icons can be used before labels to provide hints for each node.

```html preview
<o-tree class="tree-with-icons">
  <o-tree-item expanded>
    <o-icon name="folder"></o-icon>
    Documents

    <o-tree-item>
      <o-icon name="folder"> </o-icon>
      Photos
      <o-tree-item>
        <o-icon name="image"></o-icon>
        birds.jpg
      </o-tree-item>
      <o-tree-item>
        <o-icon name="image"></o-icon>
        kitten.jpg
      </o-tree-item>
      <o-tree-item>
        <o-icon name="image"></o-icon>
        puppy.jpg
      </o-tree-item>
    </o-tree-item>

    <o-tree-item>
      <o-icon name="folder"></o-icon>
      Writing
      <o-tree-item>
        <o-icon name="file"></o-icon>
        draft.txt
      </o-tree-item>
      <o-tree-item>
        <o-icon name="file-pdf"></o-icon>
        final.pdf
      </o-tree-item>
      <o-tree-item>
        <o-icon name="file-bar-graph"></o-icon>
        sales.xls
      </o-tree-item>
    </o-tree-item>
  </o-tree-item>
</o-tree>
```

```jsx react
import { OIcon, OTree, OTreeItem } from '%PACKAGE_NAME%/dist/react';

const App = () => {
  return (
    <OTree class="tree-with-icons">
      <OTreeItem expanded>
        <OIcon name="folder" />
        Root
        <OTreeItem>
          <OIcon name="folder" />
          Folder 1<OTreeItem>
            <OIcon name="files" />
            File 1 - 1
          </OTreeItem>
          <OTreeItem disabled>
            <OIcon name="files" />
            File 1 - 2
          </OTreeItem>
          <OTreeItem>
            <OIcon name="files" />
            File 1 - 3
          </OTreeItem>
        </OTreeItem>
        <OTreeItem>
          <OIcon name="files" />
          Folder 2<OTreeItem>
            <OIcon name="files" />
            File 2 - 1
          </OTreeItem>
          <OTreeItem>
            <OIcon name="files" />
            File 2 - 2
          </OTreeItem>
        </OTreeItem>
        <OTreeItem>
          <OIcon name="files" />
          File 1
        </OTreeItem>
      </OTreeItem>
    </OTree>
  );
};
```

[component-metadata:o-tree]
