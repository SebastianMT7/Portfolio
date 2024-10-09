import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [TranslateModule,RouterLink],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  currentLanguage: string = 'en'; 

  constructor(private translate: TranslateService) { 
    this.translate.setDefaultLang(this.currentLanguage);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
