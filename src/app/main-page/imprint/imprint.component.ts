import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
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
   * scrolls to the top of the page when initialize the imprint Component
   */
  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
