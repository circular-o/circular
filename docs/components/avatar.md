# Avatar

[component-header:o-avatar]

By default, a generic icon will be shown. You can personalize avatars by adding custom icons, initials, and images. You should always provide a `label` for assistive devices.

```html preview
<o-avatar label="User avatar"></o-avatar>
```

```jsx react
import { OAvatar } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OAvatar label="User avatar" />;
```

## Examples

### Images

To use an image for the avatar, set the `image` and `label` attributes. This will take priority and be shown over initials and icons.
Avatar images can be lazily loaded by setting the `loading` attribute to `lazy`.

```html preview
<o-avatar
  image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="Avatar of a gray tabby kitten looking down"
></o-avatar>
<o-avatar
  image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="Avatar of a white and grey kitten on grey textile"
  loading="lazy"
></o-avatar>
```

```jsx react
import { OAvatar } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <OAvatar
    image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    label="Avatar of a gray tabby kitten looking down"
  />
  <OAvatar
    image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    label="Avatar of a white and grey kitten on grey textile"
    loading="lazy"
  />
);
```

### Initials

When you don't have an image to use, you can set the `initials` attribute to show something more personalized than an icon.

```html preview
<o-avatar initials="SL" label="Avatar with initials: SL"></o-avatar>
```

```jsx react
import { OAvatar } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OAvatar initials="SL" label="Avatar with initials: SL" />;
```

### Custom Icons

When no image or initials are set, an icon will be shown. The default avatar shows a generic "user" icon, but you can customize this with the `icon` slot.

```html preview
<o-avatar label="Avatar with an image icon">
  <o-icon slot="icon" name="image"></o-icon>
</o-avatar>

<o-avatar label="Avatar with an archive icon">
  <o-icon slot="icon" name="archive"></o-icon>
</o-avatar>

<o-avatar label="Avatar with a briefcase icon">
  <o-icon slot="icon" name="briefcase"></o-icon>
</o-avatar>
```

```jsx react
import { OAvatar, OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <OAvatar label="Avatar with an image icon">
      <OIcon slot="icon" name="image" />
    </OAvatar>

    <OAvatar label="Avatar with an archive icon">
      <OIcon slot="icon" name="archive" />
    </OAvatar>

    <OAvatar label="Avatar with a briefcase icon">
      <OIcon slot="icon" name="briefcase" />
    </OAvatar>
  </>
);
```

### Shapes

Avatars can be shaped using the `shape` attribute.

```html preview
<o-avatar shape="square" label="Square avatar"></o-avatar>
<o-avatar shape="rounded" label="Rounded avatar"></o-avatar>
<o-avatar shape="circle" label="Circle avatar"></o-avatar>
```

```jsx react
import { OAvatar, OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <OAvatar shape="square" label="Square avatar" />
    <OAvatar shape="rounded" label="Rounded avatar" />
    <OAvatar shape="circle" label="Circle avatar" />
  </>
);
```

### Avatar Groups

You can group avatars with a few lines of CSS.

```html preview
<div class="avatar-group">
  <o-avatar
    image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
    label="Avatar 1 of 4"
  ></o-avatar>

  <o-avatar
    image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="Avatar 2 of 4"
  ></o-avatar>

  <o-avatar
    image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="Avatar 3 of 4"
  ></o-avatar>

  <o-avatar
    image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
    label="Avatar 4 of 4"
  ></o-avatar>
</div>

<style>
  .avatar-group o-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group o-avatar::part(base) {
    border: solid 2px var(--o-color-neutral-0);
  }
</style>
```

```jsx react
import { OAvatar, OIcon } from '%PACKAGE-FULL-PATH%/dist/react';

const css = `
  .avatar-group o-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group o-avatar::part(base) {
    border: solid 2px var(--o-color-neutral-0);
  }
`;

const App = () => (
  <>
    <div className="avatar-group">
      <OAvatar
        image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
        label="Avatar 1 of 4"
      />

      <OAvatar
        image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 2 of 4"
      />

      <OAvatar
        image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 3 of 4"
      />

      <OAvatar
        image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
        label="Avatar 4 of 4"
      />
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:o-avatar]
