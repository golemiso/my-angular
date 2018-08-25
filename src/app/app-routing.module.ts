import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayersComponent } from './player/players.component';
import { GroupingComponent } from './grouping/grouping.component';
import { ResultComponent } from './result/result.component';
import { RankingComponent } from './player/ranking/ranking.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'players', component: PlayersComponent },
  { path: 'groupings', component: GroupingComponent },
  { path: 'results', component: ResultComponent },
  { path: 'rankings', component: RankingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
