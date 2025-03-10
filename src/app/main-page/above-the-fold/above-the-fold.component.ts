import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  currentLanguage: string = 'en';
  isGerman: boolean = false;

/**
 * Initializes the component with language translation settings.
 * 
 * - Sets the default language to the current language.
 * - Applies the current language for translations.
 * - Subscribes to language change events to update the `isGerman` flag dynamically.
 *
 * @param {TranslateService} translate - The Angular service used for managing translations.
 */
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage);
    this.translate.onLangChange.subscribe((event) => {
      this.isGerman = event.lang === 'de';
    });
  }
  
}
