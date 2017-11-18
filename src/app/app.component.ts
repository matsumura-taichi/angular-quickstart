import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div [innerHTML]="msg"></div>`
})
export class AppComponent  {
  msg: string = `<script>window.alert("ようこそ！");</script>
    <div style="font-size:20px;">
      <p>WINGSプロジェクト</p>
    </div>
    <a href="http://www.wings.msn.to/">Web</a>
    <button>同意する</button>
    <input type="button" onClick="alert('OK')" value="クリック" />`;
}
