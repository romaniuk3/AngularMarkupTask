import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  trainings: number = 0;
  interval: any;

  countTrainings() {
      this.interval = setInterval(() => {
        if(this.trainings < 6500) {
          this.trainings+=50;
          this.trainings++;
        };
      }, 20);

    setTimeout(() => {
      this.trainings = 6500;
    },500);
  }

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    if(scrollY >= 800) {
      console.log(scrollY)
      this.countTrainings();
    }
  }

}
