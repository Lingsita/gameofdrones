import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { RootState } from '../reducers/game.reducer';
import { RESTART } from '../actions';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {
  @select() final_winner;

  constructor(private ngRedux: NgRedux<RootState>) { }

  ngOnInit() {

  }

}
