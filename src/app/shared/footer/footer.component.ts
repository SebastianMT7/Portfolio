import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { TranslateModule,TranslateService } from '@ngx-translate/core';
import { ImprintComponent } from '../../main-page/imprint/imprint.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule,RouterModule,ImprintComponent,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentLanguage: string = 'en'; 

  constructor(private translate: TranslateService) { 
    this.translate.setDefaultLang(this.currentLanguage);
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }

}
