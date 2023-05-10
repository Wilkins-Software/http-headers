import { BaseHeader } from "./base-header.class";

export type WantDigestAlgorithmType =
  | "unixsum"
  | "unixcksum"
  | "crc32c"
  | "sha-256"
  | "sha-512"
  | "id-sha-256"
  | "id-sha-512"
  | "md5"
  | "sha"
  | "adler32";

export type WantDigestType = {
  algorithm: WantDigestAlgorithmType | Uppercase<WantDigestAlgorithmType>;
  value?: number;
};

export class WantDigest extends BaseHeader {
  protected _via?: string;

  constructor(...viaRes: WantDigestType[]) {
    super();
    this._via = viaRes
      .map((via) => `${via.algorithm}${via.value ? ";q=" + via.value : ""}`)
      .join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      WantDigest: this.build(),
    };
  }

  build(): string {
    if (this._via) return this._via;
    return "null";
  }

  setWantDigest(...newWantDigestRes: WantDigestType[]) {
    this._via = newWantDigestRes
      .map((via) => `${via.algorithm}${via.value ? ";q=" + via.value : ""}`)
      .join(", ");
    return this;
  }
}
