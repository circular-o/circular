# Installation

You can load %LIBRARY_NAME% via CDN or by installing it locally. If you're using a framework, make sure to check out the pages for [React](/frameworks/react), [Vue](/frameworks/vue), and [Angular](/frameworks/angular) for additional information.

## CDN Installation (Easiest)

<o-tab-group>
<o-tab slot="nav" panel="autoloader" active>Autoloader</o-tab>
<o-tab slot="nav" panel="traditional">Traditional Loader</o-tab>

<o-tab-panel name="autoloader">

The experimental autoloader is the easiest and most efficient way to use %LIBRARY_NAME%. A lightweight script watches the DOM for unregistered %LIBRARY_NAME% elements and lazy loads them for you — even if they're added dynamically.

While convenient, autoloading may lead to a [Flash of Undefined Custom Elements](https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/). The linked article describes some ways to alleviate it.

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/%PACKAGE_FULL_PATH%@%PACKAGE_VERSION%/dist/themes/light.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/%PACKAGE_FULL_PATH%@%PACKAGE_VERSION%/dist/%PACKAGE_NAME%-autoloader.js"></script>
```

</o-tab-panel>

<o-tab-panel name="traditional">

The traditional CDN loader registers all %LIBRARY_NAME% elements up front. Note that, if you're only using a handful of components, it will be much more efficient to stick with the autoloader. However, you can also [cherry pick](#cherry-picking) components if you want to load specific ones up front.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/%PACKAGE_FULL_PATH%@%PACKAGE_VERSION%/dist/themes/light.css"
/>
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/%PACKAGE_FULL_PATH%@%PACKAGE_VERSION%/dist/%PACKAGE_NAME%.js"
></script>
```

</o-tab-panel>
</o-tab-group>

### Dark Theme

The code above will load the light theme. If you want to use the [dark theme](/getting-started/themes#dark-theme) instead, update the stylesheet as shown below and add `<html class="o-theme-dark">` to your page.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/%PACKAGE_FULL_PATH%@%PACKAGE_VERSION%/dist/themes/dark.css" />
```

### Light & Dark Theme

If you want to load the light or dark theme based on the user's `prefers-color-scheme` setting, use the stylesheets below. The `media` attributes ensure that only the user's preferred theme stylesheet loads and the `onload` attribute sets the appropriate [theme class](/getting-started/themes) on the `<html>` element.

```html
<link
  rel="stylesheet"
  media="(prefers-color-scheme:light)"
  href="https://cdn.jsdelivr.net/npm/%PACKAGE_FULL_PATH%@%PACKAGE_VERSION%/dist/themes/light.css"
/>
<link
  rel="stylesheet"
  media="(prefers-color-scheme:dark)"
  href="https://cdn.jsdelivr.net/npm/%PACKAGE_FULL_PATH%@%PACKAGE_VERSION%/dist/themes/dark.css"
  onload="document.documentElement.classList.add('o-theme-dark');"
/>
```

Now you can [start using %LIBRARY_NAME%!](/getting-started/usage)

## Local Installation

If you don't want to use the CDN, you can install %LIBRARY_NAME% locally with the following command.

```bash
npm install %PACKAGE_FULL_PATH%
```

It's up to you to make the source files available to your app. One way to do this is to create a route in your app called `/%PACKAGE_NAME%` that serves static files from `node_modules/%PACKAGE_FULL_PATH%`.

Once you've done that, add the following tags to your page. Make sure to update `href` and `src` so they point to the route you created.

```html
<link rel="stylesheet" href="/%PACKAGE_NAME%/dist/themes/light.css" />
<script type="module" src="/%PACKAGE_NAME%/dist/%PACKAGE_NAME%.js"></script>
```

Alternatively, [you can use a bundler](#bundling).

?> For clarity, the docs will usually show imports from `%PACKAGE_FULL_PATH%`. If you're not using a module resolver or bundler, you'll need to adjust these paths to point to the folder %LIBRARY_NAME% is in.

## Setting the Base Path

Some components rely on assets (icons, images, etc.) and %LIBRARY_NAME% needs to know where they're located. For convenience, %LIBRARY_NAME% will try to auto-detect the correct location based on the script you've loaded it from. This assumes assets are colocated with `%PACKAGE_NAME%.js` or `%PACKAGE_NAME%-autoloader.js` and will "just work" for most users.

However, if you're [cherry picking](#cherry-picking) or [bundling](#bundling) %LIBRARY_NAME%, you'll need to set the base path. You can do this one of two ways.

```html
<!-- Option 1: the data-%PACKAGE_NAME% attribute -->
<script src="bundle.js" data-%PACKAGE_NAME%="/path/to/%PACKAGE_NAME%/dist"></script>

<!-- Option 2: the setBasePath() method -->
<script src="bundle.js"></script>
<script type="module">
  import { setBasePath } from '%PACKAGE_FULL_PATH%/dist/utilities/base-path.js';
  setBasePath('/path/to/%PACKAGE_NAME%/dist');
</script>
```

?> The library also exports a `getBasePath()` method you can use to reference assets.

## Cherry Picking

Cherry picking can be done from [the CDN](#cdn-installation-easiest) or your [local installation](#local-installation). This approach will load only the components you need up front, while limiting the number of files the browser has to download. The disadvantage is that you need to import each individual component.

Here's an example that loads only the button component. Again, if you're not using a module resolver, you'll need to adjust the path to point to the folder %LIBRARY_NAME% is in.

```html
<link rel="stylesheet" href="/path/to/%PACKAGE_NAME%/dist/themes/light.css" />

<script type="module" data-%PACKAGE_NAME%="/path/to/%PACKAGE_NAME%/dist">
  import '%PACKAGE_FULL_PATH%/dist/components/button/button.js';

  // <o-button> is ready to use!
</script>
```

You can copy and paste the code to import a component from the "Importing" section of the component's documentation. Note that some components have dependencies that are automatically imported when you cherry pick. If a component has dependencies, they will be listed in the "Dependencies" section of its docs.

!> Never cherry pick components or utilities from `%PACKAGE_NAME%.js` as this will cause the browser to load the entire library. Instead, cherry pick from specific modules as shown above.

!> You will see files named `chunk.[hash].js` in the `chunks` directory. Never import these files directly, as they are generated and change from version to version.

## Bundling

%LIBRARY_NAME% is distributed as a collection of standard ES modules that [all modern browsers can understand](https://caniuse.com/es6-module). However, importing a lot of modules can result in a lot of HTTP requests and potentially longer load times. Using a CDN can alleviate this, but some users may wish to further optimize their imports with a bundler.

To use %LIBRARY_NAME% with a bundler, first install %LIBRARY_NAME% along with your bundler of choice.

```bash
npm install %PACKAGE_FULL_PATH%
```

Now it's time to configure your bundler. Configurations vary for each tool, but here are some examples to help you get started.

- [Example webpack config](https://github.com/shoelace-style/webpack-example/blob/master/webpack.config.js)
- [Example Rollup config](https://github.com/shoelace-style/rollup-example/blob/master/rollup.config.js)

Once your bundler is configured, you'll be able to import %LIBRARY_NAME% components and utilities.

```js
import '%PACKAGE_FULL_PATH%/dist/themes/light.css';
import '%PACKAGE_FULL_PATH%/dist/components/button/button.js';
import '%PACKAGE_FULL_PATH%/dist/components/icon/icon.js';
import '%PACKAGE_FULL_PATH%/dist/components/input/input.js';
import '%PACKAGE_FULL_PATH%/dist/components/rating/rating.js';
import { setBasePath } from '%PACKAGE_FULL_PATH%/dist/utilities/base-path.js';

// Set the base path to the folder you copied %LIBRARY_NAME%'s assets to
setBasePath('/path/to/%PACKAGE_NAME%/dist');

// <o-button>, <o-icon>, <o-input>, and <o-rating> are ready to use!
```

!> Component modules include side effects for registration purposes. Because of this, importing directly from `%PACKAGE_FULL_PATH%` may result in a larger bundle size than necessary. For optimal tree shaking, always cherry pick, i.e. import components and utilities from their respective files, as shown above.
