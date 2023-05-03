import { BaseHeader } from "./base-header.class";
export class ProxyAuthenticate extends BaseHeader {
  protected _type?: string | undefined;
  protected _realm?: string | undefined;

  getType(): string | undefined {
    return this._type;
  }

  setType(value: string | undefined) {
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
    return this._type + ` realm="${this._realm}"`;
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
