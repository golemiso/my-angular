import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Grouping } from './grouping';
import { MessageService } from '../message.service';
import { Player, PlayerRecord } from '../player/player';
import { Team } from '../team/team';

@Injectable()
export class GroupingService {

  private url = 'http://localhost:9000/rankings?rankBy=user';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getGrouping(): Observable<Grouping> {
    return this.http.get<PlayerRecord[]>(this.url).pipe(
      map(playerRecords => this.makeGroupsFromPlayerRecords(playerRecords)),
      tap(_ => this.log(`fetched grouping`)),
      catchError(this.handleError('getUserRankings', GROUPING))
    );
  }

  private makeGroupsFromPlayerRecords(playerRecords: PlayerRecord[], makeInto: number = 4, playersPerTeam: number = 4): Grouping {
    const count = playerRecords.length;
    const grouping = new Grouping;
    grouping.teams = [];

    for (let i = 0; i < makeInto; i++) {
      const team = new Team;
      team.players = [];
      grouping.teams.push(team);
    }

    for (let i = 0; i < makeInto * playersPerTeam && i < count; i++) {
      const q = Math.floor((i + 1) / makeInto);
      const r = (i + 1) % makeInto;

      switch (q % 2) {
        case 0: // even
          grouping.teams[r].players.push(playerRecords[i].player);
          break;
        case 1: // odd
          grouping.teams[makeInto - 1 - r].players.push(playerRecords[i].player);
          break;
      }
    }

    return grouping;
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('GroupingService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

export const GROUPING: Grouping = {
  id: '0',
  teams: [
    {
      id: '0',
      players: [
        {
          id: '0',
          name: 'からてババアきゅぴ'
        },
        {
          id: '1',
          name: 'ごとう　れいか'
        },
        {
          id: '2',
          name: 'かに'
        },
        {
          id: '3',
          name: 'はんざわ　せれな'
        }
      ]
    },
    {
      id: '1',
      players: [
        {
          id: '4',
          name: 'Name 4'
        },
        {
          id: '5',
          name: 'Name 5'
        },
        {
          id: '6',
          name: 'Name 6'
        },
        {
          id: '7',
          name: 'Name 7'
        },
        {
          id: '8',
          name: 'Name 8'
        }
      ]
    },
    {
      id: '2',
      players: [
        {
          id: '0',
          name: 'Name 0'
        }
      ]
    }
  ]
};
