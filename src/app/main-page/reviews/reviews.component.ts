import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  currentLanguage: string = 'en';
  currentCommentIndex = 0;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
  }

  reviews = [
    {
      name: "V. Schuster - Team Partner",
      img: "./assets/img/schuster.png",
      message: "reviews.review1"
    },
    {
      name: "E. Eichinger - Team Partner",
      img: "./assets/img/eichinger.png",
      message: "reviews.review2"
    },
    {
      name: "I. Nuber - Frontend Developer",
      img: "./assets/img/nuber.png",
      message: "reviews.review3"
    }
  ];

  nextReview() {
    if (this.currentCommentIndex < this.reviews.length - 1) {
      this.currentCommentIndex++;
    } else {
      this.currentCommentIndex = 0;
    }
  }

  lastReview() {
    if (this.currentCommentIndex > 0) {
      this.currentCommentIndex--;
    } else {
      this.currentCommentIndex = this.reviews.length - 1;
    }

  }
}
