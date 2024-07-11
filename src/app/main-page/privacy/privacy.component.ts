import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
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

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
