import { BaseHeader } from "./base-header.class";

export type AccessControlRequestHeaderType =
  | "Accept"
  | "Authorization"
  | "Content-Type"
  | "If-Modified-Since"
  | "X-Requested-With"
  | "X-Forwarded-For"
  | "X-HTTP-Method-Override"
  | "X-Forwarded-Proto"
  | "X-Originating-IP"
  | "X-Forwarded-Host"
  | "X-Forwarded-Server";

export type AccessControlRequestHeadersTypeRes =
  | AccessControlRequestHeaderType
  | Lowercase<AccessControlRequestHeaderType>
  | string;

export class AccessControlRequestHeaders extends BaseHeader {
  protected _headers?: string;

  constructor(...args: AccessControlRequestHeadersTypeRes[]) {
    super();
    this._headers = args.join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Access-Control-Request-Headers": this.build(),
    };
  }

  build(): string {
    if (this._headers) return this._headers;
    return "null";
  }

  setHeaders(header: AccessControlRequestHeadersTypeRes) {
    this._headers = header;
    return this;
  }
}
