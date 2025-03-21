import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  currentLanguage: string = 'en';
  ishovered:boolean = false;

  /**
   * Constructor for the component.
   * Initializes the translation service and sets the default language.
   *
   * @param translate - An instance of TranslateService to manage language translations.
   */
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
  }

  /**
 * An array of skill objects, each containing a skill name and the path to its logo image.
 * Used to display a list of technical skills with corresponding icons.
 */
  skillList = [
    { name: "Angular", img: "assets/img/logos/angular.png" },
    { name: "TypeScript", img: "assets/img/logos/typescript.png" },
    { name: "JavaScript", img: "assets/img/logos/javascript.png" },
    { name: "HTML", img: "assets/img/logos/html.png" },
    { name: "Firebase", img: "assets/img/logos/firebase.png" },
    { name: "GIT", img: "assets/img/logos/git.png" },
    { name: "CSS", img: "assets/img/logos/css.png" },
    { name: "Rest-Api", img: "assets/img/logos/rest-api.png" },
    { name: "Scrum", img: "assets/img/logos/scrum.png" },
    { name: "Material Design", img: "assets/img/logos/material-design.png" },
  ]

}