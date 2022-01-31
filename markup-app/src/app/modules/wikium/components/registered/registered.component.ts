import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.scss']
})
export class RegisteredComponent implements OnInit {

  members: number = 0;

  @Input() translation: any;
  
  @Output() onTitleChange = new EventEmitter();

  countMembers() {
    setInterval(() => {
      if(this.members < this.translation.membersCount) {
        this.members++;
      }
    }, 90);
  }

  updateTitle(){
    this.onTitleChange.emit();
  }

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if(scrollY >= 800) {
        this.countMembers();
      }
    });
  }
}
