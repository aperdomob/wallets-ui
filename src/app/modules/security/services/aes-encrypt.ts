import { createCipheriv, createDecipheriv } from 'crypto';

export class AesEncrypt {
  private readonly CBC = 'cbc';
  private readonly ECB = 'ecb';
  private readonly NULL_IV = new Buffer([]);
  private readonly IV = new Buffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  private readonly outputEncoding = 'base64';
  private readonly inputEncoding = 'utf8';

  private algorithm: string;
  private cipherMode: string;
  private keySize: number;

  constructor() {
    this.cipherMode = this.CBC;
    this.keySize = 128;
    this.setAlgorithm();

  }

  private setAlgorithm() {
    this.algorithm = 'aes-' + this.keySize + '-' + this.cipherMode;
  }

  public setCipherMode(mode: string) {
    if (mode !== this.CBC && mode !== this.ECB) {
      throw new Error('AES.setCipherMode error: ' + mode);
    }

    this.cipherMode = mode;
    this.setAlgorithm();
  }

  public setKeySize(size: number) {
    if (size !== 128 && size !== 256) {
      throw Error('AES.setKeySize error: ' + size);
    }

    this.keySize = size;
    this.setAlgorithm();
  }

  private checkKey(keySecret: Buffer) {
    if (!keySecret) {
      throw new Error('AES.checkKey error: key is null ');
    }

    if (keySecret.length !== (this.keySize / 8)) {
      throw new Error('AES.checkKey error: key length is not ' + (this.keySize / 8) + ': ' + keySecret.length);
    }
  }

  /**
   * encrypt a text
   *
   * @param text text to encrypt
   * @param keySecret the length must be 16 or 32
   * @param newIv default is [0,0...0]
   */
  public encrypt(text: string, keySecret: Buffer, newIv: Buffer = this.IV) {
    this.checkKey(keySecret);
    let iv = newIv;

    if (this.cipherMode === this.ECB) {
      iv = this.NULL_IV;
    }

    const cipher = createCipheriv(this.algorithm, keySecret, iv);
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
  public decrypt(text: string, keySecret: Buffer, newIv: Buffer = this.IV) {
    this.checkKey(keySecret);
    let iv = newIv || this.IV;

    if (this.cipherMode === this.ECB) {
      iv = this.NULL_IV;
    }

    const buff = new Buffer(text, this.outputEncoding);
    const decipher = createDecipheriv(this.algorithm, keySecret, iv);
    decipher.setAutoPadding(true);

    const decryptedBytes = Buffer.concat([decipher.update(buff), decipher.final()]);

    return new Buffer(decryptedBytes).toString(this.inputEncoding);
  }
}


const testTxt = 'this is my text to encrypt';
const myKey = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6]);
const aes = new AesEncrypt();

const enc = aes.encrypt(testTxt, myKey);
console.log('enc:%s', enc);

if (enc !== 'UJvPb5Lnx4/ul82JSZcHEnLnxA0bS+oBswPyHjdWoSo=') {
  throw new Error('Encrypt changed');
}

const dec = aes.decrypt(enc, myKey);
console.log('dec:%s', dec);
