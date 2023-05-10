import { BaseHeader } from "./base-header.class";

export type DigestType = {
  algorithm: string;
  value: string;
};

export class Digest extends BaseHeader {
  protected _digest?: string;

  constructor(...digestRes: DigestType[]) {
    super();
    this._digest = digestRes
      .map((_digest) => `${_digest.algorithm}=${_digest.value}`)
      .join(",");
  }

  getHeadersObject(): Record<string, string> {
    return {
      Digest: this.build(),
    };
  }

  build(): string {
    if (this._digest) return this._digest;
    return "null";
  }

  setContent(...newDigestRes: DigestType[]) {
    this._digest = newDigestRes
      .map((_digest) => `${_digest.algorithm}=${_digest.value}`)
      .join(",");
    return this;
  }
}
