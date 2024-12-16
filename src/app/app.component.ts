import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigModule } from './translate-config.module';
import { HttpClientModule } from '@angular/common/http';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, MainPageComponent,
    FooterComponent, TranslateModule, TranslateConfigModule, HttpClientModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
  currentLanguage: string = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.AosInit();
  }  

  AosInit() {
    AOS.init({
      duration: 500,
      delay: 400,
      easing: 'ease-out',
      once: true
    });
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }
}


