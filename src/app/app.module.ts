import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgDragDropModule } from 'ng-drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleComponent } from './component/battle/battle.component';
import { GroupingComponent } from './grouping/grouping.component';
import { PlayerComponent } from './player/player.component';
import { ResultComponent } from './result/result.component';
import { TeamComponent } from './team/team.component';
import { MessageComponent } from './message/message.component';
import { BattlesComponent } from './component/battles/battles.component';
import { ModesComponent } from './component/modes/modes.component';
import { PlayersComponent } from './page/setting/players/players.component';
import { RankingsComponent } from './player/rankings/rankings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './ui/material/material.module';
import { CompetitionComponent } from './page/competition/competition.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PlayerRankingsComponent } from './page/competition/player-rankings/player-rankings.component';
import { CreateBattlesComponent } from './page/competition/create-battles/create-battles.component';
import { BattleResultsComponent } from './page/competition/battle-results/battle-results.component';
import { CompetitionDashboardComponent } from './page/competition/competition-dashboard/competition-dashboard.component';
import { SettingComponent } from './page/setting/setting.component';
import { CompetitionsComponent, CompetitionDialogEntryComponent, CompetitionDialog } from './page/setting/competitions/competitions.component';
import { RouterTabModule } from './module/router-tab/router-tab.module';

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
    DashboardComponent,
    PlayerRankingsComponent,
    CreateBattlesComponent,
    BattleResultsComponent,
    CompetitionDashboardComponent,
    SettingComponent,
    CompetitionsComponent,
    CompetitionDialogEntryComponent,
    CompetitionDialog
  ],
  entryComponents: [
    CompetitionDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgDragDropModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterTabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
