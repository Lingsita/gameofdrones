import { Routes } from "@angular/router";
import { StartComponent } from "./start/start.component";
import { BoardComponent } from "./board/board.component";
import { WinnerComponent } from "./winner/winner.component";

export const routes: Routes = [
    {
      path: '',
      component: StartComponent     
    },
    {
      path: 'game',
      component: BoardComponent     
    },
    {
      path: 'winner',
      component: WinnerComponent     
    } 

  ];