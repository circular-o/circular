---
meta:
  title: Breadcrumb Item
  description: Breadcrumb Items are used inside breadcrumbs to represent different links.
layout: component
---

```html:preview
<o-breadcrumb>
  <o-breadcrumb-item>
    <o-icon slot="prefix" name="house"></o-icon>
    Home
  </o-breadcrumb-item>
  <o-breadcrumb-item>Clothing</o-breadcrumb-item>
  <o-breadcrumb-item>Shirts</o-breadcrumb-item>
</o-breadcrumb>
```

```jsx:react
import { OBreadcrumb, OBreadcrumbItem, OIcon } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OBreadcrumb>
    <OBreadcrumbItem>
      <OIcon slot="prefix" name="house"></OIcon>
      Home
    </OBreadcrumbItem>
    <OBreadcrumbItem>Clothing</OBreadcrumbItem>
    <OBreadcrumbItem>Shirts</OBreadcrumbItem>
  </OBreadcrumb>
);
```

:::tip
Additional demonstrations can be found in the [breadcrumb examples](/components/breadcrumb).
:::
