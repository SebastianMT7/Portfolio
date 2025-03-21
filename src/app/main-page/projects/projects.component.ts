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
  currentLanguage: string = 'en';
  isGerman: boolean = false;

/**
 * Initializes the TranslateService for language translation.
 * Sets the default language to English and listens for language changes.
 * Updates the isGerman property based on the current language.
 *
 * @param translate - An instance of TranslateService used for handling translations.
 */
constructor(private translate: TranslateService) {
  this.translate.setDefaultLang('en');
  this.translate.use('en');
  this.translate.onLangChange.subscribe((event) => {
    this.isGerman = event.lang === 'de';
  });
}

/**
 * An array of project objects, each containing project details such as name, image, skills, descriptions in English and German,
 * as well as links to live demos and GitHub repositories.
 * Used to showcase personal or professional projects in a portfolio.
 */
  projectList = [
    { name: "DA Bubble", 
      img: "assets/img/dabubble.png",
      skills: "Angular | TypeScript | Firebase | HTML | SCSS",
      descriptionENG: "A Messenger like Slack. Communicate with your team through channels or send private messages to other users. A global search feature makes it easy to find messages, users or channels. Share images or PDFs directly in the chat.",
      descriptionGER: "Ein Chat-Messenger im Stile von Slack. Echtzeitkommunikation in Channels oder über Direktnachrichten. Eine globale Suchfunktion erleichtert das Finden von Nutzern und Nachrichten.",
      liveTest:"https://dabubble.sebastian-torney.de",
      gitHub:"https://github.com/SebastianMT7/DaBubble",
    },

    { name: "El-Pollo-Loco", 
      img: "assets/img/elPolloLoco.png",
      skills: "JavaScript | HTML | CSS",
      descriptionENG: "A simple Jump-and-Run game based on a object-oriented approach. Help Pepe to find coins and bottles to fight against the killer chicken.",
      descriptionGER: "Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe dabei, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.",
      liveTest:"https://el-pollo-loco.sebastian-torney.de",
      gitHub:"https://github.com/SebastianMT7/El-Pollo-Loco",
    },

    { name: "Join", 
      img: "assets/img/join.png",
      skills: "Angular | TypeScript | HTML | CSS | Firebase",
      descriptionENG: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      descriptionGER: "Aufgabenmanager basierend auf dem Kanban-System. Erstellen und organisieren Sie Aufgaben per Drag-and-Drop, und weisen Sie Benutzern und Kategorien zu.",
      liveTest:"https://join.sebastian-torney.de",
      gitHub:"https://github.com/SebastianMT7/Join",
    },

    // { name: "Pokedex", 
    //   img: "assets/img/pokedex.png",
    //   skills: "JavaScript | HTML | CSS | API",
    //   descriptionENG: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
    //   descriptionGER: "Basierend auf der PokéAPI, einer einfachen Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.",
    //   liveTest:"https://pokedex.sebastian-torney.de",
    //   gitHub:"https://github.com/SebastianMT7/Pokedex",
    // },    
  ]


}
