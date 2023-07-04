# Navbar

[component-header:o-navbar]

Navbar component is made so you pass yourslelf the items as needed (supports reccursive children).
When a child is selected a "o-select" event will get dispatched.

Note that the property `"selected"` can be used to pre-select a page

It has **dependency-icons** on:

1. **"assets/images/navbar-interzero-logo.svg"**
2. **"assets/images/navbar-circular-logo.svg"**
3. **"assets/images/navbar-hamburger-open.svg"**
4. **"assets/images/navbar-hamburger-collapsed.svg"**

5. _(from o-navbar-item)_ **"assets/images/caret.svg"**

## Basic Example

```html preview
<o-navbar class="navbar-democase" selected="Home">
  <o-navbar-item text="Home">
    <o-icon library="material" name="grid_view" slot="icon"></o-icon>
    <o-icon library="material" name="grid_view_baseline" slot="icon_selected"></o-icon>
    <o-navbar-item text="Home 1.1"></o-navbar-item>
    <o-navbar-item text="Home 1.2"></o-navbar-item>
    <o-navbar-item text="Home 1.3">
      <o-navbar-item text="Home 1.3.1"></o-navbar-item>
      <o-navbar-item text="Home 1.3.2"></o-navbar-item>
      <o-navbar-item text="Home 1.3.3">
        <o-navbar-item text="Home 1.3.3.1"></o-navbar-item>
        <o-navbar-item text="Home 1.3.3.2"></o-navbar-item>
        <o-navbar-item text="Home 1.3.3.3"></o-navbar-item>
      </o-navbar-item>
    </o-navbar-item>
  </o-navbar-item>
  <o-navbar-item count="62" text="Users">
    <o-icon name="group" library="material" slot="icon"></o-icon>
    <o-icon library="material" name="group_baseline" slot="icon_selected"></o-icon>
  </o-navbar-item>
  <o-navbar-item count="62" text="Price-Lists">
    <o-icon library="material" name="fact_check" slot="icon"></o-icon>
    <o-icon library="material" name="fact_check_baseline" slot="icon_selected"></o-icon>
  </o-navbar-item>
  <o-navbar-item text="Price-Flow">
    <o-icon library="material" name="polyline" slot="icon"></o-icon>
    <o-icon library="material" name="polyline_baseline" slot="icon_selected"></o-icon>
  </o-navbar-item>
</o-navbar>
<script type="module">
  import { registerIconLibrary } from './dist/utilities/icon-library.js';

  document.querySelector('.navbar-democase').addEventListener('o-select', e => console.log(e));

  registerIconLibrary('material', {
    resolver: name => {
      const match = name.match(/^(.*?)(_(round|sharp))?$/);
      return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'outline'}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

```jsx react
import { OIcon, ONavbar, ONavbarItem } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <ONavbar class="navbar-democase" selected="Home">
    <ONavbarItem text="Home">
      <OIcon src="assets/images/navbar-home-unselected.svg" slot="icon"></OIcon>
      <OIcon src="assets/images/navbar-home-selected.svg" slot="icon_selected"></OIcon>
      <ONavbarItem text="Home 1.1"></ONavbarItem>
      <ONavbarItem text="Home 1.2"></ONavbarItem>
      <ONavbarItem text="Home 1.3">
        <ONavbarItem text="Home 1.3.1"></ONavbarItem>
        <ONavbarItem text="Home 1.3.2"></ONavbarItem>
        <ONavbarItem text="Home 1.3.3">
          <ONavbarItem text="Home 1.3.3.1"></ONavbarItem>
          <ONavbarItem text="Home 1.3.3.2"></ONavbarItem>
          <ONavbarItem text="Home 1.3.3.3"></ONavbarItem>
        </ONavbarItem>
      </ONavbarItem>
    </ONavbarItem>
    <ONavbarItem count="62" text="Users">
      <OIcon src="assets/images/navbar-user-unselected.svg" slot="icon"></OIcon>
      <OIcon src="assets/images/navbar-user-selected.svg" slot="icon_selected"></OIcon>
    </ONavbarItem>
    <ONavbarItem count="62" text="Price-Lists">
      <OIcon src="assets/images/navbar-pricelist-unselected.svg" slot="icon"></OIcon>
      <OIcon src="assets/images/navbar-pricelist-selected.svg" slot="icon_selected"></OIcon>
    </ONavbarItem>
    <ONavbarItem text="Price-Flow">
      <OIcon src="assets/images/navbar-priceflow-unselected.svg" slot="icon"></OIcon>
      <OIcon src="assets/images/navbar-priceflow-selected.svg" slot="icon_selected"></OIcon>
    </ONavbarItem>
  </ONavbar>
);
```

[component-metadata:o-navbar]
