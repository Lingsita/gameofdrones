import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GameComponent } from './game/game.component';
import {FormsModule} from '@angular/forms'  
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { GameRoutingModule } from './game/game-routing.module';
import { GameModule } from './game/game.module';
import { RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GameComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    GameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
