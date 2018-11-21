import { TestBed } from '@angular/core/testing';

import { AesEncryptService } from './aes-encrypt.service';

describe('AesEncryptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AesEncryptService = TestBed.get(AesEncryptService);
    expect(service).toBeTruthy();
  });
});
