import { BaseHeader } from "./base-header.class";

export type AcceptRangesType = "bytes" | "items" | "none" | "time" | string;

export class AcceptRanges extends BaseHeader {
  protected _acceptRanges: string;

  constructor(acceptRanges: AcceptRangesType) {
    super();
    this._acceptRanges = acceptRanges;
  }

  public getAcceptRanges(): string {
    return this._acceptRanges;
  }
  public setAcceptRanges(acceptRanges: string) {
    this._acceptRanges = acceptRanges;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Accept-Ranges": this.build(),
    };
  }

  build(): string {
    return this.getAcceptRanges().toString();
  }
}
