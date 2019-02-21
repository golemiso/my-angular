import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message/message.service';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient, private messageService: MessageService) { }

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(environment.apiUrl + path, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  post<T>(path: string, body: Object): Observable<T> {
    return this.http.post<T>(environment.apiUrl + path, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  put(path: string, body: Object): Observable<Object> {
    return this.http.put(environment.apiUrl + path, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  patch<T>(path: string, body: Object): Observable<Object> {
    return this.http.patch(environment.apiUrl + path, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(path: string): Observable<Object> {
    return this.http.delete(environment.apiUrl + path, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private log(message: string) {
    this.messageService.add(message);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
