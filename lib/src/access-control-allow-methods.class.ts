import { BaseHeader } from "./base-header.class";

export type MethodsType =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "HEAD"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE";

export type MethodsTypeRes = MethodsType | Lowercase<MethodsType> | "*";

export class AccessControlAllowMethods extends BaseHeader {
  protected _method?: string;

  constructor(...args: MethodsTypeRes[]) {
    super();
    this._method = args.join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Access-Control-Allow-Methods": this.build(),
    };
  }

  build(): string {
    if (this._method) return this._method;
    return "null";
  }

  setMethod(method: MethodsTypeRes) {
    this._method = method;
    return this;
  }
}
