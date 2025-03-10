
import { Component, OnInit } from '@angular/core';
// import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, TranslateModule],
})

export class HeaderComponent implements OnInit {
  currentLanguage: string = 'en';
  menuOpen: boolean = false;

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
 * Lifecycle hook that is called after Angular has initialized the component.
 */
  ngOnInit(): void {
  }

  /**
   * changes the language
   * @param language the actual language
   */
  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }

  /**
   * toggles the mobilemenu to open or to close
   */
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
