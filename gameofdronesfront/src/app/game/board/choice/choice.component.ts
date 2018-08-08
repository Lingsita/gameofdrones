import { Component, OnInit, OnDestroy, OnChanges, Output, EventEmitter } from '@angular/core';
import { User } from '../../../users';
import {NgRedux, select} from '@angular-redux/store';
import { RootState } from '../../reducers/game.reducer';
import { SAVE_MOVE, RESTART } from '../../actions';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit, OnDestroy {
  public round_number: number = 1;
  public player: User;
  public current_player: String = "player_1";
  public choices;
  @select() player_1;
  @select() player_2;
  @select() matches;
  @select() final_winner;
  
  constructor(private ngRedux: NgRedux<RootState>, private router: Router, private dataService: DataService) { 
    
  }

  ngOnInit() {
    this.player_1.subscribe(
      data => 
      { 
        this.player = data;
        this.current_player = 'player_1'
      }
    );
  }

  chooseOption(choice: String){
    if(this.current_player == "player_1"){
      this.choices = {
        choice_1: choice
      }
      this.changePlayer(this.player_2, "2") 
    }else{      
      this.choices.choice_2 = choice
      this.dataService.getResult(this.choices).subscribe(
        data => {  
          if(data.winner!="tie"){     
            this.ngRedux.dispatch({
              type: SAVE_MOVE,             
              winner: data.winner,
              round: this.round_number             
            });
          }else{
            alert("There was a tie, you both chose "+data.choice);
          }
          this.round_number+=1;  
        }        
      );       
      this.checkWinner();  
      this.changePlayer(this.player_1, "1");      
    } 
    
  }

  changePlayer(player, number){
    player.subscribe(
      data => 
      { 
        this.player = data;
        this.current_player = 'player_'+number;
      }
    );    
  }

  checkWinner() {
    this.final_winner.subscribe(
      winner => {
        if (winner) {
          this.router.navigate(['/winner']);
        }
      }
    );
  }

  saveGame(){
    this.final_winner.subscribe(
      winner => {
        if (winner) {
          this.matches.subscribe(
            matches => {
              let won = matches.filter(match => match.winner.id === winner.id).length
              let lost = matches.filter(match => match.winner.id !== winner.id).length
              let result = {
                winner_id: winner.id,
                won: won,
                lost: lost
              }
              this.dataService.saveGame(result).subscribe(
                data => {
                  console.log(data)
                }
              );
            }
          )
        }
      }
    );
  }

  ngOnDestroy() {
    this.saveGame();
    this.ngRedux.dispatch({
      type: RESTART             
    });  
    this.player_1.unsubscribe();
    this.player_2.unsubscribe();
    this.matches.unsubscribe();
    this.final_winner.unsubscribe(); 
  }
}