
import { Component, OnInit } from '@angular/core';
// import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, TranslateModule],
})

export class HeaderComponent implements OnInit {
  currentLanguage: string = 'en'; // Standardmäßig Englisch ausgewählt
  menuOpen: boolean = false;

  ngOnInit(): void {

  }

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
  }
  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
