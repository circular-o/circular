---
meta:
  title: Angular
  description: Tips for using Shoelace in your Angular app.
---

# Angular

Angular [plays nice](https://custom-elements-everywhere.com/#angular) with custom elements, so you can use O-LIBRARY-NAME-O in your Angular apps with ease.

## Installation

To add O-LIBRARY-NAME-O to your Angular app, install the package from npm.

```bash
npm install O-PACKAGE-FULL-NAME-O
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
import 'O-PACKAGE-FULL-NAME-O/%NPMDIR%/themes/light.css';
import { setBasePath } from 'O-PACKAGE-FULL-NAME-O/%NPMDIR%/utilities/base-path';

setBasePath('O-PACKAGE-URL-O/%CDNDIR%/');
```

:::tip
If you'd rather not use the CDN for assets, you can create a build task that copies `node_modules/O-PACKAGE-FULL-NAME-O/%NPMDIR%/assets` into a public folder in your app. Then you can point the base path to that folder instead.
:::

## Configuration

Then make sure to apply the custom elements schema as shown below.

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

## Reference O-LIBRARY-NAME-O components in your Angular component code

```js
import { ODrawer } from 'O-PACKAGE-FULL-NAME-O';

@Component({
  selector: 'app-drawer-example',
  template: '<div id="page"><button (click)="showDrawer()">Show drawer</button><o-drawer #drawer label="Drawer" class="drawer-focus" style="--size: 50vw"><p>Drawer content</p></o-drawer></div>'
})
export class DrawerExampleComponent implements OnInit {

  // use @ViewChild to get a reference to the #drawer element within component template
  @ViewChild('drawer')
  drawer?: ElementRef<ODrawer>;

  ...

  constructor(...) {
  }

  ngOnInit() {
  }

  ...

  showDrawer() {
    // use nativeElement to access O-LIBRARY-NAME-O components
    this.drawer?.nativeElement.show();
  }
}
```

Now you can start using O-LIBRARY-NAME-O components in your app!

:::tip
Are you using O-LIBRARY-NAME-O with Angular? [Help us improve this page!](O-REPO-URL-O/blob/next/docs/frameworks/angular.md)
:::
