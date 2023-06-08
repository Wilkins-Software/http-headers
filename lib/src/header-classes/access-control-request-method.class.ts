import { BaseHeader } from "./base-header.class";

export type AccessControlRequestMethodsType =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "HEAD"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE";

export type AccessControlRequestMethodsTypeRes =
  | AccessControlRequestMethodsType
  | Lowercase<AccessControlRequestMethodsType>
  | "*";

export class AccessControlRequestMethods extends BaseHeader {
  protected _method?: string;

  constructor(...args: AccessControlRequestMethodsTypeRes[]) {
    super();
    this._method = args.join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Access-Control-Request-Method": this.build(),
    };
  }

  build(): string {
    if (this._method) return this._method;
    return "null";
  }

  setMethod(method: AccessControlRequestMethodsTypeRes) {
    this._method = method;
    return this;
  }
}
