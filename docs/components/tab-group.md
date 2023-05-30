# Tab Group

[component-header:o-tab-group]

Tab groups make use of [tabs](/components/tab) and [tab panels](/components/tab-panel). Each tab must be slotted into the `nav` slot and its `panel` must refer to a tab panel of the same name.

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
import { OTab, OTabGroup, OTabPanel } from '%PACKAGE_NAME%/dist/react';

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

## Examples

### Tabs on Bottom

Tabs can be shown on the bottom by setting `placement` to `bottom`.

```html preview
<o-tab-group placement="bottom">
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
import { OTab, OTabGroup, OTabPanel } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <OTabGroup placement="bottom">
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

### Tabs on Start

Tabs can be shown on the starting side by setting `placement` to `start`.

```html preview
<o-tab-group placement="start">
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
import { OTab, OTabGroup, OTabPanel } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <OTabGroup placement="start">
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

### Tabs on End

Tabs can be shown on the ending side by setting `placement` to `end`.

```html preview
<o-tab-group placement="end">
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
import { OTab, OTabGroup, OTabPanel } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <OTabGroup placement="end">
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

### Closable Tabs

Add the `closable` attribute to a tab to show a close button. This example shows how you can dynamically remove tabs from the DOM when the close button is activated.

```html preview
<o-tab-group class="tabs-closable">
  <o-tab slot="nav" panel="general">General</o-tab>
  <o-tab slot="nav" panel="closable-1" closable>Closable 1</o-tab>
  <o-tab slot="nav" panel="closable-2" closable>Closable 2</o-tab>
  <o-tab slot="nav" panel="closable-3" closable>Closable 3</o-tab>

  <o-tab-panel name="general">This is the general tab panel.</o-tab-panel>
  <o-tab-panel name="closable-1">This is the first closable tab panel.</o-tab-panel>
  <o-tab-panel name="closable-2">This is the second closable tab panel.</o-tab-panel>
  <o-tab-panel name="closable-3">This is the third closable tab panel.</o-tab-panel>
</o-tab-group>

<script>
  const tabGroup = document.querySelector('.tabs-closable');

  tabGroup.addEventListener('o-close', async event => {
    const tab = event.target;
    const panel = tabGroup.querySelector(`o-tab-panel[name="${tab.panel}"]`);

    // Show the previous tab if the tab is currently active
    if (tab.active) {
      tabGroup.show(tab.previousElementSibling.panel);
    }

    // Remove the tab + panel
    tab.remove();
    panel.remove();
  });
</script>
```

```jsx react
import { OTab, OTabGroup, OTabPanel } from '%PACKAGE_NAME%/dist/react';

const App = () => {
  function handleClose(event) {
    //
    // This is a crude example that removes the tab and its panel from the DOM.
    // There are better ways to manage tab creation/removal in React, but that
    // would significantly complicate the example.
    //
    const tab = event.target;
    const tabGroup = tab.closest('o-tab-group');
    const tabPanel = tabGroup.querySelector(`[aria-labelledby="${tab.id}"]`);

    tab.remove();
    tabPanel.remove();
  }

  return (
    <OTabGroup className="tabs-closable" onSlClose={handleClose}>
      <OTab slot="nav" panel="general">
        General
      </OTab>
      <OTab slot="nav" panel="closable-1" closable onSlClose={handleClose}>
        Closable 1
      </OTab>
      <OTab slot="nav" panel="closable-2" closable onSlClose={handleClose}>
        Closable 2
      </OTab>
      <OTab slot="nav" panel="closable-3" closable onSlClose={handleClose}>
        Closable 3
      </OTab>

      <OTabPanel name="general">This is the general tab panel.</OTabPanel>
      <OTabPanel name="closable-1">This is the first closable tab panel.</OTabPanel>
      <OTabPanel name="closable-2">This is the second closable tab panel.</OTabPanel>
      <OTabPanel name="closable-3">This is the third closable tab panel.</OTabPanel>
    </OTabGroup>
  );
};
```

### Scrolling Tabs

When there are more tabs than horizontal space allows, the nav will be scrollable.

```html preview
<o-tab-group>
  <o-tab slot="nav" panel="tab-1">Tab 1</o-tab>
  <o-tab slot="nav" panel="tab-2">Tab 2</o-tab>
  <o-tab slot="nav" panel="tab-3">Tab 3</o-tab>
  <o-tab slot="nav" panel="tab-4">Tab 4</o-tab>
  <o-tab slot="nav" panel="tab-5">Tab 5</o-tab>
  <o-tab slot="nav" panel="tab-6">Tab 6</o-tab>
  <o-tab slot="nav" panel="tab-7">Tab 7</o-tab>
  <o-tab slot="nav" panel="tab-8">Tab 8</o-tab>
  <o-tab slot="nav" panel="tab-9">Tab 9</o-tab>
  <o-tab slot="nav" panel="tab-10">Tab 10</o-tab>
  <o-tab slot="nav" panel="tab-11">Tab 11</o-tab>
  <o-tab slot="nav" panel="tab-12">Tab 12</o-tab>
  <o-tab slot="nav" panel="tab-13">Tab 13</o-tab>
  <o-tab slot="nav" panel="tab-14">Tab 14</o-tab>
  <o-tab slot="nav" panel="tab-15">Tab 15</o-tab>
  <o-tab slot="nav" panel="tab-16">Tab 16</o-tab>
  <o-tab slot="nav" panel="tab-17">Tab 17</o-tab>
  <o-tab slot="nav" panel="tab-18">Tab 18</o-tab>
  <o-tab slot="nav" panel="tab-19">Tab 19</o-tab>
  <o-tab slot="nav" panel="tab-20">Tab 20</o-tab>

  <o-tab-panel name="tab-1">Tab panel 1</o-tab-panel>
  <o-tab-panel name="tab-2">Tab panel 2</o-tab-panel>
  <o-tab-panel name="tab-3">Tab panel 3</o-tab-panel>
  <o-tab-panel name="tab-4">Tab panel 4</o-tab-panel>
  <o-tab-panel name="tab-5">Tab panel 5</o-tab-panel>
  <o-tab-panel name="tab-6">Tab panel 6</o-tab-panel>
  <o-tab-panel name="tab-7">Tab panel 7</o-tab-panel>
  <o-tab-panel name="tab-8">Tab panel 8</o-tab-panel>
  <o-tab-panel name="tab-9">Tab panel 9</o-tab-panel>
  <o-tab-panel name="tab-10">Tab panel 10</o-tab-panel>
  <o-tab-panel name="tab-11">Tab panel 11</o-tab-panel>
  <o-tab-panel name="tab-12">Tab panel 12</o-tab-panel>
  <o-tab-panel name="tab-13">Tab panel 13</o-tab-panel>
  <o-tab-panel name="tab-14">Tab panel 14</o-tab-panel>
  <o-tab-panel name="tab-15">Tab panel 15</o-tab-panel>
  <o-tab-panel name="tab-16">Tab panel 16</o-tab-panel>
  <o-tab-panel name="tab-17">Tab panel 17</o-tab-panel>
  <o-tab-panel name="tab-18">Tab panel 18</o-tab-panel>
  <o-tab-panel name="tab-19">Tab panel 19</o-tab-panel>
  <o-tab-panel name="tab-20">Tab panel 20</o-tab-panel>
</o-tab-group>
```

```jsx react
import { OTab, OTabGroup, OTabPanel } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <OTabGroup>
    <OTab slot="nav" panel="tab-1">
      Tab 1
    </OTab>
    <OTab slot="nav" panel="tab-2">
      Tab 2
    </OTab>
    <OTab slot="nav" panel="tab-3">
      Tab 3
    </OTab>
    <OTab slot="nav" panel="tab-4">
      Tab 4
    </OTab>
    <OTab slot="nav" panel="tab-5">
      Tab 5
    </OTab>
    <OTab slot="nav" panel="tab-6">
      Tab 6
    </OTab>
    <OTab slot="nav" panel="tab-7">
      Tab 7
    </OTab>
    <OTab slot="nav" panel="tab-8">
      Tab 8
    </OTab>
    <OTab slot="nav" panel="tab-9">
      Tab 9
    </OTab>
    <OTab slot="nav" panel="tab-10">
      Tab 10
    </OTab>
    <OTab slot="nav" panel="tab-11">
      Tab 11
    </OTab>
    <OTab slot="nav" panel="tab-12">
      Tab 12
    </OTab>
    <OTab slot="nav" panel="tab-13">
      Tab 13
    </OTab>
    <OTab slot="nav" panel="tab-14">
      Tab 14
    </OTab>
    <OTab slot="nav" panel="tab-15">
      Tab 15
    </OTab>
    <OTab slot="nav" panel="tab-16">
      Tab 16
    </OTab>
    <OTab slot="nav" panel="tab-17">
      Tab 17
    </OTab>
    <OTab slot="nav" panel="tab-18">
      Tab 18
    </OTab>
    <OTab slot="nav" panel="tab-19">
      Tab 19
    </OTab>
    <OTab slot="nav" panel="tab-20">
      Tab 20
    </OTab>

    <OTabPanel name="tab-1">Tab panel 1</OTabPanel>
    <OTabPanel name="tab-2">Tab panel 2</OTabPanel>
    <OTabPanel name="tab-3">Tab panel 3</OTabPanel>
    <OTabPanel name="tab-4">Tab panel 4</OTabPanel>
    <OTabPanel name="tab-5">Tab panel 5</OTabPanel>
    <OTabPanel name="tab-6">Tab panel 6</OTabPanel>
    <OTabPanel name="tab-7">Tab panel 7</OTabPanel>
    <OTabPanel name="tab-8">Tab panel 8</OTabPanel>
    <OTabPanel name="tab-9">Tab panel 9</OTabPanel>
    <OTabPanel name="tab-10">Tab panel 10</OTabPanel>
    <OTabPanel name="tab-11">Tab panel 11</OTabPanel>
    <OTabPanel name="tab-12">Tab panel 12</OTabPanel>
    <OTabPanel name="tab-13">Tab panel 13</OTabPanel>
    <OTabPanel name="tab-14">Tab panel 14</OTabPanel>
    <OTabPanel name="tab-15">Tab panel 15</OTabPanel>
    <OTabPanel name="tab-16">Tab panel 16</OTabPanel>
    <OTabPanel name="tab-17">Tab panel 17</OTabPanel>
    <OTabPanel name="tab-18">Tab panel 18</OTabPanel>
    <OTabPanel name="tab-19">Tab panel 19</OTabPanel>
    <OTabPanel name="tab-20">Tab panel 20</OTabPanel>
  </OTabGroup>
);
```

### Manual Activation

When focused, keyboard users can press <kbd>Left</kbd> or <kbd>Right</kbd> to select the desired tab. By default, the corresponding tab panel will be shown immediately (automatic activation). You can change this behavior by setting `activation="manual"` which will require the user to press <kbd>Space</kbd> or <kbd>Enter</kbd> before showing the tab panel (manual activation).

```html preview
<o-tab-group activation="manual">
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
import { OTab, OTabGroup, OTabPanel } from '%PACKAGE_NAME%/dist/react';

const App = () => (
  <OTabGroup activation="manual">
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

[component-metadata:o-tab-group]
