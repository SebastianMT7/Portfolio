import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations:[
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class ContactComponent {
  currentLanguage: string = 'en'; // Standardmäßig Englisch ausgewählt


  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    checkbox: false,
  }

  showPopup = true;
  mailTest = true;

  isClicked: boolean = false; // Deklaration der isClicked-Variable
  isBlurred: boolean = false; // Deklaration der isBlurred-Variable
  isClickedSecondInput: boolean = false;
  isBlurredSecondInput: boolean = false;
  isClickedTextarea: boolean = false;
  isBlurredTextarea: boolean = false;

  isGerman: boolean = false;


  sendMail() {
    this.showPopup = !this.showPopup;
  }

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.contactData = {
              name: '',
              email: '',
              message: '',
              checkbox: false
            };
            this.isClicked = false;
            this.isBlurred = false;
            this.isClickedSecondInput = false;
            this.isBlurredSecondInput = false;
            this.isClickedTextarea = false;
            this.isBlurredTextarea = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.contactData.email = '';
      ngForm.resetForm();
    }
  }

  onInputChange() {
    this.isClicked = true;
  }

  setInputBlurred() {
    this.isBlurred = true;
  }

  onInputChanges() {
    this.isClickedSecondInput = true;
  }

  setInputBlurredSecondInput() {
    this.isBlurredSecondInput = true;
  }

  onTextareaInputChange() {
    this.isClickedTextarea = true;
  }

  setInputBlurredTextarea() {
    this.isBlurredTextarea = true;
  }


}


