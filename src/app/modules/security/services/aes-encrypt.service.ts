import { Injectable } from '@angular/core';
import { createCipheriv, createDecipheriv } from 'crypto';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AesEncryptService {
  private readonly CBC = 'cbc';
  private readonly ECB = 'ecb';
  private readonly NULL_IV = new Buffer([]);
  private readonly IV = new Buffer(environment.encrypt.session.defaultIV);

  private readonly outputEncoding = 'base64';
  private readonly inputEncoding = 'utf8';

  private cipherMode: string;
  private keySize: number;
  private secretKey: Buffer;
  private iv: Buffer;

  constructor() {
    this.cipherMode = this.CBC;
    this.keySize = 128;
    this.secretKey = new Buffer(environment.encrypt.session.secretKey);
    this.iv = new Buffer(environment.encrypt.session.defaultIV);
  }

  private getAlgorithm(): string {
    return `aes-${this.keySize}-${this.cipherMode}`;
  }

  private checkKey(keySecret: Buffer) {
    if (!keySecret) {
      throw new Error('AES.checkKey error: key is null ');
    }

    if (keySecret.length !== (this.keySize / 8)) {
      throw new Error('AES.checkKey error: key length is not ' + (this.keySize / 8) + ': ' + keySecret.length);
    }
  }

  public setCipherMode(mode: string) {
    if (mode !== this.CBC && mode !== this.ECB) {
      throw new Error('AES.setCipherMode error: ' + mode);
    }

    this.cipherMode = mode;
  }

  public setKeySize(size: number) {
    if (size !== 128 && size !== 256) {
      throw Error('AES.setKeySize error: ' + size);
    }

    this.keySize = size;
  }

  public setKeySecret(secretKey: string) {
    const buffer = new Buffer(secretKey);
    this.checkKey(buffer);
    this.secretKey = buffer;
  }

  public setDynamicIv(date: number) {
    const module = 10000000;
    const suffix = ((date % module) * ((+environment.encrypt.session.aggregator) % module)) % module;
    const dynamicIv = environment.encrypt.session.ivPrefix + suffix;

    this.iv = new Buffer(dynamicIv);
  }

  private getIv() {
    if (this.cipherMode === this.ECB) {
      return this.NULL_IV;
    }

    return this.iv;
  }

  /**
   * encrypt a text
   *
   * @param text text to encrypt
   * @param keySecret the length must be 16 or 32
   * @param newIv default is [0,0...0]
   */
  public encrypt(text: string) {
    const iv = this.getIv();

    const cipher = createCipheriv(this.getAlgorithm(), this.secretKey, iv);
    cipher.setAutoPadding(true);

    const buff = new Buffer(text, this.inputEncoding);
    const out = Buffer.concat([cipher.update(buff), cipher.final()]);

    const re = new Buffer(out).toString(this.outputEncoding);

    return re;
  }

  /**
   * decrypt a text
   *
   * @param text text to decrypt
   * @param keySecret the length must be 16 or 32
   * @param newIv default is [0,0...0]
   */
  public decrypt(text: string) {
    const iv = this.getIv();

    const buff = new Buffer(text, this.outputEncoding);
    const decipher = createDecipheriv(this.getAlgorithm(), this.secretKey, iv);
    decipher.setAutoPadding(true);

    const decryptedBytes = Buffer.concat([decipher.update(buff), decipher.final()]);

    return new Buffer(decryptedBytes).toString(this.inputEncoding);
  }
}
