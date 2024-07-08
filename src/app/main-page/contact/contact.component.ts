import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  http = inject(HttpClient);

  // name: string = '';
  // email: string = '';
  // message: string = '';
  // checked: boolean = false;
  allFieldsFilled: boolean = false;

  contactData = {
    name: "",
    email: "",
    message: "",
    checkbox: false,
  }

  mailTest = true;


  ngOnInit() {
    this.checkFields();
  }

  checkFields() {
    this.allFieldsFilled = this.contactData.name.trim() !== '' && this.contactData.email.trim() !== '' && this.contactData.message.trim() !== '' && this.contactData.checkbox !== false;
  }

  toggleChecked() {
    if (this.contactData.checkbox = false) {
      this.contactData.checkbox = true;
    } else {
      this.contactData.checkbox = false;
    }
    this.checkFields()
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
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

}


