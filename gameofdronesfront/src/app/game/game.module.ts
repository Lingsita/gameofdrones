import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { StartComponent } from './start/start.component';
import { ScoreComponent } from './board/score/score.component';
import { ChoiceComponent } from './board/choice/choice.component';
import { WinnerComponent } from './winner/winner.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { GameRoutingModule } from './game-routing.module';
import { RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { rootReducer, RootState, INITIAL_STATE } from './reducers/game.reducer';


@NgModule({
  declarations: [
    StartComponent,
    ScoreComponent,
    ChoiceComponent,
    WinnerComponent,
    BoardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    GameRoutingModule,
    NgReduxModule,
    FormsModule
  ],
  exports: [
  ]
})
export class GameModule {
  constructor(ngReduxGame: NgRedux<RootState>) {
    ngReduxGame.configureStore(rootReducer, INITIAL_STATE);
  }
}
