---
meta:
  title: Installation
  description: Choose the installation method that works best for you.
---

# Installation

You can load O-LIBRARY-NAME-O via CDN or by installing it locally. If you're using a framework, make sure to check out the pages for [React](/frameworks/react), [Vue](/frameworks/vue), and [Angular](/frameworks/angular) for additional information.

## CDN Installation (Easiest)

<o-tab-group>
<o-tab slot="nav" panel="autoloader" active>Autoloader</o-tab>
<o-tab slot="nav" panel="traditional">Traditional Loader</o-tab>

<o-tab-panel name="autoloader">

The experimental autoloader is the easiest and most efficient way to use O-LIBRARY-NAME-O. A lightweight script watches the DOM for unregistered O-LIBRARY-NAME-O elements and lazy loads them for you — even if they're added dynamically.

While convenient, autoloading may lead to a [Flash of Undefined Custom Elements](https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/). The linked article describes some ways to alleviate it.

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="O-PACKAGE-URL-O/%CDNDIR%/themes/light.css" />
<script type="module" src="O-PACKAGE-URL-O/%CDNDIR%/O-PACKAGE-NAME-O-autoloader.js"></script>
```

</o-tab-panel>

<o-tab-panel name="traditional">

The traditional CDN loader registers all O-LIBRARY-NAME-O elements up front. Note that, if you're only using a handful of components, it will be much more efficient to stick with the autoloader. However, you can also [cherry pick](#cherry-picking) components if you want to load specific ones up front.

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="O-PACKAGE-URL-O/%CDNDIR%/themes/light.css" />
<script type="module" src="O-PACKAGE-URL-O/%CDNDIR%/O-PACKAGE-NAME-O.js" ></script>
```

</o-tab-panel>
</o-tab-group>

### Dark Theme

The code above will load the light theme. If you want to use the [dark theme](/getting-started/themes#dark-theme) instead, update the stylesheet as shown below and add `<html class="o-theme-dark">` to your page.

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="O-PACKAGE-URL-O/%CDNDIR%/themes/dark.css" />
```

### Light & Dark Theme

If you want to load the light or dark theme based on the user's `prefers-color-scheme` setting, use the stylesheets below. The `media` attributes ensure that only the user's preferred theme stylesheet loads and the `onload` attribute sets the appropriate [theme class](/getting-started/themes) on the `<html>` element.

```html
<link rel="stylesheet" media="(prefers-color-scheme:light)" href="O-PACKAGE-URL-O/%CDNDIR%/themes/light.css" />
<link
  rel="stylesheet"
  media="(prefers-color-scheme:dark)"
  href="O-PACKAGE-URL-O/%CDNDIR%/themes/dark.css"
  onload="document.documentElement.classList.add('o-theme-dark');"
/>
```

Now you can [start using O-LIBRARY-NAME-O!](/getting-started/usage)

## npm installation

If you don't want to use the CDN, you can install O-LIBRARY-NAME-O from npm with the following command.

```bash
npm install O-PACKAGE-FULL-NAME-O
```

It's up to you to make the source files available to your app. One way to do this is to create a route in your app called `/O-PACKAGE-NAME-O` that serves static files from `node_modules/O-PACKAGE-FULL-NAME-O`.

Once you've done that, add the following tags to your page. Make sure to update `href` and `src` so they point to the route you created.

```html
<link rel="stylesheet" href="/O-PACKAGE-NAME-O/%NPMDIR%/themes/light.css" />
<script type="module" src="/O-PACKAGE-NAME-O/%NPMDIR%/O-PACKAGE-NAME-O.js"></script>
```

Alternatively, [you can use a bundler](#bundling).

:::tip
For clarity, the docs will usually show imports from `O-PACKAGE-FULL-NAME-O`. If you're not using a module resolver or bundler, you'll need to adjust these paths to point to the folder O-LIBRARY-NAME-O is in.
:::

## Setting the Base Path

Some components rely on assets (icons, images, etc.) and O-LIBRARY-NAME-O needs to know where they're located. For convenience, O-LIBRARY-NAME-O will try to auto-detect the correct location based on the script you've loaded it from. This assumes assets are colocated with `O-PACKAGE-NAME-O.js` or `O-PACKAGE-NAME-O-autoloader.js` and will "just work" for most users.

However, if you're [cherry picking](#cherry-picking) or [bundling](#bundling) O-LIBRARY-NAME-O, you'll need to set the base path. You can do this one of two ways.

```html
<!-- Option 1: the data-O-PACKAGE-NAME-O attribute -->
<script src="bundle.js" data-O-PACKAGE-NAME-O="/path/to/O-PACKAGE-NAME-O/%NPMDIR%"></script>

<!-- Option 2: the setBasePath() method -->
<script src="bundle.js"></script>
<script type="module">
  import { setBasePath } from 'O-PACKAGE-FULL-NAME-O/%NPMDIR%/utilities/base-path.js';
  setBasePath('/path/to/O-PACKAGE-NAME-O/%NPMDIR%');
</script>
```

:::tip
An easy way to make sure the base path is configured properly is to check if [icons](/components/icon) are loading.
:::

### Referencing Assets

Most of the magic behind assets is handled internally by Shoelace, but if you need to reference the base path for any reason, the same module exports a function called `getBasePath()`. An optional string argument can be passed, allowing you to get the full path to any asset.

```html
<script type="module">
  import { getBasePath, setBasePath } from 'O-PACKAGE-FULL-NAME-O/%NPMDIR%/utilities/base-path.js';

  setBasePath('/path/to/assets');

  // ...

  // Get the base path, e.g. /path/to/assets
  const basePath = getBasePath();

  // Get the path to an asset, e.g. /path/to/assets/file.ext
  const assetPath = getBasePath('file.ext');
</script>
```

## Cherry Picking

Cherry picking can be done from [the CDN](#cdn-installation-easiest) or from [npm](#npm-installation). This approach will load only the components you need up front, while limiting the number of files the browser has to download. The disadvantage is that you need to import each individual component.

Here's an example that loads only the button component. Again, if you're not using a module resolver, you'll need to adjust the path to point to the folder O-LIBRARY-NAME-O is in.

```html
<link rel="stylesheet" href="/path/to/O-PACKAGE-NAME-O/%NPMDIR%/themes/light.css" />

<script type="module" data-O-PACKAGE-NAME-O="/path/to/O-PACKAGE-NAME-O/%NPMDIR%">
  import 'O-PACKAGE-FULL-NAME-O/%NPMDIR%/components/button/button.js';

  // <o-button> is ready to use!
</script>
```

You can copy and paste the code to import a component from the "Importing" section of the component's documentation. Note that some components have dependencies that are automatically imported when you cherry pick. If a component has dependencies, they will be listed in the "Dependencies" section of its docs.

:::warning
Never cherry pick components or utilities from `O-PACKAGE-NAME-O.js` as this will cause the browser to load the entire library. Instead, cherry pick from specific modules as shown above.
:::

:::warning
You will see files named `chunk.[hash].js` in the `chunks` directory. Never import these files directly, as they are generated and change from version to version.
:::

## Bundling

O-LIBRARY-NAME-O is distributed as a collection of standard ES modules that [all modern browsers can understand](https://caniuse.com/es6-module). However, importing a lot of modules can result in a lot of HTTP requests and potentially longer load times. Using a CDN can alleviate this, but some users may wish to further optimize their imports with a bundler.

To use O-LIBRARY-NAME-O with a bundler, first install O-LIBRARY-NAME-O along with your bundler of choice.

```bash
npm install O-PACKAGE-FULL-NAME-O
```

Now it's time to configure your bundler. Configurations vary for each tool, but here are some examples to help you get started.

- [Example webpack config](https://github.com/shoelace-style/webpack-example/blob/master/webpack.config.js)
- [Example Rollup config](https://github.com/shoelace-style/rollup-example/blob/master/rollup.config.js)

Once your bundler is configured, you'll be able to import O-LIBRARY-NAME-O components and utilities.

```js
import 'O-PACKAGE-FULL-NAME-O/dist/themes/light.css';
import 'O-PACKAGE-FULL-NAME-O/dist/components/button/button.js';
import 'O-PACKAGE-FULL-NAME-O/dist/components/icon/icon.js';
import 'O-PACKAGE-FULL-NAME-O/dist/components/input/input.js';
import 'O-PACKAGE-FULL-NAME-O/dist/components/rating/rating.js';
import { setBasePath } from 'O-PACKAGE-FULL-NAME-O/dist/utilities/base-path.js';

// Set the base path to the folder you copied O-LIBRARY-NAME-O's assets to
setBasePath('/path/to/O-PACKAGE-NAME-O/%NPMDIR%');

// <o-button>, <o-icon>, <o-input>, and <o-rating> are ready to use!
```

:::warning
Component modules include side effects for registration purposes. Because of this, importing directly from `O-PACKAGE-FULL-NAME-O` may result in a larger bundle size than necessary. For optimal tree shaking, always cherry pick, i.e. import components and utilities from their respective files, as shown above.
:::

### Avoiding side-effect imports

By default, imports to components will auto-register themselves. This may not be ideal in all cases. To import just the component's class without auto-registering it's tag we can do the following:

```diff
- import OButton from 'O-PACKAGE-FULL-NAME-O/%NPMDIR%/components/button/button.js';
+ import OButton from 'O-PACKAGE-FULL-NAME-O/%NPMDIR%/components/button/button.component.js';
```

Notice how the import ends with `.component.js`. This is the current convention to convey the import does not register itself.

:::danger
While you can override the class or re-register the shoelace class under a different tag name, if you do so, many components won’t work as expected.
:::

## The difference between CDN and npm

You'll notice that the CDN links all start with `/%CDNDIR%/<path>` and npm imports use `/%NPMDIR%/<path>`. The `/%CDNDIR%` files are bundled separately from the `/%NPMDIR%` files. The `/%CDNDIR%` files come pre-bundled, which means all dependencies are inlined so you do not need to worry about loading additional libraries. The `/%NPMDIR%` files **DO NOT** come pre-bundled, allowing your bundler of choice to more efficiently deduplicate dependencies, resulting in smaller bundles and optimal code sharing.

TL;DR:

- `O-PACKAGE-FULL-NAME-O/%CDNDIR%` is for CDN users
- `O-PACKAGE-FULL-NAME-O/%NPMDIR%` is for npm users

This change was introduced in `v1.6.0` to address issues around installations from npm loading multiple versions of libraries (such as the Lit) that Shoelace uses internally.
