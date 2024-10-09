import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule,RouterLink],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
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
