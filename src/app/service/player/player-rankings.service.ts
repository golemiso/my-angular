import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { PlayerRanking } from 'src/app/model/player';
import { Competition } from 'src/app/model/competition';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerRankingsService {

  constructor(private httpService: HttpService) { }

  getBy(competition: Competition): Observable<PlayerRanking[]> {
    return this.httpService.get<PlayerRanking[]>(`/competitions/${competition.id}/rankings`);
  }
}
