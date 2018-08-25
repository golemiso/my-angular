import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgDragDropModule } from 'ng-drag-drop';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { PlayerComponent } from './player/player.component';
import { PlayerService } from './player/player.service';
import { MaterialModule } from './common/material/material.module';
import { TeamComponent } from './team/team.component';
import { GroupingComponent } from './grouping/grouping.component';
import { GroupingService } from './grouping/grouping.service';
import { BattlesComponent } from './battle/battles.component';
import { ModesComponent } from './battle/modes/modes.component';
import { ResultComponent } from './result/result.component';
import { ResultService } from './result/result.service';
import { PlayersComponent } from './player/players.component';
import { BattleComponent } from './battle/battle.component';
import { BattleService } from './battle/battle.service';
import { RankingComponent } from './player/ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    PlayerComponent,
    TeamComponent,
    GroupingComponent,
    BattlesComponent,
    ModesComponent,
    ResultComponent,
    PlayersComponent,
    BattleComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    NgDragDropModule.forRoot(),
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    PlayerService,
    GroupingService,
    ResultService,
    BattleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
