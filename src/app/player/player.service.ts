import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player, PlayerRecord } from './player';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from '../message/message.service';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private url = `${environment.apiUrl}/players`;
  private playerRankingUrl = `${environment.apiUrl}/rankings?rankBy=total`;

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.url, httpOptions).pipe(
      tap(() => this.log(`fetched players`)),
      catchError(this.handleError('getPlayers', []))
    );
  }

  getPlayerRankings(): Observable<PlayerRecord[]> {
    return this.http.get<PlayerRecord[]>(this.playerRankingUrl, httpOptions).pipe(
      tap(_ => this.log(`fetched player rankings`)),
      catchError(this.handleError('getPlayerRankings', []))
    );
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.url, player, httpOptions).pipe(
      tap((p: Player) => this.log(`added player w/ id=${p.id}`)),
      catchError(this.handleError<Player>('addPlayer'))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ResultService: ' + message);
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
