import { getRandomValues, createHmac, BinaryToTextEncoding } from 'crypto';

export default class HMACGenerator {
  private static readonly ALGORISM = 'SHA3-256';
  private static readonly MIN_BIT_NUMBER = 256;
  private key: Uint8Array;

  public constructor() {
    this.key = this.generateKey();
  }

  public getHMAC(move: string): string {
    const encoding: BinaryToTextEncoding = 'hex';
    return createHmac(HMACGenerator.ALGORISM, this.key)
      .update(move)
      .digest(encoding);
  }

  public getKeyString(): string {
    const radix = 16;
    return this.key.reduce(
      (acc, value): string => acc + value.toString(radix),
      ''
    );
  }

  public updateKey() {
    this.key = this.generateKey();
  }

  private generateKey(): Uint8Array {
    const bitInByteAmount = 8;
    const array = new Uint8Array(
      new ArrayBuffer(HMACGenerator.MIN_BIT_NUMBER / bitInByteAmount)
    );
    const key = getRandomValues(array);

    return key;
  }
}
