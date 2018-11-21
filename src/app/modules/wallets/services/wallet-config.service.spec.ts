import { TestBed } from '@angular/core/testing';

import { WalletConfigService } from './wallet-config.service';

describe('WalletConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WalletConfigService = TestBed.get(WalletConfigService);
    expect(service).toBeTruthy();
  });
});
