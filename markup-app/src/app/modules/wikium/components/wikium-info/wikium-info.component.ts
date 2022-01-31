import { Component, OnInit } from '@angular/core';
import { DataManagementService } from '../../services/data-management.service';

@Component({
  selector: 'app-wikium-info',
  templateUrl: './wikium-info.component.html',
  styleUrls: ['./wikium-info.component.scss']
})
export class WikiumInfoComponent implements OnInit {

  translationObject: any;
  title: string = 'Wikium';
  titleCount: number = 1;

  constructor(private dataManagementService: DataManagementService) {
    this.translationObject = this.dataManagementService.translationObject;
  }

  ngOnInit(): void {
  }

  changeTitle() {
    if(this.titleCount > 5) {
      return;
    }
    let newTitle = this.title.split('');
    newTitle.splice(this.titleCount, 1, this.title[this.titleCount].toUpperCase());

    this.title = newTitle.join('');
    this.titleCount++;
  }

}
