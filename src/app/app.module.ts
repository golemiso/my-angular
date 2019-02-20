import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgDragDropModule } from 'ng-drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { GroupingComponent } from './grouping/grouping.component';
import { PlayerComponent } from './player/player.component';
import { ResultComponent } from './result/result.component';
import { TeamComponent } from './team/team.component';
import { MessageComponent } from './message/message.component';
import { BattlesComponent } from './battle/battles/battles.component';
import { ModesComponent } from './battle/modes/modes.component';
import { PlayersComponent } from './player/players/players.component';
import { RankingsComponent } from './player/rankings/rankings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './ui/material/material.module';
import { CompetitionComponent } from './competition/competition.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    GroupingComponent,
    PlayerComponent,
    ResultComponent,
    TeamComponent,
    MessageComponent,
    BattlesComponent,
    ModesComponent,
    PlayersComponent,
    RankingsComponent,
    CompetitionComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgDragDropModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
