import { Component} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  currentLanguage: string = 'en'; // Standardmäßig Englisch ausgewählt


  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
  }
  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }

}
