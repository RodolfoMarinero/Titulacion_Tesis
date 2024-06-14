import { TestBed } from '@angular/core/testing';

import { BDChatService } from './bd-chat.service';

describe('BDChatService', () => {
  let service: BDChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BDChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
