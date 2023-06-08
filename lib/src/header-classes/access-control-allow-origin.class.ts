import { BaseHeader } from "./base-header.class";

export type OriginTypeRes = "null" | string | "*";

export class AccessControlAllowOrigin extends BaseHeader {
  protected _origin?: string;

  constructor(...args: OriginTypeRes[]) {
    super();
    this._origin = args.join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Access-Control-Allow-Origin": this.build(),
    };
  }

  build(): string {
    if (this._origin) return this._origin;
    return "null";
  }

  setOrigin(origin: OriginTypeRes) {
    this._origin = origin;
    return this;
  }
}
