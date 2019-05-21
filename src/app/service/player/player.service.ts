import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/model/player';
import { HttpService } from '../http.service';
import { tap } from 'rxjs/operators';
import { Id } from 'src/app/model/id';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpService: HttpService) {
    this.getAll();
  }

  getAll(): Observable<Player[]> {
    return this.httpService.get<Player[]>('/players');
  }

  add(player: Player): Observable<Id> {
    return this.httpService.post<Id>('/players', player);
  }
}
