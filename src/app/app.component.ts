import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.url = sanitizer.bypassSecurityTrustResourceUrl('https://stackblitz.com/edit/js-v48mqw?file=index.js');
  }
}
