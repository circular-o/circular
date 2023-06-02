# React

Shoelace offers a React version of every component to provide an idiomatic experience for React users. You can easily toggle between HTML and React examples throughout the documentation.

## Installation

To add Shoelace to your React app, install the package from npm.

```bash
npm install %PACKAGE_NAME%
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
// App.jsx
import '%PACKAGE_NAME%/dist/themes/light.css';
import { setBasePath } from '%PACKAGE_NAME%/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/%PACKAGE_NAME%@%PACKAGE_VERSION%/dist/');
```

?> If you'd rather not use the CDN for assets, you can create a [build task](https://webpack.js.org/plugins/copy-webpack-plugin/) that copies `node_modules/%PACKAGE_NAME%/dist/assets` into your app's `public` directory. Then you can point the base path to that folder instead.

Now you can start using components!

## Usage

### Importing Components

Every Shoelace component is available to import as a React component. Note that we're importing the `<OButton>` _React component_ instead of the `<o-button>` _custom element_ in the example below.

```jsx
import { OButton } from '%PACKAGE_NAME%/dist/react';

const MyComponent = () => <OButton variant="primary">Click me</OButton>;

export default MyComponent;
```

You can find a copy + paste import for each component in the "importing" section of its documentation.

### Event Handling

Many Shoelace components emit [custom events](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent). For example, the [input component](/components/input) emits the `o-input` event when it receives input. In React, you can listen for the event using `onOInput`.

Here's how you can bind the input's value to a state variable.

```jsx
import { useState } from 'react';
import { OInput } from '%PACKAGE_NAME%/dist/react';

function MyComponent() {
  const [value, setValue] = useState('');

  return <OInput value={value} onOInput={event => setValue(event.target.value)} />;
}

export default MyComponent;
```

If you're using TypeScript, it's important to note that `event.target` will be a reference to the underlying custom element. You can use `(event.target as any).value` as a quick fix, or you can strongly type the event target as shown below.

```tsx
import { useState } from 'react';
import { OInput } from '%PACKAGE_NAME%/dist/react';
import type OInputElement from '%PACKAGE_NAME%/dist/components/input/input';

function MyComponent() {
  const [value, setValue] = useState('');

  return <OInput value={value} onOInput={event => setValue((event.target as OInputElement).value)} />;
}

export default MyComponent;
```

## Testing with Jest

Testing with web components can be challenging if your test environment runs in a Node environment (i.e. it doesn't run in a real browser). Fortunately, [Jest](https://jestjs.io/) has made a number of strides to support web components and provide additional browser APIs. However, it's still not a complete replication of a browser environment.

Here are some tips that will help smooth things over if you're having trouble with Jest + Shoelace.

?> If you're looking for a fast, modern testing alternative, consider [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/).

### Upgrade Jest

Jest underwent a major revamp and received support for web components in [version 26.5.0](https://github.com/facebook/jest/blob/main/CHANGELOG.md#2650) when it introduced [JSDOM 16.2.0](https://github.com/jsdom/jsdom/blob/master/Changelog.md#1620). This release also included a number of mocks for built-in browser functions such as `MutationObserver`, `document.createRange`, and others.

If you're using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app), you can update `react-scripts` which will also update Jest.

```
npm install react-scripts@latest
```

### Mock Missing APIs

Some components use `window.matchMedia`, but this function isn't supported by JSDOM so you'll need to mock it yourself.

In `src/setupTests.js`, add the following.

```js
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});
```

For more details, refer to Jest's [manual mocking](https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom) documentation.

### Transform ES Modules

ES Modules are a [well-supported browser standard](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/). This is how Shoelace is distributed, but most React apps expect CommonJS. As a result, you'll probably run into the following error.

```
Error: Unable to import outside of a module
```

To fix this, add the following to your `package.json` which tells the transpiler to process Shoelace modules.

```js
{
  "jest": {
    "transformIgnorePatterns": ["node_modules/?!(@shoelace)"]
  }
}
```

These instructions are for apps created via Create React App. If you're using Jest directly, you can add `transformIgnorePatterns` directly into `jest.config.js`.

For more details, refer to Jest's [`transformIgnorePatterns` customization](https://jestjs.io/docs/tutorial-react-native#transformignorepatterns-customization) documentation.

?> Are you using Shoelace with React? [Help us improve this page!](%REPO_URL%/blob/next/docs/frameworks/react.md)
