import { TestBed } from '@angular/core/testing';

import { WalletComponentService } from './wallet-component.service';

describe('WalletComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WalletComponentService = TestBed.get(WalletComponentService);
    expect(service).toBeTruthy();
  });
});
