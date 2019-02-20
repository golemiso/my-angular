import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './player/players/players.component';
import { GroupingComponent } from './grouping/grouping.component';
import { ResultComponent } from './result/result.component';
import { RankingsComponent } from './player/rankings/rankings.component';
import { CompetitionComponent } from './competition/competition.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBattlesComponent } from './competition/create-battles/create-battles.component';
import { BattleResultsComponent } from './competition/battle-results/battle-results.component';
import { PlayerRankingsComponent } from './competition/player-rankings/player-rankings.component';
import { CompetitionDashboardComponent } from './competition/competition-dashboard/competition-dashboard.component';
import { SettingComponent } from './setting/setting.component';

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
        children: [
          { path: '', component: PlayersComponent },
          { path: 'add', component: PlayersComponent, outlet: 'popup' },
          { path: 'edit/:slug', component: PlayersComponent, outlet: 'popup' }
        ]
      },
      {
        path: 'competitions',
        children: [
          { path: '', component: PlayersComponent },
          { path: 'add', component: PlayersComponent, outlet: 'popup' },
          { path: 'edit/:slug', component: PlayersComponent, outlet: 'popup' }
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
