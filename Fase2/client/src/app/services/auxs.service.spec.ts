import { TestBed } from '@angular/core/testing';

import { AuxsService } from './auxs.service';

describe('AuxsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuxsService = TestBed.get(AuxsService);
    expect(service).toBeTruthy();
  });
});
