import { BaseHeader } from "./base-header.class";

export type SecChUaArchType =
  | "x86"
  | "ARM"
  | "[arm64-v8a, armeabi-v7a, armeabi]";

export class SecChUaArch extends BaseHeader {
  protected _secChUaArch: string;

  constructor(secChUaArch: SecChUaArchType) {
    super();
    this._secChUaArch = secChUaArch;
  }

  public getSecChUaArch(): string {
    return this._secChUaArch;
  }
  public setSecChUaArch(secChUaArch: SecChUaArchType) {
    this._secChUaArch = secChUaArch;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Sec-CH-UA-Arch": this.build(),
    };
  }

  build(): string {
    return this.getSecChUaArch().toString();
  }
}
