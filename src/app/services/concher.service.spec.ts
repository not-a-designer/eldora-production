import { TestBed } from '@angular/core/testing';

import { ConcherService } from './concher.service';

describe('ConcherService', () => {
  let service: ConcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
