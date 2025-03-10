import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [TranslateModule,RouterLink],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
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

  /**
   * scrolls to the top of the page when initialize the privacy Component
   */
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
