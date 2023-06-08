import { BaseHeader } from "./base-header.class";

export type SecChUaFullVersionListType = {
  brand: string;
  version: number;
};

export class SecChUaFullVersionList extends BaseHeader {
  protected _secChUa: string;

  constructor(...secChUa: SecChUaFullVersionListType[]) {
    super();
    this._secChUa = secChUa
      .map((secCh) => `"${secCh.brand}";v="${secCh.version}"`)
      .join(", ");
  }

  public getSecChUaFullVersionList(): string {
    return this._secChUa;
  }
  public setSecChUaFullVersionList(...secChUa: SecChUaFullVersionListType[]) {
    this._secChUa = secChUa
      .map((secCh) => `"${secCh.brand}";v="${secCh.version}"`)
      .join(", ");
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Sec-CH-UA-Full-Version-List": this.build(),
    };
  }

  build(): string {
    return this.getSecChUaFullVersionList().toString();
  }
}
