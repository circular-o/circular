# Circular

A forward-thinking library of web components.

- Works with all frameworks 🧩
- Works with CDNs 🚛
- Fully customizable with CSS 🎨
- Includes an official dark theme 🌛
- Built with accessibility in mind ♿️
- Open source 😸

Designed and developed in Hamburg by Circular Team

Inspired by [shoelace.style](https://shoelace.style)
Designed in New Hampshire by [Cory LaViska](https://twitter.com/claviska).

---

<!-- Documentation: [shoelace.style](https://shoelace.style) -->

Source: [github.com/circular-o/circular](https://github.com/circular-o/circular)

<!-- Twitter: [@shoelace_style](https://twitter.com/shoelace_style) -->

---

## Circular makers 🥾

Circular makers can use this documentation to learn how to build Circular from source. You will need Node >= 16.20 to build and run the project locally.

**You don't need to do any of this to use Circular!** This page is for people who want to contribute to the project, tinker with the source, or create a custom build of Circular.

If that's not what you're trying to do, the [documentation website](https://circular-o.de) is where you want to be.

### What are you using to build Circular?

Components are built with [LitElement](https://lit-element.polymer-project.org/), a custom elements base class that provides an intuitive API and reactive data binding. The build is a custom script with bundling powered by [esbuild](https://esbuild.github.io/).

### Forking the Repo

Start by [forking the repo](https://github.com/circular-o/circular/fork) on GitHub, then clone it locally and install dependencies.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/circular
cd circular
npm install
```

### Developing

Once you've cloned the repo, run the following command.

```bash
npm start
```

This will spin up the Circular dev server. After the initial build, a browser will open automatically. There is currently no hot module reloading (HMR), as browser's don't provide a way to reregister custom elements, but most changes to the source will reload the browser automatically.

The documentation is powered by Docsify, which uses raw markdown files to generate pages. As such, no static files are built for the docs.

### Building

To generate a production build, run the following command.

```bash
npm run build
```

### Creating New Components

To scaffold a new component, run the following command, replacing `o-(tag-name` with the desired tag name.)

```bash
npm run create o-(tag-name)
```

This will generate a source file, a stylesheet, and a docs page for you. When you start the dev server, you'll find the new component in the "Components" section of the sidebar.

### Contributing

Circular is an open source project and contributions are encouraged! If you're interesting in contributing, please review the [contribution guidelines](CONTRIBUTING.md) first.

## License

Circular is designed and develop in Hamburg by Circular Team. It’s available under the terms of the MIT license.

**If you’re using Circular to make a profit,** We respectfully ask that you help [fund its original development](https://github.com/sponsors/claviska) by becoming a sponsor. There are multiple tiers to choose from with benefits at every level, including prioritized support, bug fixes, feature requests, and advertising.

👇 Your support is very much appreciated! 👇

- [Become a Shoelace sponsor](https://github.com/sponsors/claviska)
- [Star on GitHub](https://github.com/circular-o/circular/stargazers)
<!-- - [Follow on Twitter](https://twitter.com/shoelace_style) -->

Whether you're building Circular or building something _with_ Circular — have fun creating! 🥾
