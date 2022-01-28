import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.scss']
})
export class RegisteredComponent implements OnInit {

  members: number = 0;

  countMembers() {
    setInterval(() => {
      if(this.members < 18) {
        this.members++;
      }
    }, 90);
  }

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    if(scrollY >= 800) {
      console.log(scrollY)
      this.countMembers();
    }
  }

}
