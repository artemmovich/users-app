import { Component } from '@angular/core';

@Component({
  
  selector: 'app-root',
  template: `<h1>Users App </h1><router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent {
  title = 'My Angular Application';
}
