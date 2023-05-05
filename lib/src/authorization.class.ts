import { BaseHeader } from "./base-header.class";

export type AuthorizationAuthSchemeType = "Basic" | "Digest";

export type AuthorizationParametersType = {
  username: string;
  realm: string;
  uri: string;
  algorithm: string;
  nonce: string;
  nc: number;
  cnonce: string;
  qop: "auth" | "auth-int";
  response: string;
  opaque: string;
};

export class Authorization extends BaseHeader {
  protected authorization?: string;

  constructor(
    auth: AuthorizationAuthSchemeType,
    params: AuthorizationParametersType | string
  ) {
    super();
    this.authorization =
      auth +
      " " +
      (auth === "Digest"
        ? `${Object.entries(params)
            .reduce((acc, [key, value]) => {
              return `${acc}${key}="${value}", `;
            }, "")
            .slice(0, -2)}`
        : params);
  }

  getHeadersObject(): Record<string, string> {
    return {
      Authorization: this.build(),
    };
  }

  build(): string {
    if (this.authorization) return this.authorization;
    return "null";
  }

  setAuthorization(
    newAuth: AuthorizationAuthSchemeType,
    newParams: AuthorizationParametersType | string
  ) {
    this.authorization =
      newAuth +
      " " +
      (newAuth === "Digest"
        ? `${Object.entries(newParams)
            .reduce((acc, [key, value]) => {
              return `${acc}${key}="${value}", `;
            }, "")
            .slice(0, -2)}`
        : newParams);
    return this;
  }
}
