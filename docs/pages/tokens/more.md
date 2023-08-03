---
meta:
  title: More Design Tokens
  description: Additional design tokens can be found here.
---

# More Design Tokens

All of the design tokens described herein are considered relatively stable. However, some changes might occur in future versions to address mission critical bugs or improvements. If such changes occur, they _will not_ be considered breaking changes and will be clearly documented in the [changelog](/resources/changelog).

Most design tokens are consistent across the light and dark theme. Those that vary will show both values.

:::tip
Currently, the source of design tokens is considered to be [`light.css`](O-REPO-URL-O/blob/next/src/themes/light.css). The dark theme, [dark.css](O-REPO-URL-O/blob/next/src/themes/dark.css), mirrors all of the same tokens with dark mode-specific values where appropriate. Work is planned to move all design tokens to a single file, perhaps JSON or YAML, in the near future.
:::

## Focus Rings

Focus ring tokens control the appearance of focus rings. Note that form inputs use `--o-input-focus-ring-*` tokens instead.

| Token                   | Value                                                                                   |
| ----------------------- | --------------------------------------------------------------------------------------- |
| `--o-focus-ring-color`  | `var(--o-color-primary-600)` (light theme)<br>`var(--o-color-primary-700)` (dark theme) |
| `--o-focus-ring-style`  | `solid`                                                                                 |
| `--o-focus-ring-width`  | `3px`                                                                                   |
| `--o-focus-ring`        | `var(--o-focus-ring-style) var(--o-focus-ring-width) var(--o-focus-ring-color)`         |
| `--o-focus-ring-offset` | `1px`                                                                                   |

## Buttons

Button tokens control the appearance of buttons. In addition, buttons also currently use some form input tokens such as `--o-input-height-*` and `--o-input-border-*`. More button tokens may be added in the future to make it easier to style them more independently.

| Token                         | Value                        |
| ----------------------------- | ---------------------------- |
| `--o-button-font-size-small`  | `var(--o-font-size-x-small)` |
| `--o-button-font-size-medium` | `var(--o-font-size-small)`   |
| `--o-button-font-size-large`  | `var(--o-font-size-medium)`  |

## Form Inputs

Form input tokens control the appearance of form controls such as [input](/components/input), [select](/components/select), [textarea](/components/textarea), etc.

| Token                                  | Value                             |
| -------------------------------------- | --------------------------------- |
| `--o-input-height-small`               | `1.875rem` (30px @ 16px base)     |
| `--o-input-height-medium`              | `2.5rem` (40px @ 16px base)       |
| `--o-input-height-large`               | `3.125rem` (50px @ 16px base)     |
| `--o-input-background-color`           | `var(--o-color-neutral-0)`        |
| `--o-input-background-color-hover`     | `var(--o-input-background-color)` |
| `--o-input-background-color-focus`     | `var(--o-input-background-color)` |
| `--o-input-background-color-disabled`  | `var(--o-color-neutral-100)`      |
| `--o-input-border-color`               | `var(--o-color-neutral-300)`      |
| `--o-input-border-color-hover`         | `var(--o-color-neutral-400)`      |
| `--o-input-border-color-focus`         | `var(--o-color-primary-500)`      |
| `--o-input-border-color-disabled`      | `var(--o-color-neutral-300)`      |
| `--o-input-border-width`               | `1px`                             |
| `--o-input-required-content`           | `*`                               |
| `--o-input-required-content-offset`    | `-2px`                            |
| `--o-input-required-content-color`     | `var(--o-input-label-color)`      |
| `--o-input-border-radius-small`        | `var(--o-border-radius-medium)`   |
| `--o-input-border-radius-medium`       | `var(--o-border-radius-medium)`   |
| `--o-input-border-radius-large`        | `var(--o-border-radius-medium)`   |
| `--o-input-font-family`                | `var(--o-font-sans)`              |
| `--o-input-font-weight`                | `var(--o-font-weight-normal)`     |
| `--o-input-font-size-small`            | `var(--o-font-size-small)`        |
| `--o-input-font-size-medium`           | `var(--o-font-size-medium)`       |
| `--o-input-font-size-large`            | `var(--o-font-size-large)`        |
| `--o-input-letter-spacing`             | `var(--o-letter-spacing-normal)`  |
| `--o-input-color`                      | `var(--o-color-neutral-700)`      |
| `--o-input-color-hover`                | `var(--o-color-neutral-700)`      |
| `--o-input-color-focus`                | `var(--o-color-neutral-700)`      |
| `--o-input-color-disabled`             | `var(--o-color-neutral-900)`      |
| `--o-input-icon-color`                 | `var(--o-color-neutral-500)`      |
| `--o-input-icon-color-hover`           | `var(--o-color-neutral-600)`      |
| `--o-input-icon-color-focus`           | `var(--o-color-neutral-600)`      |
| `--o-input-placeholder-color`          | `var(--o-color-neutral-500)`      |
| `--o-input-placeholder-color-disabled` | `var(--o-color-neutral-600)`      |
| `--o-input-spacing-small`              | `var(--o-spacing-small)`          |
| `--o-input-spacing-medium`             | `var(--o-spacing-medium)`         |
| `--o-input-spacing-large`              | `var(--o-spacing-large)`          |
| `--o-input-focus-ring-color`           | `hsl(198.6 88.7% 48.4% / 40%)`    |
| `--o-input-focus-ring-offset`          | `0`                               |

## Filled Form Inputs

Filled form input tokens control the appearance of form controls using the `filled` variant.

| Token                                        | Value                        |
| -------------------------------------------- | ---------------------------- |
| `--o-input-filled-background-color`          | `var(--o-color-neutral-100)` |
| `--o-input-filled-background-color-hover`    | `var(--o-color-neutral-100)` |
| `--o-input-filled-background-color-focus`    | `var(--o-color-neutral-100)` |
| `--o-input-filled-background-color-disabled` | `var(--o-color-neutral-100)` |
| `--o-input-filled-color`                     | `var(--o-color-neutral-800)` |
| `--o-input-filled-color-hover`               | `var(--o-color-neutral-800)` |
| `--o-input-filled-color-focus`               | `var(--o-color-neutral-700)` |
| `--o-input-filled-color-disabled`            | `var(--o-color-neutral-800)` |

## Form Labels

Form label tokens control the appearance of labels in form controls.

| Token                              | Value                       |
| ---------------------------------- | --------------------------- |
| `--o-input-label-font-size-small`  | `var(--o-font-size-small)`  |
| `--o-input-label-font-size-medium` | `var(--o-font-size-medium`) |
| `--o-input-label-font-size-large`  | `var(--o-font-size-large)`  |
| `--o-input-label-color`            | `inherit`                   |

## Help Text

Help text tokens control the appearance of help text in form controls.

| Token                                  | Value                        |
| -------------------------------------- | ---------------------------- |
| `--o-input-help-text-font-size-small`  | `var(--o-font-size-x-small)` |
| `--o-input-help-text-font-size-medium` | `var(--o-font-size-small)`   |
| `--o-input-help-text-font-size-large`  | `var(--o-font-size-medium)`  |
| `--o-input-help-text-color`            | `var(--o-color-neutral-500)` |

## Toggles

Toggle tokens control the appearance of toggles such as [checkbox](/components/checkbox), [radio](/components/radio), [switch](/components/switch), etc.

| Token                    | Value                         |
| ------------------------ | ----------------------------- |
| `--o-toggle-size-small`  | `0.875rem` (14px @ 16px base) |
| `--o-toggle-size-medium` | `1.125rem` (18px @ 16px base) |
| `--o-toggle-size-large`  | `1.375rem` (22px @ 16px base) |

## Overlays

Overlay tokens control the appearance of overlays as used in [dialog](/components/dialog), [drawer](/components/drawer), etc.

| Token                          | Value                       |
| ------------------------------ | --------------------------- |
| `--o-overlay-background-color` | `hsl(240 3.8% 46.1% / 33%)` |

## Panels

Panel tokens control the appearance of panels such as those used in [dialog](/components/dialog), [drawer](/components/drawer), [menu](/components/menu), etc.

| Token                        | Value                        |
| ---------------------------- | ---------------------------- |
| `--o-panel-background-color` | `var(--o-color-neutral-0)`   |
| `--o-panel-border-color`     | `var(--o-color-neutral-200)` |
| `--o-panel-border-width`     | `1px`                        |

## Tooltips

Tooltip tokens control the appearance of tooltips. This includes the [tooltip](/components/tooltip) component as well as other implementations, such [range tooltips](/components/range).

| Token                          | Value                                                |
| ------------------------------ | ---------------------------------------------------- |
| `--o-tooltip-border-radius`    | `var(--o-border-radius-medium)`                      |
| `--o-tooltip-background-color` | `var(--o-color-neutral-800)`                         |
| `--o-tooltip-color`            | `var(--o-color-neutral-0)`                           |
| `--o-tooltip-font-family`      | `var(--o-font-sans)`                                 |
| `--o-tooltip-font-weight`      | `var(--o-font-weight-normal)`                        |
| `--o-tooltip-font-size`        | `var(--o-font-size-small)`                           |
| `--o-tooltip-line-height`      | `var(--o-line-height-dense)`                         |
| `--o-tooltip-padding`          | `var(--o-spacing-2x-small) var(--o-spacing-x-small)` |
| `--o-tooltip-arrow-size`       | `6px`                                                |
