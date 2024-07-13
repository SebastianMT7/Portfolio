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


  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage);
    this.translate.onLangChange.subscribe((event) => {
      this.isGerman = event.lang === 'de';
    });
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }

}
