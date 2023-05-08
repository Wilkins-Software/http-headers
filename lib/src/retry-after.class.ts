import { BaseHeader } from "./base-header.class";

export class RetryAfter extends BaseHeader {
  protected _policy: string;

  constructor(policy: number | string) {
    super();
    this._policy = policy.toString();
  }

  public getRetryAfter(): string {
    return this._policy;
  }
  public setRetryAfter(policy: number | string) {
    this._policy = policy.toString();
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
