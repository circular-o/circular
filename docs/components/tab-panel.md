# Tab Panel

[component-header:o-tab-panel]

```html preview
<o-tab-group>
  <o-tab slot="nav" panel="general">General</o-tab>
  <o-tab slot="nav" panel="custom">Custom</o-tab>
  <o-tab slot="nav" panel="advanced">Advanced</o-tab>
  <o-tab slot="nav" panel="disabled" disabled>Disabled</o-tab>

  <o-tab-panel name="general">This is the general tab panel.</o-tab-panel>
  <o-tab-panel name="custom">This is the custom tab panel.</o-tab-panel>
  <o-tab-panel name="advanced">This is the advanced tab panel.</o-tab-panel>
  <o-tab-panel name="disabled">This is a disabled tab panel.</o-tab-panel>
</o-tab-group>
```

```jsx react
import { OTab, OTabGroup, OTabPanel } from '%PACKAGE_FULL_PATH%/dist/react';

const App = () => (
  <OTabGroup>
    <OTab slot="nav" panel="general">
      General
    </OTab>
    <OTab slot="nav" panel="custom">
      Custom
    </OTab>
    <OTab slot="nav" panel="advanced">
      Advanced
    </OTab>
    <OTab slot="nav" panel="disabled" disabled>
      Disabled
    </OTab>

    <OTabPanel name="general">This is the general tab panel.</OTabPanel>
    <OTabPanel name="custom">This is the custom tab panel.</OTabPanel>
    <OTabPanel name="advanced">This is the advanced tab panel.</OTabPanel>
    <OTabPanel name="disabled">This is a disabled tab panel.</OTabPanel>
  </OTabGroup>
);
```

?> Additional demonstrations can be found in the [tab group examples](/components/tab-group).

[component-metadata:o-tab-panel]
