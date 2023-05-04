import { BaseHeader } from "./base-header.class";

export type HeadersType =
  | "Origin"
  | "Accept"
  | "Authorization"
  | "Content-Type"
  | "X-Requested-With"
  | "X-CSRF-Token"
  | "X-Access-Token"
  | "X-Custom-Header"
  | "If-Match"
  | "If-Modified-Since"
  | "If-None-Match"
  | "If-Unmodified-Since"
  | "Range";

export type HeaderTypeRes = HeadersType | Lowercase<HeadersType> | "*";

export class AccessControlAllowHeaders extends BaseHeader {
  protected _header?: string;

  constructor(...args: HeaderTypeRes[]) {
    super();
    this._header = args.join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Access-Control-Allow-Headers": this.build(),
    };
  }

  build(): string {
    if (this._header) return this._header;
    return "null";
  }

  setHeader(header: HeaderTypeRes) {
    this._header = header;
    return this;
  }
}
