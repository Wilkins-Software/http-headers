import { BaseHeader } from "./base-header.class";

export type SecChUaType = {
  brand: string;
  version: number;
};

export class SecChUa extends BaseHeader {
  protected _secChUa: string;

  constructor(...secChUa: SecChUaType[]) {
    super();
    this._secChUa = secChUa
      .map((secCh) => `"${secCh.brand}";v="${secCh.version}"`)
      .join(", ");
  }

  public getSecChUa(): string {
    return this._secChUa;
  }
  public setSecChUa(...secChUa: SecChUaType[]) {
    this._secChUa = secChUa
      .map((secCh) => `"${secCh.brand}";v="${secCh.version}"`)
      .join(", ");
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Sec-CH-UA": this.build(),
    };
  }

  build(): string {
    return this.getSecChUa().toString();
  }
}
