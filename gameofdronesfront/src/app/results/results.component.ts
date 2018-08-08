import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../users';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public users: User[];
  constructor(private router: Router, private dataService: DataService) { 

  }

  ngOnInit() {
    this.dataService.getUsersResults().subscribe(
      data => this.users = data
    );
  }

}
