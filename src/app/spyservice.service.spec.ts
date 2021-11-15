import { TestBed } from '@angular/core/testing';

import { SpyserviceService } from './spyservice.service';

describe('SpyserviceService', () => {
  let service: SpyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
