import { TestBed } from '@angular/core/testing';

import { BDRevisoresService } from './bd-revisores.service';

describe('BDRevisoresService', () => {
  let service: BDRevisoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BDRevisoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
