---
meta:
  title: 'A forward-thinking library of web components.'
  description: Hand-crafted custom elements for any occasion.
toc: false
---

<div class="splash">
<div class="splash-start">
<img class="splash-logo" src="/assets/images/circular-logo-light.svg" alt="O-LIBRARY-NAME-O">

# <o-visually-hidden>O-LIBRARY-NAME-O:</o-visually-hidden> A forward-thinking library of web components.

- Works with all frameworks 🧩
- Works with CDNs 🚛
- Fully customizable with CSS 🎨
- Includes a dark theme 🌛
- Built with accessibility in mind ♿️
- First-class [React support](/frameworks/react) ⚛️
- Built-in localization 💬
- Open source 😸
- [More awesome than ever](https://blog.fontawesome.com/shoelace-joins-font-awesome/) ![Awesome emoji](/assets/images/awesome.svg)

Designed and developed by [O-TWITTER-USER-O Team](https://twitter.com/O-TWITTER-USER-O)

</div>
<div class="splash-end">
<img class="splash-image" src="/assets/images/undraw-content-team.svg" alt="Cartoon of people assembling components while standing on a giant laptop.">
</div>
</div>

<div class="badges">

[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/O-PACKAGE-ORGANIZATION-O/O-PACKAGE-NAME-O/badge)](https://www.jsdelivr.com/package/npm/O-PACKAGE-ORGANIZATION-O/O-PACKAGE-NAME-O)
[![npm](https://img.shields.io/npm/dw/O-PACKAGE-ORGANIZATION-O/O-PACKAGE-NAME-O?label=npm&style=flat-square)](https://www.npmjs.com/package/O-PACKAGE-ORGANIZATION-O/O-PACKAGE-NAME-O)
[![License](https://img.shields.io/badge/license-MIT-232323.svg?style=flat-square)](O-REPO-URL-O/blob/next/LICENSE.md)<br>
[![Discord](https://img.shields.io/badge/Discord-Join%20the%20chat-5965f2.svg?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/mg8f26C)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-00acee.svg?style=flat-square&logo=twitter&logoColor=white)](https://twitter.com/O-TWITTER-USER-O)
[![Sponsor](https://img.shields.io/badge/GitHub-Code-232323.svg?style=flat-square&logo=github&logoColor=white)](O-REPO-URL-O)

</div>

## Quick Start

Add the following code to your page.

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/O-PACKAGE-ORGANIZATION-O/O-PACKAGE-NAME-O@%VERSION%/%CDNDIR%/themes/light.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/O-PACKAGE-ORGANIZATION-O/O-PACKAGE-NAME-O@%VERSION%/%CDNDIR%/O-PACKAGE-NAME-O-autoloader.js"></script>
```

Now you have access to all of O-LIBRARY-NAME-O's components! Try adding a button:

```html:preview:expanded:no-codepen
<o-button>Click me</o-button>
```

:::tip
This will activate O-LIBRARY-NAME-O's experimental autoloader, which registers components on the fly as you use them. To learn more about it, or for other ways to install O-LIBRARY-NAME-O, refer to the [installation instructions](getting-started/installation).
:::

## New to Web Components?

**TL;DR** – we finally have a way to create [our own HTML elements](https://html.spec.whatwg.org/multipage/custom-elements.html) and use them in any framework we want!

Thanks to the popularity of frameworks such as Angular, Vue, and React, component-driven development has become a part of our every day lives. Components help us encapsulate styles and behaviors into reusable building blocks. They make a lot of sense in terms of design, development, and testing.

Unfortunately, _framework-specific_ components fail us in a number of ways:

- You can only use them in the framework they're designed for 🔒
- Their lifespan is limited to that of the framework's ⏳
- New frameworks/versions can lead to breaking changes, requiring substantial effort to update components 😭

Web components solve these problems. They're [supported by all modern browsers](https://caniuse.com/#feat=custom-elementsv1), they're framework-agnostic, and they're [part of the standard](https://developer.mozilla.org/en-US/docs/Web/Web_Components), so we know they'll be supported for many years to come.

This is the technology that O-LIBRARY-NAME-O is built on.

## What Problem Does This Solve?

O-LIBRARY-NAME-O provides a collection of professionally designed, highly customizable UI components built on a framework agnostic technology. Why spend hundreds of hours (or more) building a design system from scratch? Why make a component library that only works with one framework?

With O-LIBRARY-NAME-O, you can:

- Start building things faster (no need to roll your own buttons)
- Build multiple apps with different frameworks that all share the same UI components
- Fully customize components to match your existing designs
- Incrementally adopt components as needed (no need to ditch your framework)
- Upgrade or switch frameworks without rebuilding foundational components

If your organization is looking to build a design system, [O-LIBRARY-NAME-O will save you thousands of dollars](https://medium.com/eightshapes-llc/and-you-thought-buttons-were-easy-26eb5b5c1871).\* All the foundational components you need are right here, ready to be customized for your brand. And since it's built on web standards, browsers will continue to support it for many years to come.

Whether you use O-LIBRARY-NAME-O as a starting point for your organization's design system or for a fun personal project, there's no limit to what you can do with it.

<small>\*Please consider giving back some of what you save by [supporting this project with a sponsorship](O-SPONSOR-URL-O).</small>

## Browser Support

O-LIBRARY-NAME-O is tested in the latest two versions of the following browsers.

<img src="/assets/images/chrome.png" alt="Chrome" width="64" height="64">
<img src="/assets/images/edge.png" alt="Edge" width="64" height="64">
<img src="/assets/images/firefox.png" alt="Firefox" width="64" height="64">
<img src="/assets/images/opera.png" alt="Opera" width="64" height="64">
<img src="/assets/images/safari.png" alt="Safari" width="64" height="64">

Critical bug fixes in earlier versions will be addressed based on their severity and impact.

If you need to support IE11 or pre-Chromium Edge, this library isn't for you. Although web components can (to some degree) be polyfilled for legacy browsers, supporting them is outside the scope of this project. If you're using O-LIBRARY-NAME-O in such a browser, you're gonna have a bad time. ⛷

## License

O-LIBRARY-NAME-O is designed and developed in Hamburg by [O-LIBRARY-NAME-O Team](https://twitter.com/O-TWITTER-USER-O). It's available under the terms of the [MIT license](O-REPO-URL-O/blob/next/LICENSE.md).

## Attribution

Special thanks to the following projects and individuals that help make O-LIBRARY-NAME-O possible.

- Inspired by [Shoelace](https://shoelace.style/)
- Components are built with [Lit](https://lit.dev/)
- Component metadata is generated by the [Custom Elements Manifest Analyzer](https://github.com/open-wc/custom-elements-manifest)
- Documentation is powered by [11ty](https://www.11ty.dev/)
- CDN services are provided by [jsDelivr](https://www.jsdelivr.com/)
- Color primitives are inspired by [Tailwind](https://tailwindcss.com/)
- Icons are courtesy of [Bootstrap Icons](https://icons.getbootstrap.com/)
- The homepage illustration is courtesy of [unDraw](https://undraw.co/)
- Positioning of dropdowns, tooltips, et al is handled by [Floating UI](https://floating-ui.com/)
- Animations are courtesy of [animate.css](https://animate.style/)
- Search is powered by [Lunr](https://lunrjs.com/)
