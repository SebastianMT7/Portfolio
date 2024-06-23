import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  text: string = '';
  allFieldsFilled: boolean = false;

  checkFields() {
    this.allFieldsFilled = this.name.trim() !== '' && this.email.trim() !== '' && this.text.trim() !== '';
  }
}
