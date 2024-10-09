import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule,TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentLanguage: string = 'en'; 

  constructor(private translate: TranslateService) { 
    this.translate.setDefaultLang(this.currentLanguage);
  }

}
