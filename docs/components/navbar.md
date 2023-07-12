# Navbar

[component-header:o-navbar]

Navbar component is made so you pass yourself the items as needed (supports recursive children).
When a child is selected a "o-select" event will get dispatched.

Note that the property `"selected"` can be used to pre-select a page.

## Basic Example

```html preview
<o-navbar class="navbar-demo-case" selected="Home">
  <o-navbar-item text="Home">
    <o-icon library="material" name="grid_view" slot="icon"></o-icon>
    <o-icon library="material" name="grid_view_baseline" slot="icon-selected"></o-icon>
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
    <o-icon library="material" name="group" slot="icon"></o-icon>
    <o-icon library="material" name="group_baseline" slot="icon-selected"></o-icon>
  </o-navbar-item>
  <o-navbar-item count="62" text="Price-Lists">
    <o-icon library="material" name="fact_check" slot="icon"></o-icon>
    <o-icon library="material" name="fact_check_baseline" slot="icon-selected"></o-icon>
  </o-navbar-item>
  <o-navbar-item text="Price-Flow">
    <o-icon library="material" name="polyline" slot="icon"></o-icon>
    <o-icon library="material" name="polyline_baseline" slot="icon-selected"></o-icon>
  </o-navbar-item>
</o-navbar>

<script type="module">
  document.querySelector('.navbar-demo-case').addEventListener('o-select', e => console.log(e));
</script>
```

```jsx react
import { OIcon, ONavbar, ONavbarItem } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <ONavbar class="navbar-demo-case" selected="Home">
    <ONavbarItem text="Home">
      <OIcon src="assets/images/navbar-home-unselected.svg" slot="icon"></OIcon>
      <OIcon src="assets/images/navbar-home-selected.svg" slot="icon-selected"></OIcon>
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
      <OIcon library="material" name="group" slot="icon"></OIcon>
      <OIcon library="material" name="group_baseline" slot="icon-selected"></OIcon>
    </ONavbarItem>
    <ONavbarItem count="62" text="Price-Lists">
      <OIcon library="material" name="fact_check" slot="icon"></OIcon>
      <OIcon library="material" name="fact_check_baseline" slot="icon-selected"></OIcon>
    </ONavbarItem>
    <ONavbarItem text="Price-Flow">
      <OIcon library="material" name="polyline" slot="icon"></OIcon>
      <OIcon library="material" name="polyline_baseline" slot="icon-selected"></OIcon>
    </ONavbarItem>
  </ONavbar>
);
```

[component-metadata:o-navbar]
