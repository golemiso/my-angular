import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/model/player';
import { HttpService } from '../http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players: Observable<Player[]>;

  constructor(private httpService: HttpService) {
    this.getAll();
  }

  getAll(): Observable<Player[]> {
    this.players = this.httpService.get<Player[]>('/players');
    return this.players;
  }
  getBy(slug: string): Observable<Player> {
    return this.players.pipe(
      map(c => c.find(a => a.slug == slug))
    );
  }
  add(player: Player) {
    return this.httpService.post<string>('/players', player);
  }
}
