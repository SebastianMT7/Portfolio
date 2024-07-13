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
      descriptionENG: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      descriptionGER: "Aufgabenmanager basierend auf dem Kanban-System. Erstellen und organisieren Sie Aufgaben per Drag-and-Drop, und weisen Sie Benutzern und Kategorien zu.",
      liveTest:"https://sebastian-torney.developerakademie.net/Join/index.html",
      gitHub:"",
    },

    { name: "El-Pollo-Loco", 
      img: "assets/img/elPolloLoco.png",
      skills: "JavaScript | HTML | CSS",
      descriptionENG: "A simple Jump-and-Run game based on a object-oriented approach. Help Pepe to find coins and bottles to fight against the killer chicken.",
      descriptionGER: "Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe dabei, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.",
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
