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
  animations: [
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

  isGerman: boolean = false;


  sendMail() {
    this.showPopup = false;
    setTimeout(() => {
      this.showPopup = true;
    }, 5000);
  }

  post = {
    endPoint: 'https://sebastian-torney.de/sendMail.php',
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
            this.showPopup = true;
            ngForm.resetForm();
            setTimeout((): void => {
              this.showPopup = false;
            }, 5000);

          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.contactData.email = '';
      ngForm.resetForm();
      setTimeout((): void => {
        this.showPopup = false;
      }, 5000);
    }
  }
}


