import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<img [src]="image" />`
})
export class AppComponent  {
  image = 'http://www.wings.msn.to/image/wings.jpg';
}
