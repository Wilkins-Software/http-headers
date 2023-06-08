import { BaseHeader } from "./base-header.class";

// This header syntax is like  If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT

export class IfUnmodifiedSince extends BaseHeader {
  protected _ifUnmodifiedSince: string;

  constructor(ifUnmodifiedSince: string) {
    super();
    this._ifUnmodifiedSince = ifUnmodifiedSince;
  }

  public getIfUnmodifiedSince(): string {
    return this._ifUnmodifiedSince;
  }
  public setIfUnmodifiedSince(ifUnmodifiedSince: string) {
    this._ifUnmodifiedSince = ifUnmodifiedSince;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "If-Unmodified-Since": this.build(),
    };
  }

  build(): string {
    return this.getIfUnmodifiedSince().toString();
  }
}
