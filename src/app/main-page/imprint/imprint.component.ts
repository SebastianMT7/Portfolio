import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  constructor(private translate: TranslateService) { 
    this.translate.setDefaultLang(this.currentLanguage);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
