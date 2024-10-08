import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'vec-project';
  
  constructor(private translate: TranslateService) {
   
}
  ngOnInit(): void {
   // this language will be used as a fallback when a translation isn't found in the current language
   this.translate.setDefaultLang('en');
   let lang = localStorage.getItem("lang") || 'en';
   // the lang to use, if the lang isn't available, it will use the current loader to get them
   this.translate.use(lang);
   document.documentElement.lang = lang;
  }
}
