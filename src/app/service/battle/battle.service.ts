import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable, zip } from 'rxjs';
import { Battle, Competitors, Mode, GroupingPattern, BattleResults } from 'src/app/model/battle';
import { Competition } from 'src/app/model/competition';
import { TeamService } from '../team/team.service';
import { flatMap } from 'rxjs/operators';
import { Id } from 'src/app/model/id';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor(private httpService: HttpService) { }

  getBy(competition: Competition): Observable<Battle[]> {
    return this.httpService.get<Battle[]>(`/competitions/${competition.id}/battles`);
  }

  getNewGroups(competition: Competition, mode: Mode, groupingPattern: GroupingPattern): Observable<Competitors[]> {
    let hash: { [key: string]: string; } = {};
    hash['mode'] = mode.id;
    if (groupingPattern) { hash['groupingPattern'] = groupingPattern.id; }
    const params = this.httpService.createParams(hash);
    return this.httpService.get<Competitors[]>(`/competitions/${competition.id}/battles/new-groups`, params);
  }

  changeResult(competition: Competition, battle: Battle): Observable<Object> {
    const br = new BattleResults();
    br.id = battle.id
    br.results = battle.competitors
    return this.httpService.patch<Object>(`/competitions/${competition.id}/battles/${battle.id}/results`, br);
  }

  add(competition: Competition, battle: Battle): Observable<Id> {
    return this.httpService.post<Id>(`/competitions/${competition.id}/battles`, battle);
  }
}
