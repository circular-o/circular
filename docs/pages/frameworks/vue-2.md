---
meta:
  title: Vue (version 2)
  description: Tips for using Shoelace in your Vue 2 app.
---

# Vue (version 2)

Vue [plays nice](https://custom-elements-everywhere.com/#vue) with custom elements, so you can use O-LIBRARY-NAME-O in your Vue apps with ease.

:::tip
These instructions are for Vue 2. If you're using Vue 3 or above, please see the [Vue 3 instructions](/frameworks/vue).
:::

## Installation

To add O-LIBRARY-NAME-O to your Vue app, install the package from npm.

```bash
npm install O-PACKAGE-FULL-NAME-O
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
import 'O-PACKAGE-FULL-NAME-O/%NPMDIR%/themes/light.css';
import { setBasePath } from 'O-PACKAGE-FULL-NAME-O/%NPMDIR%/utilities/base-path';

setBasePath('O-PACKAGE-URL-O/%CDNDIR%/');
```

?> If you'd rather not use the CDN for assets, you can create a build task that copies `node_modules/O-PACKAGE-FULL-NAME-O/dist/assets` into a public folder in your app. Then you can point the base path to that folder instead.

## Configuration

You'll need to tell Vue to ignore O-LIBRARY-NAME-O components. This is pretty easy because they all start with `o-`.

```js
import Vue from 'vue';
import App from './App.vue';

Vue.config.ignoredElements = [/o-/];

const app = new Vue({
  render: h => h(App)
});

app.$mount('#app');
```

Now you can start using O-LIBRARY-NAME-O components in your app!

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

If that's too verbose for your liking, you can use a custom directive instead. [This utility](https://www.npmjs.com/package/@shoelace-style/vue-o-model) adds a custom directive that will work just like `v-model` but for O-LIBRARY-NAME-O components. To install it, use this command.

```bash
npm install @shoelace-style/vue-sl-model@1
```

Next, import the directive and enable it like this.

```js
import Vue from 'vue';
import ShoelaceModelDirective from '@shoelace-style/vue-sl-model';
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

:::tip
Are you using O-LIBRARY-NAME-O with Vue? [Help us improve this page!](O-REPO-URL-O/blob/next/docs/frameworks/vue-2.md)
:::
