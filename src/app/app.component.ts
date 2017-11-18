import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: `<div [innerHTML]="safeMsg"></div>`
})
export class AppComponent  {
  safeMsg: SafeHtml;
  msg: string = `<script>window.alert("ようこそ！");</script>
    <div style="font-size:20px;">
      <p>WINGSプロジェクト</p>
    </div>
    <a href="http://www.wings.msn.to/">Web</a>
    <button>同意する</button>
    <input type="button" onClick="alert('OK')" value="クリック" />`;

  constructor(private sanitizer: DomSanitizer) {
    //msgプロパティの内容に信頼済みマークを付与
    this.safeMsg = sanitizer.bypassSecurityTrustHtml(this.msg);
  }
}
