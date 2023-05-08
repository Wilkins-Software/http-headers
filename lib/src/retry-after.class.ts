import { BaseHeader } from "./base-header.class";

export class RetryAfter extends BaseHeader {
  protected _retryAfter: string;

  constructor(retryAfter: number | string) {
    super();
    this._retryAfter = retryAfter.toString();
  }

  public getRetryAfter(): string {
    return this._retryAfter;
  }
  public setRetryAfter(retryAfter: number | string) {
    this._retryAfter = retryAfter.toString();
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Retry-After": this.build(),
    };
  }

  build(): string {
    return this.getRetryAfter().toString();
  }
}
