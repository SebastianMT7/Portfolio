import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [TranslateModule, RouterModule,HeaderComponent,FooterComponent],
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

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
