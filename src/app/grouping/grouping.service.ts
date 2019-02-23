import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Grouping } from './grouping';
import { MessageService } from '../message/message.service';
import { PlayerRecord } from '../player/player';
import { Team } from '../model/team';
import { Battle } from '../model/battle';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GroupingService {

  private rankingUrl = `${environment.apiUrl}/rankings?rankBy=user`;
  private battleUrl = `${environment.apiUrl}/battles`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getGrouping(): Observable<Grouping> {
    return this.http.get<PlayerRecord[]>(this.rankingUrl, httpOptions).pipe(
      map(playerRecords => this.makeGroupsFromPlayerRecords(playerRecords)),
      tap(_ => this.log(`fetched grouping`)),
      catchError(this.handleError('getUserRankings', GROUPING))
    );
  }

  private makeGroupsFromPlayerRecords(playerRecords: PlayerRecord[], into: number = 4, playersPerTeam: number = 4): Grouping {
    const count = playerRecords.length;
    const grouping = new Grouping;
    grouping.teams = [];

    for (let i = 0; i < into; i++) {
      const team = new Team;
      team.players = [];
      team.name = 'チーム' + (i + 1);
      grouping.teams.push(team);
    }

    for (let i = 0; i < into * playersPerTeam && i < count; i++) {
      const q = Math.floor(i / into);
      const r = i % into;

      switch (q % 2) {
        case 0: // even
          grouping.teams[r].players.push(playerRecords[i].player);
          break;
        case 1: // odd
          grouping.teams[into - 1 - r].players.push(playerRecords[i].player);
          break;
      }
    }

    return grouping;
  }

  addBattle(battle: Battle): Observable<Battle> {
    return this.http.post<Battle>(this.battleUrl, battle, httpOptions).pipe(
      tap((b: Battle) => this.log(`added battle w/ id=${b.id}`)),
      catchError(this.handleError<Battle>('addBattle'))
    );
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
  private handleError<T>(operation = 'operation', result?: T) {
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
      slug: '',
      name: 'team1',
      players: [
        {
          id: '0',
          slug: 'karate_bba',
          name: 'からてババアきゅぴ'
        },
        {
          id: '1',
          slug: 'karate_bba',
          name: 'ごとう　れいか'
        },
        {
          id: '2',
          slug: 'karate_bba',
          name: 'かに'
        },
        {
          id: '3',
          slug: 'karate_bba',
          name: 'はんざわ　せれな'
        }
      ]
    },
    {
      id: '1',
      slug: '',
      name: 'team2',
      players: [
        {
          id: '4',
          slug: 'karate_bba',
          name: 'Name 4'
        },
        {
          id: '5',
          slug: 'karate_bba',
          name: 'Name 5'
        },
        {
          id: '6',
          slug: 'karate_bba',
          name: 'Name 6'
        },
        {
          id: '7',
          slug: 'karate_bba',
          name: 'Name 7'
        },
        {
          id: '8',
          slug: 'karate_bba',
          name: 'Name 8'
        }
      ]
    },
    {
      id: '2',
      slug: '',
      name: 'team3',
      players: [
        {
          id: '0',
          slug: 'karate_bba',
          name: 'Name 0'
        }
      ]
    }
  ]
};
