import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: `<iframe [src]="safeUrl"></iframe>`
})
export class AppComponent  {
  safeUrl: SafeResourceUrl;
  url = 'http://www.wings.msn.to/';

  constructor(private sanitizer: DomSanitizer) {
    //リソースが信頼済みであることをマーク
    this.safeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
