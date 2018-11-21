import { TestBed } from '@angular/core/testing';

import { WalletSessionService } from './wallet-session.service';

describe('WalletSessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WalletSessionService = TestBed.get(WalletSessionService);
    expect(service).toBeTruthy();
  });
});
