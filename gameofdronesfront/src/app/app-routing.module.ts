import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { routes } from './routes'


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
