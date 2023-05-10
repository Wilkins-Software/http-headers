import { BaseHeader } from "./base-header.class";

export type UserAgentType = {
  product: string;
  version: string;
  comment?: string;
};

//User-Agent: <product> / <product-version> <comment>

export class UserAgent extends BaseHeader {
  protected _userAgent?: string;

  constructor(...userAgentRes: UserAgentType[]) {
    super();
    this._userAgent = userAgentRes
      .map(
        (userAgent) =>
          `${userAgent.product}/${userAgent.version}${
            userAgent.comment ? ` ${userAgent.comment}` : ""
          }`
      )
      .join(" ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      "User-Agent": this.build(),
    };
  }

  build(): string {
    if (this._userAgent) return this._userAgent;
    return "null";
  }

  setUserAgent(...newUserAgentRes: UserAgentType[]) {
    this._userAgent = newUserAgentRes
      .map(
        (userAgent) =>
          `${userAgent.product}/${userAgent.version}${
            userAgent.comment ? ` ${userAgent.comment}` : ""
          }`
      )
      .join(" ");
    return this;
  }
}
