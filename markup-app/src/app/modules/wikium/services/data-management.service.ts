import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  private _translationObject: any = {
    membersCount: 18,
    trainingsCount: 6500,

    membersDesc: 'registered members',
    trainingsDesc: 'trainings take place daily'
  }

  private _people: any = [
    {
    img: '/assets/icon-child.svg',
    type: 'Children from 7 years',
    services: [
      'Interesting games that help to develop', 
      'Contribute to the improvement of performance of the child at school'
    ]
    },
    {
      img: '/assets/icon-man.svg',
      type: 'Adults',
      services: [
        'High working performance daily', 
        'Protection against fatigue and stress'
      ]
    },
      {
        img: '/assets/icon-woman.svg',
        type: 'Older generation',
        services: [
          'Prevention of attention, memory and thinking disorders', 
          'Maintain clarity of mind regardless of age'
        ]
      },
];

  constructor() { }

  get translationObject() {
    return this._translationObject;
  }

  get people() {
    return this._people;
  }
}
