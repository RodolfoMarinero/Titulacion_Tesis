import { TestBed } from '@angular/core/testing';

import { BdTesistasService } from './bd-tesistas.service';

describe('BdTesistasService', () => {
  let service: BdTesistasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdTesistasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
