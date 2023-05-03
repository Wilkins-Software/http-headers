import { BaseHeader } from "./base-header.class";

export type AuthenticationType =
  | "Basic"
  | "Bearer"
  | "Digest"
  | "DPoP"
  | "Mutual"
  | "Negotiate"
  | "OAuth"
  | "SCRAM-SHA-1"
  | "SCRAM-SHA-256"
  | "vapid";
export class ProxyAuthorization extends BaseHeader {
  protected _type?: AuthenticationType | undefined;
  protected _credentials?: string | undefined;

  getType(): AuthenticationType | undefined {
    return this._type;
  }

  setType(value: AuthenticationType | undefined) {
    this._type = value;
    return this;
  }

  getCredentials(): string | undefined {
    return this._credentials;
  }

  setCredentials(value: string | undefined) {
    this._credentials = value;
    return this;
  }

  build() {
    return (
      `${this._type !== undefined ? this._type : ""}` +
      `${this._credentials !== undefined ? " " + this._credentials : ""}`
    );
  }

  getHeadersObject() {
    return {
      "Proxy-Authorization": this.build(),
    };
  }

  constructor({
    type,
    credentials,
  }: {
    type?: ProxyAuthorization["_type"];
    credentials?: ProxyAuthorization["_credentials"];
  }) {
    super();
    this.setType(type);
    this.setCredentials(credentials);
  }
}
