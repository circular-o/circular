# Icon

[component-header:o-icon]

%LIBRARY-NAME% comes bundled with over 4,000 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) and [Material Icons](https://github.com/material-icons/material-icons) projects. These icons are part of the `default` and `material` icon libraries. If you prefer, you can register [custom icon libraries](#icon-libraries) as well.

?> Depending on how you're loading %LIBRARY-NAME%, you may need to copy icon assets and/or [set the base path](getting-started/installation#setting-the-base-path) so %LIBRARY-NAME% knows where to load them from. Otherwise, icons may not appear and you'll see 404 Not Found errors in the dev console.

## Default Icons

All available icons in the `default` and `material` icon libraries are shown below. Click or tap on any icon to copy its name, then you can use it in your HTML like this.

Default library:

```html
<o-icon name="icon-name-here"></o-icon>
```

Material library:

```html
<o-icon library="material" name="icon-name-here"></o-icon>
```

<div class="icon-search">
  <div class="icon-search-controls">
    <o-input placeholder="Search Icons" clearable>
      <o-icon slot="prefix" name="search"></o-icon>
    </o-input>
    <o-select value="outline">
      <o-option value="outline">Outline</o-option>
      <o-option value="fill">Fill</o-option>
      <o-option value="baseline">Baseline</o-option>
      <o-option value="round">Round</o-option>
      <o-option value="sharp">Sharp</o-option>
      <o-option value="twotone">Twotone</o-option>
      <o-option value="all">All icons</o-option>
    </o-select>
  </div>
  <div class="icon-list"></div>
  <input type="text" class="icon-copy-input" aria-hidden="true" tabindex="-1">
</div>

## Examples

### Colors

Icons inherit their color from the current text color. Thus, you can set the `color` property on the `<o-icon>` element or an ancestor to change the color.

```html preview
<div style="color: #4a90e2;">
  <o-icon name="exclamation-triangle"></o-icon>
  <o-icon name="archive"></o-icon>
  <o-icon name="battery-charging"></o-icon>
  <o-icon name="bell"></o-icon>
</div>
<div style="color: #9013fe;">
  <o-icon name="clock"></o-icon>
  <o-icon name="cloud"></o-icon>
  <o-icon name="download"></o-icon>
  <o-icon name="file-earmark"></o-icon>
</div>
<div style="color: #417505;">
  <o-icon name="flag"></o-icon>
  <o-icon name="heart"></o-icon>
  <o-icon name="image"></o-icon>
  <o-icon name="lightning"></o-icon>
</div>
<div style="color: #f5a623;">
  <o-icon name="mic"></o-icon>
  <o-icon name="search"></o-icon>
  <o-icon name="star"></o-icon>
  <o-icon name="trash"></o-icon>
</div>
```

```jsx react
import { OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <div style={{ color: '#4a90e2' }}>
      <OIcon name="exclamation-triangle"></OIcon>
      <OIcon name="archive"></OIcon>
      <OIcon name="battery-charging"></OIcon>
      <OIcon name="bell"></OIcon>
    </div>
    <div style={{ color: '#9013fe' }}>
      <OIcon name="clock"></OIcon>
      <OIcon name="cloud"></OIcon>
      <OIcon name="download"></OIcon>
      <OIcon name="file-earmark"></OIcon>
    </div>
    <div style={{ color: '#417505' }}>
      <OIcon name="flag"></OIcon>
      <OIcon name="heart"></OIcon>
      <OIcon name="image"></OIcon>
      <OIcon name="lightning"></OIcon>
    </div>
    <div style={{ color: '#f5a623' }}>
      <OIcon name="mic"></OIcon>
      <OIcon name="search"></OIcon>
      <OIcon name="star"></OIcon>
      <OIcon name="trash"></OIcon>
    </div>
  </>
);
```

### Sizing

Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.

```html preview
<div style="font-size: 32px;">
  <o-icon name="exclamation-triangle"></o-icon>
  <o-icon name="archive"></o-icon>
  <o-icon name="battery-charging"></o-icon>
  <o-icon name="bell"></o-icon>
  <o-icon name="clock"></o-icon>
  <o-icon name="cloud"></o-icon>
  <o-icon name="download"></o-icon>
  <o-icon name="file-earmark"></o-icon>
  <o-icon name="flag"></o-icon>
  <o-icon name="heart"></o-icon>
  <o-icon name="image"></o-icon>
  <o-icon name="lightning"></o-icon>
  <o-icon name="mic"></o-icon>
  <o-icon name="search"></o-icon>
  <o-icon name="star"></o-icon>
  <o-icon name="trash"></o-icon>
</div>
```

```jsx react
import { OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <div style={{ fontSize: '32px' }}>
    <OIcon name="exclamation-triangle" />
    <OIcon name="archive" />
    <OIcon name="battery-charging" />
    <OIcon name="bell" />
    <OIcon name="clock" />
    <OIcon name="cloud" />
    <OIcon name="download" />
    <OIcon name="file-earmark" />
    <OIcon name="flag" />
    <OIcon name="heart" />
    <OIcon name="image" />
    <OIcon name="lightning" />
    <OIcon name="mic" />
    <OIcon name="search" />
    <OIcon name="star" />
    <OIcon name="trash" />
  </div>
);
```

### Labels

For non-decorative icons, use the `label` attribute to announce it to assistive devices.

```html preview
<o-icon name="star-fill" label="Add to favorites"></o-icon>
```

```jsx react
import { OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OIcon name="star-fill" label="Add to favorites" />;
```

### Custom Icons

Custom icons can be loaded individually with the `src` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon, it might make sense to register a [custom icon library](#icon-libraries).

```html preview
<o-icon src="assets/images/shoe.svg" style="font-size: 8rem;"></o-icon>
```

```jsx react
import { OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OIcon src="assets/images/shoe.svg" style={{ fontSize: '8rem' }}></OIcon>;
```

## Icon Libraries

You can register additional icons to use with the `<o-icon>` component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.

%LIBRARY-NAME% ships with two built-in icon libraries, `default` and `system`. The [default icon library](#customizing-the-default-library) contains all of the icons in the Bootstrap Icons project. The [system icon library](#customizing-the-system-library) contains only a small subset of icons that are used internally by %LIBRARY-NAME% components.

To register an additional icon library, use the `registerIconLibrary()` function that's exported from `utilities/icon-library.js`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.

If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via `currentColor`, so you may need to apply `fill="currentColor` or `stroke="currentColor"` to the SVG element using this function.

Here's an example that registers an icon library located in the `/assets/icons` directory.

```html
<script type="module">
  import { registerIconLibrary } from './dist/utilities/icon-library.js';

  registerIconLibrary('my-icons', {
    resolver: name => `/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

To display an icon, set the `library` and `name` attributes of an `<o-icon>` element.

```html
<!-- This will show the icon located at /assets/icons/smile.svg -->
<o-icon library="my-icons" name="smile"></o-icon>
```

If an icon is used before registration occurs, it will be empty initially but shown when registered.

The following examples demonstrate how to register a number of popular, open source icon libraries via CDN. Feel free to adapt the code as you see fit to use your own origin or naming conventions.

### Boxicons

This will register the [Boxicons](https://boxicons.com/) library using the jsDelivr CDN. This library has three variations: regular (`bx-*`), solid (`bxs-*`), and logos (`bxl-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Creative Commons 4.0 License](https://github.com/atisawd/boxicons#license).

```html preview
<script type="module">
  import { registerIconLibrary } from './dist/utilities/icon-library.js';

  registerIconLibrary('boxicons', {
    resolver: name => {
      let folder = 'regular';
      if (name.substring(0, 4) === 'bxs-') folder = 'solid';
      if (name.substring(0, 4) === 'bxl-') folder = 'logos';
      return `https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${folder}/${name}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <o-icon library="boxicons" name="bx-bot"></o-icon>
  <o-icon library="boxicons" name="bx-cookie"></o-icon>
  <o-icon library="boxicons" name="bx-joystick"></o-icon>
  <o-icon library="boxicons" name="bx-save"></o-icon>
  <o-icon library="boxicons" name="bx-server"></o-icon>
  <o-icon library="boxicons" name="bx-wine"></o-icon>
  <br />
  <o-icon library="boxicons" name="bxs-bot"></o-icon>
  <o-icon library="boxicons" name="bxs-cookie"></o-icon>
  <o-icon library="boxicons" name="bxs-joystick"></o-icon>
  <o-icon library="boxicons" name="bxs-save"></o-icon>
  <o-icon library="boxicons" name="bxs-server"></o-icon>
  <o-icon library="boxicons" name="bxs-wine"></o-icon>
  <br />
  <o-icon library="boxicons" name="bxl-apple"></o-icon>
  <o-icon library="boxicons" name="bxl-chrome"></o-icon>
  <o-icon library="boxicons" name="bxl-edge"></o-icon>
  <o-icon library="boxicons" name="bxl-firefox"></o-icon>
  <o-icon library="boxicons" name="bxl-opera"></o-icon>
  <o-icon library="boxicons" name="bxl-microsoft"></o-icon>
</div>
```

### Lucide

This will register the [Lucide](https://lucide.dev/) icon library using the jsDelivr CDN. This project is a community-maintained fork of the popular [Feather](https://feathericons.com/) icon library.

Icons in this library are licensed under the [MIT License](https://github.com/lucide-icons/lucide/blob/master/LICENSE).

```html preview
<div style="font-size: 24px;">
  <o-icon library="lucide" name="feather"></o-icon>
  <o-icon library="lucide" name="pie-chart"></o-icon>
  <o-icon library="lucide" name="settings"></o-icon>
  <o-icon library="lucide" name="map-pin"></o-icon>
  <o-icon library="lucide" name="printer"></o-icon>
  <o-icon library="lucide" name="shopping-cart"></o-icon>
</div>

<script type="module">
  import { registerIconLibrary } from './dist/utilities/icon-library.js';

  registerIconLibrary('lucide', {
    resolver: name => `https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/${name}.svg`
  });
</script>
```

### Font Awesome

This will register the [Font Awesome Free](https://fontawesome.com/) library using the jsDelivr CDN. This library has three variations: regular (`far-*`), solid (`fas-*`), and brands (`fab-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Font Awesome Free License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt). Some of the icons that appear on the Font Awesome website require a license and are therefore not available in the CDN.

```html preview
<script type="module">
  import { registerIconLibrary } from './dist/utilities/icon-library.js';

  registerIconLibrary('fa', {
    resolver: name => {
      const filename = name.replace(/^fa[rbs]-/, '');
      let folder = 'regular';
      if (name.substring(0, 4) === 'fas-') folder = 'solid';
      if (name.substring(0, 4) === 'fab-') folder = 'brands';
      return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <o-icon library="fa" name="far-bell"></o-icon>
  <o-icon library="fa" name="far-comment"></o-icon>
  <o-icon library="fa" name="far-hand-point-right"></o-icon>
  <o-icon library="fa" name="far-hdd"></o-icon>
  <o-icon library="fa" name="far-heart"></o-icon>
  <o-icon library="fa" name="far-star"></o-icon>
  <br />
  <o-icon library="fa" name="fas-archive"></o-icon>
  <o-icon library="fa" name="fas-book"></o-icon>
  <o-icon library="fa" name="fas-chess-knight"></o-icon>
  <o-icon library="fa" name="fas-dice"></o-icon>
  <o-icon library="fa" name="fas-pizza-slice"></o-icon>
  <o-icon library="fa" name="fas-scroll"></o-icon>
  <br />
  <o-icon library="fa" name="fab-apple"></o-icon>
  <o-icon library="fa" name="fab-chrome"></o-icon>
  <o-icon library="fa" name="fab-edge"></o-icon>
  <o-icon library="fa" name="fab-firefox"></o-icon>
  <o-icon library="fa" name="fab-opera"></o-icon>
  <o-icon library="fa" name="fab-microsoft"></o-icon>
</div>
```

### Heroicons

This will register the [Heroicons](https://heroicons.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from './dist/utilities/icon-library.js';

  registerIconLibrary('heroicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/heroicons@2.0.1/24/outline/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <o-icon library="heroicons" name="chat-bubble-left"></o-icon>
  <o-icon library="heroicons" name="cloud"></o-icon>
  <o-icon library="heroicons" name="cog"></o-icon>
  <o-icon library="heroicons" name="document-text"></o-icon>
  <o-icon library="heroicons" name="gift"></o-icon>
  <o-icon library="heroicons" name="speaker-wave"></o-icon>
</div>
```

### Iconoir

This will register the [Iconoir](https://iconoir.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/lucaburgio/iconoir/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from './dist/utilities/icon-library.js';

  registerIconLibrary('iconoir', {
    resolver: name => `https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <o-icon library="iconoir" name="check-circled-outline"></o-icon>
  <o-icon library="iconoir" name="drawer"></o-icon>
  <o-icon library="iconoir" name="keyframes"></o-icon>
  <o-icon library="iconoir" name="headset-help"></o-icon>
  <o-icon library="iconoir" name="color-picker"></o-icon>
  <o-icon library="iconoir" name="wifi"></o-icon>
</div>
```

### Ionicons

This will register the [Ionicons](https://ionicons.com/) library using the jsDelivr CDN. This library has three variations: outline (default), filled (`*-filled`), and sharp (`*-sharp`). A mutator function is required to polyfill a handful of styles we're not including.

Icons in this library are licensed under the [MIT License](https://github.com/ionic-team/ionicons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from './dist/utilities/icon-library.js';

  registerIconLibrary('ionicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${name}.svg`,
    mutator: svg => {
      svg.setAttribute('fill', 'currentColor');
      svg.setAttribute('stroke', 'currentColor');
      [...svg.querySelectorAll('.ionicon-fill-none')].map(el => el.setAttribute('fill', 'none'));
      [...svg.querySelectorAll('.ionicon-stroke-width')].map(el => el.setAttribute('stroke-width', '32px'));
    }
  });
</script>

<div style="font-size: 24px;">
  <o-icon library="ionicons" name="alarm"></o-icon>
  <o-icon library="ionicons" name="american-football"></o-icon>
  <o-icon library="ionicons" name="bug"></o-icon>
  <o-icon library="ionicons" name="chatbubble"></o-icon>
  <o-icon library="ionicons" name="settings"></o-icon>
  <o-icon library="ionicons" name="warning"></o-icon>
  <br />
  <o-icon library="ionicons" name="alarm-outline"></o-icon>
  <o-icon library="ionicons" name="american-football-outline"></o-icon>
  <o-icon library="ionicons" name="bug-outline"></o-icon>
  <o-icon library="ionicons" name="chatbubble-outline"></o-icon>
  <o-icon library="ionicons" name="settings-outline"></o-icon>
  <o-icon library="ionicons" name="warning-outline"></o-icon>
  <br />
  <o-icon library="ionicons" name="alarm-sharp"></o-icon>
  <o-icon library="ionicons" name="american-football-sharp"></o-icon>
  <o-icon library="ionicons" name="bug-sharp"></o-icon>
  <o-icon library="ionicons" name="chatbubble-sharp"></o-icon>
  <o-icon library="ionicons" name="settings-sharp"></o-icon>
  <o-icon library="ionicons" name="warning-sharp"></o-icon>
</div>
```

### Jam Icons

This will register the [Jam Icons](https://jam-icons.com/) library using the jsDelivr CDN. This library has two variations: regular (default) and filled (`*-f`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [MIT License](https://github.com/michaelampr/jam/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from './dist/utilities/icon-library.js';

  registerIconLibrary('jam', {
    resolver: name => `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <o-icon library="jam" name="calendar"></o-icon>
  <o-icon library="jam" name="camera"></o-icon>
  <o-icon library="jam" name="filter"></o-icon>
  <o-icon library="jam" name="leaf"></o-icon>
  <o-icon library="jam" name="picture"></o-icon>
  <o-icon library="jam" name="set-square"></o-icon>
  <br />
  <o-icon library="jam" name="calendar-f"></o-icon>
  <o-icon library="jam" name="camera-f"></o-icon>
  <o-icon library="jam" name="filter-f"></o-icon>
  <o-icon library="jam" name="leaf-f"></o-icon>
  <o-icon library="jam" name="picture-f"></o-icon>
  <o-icon library="jam" name="set-square-f"></o-icon>
</div>
```

### Material Icons

It is already included as a default library in %LIBRARY-NAME%, the library name is `material`.

However, in this way you can register the [Material Icons](https://material.io/resources/icons/?style=baseline) library using the jsDelivr CDN. This library has three variations: outline (default), round (`*_round`), and sharp (`*_sharp`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/google/material-design-icons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from './dist/utilities/icon-library.js';

  registerIconLibrary('material', {
    resolver: name => {
      const match = name.match(/^(.*?)(_(round|sharp))?$/);
      return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.33/svg/${match[1]}/${match[3] || 'outline'}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <o-icon library="material" name="notifications"></o-icon>
  <o-icon library="material" name="email"></o-icon>
  <o-icon library="material" name="delete"></o-icon>
  <o-icon library="material" name="volume_up"></o-icon>
  <o-icon library="material" name="settings"></o-icon>
  <o-icon library="material" name="shopping_basket"></o-icon>
  <br />
  <o-icon library="material" name="notifications_round"></o-icon>
  <o-icon library="material" name="email_round"></o-icon>
  <o-icon library="material" name="delete_round"></o-icon>
  <o-icon library="material" name="volume_up_round"></o-icon>
  <o-icon library="material" name="settings_round"></o-icon>
  <o-icon library="material" name="shopping_basket_round"></o-icon>
  <br />
  <o-icon library="material" name="notifications_sharp"></o-icon>
  <o-icon library="material" name="email_sharp"></o-icon>
  <o-icon library="material" name="delete_sharp"></o-icon>
  <o-icon library="material" name="volume_up_sharp"></o-icon>
  <o-icon library="material" name="settings_sharp"></o-icon>
  <o-icon library="material" name="shopping_basket_sharp"></o-icon>
</div>
```

### Remix Icon

This will register the [Remix Icon](https://remixicon.com/) library using the jsDelivr CDN. This library groups icons by categories, so the name must include the category and icon separated by a slash, as well as the `-line` or `-fill` suffix as needed. A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Remix-Design/RemixIcon/blob/master/License).

```html preview
<script type="module">
  import { registerIconLibrary } from './dist/utilities/icon-library.js';

  registerIconLibrary('remixicon', {
    resolver: name => {
      const match = name.match(/^(.*?)\/(.*?)?$/);
      match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
      return `https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${match[1]}/${match[2]}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <o-icon library="remixicon" name="business/cloud-line"></o-icon>
  <o-icon library="remixicon" name="design/brush-line"></o-icon>
  <o-icon library="remixicon" name="business/pie-chart-line"></o-icon>
  <o-icon library="remixicon" name="development/bug-line"></o-icon>
  <o-icon library="remixicon" name="media/image-line"></o-icon>
  <o-icon library="remixicon" name="system/alert-line"></o-icon>
  <br />
  <o-icon library="remixicon" name="business/cloud-fill"></o-icon>
  <o-icon library="remixicon" name="design/brush-fill"></o-icon>
  <o-icon library="remixicon" name="business/pie-chart-fill"></o-icon>
  <o-icon library="remixicon" name="development/bug-fill"></o-icon>
  <o-icon library="remixicon" name="media/image-fill"></o-icon>
  <o-icon library="remixicon" name="system/alert-fill"></o-icon>
</div>
```

### Tabler Icons

This will register the [Tabler Icons](https://tabler-icons.io/) library using the jsDelivr CDN. This library features over 1,950 open source icons.

Icons in this library are licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from './dist/utilities/icon-library.js';

  registerIconLibrary('tabler', {
    resolver: name => `https://cdn.jsdelivr.net/npm/@tabler/icons@1.68.0/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <o-icon library="tabler" name="alert-triangle"></o-icon>
  <o-icon library="tabler" name="arrow-back"></o-icon>
  <o-icon library="tabler" name="at"></o-icon>
  <o-icon library="tabler" name="ball-baseball"></o-icon>
  <o-icon library="tabler" name="cake"></o-icon>
  <o-icon library="tabler" name="files"></o-icon>
  <br />
  <o-icon library="tabler" name="keyboard"></o-icon>
  <o-icon library="tabler" name="moon"></o-icon>
  <o-icon library="tabler" name="pig"></o-icon>
  <o-icon library="tabler" name="printer"></o-icon>
  <o-icon library="tabler" name="ship"></o-icon>
  <o-icon library="tabler" name="toilet-paper"></o-icon>
</div>
```

### Unicons

This will register the [Unicons](https://iconscout.com/unicons) library using the jsDelivr CDN. This library has two variations: line (default) and solid (`*-s`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Iconscout/unicons/blob/master/LICENSE). Some of the icons that appear on the Unicons website, particularly many of the solid variations, require a license and are therefore not available in the CDN.

```html preview
<script type="module">
  import { registerIconLibrary } from './dist/utilities/icon-library.js';

  registerIconLibrary('unicons', {
    resolver: name => {
      const match = name.match(/^(.*?)(-s)?$/);
      return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${match[2] === '-s' ? 'solid' : 'line'}/${
        match[1]
      }.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <o-icon library="unicons" name="clock"></o-icon>
  <o-icon library="unicons" name="graph-bar"></o-icon>
  <o-icon library="unicons" name="padlock"></o-icon>
  <o-icon library="unicons" name="polygon"></o-icon>
  <o-icon library="unicons" name="rocket"></o-icon>
  <o-icon library="unicons" name="star"></o-icon>
  <br />
  <o-icon library="unicons" name="clock-s"></o-icon>
  <o-icon library="unicons" name="graph-bar-s"></o-icon>
  <o-icon library="unicons" name="padlock-s"></o-icon>
  <o-icon library="unicons" name="polygon-s"></o-icon>
  <o-icon library="unicons" name="rocket-s"></o-icon>
  <o-icon library="unicons" name="star-s"></o-icon>
</div>
```

### Customizing the Default Library

The default icon library contains over 1,300 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These are the icons that display when you use `<o-icon>` without the `library` attribute. If you prefer to have these icons resolve elsewhere or to a different icon library, register an icon library using the `default` name and a custom resolver.

This example will load the same set of icons from the jsDelivr CDN instead of your local assets folder.

```html
<script type="module">
  import { registerIconLibrary } from './dist/utilities/icon-library.js';

  registerIconLibrary('default', {
    resolver: name => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.0.0/icons/${name}.svg`
  });
</script>
```

### Customizing the System Library

The system library contains only the icons used internally by %LIBRARY-NAME% components. Unlike the default icon library, the system library does not rely on physical assets. Instead, its icons are hard-coded as data URIs into the resolver to ensure their availability.

If you want to change the icons %LIBRARY-NAME% uses internally, you can register an icon library using the `system` name and a custom resolver. If you choose to do this, it's your responsibility to provide all of the icons that are required by components. You can reference `src/components/library.system.ts` for a complete list of system icons used by %LIBRARY-NAME%.

```html
<script type="module">
  import { registerIconLibrary } from './dist/utilities/icon-library.js';

  registerIconLibrary('system', {
    resolver: name => `/path/to/custom/icons/${name}.svg`
  });
</script>
```

<!-- Supporting scripts and styles for the search utility -->
<script>
  function wrapWithTooltip(item) {
    const tooltip = document.createElement('o-tooltip');
    const iconName = item.getAttribute('data-name');
    const iconLibrary = item.getAttribute('data-library');
    tooltip.content = iconLibrary !== 'default' ? `${iconName} (Library: ${iconLibrary})` : iconName;

    // Close open tooltips
    document.querySelectorAll('.icon-list o-tooltip[open]').forEach(tooltip => tooltip.hide());

    // Wrap it with a tooltip and trick it into showing up
    item.parentNode.insertBefore(tooltip, item);
    tooltip.appendChild(item);
    requestAnimationFrame(() => tooltip.dispatchEvent(new MouseEvent('mouseover')));
  }

  const libraryContainers = {};
  const getLibraryContainer = libraryName => {
    if (libraryContainers[libraryName]) {
      return libraryContainers[libraryName];
    }

    const div = document.createElement('div');
    div.classList.add('library-container');
    div.classList.add(`library-container-${libraryName}`);
    div.setAttribute('data-library-name', libraryName);

    const libraryAttr = libraryName === 'default' ? '' : ` library=&quot;${libraryName}&quot;`;
    div.innerHTML = `
      <div class="library-title">
        <h3>${libraryName} library</h3>
      </div>
      <div class="library-icons"></div>
    `;

    libraryContainers[libraryName] = { root: div, iconsContainer: div.querySelector('.library-icons'), variantsContainers: {} };

    return libraryContainers[libraryName];
  }

  const getVariantContainer = (libraryName, variant) => {
    const { iconsContainer, variantsContainers } = getLibraryContainer(libraryName);
    if (variantsContainers[variant]) {
      return variantsContainers[variant];
    }

    const div = document.createElement('div');
    div.classList.add('library-variants');
    div.classList.add(`library-variants-${variant}`);
    div.setAttribute('data-variants', variant);
    variantsContainers[variant] = div;

    // Variant title
    const title = document.createElement('div');
    title.classList.add('library-variants-title');
    title.classList.add(`library-variants-title-${variant}`);
    title.setAttribute('data-variants', variant);
    title.innerHTML = `
      <o-divider style="--spacing: 0"></o-divider>
      <div class="variant-label"><o-badge variant="neutral">${variant}</o-badge></div>
    `;

    iconsContainer.appendChild(title);
    iconsContainer.appendChild(variantsContainers[variant]);

    return variantsContainers[variant];
  }

  const addLibrariesToIconList = (iconsListContainer) => {
    Object.keys(libraryContainers).forEach(libraryName => {
      const {root} = getLibraryContainer(libraryName);
      iconsListContainer.appendChild(root);
    });
  }

  fetch('dist/assets/icons/icons.json')
    .then(res => res.json())
    .then(icons => {
      const container = document.querySelector('.icon-search');
      const input = container.querySelector('o-input');
      const select = container.querySelector('o-select');
      const copyInput = container.querySelector('.icon-copy-input');
      const loader = container.querySelector('.icon-loader');
      const list = container.querySelector('.icon-list');
      const iconItems = [];
      let inputTimeout;

      const getItem = iconData => {
        const item = document.createElement('div');
        item.classList.add('icon-list-item');
        item.setAttribute('data-name', iconData.name);
        item.setAttribute('data-variant', iconData.variant);
        item.setAttribute('data-library', iconData.library);
        item.setAttribute('data-terms', [iconData.name, iconData.title, ...(iconData.tags || []), ...(iconData.categories || [])].join(' '));
        item.innerHTML = `
          <svg width="1em" height="1em" fill="currentColor">
            <use xlink:href="assets/icons/${iconData.library}-sprite.svg#${iconData.name}"></use>
          </svg>
        `;

        // Wrap it with a tooltip the first time the mouse lands on it. We do this instead of baking them into the DOM
        // to improve this page's performance. See: https://github.com/shoelace-style/shoelace/issues/1122
        item.addEventListener('mouseover', () => wrapWithTooltip(item), { once: true });

        // Copy on click
        item.addEventListener('click', () => {
          const tooltip = item.closest('o-tooltip');
          copyInput.value = iconData.name;
          copyInput.select();
          document.execCommand('copy');

          if (tooltip) {
            const prevContent = tooltip.content;
            tooltip.content = 'Copied!';
            setTimeout(() => tooltip.content = prevContent, 1000);
          }
        });

        return item;
      };

      // Generate icons
      icons.map(i => {
        // The variant is outline by default
        let variant = 'outline';
        // If the library is default and the name end with -fill, then the variant is fill
        if (i.library === 'default' && i.name.endsWith('-fill')) {
          variant = 'fill';
        }

        const variantContainer = getVariantContainer(i.library, variant);
        const item = getItem({...i, variant});
        variantContainer.appendChild(item);
        iconItems.push(item);

        (i.variants || []).forEach(variant => {
          const variantContainer = getVariantContainer(i.library, variant);
          const item = getItem({...i, variant, name: `${i.name}_${variant}`});
          variantContainer.appendChild(item);
          iconItems.push(item);
        });
      });

      addLibrariesToIconList(list);

      // Filter as the user types
      const filterIcons = ({noTimeout = false} = {}) => {
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(() => {
          iconItems
          .filter(i => {
            if (select.value === "all") return true;
            const variant = i.getAttribute('data-variant');
            return variant === select.value;
          })
          .forEach(item => {
            const filter = input.value.toLowerCase();

            if (filter === '') {
              item.hidden = false;
              return;
            }

            const terms = item.getAttribute('data-terms').toLowerCase();
            item.hidden = terms.indexOf(filter) < 0;
          });
        }, noTimeout ? 0 : 600);
      };
      input.addEventListener('o-input', () => { filterIcons(); });

      // Sort by type and remember preference
      const iconType = localStorage.getItem('o-icon:type') || 'outline';
      select.value = iconType;
      list.setAttribute('data-type', select.value);
      select.addEventListener('o-change', () => {
        list.setAttribute('data-type', select.value);
        localStorage.setItem('o-icon:type', select.value);
        filterIcons({noTimeout: true});
      });
    });
</script>

<style>
  .icon-search {
    border: solid 1px var(--o-panel-border-color);
    border-radius: var(--o-border-radius-medium);
    padding: var(--o-spacing-medium);
  }

  .icon-search [hidden] {
    display: none;
  }

  .icon-search-controls {
    display: flex;
  }

  .icon-search-controls o-input {
    flex: 1 1 auto;
  }

  .icon-search-controls o-select {
    width: 10rem;
    flex: 0 0 auto;
    margin-left: 1rem;
  }

  .icon-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
  }

  .library-container {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "library-title"
      "library-icons";
  }

  .library-container .library-title {
    grid-area: library-title;
  }

  .library-container .library-title h3 {
    text-transform: capitalize;
    margin: 0.5rem 0 0 0;
  }

  .library-container .library-icons {
    grid-area: library-icons;
  }

  .library-container .library-icons .library-variants {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
  }

  .library-container .library-icons .variant-label {
    display: flex;
    justify-content: flex-end;
    text-transform: capitalize;
  }

  .icon-loader[hidden],
  .icon-list[hidden] {
    display: none;
  }

  .icon-list-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--o-border-radius-medium);
    font-size: 24px;
    width: 2em;
    height: 2em;
    margin: 0 auto;
    cursor: copy;
    transition: var(--o-transition-medium) all;
  }

  .icon-list-item:hover {
    background-color: var(--o-color-primary-50);
    color: var(--o-color-primary-600);
  }

  .icon-list[data-type="outline"] .library-container .library-icons > div:not([data-variants="outline"]) {
    display: none;
  }

  .icon-list[data-type="fill"] .library-container-material,
  .icon-list[data-type="fill"] .library-container .library-icons > div:not([data-variants="fill"]) {
    display: none;
  }

  .icon-list[data-type="baseline"] .library-container-default, 
  .icon-list[data-type="baseline"] .library-container .library-icons > div:not([data-variants="baseline"]) {
    display: none;
  }

  .icon-list[data-type="round"] .library-container-default,
  .icon-list[data-type="round"] .library-container .library-icons > div:not([data-variants="round"]) {
    display: none;
  }

  .icon-list[data-type="sharp"] .library-container-default,
  .icon-list[data-type="sharp"] .library-container .library-icons > div:not([data-variants="sharp"]) {
    display: none;
  }

  .icon-list[data-type="twotone"] .library-container-default,
  .icon-list[data-type="twotone"] .library-container .library-icons > div:not([data-variants="twotone"]) {
    display: none;
  }

  .icon-copy-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 1000px) {
    .library-container .library-icons .library-variants {
      grid-template-columns: repeat(8, 1fr);
    }

    .icon-list-item {
      font-size: 20px;
    }

    .icon-search-controls {
      display: block;
    }

    .icon-search-controls o-select {
      width: auto;
      margin: 1rem 0 0 0;
    }
  }

  @media screen and (max-width: 500px) {
    .library-container .library-icons .library-variants {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

[component-metadata:o-icon]
