import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Player } from './player';

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayers(): Observable<Player[]> {
    return of(PLAYERS);
  }
}

export const PLAYERS: Player[] = [
  { id: '11', name: 'Mr. Nice' },
  { id: '12', name: 'Narco' },
  { id: '13', name: 'Bombasto' },
  { id: '14', name: 'Celeritas' },
  { id: '15', name: 'Magneta' },
  { id: '16', name: 'RubberMan' },
  { id: '17', name: 'Dynama' },
  { id: '18', name: 'Dr IQ' },
  { id: '19', name: 'Magma' },
  { id: '20', name: 'Tornado' }
];
