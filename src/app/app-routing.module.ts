import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupingComponent } from './grouping/grouping.component';
import { ResultComponent } from './result/result.component';
import { RankingsComponent } from './player/rankings/rankings.component';
import { CompetitionComponent } from './page/competition/competition.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { CreateBattlesComponent } from './page/competition/create-battles/create-battles.component';
import { BattleResultsComponent } from './page/competition/battle-results/battle-results.component';
import { PlayerRankingsComponent } from './page/competition/player-rankings/player-rankings.component';
import { CompetitionDashboardComponent } from './page/competition/competition-dashboard/competition-dashboard.component';
import { SettingComponent } from './page/setting/setting.component';
import { CompetitionsComponent, CompetitionDialogEntryComponent } from './page/setting/competitions/competitions.component';
import { PlayersComponent } from './page/setting/players/players.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'competition/:slug',
    component: CompetitionComponent,
    children: [
      { path: '', component: CompetitionDashboardComponent },
      { path: 'create_battles', component: CreateBattlesComponent },
      { path: 'battle_results', component: BattleResultsComponent },
      { path: 'player_rankings', component: PlayerRankingsComponent }
    ]
  },
  {
    path: 'setting',
    component: SettingComponent,
    children: [
      { path: '', component: RankingsComponent },
      {
        path: 'players',
        component: PlayersComponent,
        children: [
          { path: 'add', component: PlayersComponent },
          { path: 'edit/:slug', component: PlayersComponent }
        ]
      },
      {
        path: 'competitions',
        component: CompetitionsComponent,
        children: [
          { path: 'add', component: CompetitionDialogEntryComponent },
          { path: 'edit/:slug', component: CompetitionDialogEntryComponent }
        ]
      }
    ]
  },
  { path: 'competitions/:slug', component: CompetitionComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'groupings', component: GroupingComponent },
  { path: 'results', component: ResultComponent },
  { path: 'rankings', component: RankingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
