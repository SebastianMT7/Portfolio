import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule,TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentLanguage: string = 'en'; 

  constructor(private router: Router, private translate: TranslateService) { 
    this.translate.setDefaultLang(this.currentLanguage);
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
