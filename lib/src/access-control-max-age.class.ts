import { BaseHeader } from "./base-header.class";

export class AccessControlMaxAge extends BaseHeader {
  protected _maxAge: number;

  constructor(maxAge: number) {
    super();
    this._maxAge = maxAge;
  }

  public getAccessControlMaxAge(): number {
    return this._maxAge;
  }
  public setAccessControlMaxAge(maxAge: number) {
    this._maxAge = maxAge;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Access-Control-Max-Age": this.build(),
    };
  }

  build(): string {
    return this.getAccessControlMaxAge().toString();
  }
}
