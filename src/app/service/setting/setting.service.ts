import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { Mode } from 'src/app/model/battle';
import { Competition } from 'src/app/model/competition';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private httpService: HttpService) { }

  getModes(competition: Competition): Observable<Mode[]> {
    return this.httpService.get<Mode[]>(`/competitions/${competition.id}/settings/modes`);
  }
}
