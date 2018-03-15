import { TestBed, inject } from '@angular/core/testing';

import { GroupingService } from './grouping.service';

describe('GroupingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupingService]
    });
  });

  it('should be created', inject([GroupingService], (service: GroupingService) => {
    expect(service).toBeTruthy();
  }));
});
