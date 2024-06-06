import { TestBed } from '@angular/core/testing';

import { BDJefaturaService } from './bdjefatura.service';

describe('BDJefaturaService', () => {
  let service: BDJefaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BDJefaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
