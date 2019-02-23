import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable, zip } from 'rxjs';
import { Battle, Competitors } from 'src/app/model/battle';
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

  changeResult(battle: Battle): Observable<Object> {
    return this.httpService.patch<Object>(`/battles/${battle.id}/result`, battle.result);
  }

  add(battle: Battle): Observable<string> {

    return zip(
      this.teamService.add(battle.competitors.left),
      this.teamService.add(battle.competitors.right),
      (leftId, rightId) => {
        battle.competitors.left.id = leftId;
        battle.competitors.right.id = rightId;
        return battle;
      }).pipe(
        flatMap(b => this.httpService.post<string>(`/battles`, new BattleRequest(b)))
      );
  }
}

class BattleRequest {
  constructor(battle: Battle) {
    this.competition = battle.competition.id;
    this.mode = battle.mode;
    this.competitors = new CompetitorsRequest(battle.competitors);
  }
  competition: string;
  mode: string;
  competitors: CompetitorsRequest;
}

class CompetitorsRequest {
  constructor(competitors: Competitors) {
    this.left = competitors.left.id;
    this.right = competitors.right.id;
  }
  left: string;
  right: string;
}
