import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  currentLanguage: string = 'en'; 
  
  /**
   * Constructor for the component.
   * Initializes the translation service and sets the default language.
   *
   * @param translate - An instance of TranslateService to manage language translations.
   */
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
  }

}
