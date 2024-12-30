import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.scss']
})
export class PhotoPageComponent implements OnInit {
  images = [
    'assets/images/special-moment1.png',
    'assets/images/most-special-moment1.png',
    'assets/images/special-moment2.png',
    'assets/images/special-moment3.png',
    'assets/images/special-moment4.png',
    'assets/images/special-moment6.png',
    'assets/images/most-specials-moments1.png',
    'assets/images/special-moment5.png',
    'assets/images/special-moment7.png',
    'assets/images/special-moment8.png',
    'assets/images/special-moment9.png',
    'assets/images/special-moment10.png',
    'assets/images/special-moment11.png',
    'assets/images/special-moment12.png',
    'assets/images/special-moment13.png',
    'assets/images/special-moment14.png',
    'assets/images/special-moment15.png',
    'assets/images/special-moment16.png',
    'assets/images/special-moment17.png',
    'assets/images/most-specials-moments2.png',
    'assets/images/most-specials-moments3.png',
    'assets/images/special-moment18.png',
  ];
  activeImageIndex = 0;
  hearts: { id: number; left: number; top: number }[] = [];

  ngOnInit() {
    this.startImageSlider();
    this.generateHearts();
  }

  startImageSlider() {
    setInterval(() => {
      this.activeImageIndex = (this.activeImageIndex + 1) % this.images.length;
    }, 3500);
  }

  generateHearts() {
    setInterval(() => {
      const heart = { id: Math.random(), left: Math.random() * 100, top: Math.random() * 100 };
      this.hearts.push(heart);
      setTimeout(() => {
        this.hearts.shift();
      }, 3500);
    }, 500);
  }
}
