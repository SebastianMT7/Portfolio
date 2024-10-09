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

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
  }

}
