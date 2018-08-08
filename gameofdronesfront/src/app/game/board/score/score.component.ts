import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { RootState } from '../../reducers/game.reducer';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  @select() matches;

  constructor(private ngRedux: NgRedux<RootState>) { }

  ngOnInit() {
    
  }
  
  
}
