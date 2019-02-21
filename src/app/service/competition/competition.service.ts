import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Competition } from 'src/app/model/competition';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  competitions: Observable<Competition[]>;

  constructor(private httpService: HttpService) {
    this.getAll();
  }

  getAll(): Observable<Competition[]> {
    this.competitions = this.httpService.get<Competition[]>('/competitions');
    return this.competitions;
  }
  getBy(slug: string): Observable<Competition> {
    return this.competitions.pipe(
      map(c => c.find(a => a.slug == slug))
    );
  }
  add(competition: Competition) {
    return this.httpService.post<string>('/competitions', competition);
  }
}
