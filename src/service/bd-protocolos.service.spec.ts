import { TestBed } from '@angular/core/testing';

import { BdProtocolosService } from './bd-protocolos.service';

describe('BdProtocolosService', () => {
  let service: BdProtocolosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdProtocolosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
