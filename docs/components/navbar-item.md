# Navbar Item

[component-header:o-navbar-item]

A description of the component goes here.

```html preview
<o-navbar-item icon="gear-wide" class="margin" count="40320002" text="Hello"></o-navbar-item>
<style>
  o-navbar-item.margin {
    margin-inline: 6rem;
  }
</style>
```

## Examples

### First Example

```html preview
<o-navbar-item icon="gear-wide" class="margin" count="40320002" text="Hello"></o-navbar-item>
```

### Second Example

```html preview
<o-navbar-item icon="gear-wide" class="margin" count="40320002" text="Hello">
  <o-navbar-item id="1" text="sub-item"></o-navbar-item>
  <o-navbar-item id="2" text="sub-item"></o-navbar-item>
  <o-navbar-item id="3" text="sub-item">
    <o-navbar-item id="3.1" text="sub-sub-item"></o-navbar-item>
    <o-navbar-item id="3.2" text="sub-sub-item">
      <o-navbar-item id="3.2.1" text="sub-sub-item"></o-navbar-item>
      <o-navbar-item id="3.2.2" text="sub-sub-item"></o-navbar-item>
      <o-navbar-item id="3.2.3" text="sub-sub-item"></o-navbar-item>
    </o-navbar-item>
  </o-navbar-item>
</o-navbar-item>
<script type="module">
  import { registerIconLibrary } from './dist/utilities/icon-library.js';

  registerIconLibrary('material', {
    resolver: name => {
      const match = name.match(/^(.*?)(_(round|sharp))?$/);
      return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'outline'}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

[component-metadata:o-navbar-item]
