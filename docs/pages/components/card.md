---
meta:
  title: Card
  description: Cards can be used to group related subjects in a container.
layout: component
---

```html:preview
<o-card class="card-overview">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
  />

  <strong>Mittens</strong><br />
  This kitten is as cute as he is playful. Bring him home today!<br />
  <small>6 weeks old</small>

  <div slot="footer">
    <o-button variant="primary" pill>More Info</o-button>
    <o-rating></o-rating>
  </div>
</o-card>

<style>
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--o-color-neutral-500);
  }

  .card-overview [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

```jsx:react
import { OButton, OCard, ORating } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const css = `
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--o-color-neutral-500);
  }

  .card-overview [slot="footer"] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const App = () => (
  <>
    <OCard className="card-overview">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      />
      <strong>Mittens</strong>
      <br />
      This kitten is as cute as he is playful. Bring him home today!
      <br />
      <small>6 weeks old</small>
      <div slot="footer">
        <OButton variant="primary" pill>
          More Info
        </OButton>
        <ORating></ORating>
      </div>
    </OCard>

    <style>{css}</style>
  </>
);
```

## Examples

### Basic Card

Basic cards aren't very exciting, but they can display any content you want them to.

```html:preview
<o-card class="card-basic"> This is just a basic card. No image, no header, and no footer. Just your content. </o-card>

<style>
  .card-basic {
    max-width: 300px;
  }
</style>
```

```jsx:react
import { OCard } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const css = `
  .card-basic {
    max-width: 300px;
  }
`;

const App = () => (
  <>
    <OCard className="card-basic">
      This is just a basic card. No image, no header, and no footer. Just your content.
    </OCard>

    <style>{css}</style>
  </>
);
```

## Card with Header

Headers can be used to display titles and more.

```html:preview
<o-card class="card-header">
  <div slot="header">
    Header Title
    <o-icon-button name="gear" label="Settings"></o-icon-button>
  </div>

  This card has a header. You can put all sorts of things in it!
</o-card>

<style>
  .card-header {
    max-width: 300px;
  }

  .card-header [slot='header'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header o-icon-button {
    font-size: var(--o-font-size-medium);
  }
</style>
```

```jsx:react
import { OCard, OIconButton } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const css = `
  .card-header {
    max-width: 300px;
  }

  .card-header [slot="header"] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header o-icon-button {
    font-size: var(--o-font-size-medium);
  }
`;

const App = () => (
  <>
    <OCard className="card-header">
      <div slot="header">
        Header Title
        <OIconButton name="gear"></OIconButton>
      </div>
      This card has a header. You can put all sorts of things in it!
    </OCard>

    <style>{css}</style>
  </>
);
```

## Card with Footer

Footers can be used to display actions, summaries, or other relevant content.

```html:preview
<o-card class="card-footer">
  This card has a footer. You can put all sorts of things in it!

  <div slot="footer">
    <o-rating></o-rating>
    <o-button variant="primary">Preview</o-button>
  </div>
</o-card>

<style>
  .card-footer {
    max-width: 300px;
  }

  .card-footer [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

```jsx:react
import { OButton, OCard, ORating } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const css = `
  .card-footer {
    max-width: 300px;
  }

  .card-footer [slot="footer"] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const App = () => (
  <>
    <OCard className="card-footer">
      This card has a footer. You can put all sorts of things in it!
      <div slot="footer">
        <ORating></ORating>
        <OButton slot="footer" variant="primary">
          Preview
        </OButton>
      </div>
    </OCard>

    <style>{css}</style>
  </>
);
```

## Images

Cards accept an `image` slot. The image is displayed atop the card and stretches to fit.

```html:preview
<o-card class="card-image">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
    alt="A kitten walks towards camera on top of pallet."
  />
  This is a kitten, but not just any kitten. This kitten likes walking along pallets.
</o-card>

<style>
  .card-image {
    max-width: 300px;
  }
</style>
```

```jsx:react
import { OCard } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const css = `
  .card-image {
    max-width: 300px;
  }
`;

const App = () => (
  <>
    <OCard className="card-image">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        alt="A kitten walks towards camera on top of pallet."
      />
      This is a kitten, but not just any kitten. This kitten likes walking along pallets.
    </OCard>

    <style>{css}</style>
  </>
);
```
