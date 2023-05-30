# Vue (version 2)

Vue [plays nice](https://custom-elements-everywhere.com/#vue) with custom elements, so you can use Shoelace in your Vue apps with ease.

!> These instructions are for Vue 2. If you're using Vue 3 or above, please see the [Vue 3 instructions](/frameworks/vue).

## Installation

To add Shoelace to your Vue app, install the package from npm.

```bash
npm install %PACKAGE_NAME%
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
import '%PACKAGE_NAME%/dist/themes/light.css';
import { setBasePath } from '%PACKAGE_NAME%/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/%PACKAGE_NAME%@%PACKAGE_VERSION%/dist/');
```

?> If you'd rather not use the CDN for assets, you can create a build task that copies `node_modules/%PACKAGE_NAME%/dist/assets` into a public folder in your app. Then you can point the base path to that folder instead.

## Configuration

You'll need to tell Vue to ignore Shoelace components. This is pretty easy because they all start with `o-`.

```js
import Vue from 'vue';
import App from './App.vue';

Vue.config.ignoredElements = [/o-/];

const app = new Vue({
  render: h => h(App)
});

app.$mount('#app');
```

Now you can start using Shoelace components in your app!

## Usage

### Binding Complex Data

When binding complex data such as objects and arrays, use the `.prop` modifier to make Vue bind them as a property instead of an attribute.

```html
<o-color-picker :swatches.prop="mySwatches" />
```

### Two-way Binding

One caveat is there's currently [no support for v-model on custom elements](https://github.com/vuejs/vue/issues/7830), but you can still achieve two-way binding manually.

```html
<!-- This doesn't work -->
<o-input v-model="name"></o-input>
<!-- This works, but it's a bit longer -->
<o-input :value="name" @input="name = $event.target.value"></o-input>
```

If that's too verbose for your liking, you can use a custom directive instead. [This utility](https://www.npmjs.com/package/@shoelace-style/vue-o-model) adds a custom directive that will work just like `v-model` but for Shoelace components. To install it, use this command.

```bash
npm install @shoelace-style/vue-o-model@1
```

Next, import the directive and enable it like this.

```js
import Vue from 'vue';
import ShoelaceModelDirective from '@shoelace-style/vue-o-model';
import App from './App.vue';

Vue.use(ShoelaceModelDirective);
Vue.config.ignoredElements = [/o-/];

const app = new Vue({
  render: h => h(App)
});

app.$mount('#app');
```

Now you can use the `v-o-model` directive to keep your data in sync!

```html
<o-input v-o-model="name"></o-input>
```

?> Are you using Shoelace with Vue? [Help us improve this page!](%REPO_URL%/blob/next/docs/frameworks/vue-2.md)
