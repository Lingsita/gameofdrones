import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';  
import { DataService } from '../../data.service';
import { User } from '../../users';
import {NgRedux, select} from '@angular-redux/store';
import { SET_PLAYERS, REMOVE_PLAYERS, RESTART } from '../actions';
import {Router} from "@angular/router";
import { RootState } from '../reducers/game.reducer';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService, private ngRedux: NgRedux<RootState>) { 
    
  }

  ngOnInit() {
    this.ngRedux.dispatch({
      type: RESTART             
    }); 
  }

  register(regForm: NgForm){
      let users = [
        { username: regForm.value.player1 },
        { username: regForm.value.player2 }
      ]
      this.dataService.registerUsers(users).subscribe(
        data => {
          this.ngRedux.dispatch({
            type: SET_PLAYERS,
            player_1: data[0],
            player_2: data[1]    
          });        
          this.router.navigate(['/game']);
        }
      );
  }
}
