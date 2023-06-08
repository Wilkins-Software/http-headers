import { BaseHeader } from "./base-header.class";

export class Referer extends BaseHeader {
  protected _referer: string;

  constructor(referer: string) {
    super();
    this._referer = referer;
  }

  public getReferer(): string {
    return this._referer;
  }
  public setReferer(referer: string) {
    this._referer = referer;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      Referer: this.build(),
    };
  }

  build(): string {
    return this.getReferer().toString();
  }
}
