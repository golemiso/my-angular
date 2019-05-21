import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable, zip } from 'rxjs';
import { Battle, Competitors, Mode, RankBy } from 'src/app/model/battle';
import { Competition } from 'src/app/model/competition';
import { TeamService } from '../team/team.service';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor(
    private httpService: HttpService,
    private teamService: TeamService) { }

  getBy(competition: Competition): Observable<Battle[]> {
    return this.httpService.get<Battle[]>(`/competitions/${competition.id}/battle-histories`);
  }

  getNewGroups(competition: Competition, mode: Mode, rankBy: RankBy): Observable<Competitors[]> {
    const params = this.httpService.createParams({
      mode: mode.id,
      rankBy: rankBy.value
    });
    return this.httpService.get<Competitors[]>(`/competitions/${competition.id}/battles/new-groups`, params);
  }

  changeResult(battle: Battle): Observable<Object> {
    return this.httpService.patch<Object>(`/battles/${battle.id}/result`, battle.result);
  }

  add(battle: Battle): Observable<string> {
    return this.httpService.post<string>(`/battles`, battle);
  }
}
