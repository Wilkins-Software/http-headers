import { BaseHeader } from "./base-header.class";

export type HeaderType =
  | "Cache-Control"
  | "Content-Language"
  | "Content-Length"
  | "Content-Type"
  | "Content-Encoding"
  | "Expires"
  | "Last-Modified"
  | "Pragma"
  | "Set-Cookie"
  | "Authorization"
  | "X-Requested-With"
  | "X-CSRF-TOKEN"
  | "Kuma-Revision";

export type HeadersTypeRes = HeaderType | Lowercase<HeaderType> | "*" | "null";

export class AccessControlExposeHeaders extends BaseHeader {
  protected _headers?: string;

  constructor(...args: HeadersTypeRes[]) {
    super();
    this._headers = args.join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Access-Control-Expose-Headers": this.build(),
    };
  }

  build(): string {
    if (this._headers) return this._headers;
    return "null";
  }

  setHeaders(header: HeadersTypeRes) {
    this._headers = header;
    return this;
  }
}
