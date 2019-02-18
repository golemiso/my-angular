import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Battle } from '../battle/battle';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ResultService {

  private url = `${environment.apiUrl}/battles`;

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getBattles(): Observable<Battle[]> {
    return this.http.get<Battle[]>(this.url, httpOptions).pipe(
      tap(_ => this.log(`fetched battles`)),
      catchError(this.handleError('getBattles', []))
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
