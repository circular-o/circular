---
meta:
  title: Breadcrumb
  description: Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
layout: component
---

Breadcrumbs are usually placed before a page's main content with the current page shown last to indicate the user's position in the navigation.

```html:preview
<o-breadcrumb>
  <o-breadcrumb-item>Catalog</o-breadcrumb-item>
  <o-breadcrumb-item>Clothing</o-breadcrumb-item>
  <o-breadcrumb-item>Women's</o-breadcrumb-item>
  <o-breadcrumb-item>Shirts &amp; Tops</o-breadcrumb-item>
</o-breadcrumb>
```

```jsx:react
import { OBreadcrumb, OBreadcrumbItem } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OBreadcrumb>
    <OBreadcrumbItem>Catalog</OBreadcrumbItem>
    <OBreadcrumbItem>Clothing</OBreadcrumbItem>
    <OBreadcrumbItem>Women's</OBreadcrumbItem>
    <OBreadcrumbItem>Shirts &amp; Tops</OBreadcrumbItem>
  </OBreadcrumb>
);
```

## Examples

### Breadcrumb Links

By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications. In this case, you'll need to add event listeners to handle clicks.

For websites, you'll probably want to use links instead. You can make any breadcrumb item a link by applying an `href` attribute to it. Now, when the user activates it, they'll be taken to the corresponding page — no event listeners required.

```html:preview
<o-breadcrumb>
  <o-breadcrumb-item href="https://example.com/home">Homepage</o-breadcrumb-item>

  <o-breadcrumb-item href="https://example.com/home/services">Our Services</o-breadcrumb-item>

  <o-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</o-breadcrumb-item>

  <o-breadcrumb-item href="https://example.com/home/services/digital/web-design">Web Design</o-breadcrumb-item>
</o-breadcrumb>
```

```jsx:react
import { OBreadcrumb, OBreadcrumbItem } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OBreadcrumb>
    <OBreadcrumbItem href="https://example.com/home">Homepage</OBreadcrumbItem>

    <OBreadcrumbItem href="https://example.com/home/services">Our Services</OBreadcrumbItem>

    <OBreadcrumbItem href="https://example.com/home/services/digital">Digital Media</OBreadcrumbItem>

    <OBreadcrumbItem href="https://example.com/home/services/digital/web-design">Web Design</OBreadcrumbItem>
  </OBreadcrumb>
);
```

### Custom Separators

Use the `separator` slot to change the separator that goes between breadcrumb items. Icons work well, but you can also use text or an image.

```html:preview
<o-breadcrumb>
  <o-icon name="dot" slot="separator"></o-icon>
  <o-breadcrumb-item>First</o-breadcrumb-item>
  <o-breadcrumb-item>Second</o-breadcrumb-item>
  <o-breadcrumb-item>Third</o-breadcrumb-item>
</o-breadcrumb>

<br />

<o-breadcrumb>
  <o-icon name="arrow-right" slot="separator"></o-icon>
  <o-breadcrumb-item>First</o-breadcrumb-item>
  <o-breadcrumb-item>Second</o-breadcrumb-item>
  <o-breadcrumb-item>Third</o-breadcrumb-item>
</o-breadcrumb>

<br />

<o-breadcrumb>
  <span slot="separator">/</span>
  <o-breadcrumb-item>First</o-breadcrumb-item>
  <o-breadcrumb-item>Second</o-breadcrumb-item>
  <o-breadcrumb-item>Third</o-breadcrumb-item>
</o-breadcrumb>
```

```jsx:react
import 'O-PACKAGE-FULL-NAME-O/dist/components/icon/icon.js';
import { OBreadcrumb, OBreadcrumbItem } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <>
    <OBreadcrumb>
      <o-icon name="dot" slot="separator" />
      <OBreadcrumbItem>First</OBreadcrumbItem>
      <OBreadcrumbItem>Second</OBreadcrumbItem>
      <OBreadcrumbItem>Third</OBreadcrumbItem>
    </OBreadcrumb>

    <br />

    <OBreadcrumb>
      <o-icon name="arrow-right" slot="separator" />
      <OBreadcrumbItem>First</OBreadcrumbItem>
      <OBreadcrumbItem>Second</OBreadcrumbItem>
      <OBreadcrumbItem>Third</OBreadcrumbItem>
    </OBreadcrumb>

    <br />

    <OBreadcrumb>
      <span slot="separator">/</span>
      <OBreadcrumbItem>First</OBreadcrumbItem>
      <OBreadcrumbItem>Second</OBreadcrumbItem>
      <OBreadcrumbItem>Third</OBreadcrumbItem>
    </OBreadcrumb>
  </>
);
```

### Prefixes

Use the `prefix` slot to add content before any breadcrumb item.

```html:preview
<o-breadcrumb>
  <o-breadcrumb-item>
    <o-icon slot="prefix" name="house"></o-icon>
    Home
  </o-breadcrumb-item>
  <o-breadcrumb-item>Articles</o-breadcrumb-item>
  <o-breadcrumb-item>Traveling</o-breadcrumb-item>
</o-breadcrumb>
```

```jsx:react
import { OBreadcrumb, OBreadcrumbItem, OIcon } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OBreadcrumb>
    <OBreadcrumbItem>
      <OIcon slot="prefix" name="house" />
      Home
    </OBreadcrumbItem>
    <OBreadcrumbItem>Articles</OBreadcrumbItem>
    <OBreadcrumbItem>Traveling</OBreadcrumbItem>
  </OBreadcrumb>
);
```

### Suffixes

Use the `suffix` slot to add content after any breadcrumb item.

```html:preview
<o-breadcrumb>
  <o-breadcrumb-item>Documents</o-breadcrumb-item>
  <o-breadcrumb-item>Policies</o-breadcrumb-item>
  <o-breadcrumb-item>
    Security
    <o-icon slot="suffix" name="shield-lock"></o-icon>
  </o-breadcrumb-item>
</o-breadcrumb>
```

```jsx:react
import { OBreadcrumb, OBreadcrumbItem, OIcon } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OBreadcrumb>
    <OBreadcrumbItem>Documents</OBreadcrumbItem>
    <OBreadcrumbItem>Policies</OBreadcrumbItem>
    <OBreadcrumbItem>
      Security
      <OIcon slot="suffix" name="shield-lock"></OIcon>
    </OBreadcrumbItem>
  </OBreadcrumb>
);
```

### With Dropdowns

Dropdown menus can be placed in a prefix or suffix slot to provide additional options.

```html:preview
<o-breadcrumb>
  <o-breadcrumb-item>Homepage</o-breadcrumb-item>
  <o-breadcrumb-item>Our Services</o-breadcrumb-item>
  <o-breadcrumb-item>Digital Media</o-breadcrumb-item>
  <o-breadcrumb-item>
    Web Design
    <o-dropdown slot="suffix">
      <o-button slot="trigger" size="small" circle>
        <o-icon label="More options" name="three-dots"></o-icon>
      </o-button>
      <o-menu>
        <o-menu-item type="checkbox" checked>Web Design</o-menu-item>
        <o-menu-item type="checkbox">Web Development</o-menu-item>
        <o-menu-item type="checkbox">Marketing</o-menu-item>
      </o-menu>
    </o-dropdown>
  </o-breadcrumb-item>
</o-breadcrumb>
```

```jsx:react
import {
  OBreadcrumb,
  OBreadcrumbItem,
  OButton,
  ODropdown,
  OIcon,
  OMenu,
  OMenuItem
} from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <OBreadcrumb>
    <OBreadcrumbItem>Homepage</OBreadcrumbItem>
    <OBreadcrumbItem>Our Services</OBreadcrumbItem>
    <OBreadcrumbItem>Digital Media</OBreadcrumbItem>
    <OBreadcrumbItem>
      Web Design
      <ODropdown slot="suffix">
        <OButton slot="trigger" size="small" circle>
          <OIcon label="More options" name="three-dots"></OIcon>
        </OButton>
        <OMenu>
          <OMenuItem type="checkbox" checked>
            Web Design
          </OMenuItem>
          <OMenuItem type="checkbox">Web Development</OMenuItem>
          <OMenuItem type="checkbox">Marketing</OMenuItem>
        </OMenu>
      </ODropdown>
    </OBreadcrumbItem>
  </OBreadcrumb>
);
```
