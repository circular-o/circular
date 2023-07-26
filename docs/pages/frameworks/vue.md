---
meta:
  title: Vue
  description: Tips for using Shoelace in your Vue 3 app.
---

# Vue

Vue [plays nice](https://custom-elements-everywhere.com/#vue) with custom elements, so you can use O-LIBRARY-NAME-O in your Vue apps with ease.

:::tip
These instructions are for Vue 3 and above. If you're using Vue 2, please see the [Vue 2 instructions](/frameworks/vue-2).
:::

## Installation

To add O-LIBRARY-NAME-O to your Vue app, install the package from npm.

```bash
npm install O-PACKAGE-FULL-NAME-O
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
import 'O-PACKAGE-FULL-NAME-O/dist/themes/light.css';
import { setBasePath } from 'O-PACKAGE-FULL-NAME-O/dist/utilities/base-path';

setBasePath('O-PACKAGE-URL-O/%CDNDIR%/');
```

:::tip
If you'd rather not use the CDN for assets, you can create a build task that copies `node_modules/O-PACKAGE-FULL-NAME-O/dist/assets` into a public folder in your app. Then you can point the base path to that folder instead.
:::

## Configuration

You'll need to tell Vue to ignore O-LIBRARY-NAME-O components. This is pretty easy because they all start with `o-`.

```js
import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('o-')
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
```

Now you can start using O-LIBRARY-NAME-O components in your app!

## Usage

### QR code generator example

```html
<template>
  <div class="container">
    <h1>QR code generator</h1>

    <o-input maxlength="255" clearable label="Value" v-model="qrCode"></o-input>

    <o-qr-code :value="qrCode"></o-qr-code>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import 'O-PACKAGE-FULL-NAME-O/dist/components/qr-code/qr-code.js';
  import 'O-PACKAGE-FULL-NAME-O/dist/components/input/input.js';

  const qrCode = ref();
</script>

<style>
  .container {
    max-width: 400px;
    margin: 0 auto;
  }

  o-input {
    margin: var(--o-spacing-large) 0;
  }
</style>
```

### Binding Complex Data

When binding complex data such as objects and arrays, use the `.prop` modifier to make Vue bind them as a property instead of an attribute.

```html
<o-color-picker :swatches.prop="mySwatches" />
```

:::tip
Are you using O-LIBRARY-NAME-O with Vue? [Help us improve this page!](O-REPO-URL-O/blob/next/docs/frameworks/vue.md)
:::

### Slots

To use O-LIBRARY-NAME-O components with slots, follow the Vue documentation on using [slots with custom elements](https://vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue).

Here is an example:

```html
<o-drawer label="Drawer" placement="start" class="drawer-placement-start" :open="drawerIsOpen">
  This drawer slides in from the start.
  <div slot="footer">
    <o-button variant="primary" @click=" drawerIsOpen = false">Close</o-button>
  </div>
</o-drawer>
```
