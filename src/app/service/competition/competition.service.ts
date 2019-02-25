import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Competition } from 'src/app/model/competition';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private httpService: HttpService) { }

  getAll(): Observable<Competition[]> {
    return this.httpService.get<Competition[]>('/competitions');
  }
  getBy(slug: string): Observable<Competition> {
    return this.getAll().pipe(
      map(c => c.find(a => a.slug == slug))
    );
  }
  add(competition: Competition) {
    return this.httpService.post<string>('/competitions', competition);
  }
}
