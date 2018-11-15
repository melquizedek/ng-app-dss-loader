import { Component } from '@angular/core';

@Component({
  selector: 'app-root-core',
  template: `<h1>AppComponentCore</h1><router-outlet></router-outlet>`,
  styles: ['h1 { font-weight: normal; color: blue}']
})
export class AppCoreComponent {
  title = 'app';
}
