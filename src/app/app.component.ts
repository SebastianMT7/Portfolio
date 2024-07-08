import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent,MainPageComponent, 
    FooterComponent, TranslateModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
  

  // constructor(private translate: TranslateService) {
  //   // Setzen der Standard-Sprache auf Englisch ('en')
  //   this.translate.setDefaultLang('en');
    
  //   changeLanguage(language: string) {
  //     this.translate.use(language); // Sprache ändern
    // }
}


