import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Team } from 'src/app/model/team';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpService: HttpService) { }

  add(team: Team): Observable<string> {
    return this.httpService.post<string>(`/teams`, new TeamRequest(team));
  }
}

class TeamRequest {
  constructor(team: Team) {
    this.slug = team.slug;
    this.name = team.name;
    this.players = team.players.map(p => p.id);
  }
  slug: string;
  name: string;
  players: string[];
}
