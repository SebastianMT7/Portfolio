
import { Component} from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  constructor(public translate: TranslateService) {
    this.translate.use('en').subscribe();
  }

  changeLanguage(language: string) {
    this.translate.use(language).subscribe();
  }
}
