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
export class ProxyAuthenticate extends BaseHeader {
  protected _type?: AuthenticationType | undefined;
  protected _realm?: string | undefined;

  getType(): string | undefined {
    return this._type;
  }

  setType(value: AuthenticationType | undefined) {
    this._type = value;
    return this;
  }

  getRealm(): string | undefined {
    return this._realm;
  }

  setRealm(value: string | undefined) {
    this._realm = value;
    return this;
  }

  build() {
    return (
      `${this._type !== undefined ? this._type : ""}` +
      `${this._realm !== undefined ? ` realm="${this._realm}"` : ""}`
    );
  }

  getHeadersObject() {
    return {
      "Proxy-Authenticate": this.build(),
    };
  }

  constructor({
    type,
    realm,
  }: {
    type?: ProxyAuthenticate["_type"];
    realm?: ProxyAuthenticate["_realm"];
  }) {
    super();
    this.setType(type);
    this.setRealm(realm);
  }
}
