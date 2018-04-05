import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Battle } from './battle';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BattleService {

  private url = 'http://api.ama.golemiso.com/battles';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getBattles(): Observable<Battle[]> {
    return this.http.get<Battle[]>(this.url, httpOptions).pipe(
      tap(_ => this.log(`fetched battles`)),
      catchError(this.handleError('getBattles', []))
    );
  }

  updateBattle(battle: Battle): Observable<Battle> {
    return this.http.put<Battle>(`${this.url}/${battle.id}`,battle, httpOptions).pipe(
      tap((b: Battle) => this.log(`updated battle w/ id=${b.id}`)),
      catchError(this.handleError<Battle>('updateBattle'))
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
