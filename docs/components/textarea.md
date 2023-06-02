# Textarea

[component-header:o-textarea]

```html preview
<o-textarea></o-textarea>
```

```jsx react
import { OTextarea } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OTextarea />;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<o-textarea label="Comments"></o-textarea>
```

```jsx react
import { OTextarea } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OTextarea label="Comments" />;
```

### Help Text

Add descriptive help text to a textarea with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<o-textarea label="Feedback" help-text="Please tell us what you think."> </o-textarea>
```

```jsx react
import { OTextarea } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OTextarea label="Feedback" help-text="Please tell us what you think." />;
```

### Rows

Use the `rows` attribute to change the number of text rows that get shown.

```html preview
<o-textarea rows="2"></o-textarea>
```

```jsx react
import { OTextarea } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OTextarea rows={2} />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<o-textarea placeholder="Type something"></o-textarea>
```

```jsx react
import { OTextarea } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OTextarea placeholder="Type something" />;
```

### Filled Textareas

Add the `filled` attribute to draw a filled textarea.

```html preview
<o-textarea placeholder="Type something" filled></o-textarea>
```

```jsx react
import { OTextarea } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OTextarea placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable a textarea.

```html preview
<o-textarea placeholder="Textarea" disabled></o-textarea>
```

```jsx react
import { OTextarea } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OTextarea placeholder="Textarea" disabled />;
```

### Sizes

Use the `size` attribute to change a textarea's size.

```html preview
<o-textarea placeholder="Small" size="small"></o-textarea>
<br />
<o-textarea placeholder="Medium" size="medium"></o-textarea>
<br />
<o-textarea placeholder="Large" size="large"></o-textarea>
```

```jsx react
import { OTextarea } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => (
  <>
    <OTextarea placeholder="Small" size="small"></OTextarea>
    <br />
    <OTextarea placeholder="Medium" size="medium"></OTextarea>
    <br />
    <OTextarea placeholder="Large" size="large"></OTextarea>
  </>
);
```

### Prevent Resizing

By default, textareas can be resized vertically by the user. To prevent resizing, set the `resize` attribute to `none`.

```html preview
<o-textarea resize="none"></o-textarea>
```

```jsx react
import { OTextarea } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OTextarea resize="none" />;
```

### Expand with Content

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

```html preview
<o-textarea resize="auto"></o-textarea>
```

```jsx react
import { OTextarea } from '%PACKAGE-FULL-PATH%/dist/react';

const App = () => <OTextarea resize="auto" />;
```

[component-metadata:o-textarea]
