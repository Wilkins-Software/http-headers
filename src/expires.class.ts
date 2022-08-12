import { BaseHeader } from './base-header.class';

export class Expires extends BaseHeader {
  private _expiry: string;

  constructor(expiry: Date) {
    super();
    this._expiry = expiry.toUTCString();
  }

  setExpiry(expiry: Date) {
    this._expiry = expiry.toUTCString();
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      Expires: this.build(),
    };
  }

  build(): string {
    return this._expiry;
  }
}
