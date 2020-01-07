import { TestBed } from '@angular/core/testing';

import { TourDateService } from './tour-date.service';

describe('TourDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TourDateService = TestBed.get(TourDateService);
    expect(service).toBeTruthy();
  });
});
