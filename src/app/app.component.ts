import { Component } from '@angular/core';
import { NgTinyUrlService } from 'ng-tiny-url';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'URLShortener';
  urlText: any;
  loading: boolean = false;
  textCopied: boolean = false;
  constructor(private tinyUrl: NgTinyUrlService) {
  }
  ngOnInit() {
    const options = {
      strings: ['Enter Your URL', 'And Get Shortener URL'],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };
    const typed = new Typed('.typed-element', options);
  }
  getUrlShorten(url: any) {
    this.loading = true;
    this.tinyUrl.shorten(url.value.url).subscribe((urlRes) => {
      console.log(urlRes);
      this.urlText = urlRes;
      this.loading = false;
    })
  }
  copyText() {
    let inputEement = document.createElement('input');
    inputEement.setAttribute('type', 'text');
    inputEement.setAttribute('value', this.urlText);
    inputEement.select();
    inputEement.setSelectionRange(0, 9999);
    try {
      navigator.clipboard.writeText(inputEement.value);
      this.textCopied = true;
      setTimeout(() => {
        this.textCopied = false;
      }, 2000);
    }
    catch (err) {
      console.log('Error whilte text copying....')
    }
  }
}
