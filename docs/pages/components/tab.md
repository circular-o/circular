---
meta:
  title: Tab
  description: Tabs are used inside tab groups to represent and activate tab panels.
layout: component
---

```html:preview
<o-tab>Tab</o-tab>
<o-tab active>Active</o-tab>
<o-tab closable>Closable</o-tab>
<o-tab disabled>Disabled</o-tab>
```

```jsx:react
import { OTab } from 'O-PACKAGE-FULL-NAME-O/dist/react';

const App = () => (
  <>
    <OTab>Tab</OTab>
    <OTab active>Active</OTab>
    <OTab closable>Closable</OTab>
    <OTab disabled>Disabled</OTab>
  </>
);
```

:::tip
Additional demonstrations can be found in the [tab group examples](/components/tab-group).
:::
