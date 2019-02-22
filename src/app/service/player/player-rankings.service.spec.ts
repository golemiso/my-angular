import { TestBed } from '@angular/core/testing';

import { PlayerRankingsService } from './player-rankings.service';

describe('PlayerRankingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerRankingsService = TestBed.get(PlayerRankingsService);
    expect(service).toBeTruthy();
  });
});
