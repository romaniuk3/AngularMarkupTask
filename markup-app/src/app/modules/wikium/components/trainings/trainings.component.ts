import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  trainings: number = 0;

  public countTrainings() {

    let promise = new Promise((resolve, reject) => {
      setInterval(() => {
        if(this.trainings < 6500) {
          this.trainings+=50;
          this.trainings++;
        } else {
          resolve(this.trainings);
        };
      }, 20);
    });
    promise.then(() => {
      this.trainings = 6500;
    });
  }
  

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if(scrollY >= 800) {
        this.countTrainings();
      }
    });
  }
}