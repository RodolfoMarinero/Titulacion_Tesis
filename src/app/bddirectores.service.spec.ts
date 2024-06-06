import { TestBed } from '@angular/core/testing';

import { BDDirectoresService } from './bddirectores.service';

describe('BDDirectoresService', () => {
  let service: BDDirectoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BDDirectoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
