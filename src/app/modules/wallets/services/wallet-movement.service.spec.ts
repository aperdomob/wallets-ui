import { TestBed } from '@angular/core/testing';

import { WalletMovementService } from './wallet-movement.service';

describe('WalletMovementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WalletMovementService = TestBed.get(WalletMovementService);
    expect(service).toBeTruthy();
  });
});
