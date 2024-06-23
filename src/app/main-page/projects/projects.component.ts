import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectList = [
    { name: "Join", 
      img: "assets/img/join.png",
      skills: "Angular | TypeScript | HTML | CSS | Firebase",
      description: "Aufgabenmanager basierend auf dem Kanban-System. Erstellen und organisieren Sie Aufgaben per Drag-and-Drop, und weisen Sie Benutzern und Kategorien zu.",
      liveTest:"https://sebastian-torney.developerakademie.net/Join/index.html",
      gitHub:"",
    },

    { name: "El-Pollo-Loco", 
      img: "assets/img/elPolloLoco.png",
      skills: "JavaScript | HTML | CSS",
      description: "Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe dabei, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.",
      liveTest:"https://sebastian-torney.developerakademie.net/El-Pollo-Loco/index.html",
      gitHub:"https://github.com/SebastianMT7/El-Pollo-Loco",
    },

    
  ]
}
