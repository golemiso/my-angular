import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Grouping } from './grouping';

@Injectable()
export class GroupingService {

  constructor() { }

  getGrouping(): Observable<Grouping> {
    return of(GROUPING);
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
