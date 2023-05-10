import { BaseHeader } from "./base-header.class";

// This header syntax is like  If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT

export class IfRange extends BaseHeader {
  protected _ifRange: string;

  constructor(ifRange: string) {
    super();
    this._ifRange = ifRange;
  }

  public getIfRange(): string {
    return this._ifRange;
  }
  public setIfRange(ifRange: string) {
    this._ifRange = ifRange;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "If-Range": this.build(),
    };
  }

  build(): string {
    return this.getIfRange().toString();
  }
}
