import { Component, OnInit } from '@angular/core';
import { DataManagementService } from '../../services/data-management.service';

@Component({
  selector: 'app-aim',
  templateUrl: './aim.component.html',
  styleUrls: ['./aim.component.scss']
})
export class AimComponent implements OnInit {

  people: any;

  constructor(private dataManagementService: DataManagementService) {
    this.people = this.dataManagementService.people;
  }

  ngOnInit(): void {
  }

}
