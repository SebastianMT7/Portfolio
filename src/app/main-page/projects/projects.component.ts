import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  currentLanguage: string = 'en'; // Standardmäßig Englisch ausgewählt
 

  isGerman: boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.onLangChange.subscribe((event) => {
      this.isGerman = event.lang === 'de';
    });
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  projectList = [
    { name: "Join", 
      img: "assets/img/join.png",
      skills: "Angular | TypeScript | HTML | CSS | Firebase",
      description: "projects.project1.description",
      liveTest:"https://sebastian-torney.developerakademie.net/Join/index.html",
      gitHub:"",
    },

    { name: "El-Pollo-Loco", 
      img: "assets/img/elPolloLoco.png",
      skills: "JavaScript | HTML | CSS",
      description: "projects.project2.description",
      liveTest:"https://sebastian-torney.developerakademie.net/El-Pollo-Loco/index.html",
      gitHub:"https://github.com/SebastianMT7/El-Pollo-Loco",
    },

    // { name: "Simple CRM", 
    //   img: "assets/img/elPolloLoco.png",
    //   skills: "Angular | Firebase",
    //   description: "Coming soon!",
    //   liveTest:"https://sebastian-torney.developerakademie.net/El-Pollo-Loco/index.html",
    //   gitHub:"https://github.com/SebastianMT7/El-Pollo-Loco",
    // },    
  ]


}
