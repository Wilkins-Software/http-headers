import { BaseHeader } from "./base-header.class";

export type CookieType = {
  name: string;
  value: string | number;
};

export class Cookie extends BaseHeader {
  protected _cookie?: string;

  constructor(...cookieRes: CookieType[]) {
    super();
    this._cookie = cookieRes
      .map((cookie) => `${cookie.name}=${cookie.value}`)
      .join("; ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      Cookie: this.build(),
    };
  }

  build(): string {
    if (this._cookie) return this._cookie;
    return "null";
  }

  setCookie(...newCookieRes: CookieType[]) {
    this._cookie = newCookieRes
      .map((cookie) => `${cookie.name}=${cookie.value}`)
      .join("; ");
    return this;
  }
}
