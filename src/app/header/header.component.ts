
import { Component } from '@angular/core';
// import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,    
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule,TranslateModule],
  // imports: [CommonModule, TranslateModule],
})

export class HeaderComponent {
  // isGerman: boolean = true;

  
  // constructor(private translate: TranslateService) {}

  
  //   changeLanguage(lang: string) {
  //     this.translate.use(lang);
  //   }

  

  

}
