import { TestBed } from '@angular/core/testing';

import { BdTareasService } from './bd-tareas.service';

describe('BdTareasService', () => {
  let service: BdTareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdTareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
