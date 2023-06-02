# Breadcrumb Item

[component-header:o-breadcrumb-item]

```html preview
<o-breadcrumb>
  <o-breadcrumb-item>
    <o-icon slot="prefix" name="house"></o-icon>
    Home
  </o-breadcrumb-item>
  <o-breadcrumb-item>Clothing</o-breadcrumb-item>
  <o-breadcrumb-item>Shirts</o-breadcrumb-item>
</o-breadcrumb>
```

```jsx react
import { OBreadcrumb, OBreadcrumbItem, OIcon } from '%PACKAGE_FULL_PATH%/dist/react';

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

?> Additional demonstrations can be found in the [breadcrumb examples](/components/breadcrumb).

[component-metadata:o-breadcrumb-item]
