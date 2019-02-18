import { TestBed } from '@angular/core/testing';

import { GroupingService } from './grouping.service';

describe('GroupingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupingService = TestBed.get(GroupingService);
    expect(service).toBeTruthy();
  });
});
