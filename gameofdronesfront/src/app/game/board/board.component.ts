import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { RootState } from '../reducers/game.reducer';
import { DataService } from '../../data.service';
import { SET_PLAYERS } from '../actions';
import { User } from '../../users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
 
  constructor() {

  }

  ngOnInit() {
  }
}
