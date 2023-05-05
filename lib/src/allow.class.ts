import { BaseHeader } from "./base-header.class";

export type AllowType =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "HEAD"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE";

export type AllowTypeRes = AllowType | Lowercase<AllowType>;

export class Allow extends BaseHeader {
  protected _allow?: string;

  constructor(...args: AllowTypeRes[]) {
    super();
    this._allow = args.join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      Allow: this.build(),
    };
  }

  build(): string {
    if (this._allow) return this._allow;
    return "null";
  }

  setMethod(allow: AllowTypeRes) {
    this._allow = allow;
    return this;
  }
}
