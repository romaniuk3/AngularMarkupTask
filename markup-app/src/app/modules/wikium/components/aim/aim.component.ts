import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aim',
  templateUrl: './aim.component.html',
  styleUrls: ['./aim.component.scss']
})
export class AimComponent implements OnInit {

  people = [
    {
    img: '../../../../../assets/icon-child.svg',
    type: 'Children from 7 years',
    services: [
      'Interesting games that help to develop', 
      'Contribute to the improvement of performance of the child at school'
    ]
    },
    {
      img: '../../../../../assets/icon-man.svg',
      type: 'Adults',
      services: [
        'High working performance daily', 
        'Protection against fatigue and stress'
      ]
    },
      {
        img: '../../../../../assets/icon-woman.svg',
        type: 'Older generation',
        services: [
          'Prevention of attention, memory and thinking disorders', 
          'Maintain clarity of mind regardless of age'
        ]
      },
];

  constructor() { }

  ngOnInit(): void {
  }

}
