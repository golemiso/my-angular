import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { Mode, GroupingPattern, Result } from 'src/app/model/battle';
import { Competition } from 'src/app/model/competition';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private httpService: HttpService) { }

  getModes(competition: Competition): Observable<Mode[]> {
    return this.httpService.get<Mode[]>(`/competitions/${competition.id}/settings/modes`);
  }

  getGroupingPatterns(competition: Competition): Observable<GroupingPattern[]> {
    return this.httpService.get<GroupingPattern[]>(`/competitions/${competition.id}/settings/grouping-patterns`);
  }

  getResults(competition: Competition): Observable<Result[]> {
    return this.httpService.get<Result[]>(`/competitions/${competition.id}/settings/results`);
  }
}
