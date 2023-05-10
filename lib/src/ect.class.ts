import { BaseHeader } from "./base-header.class";

export type ECTType = "slow-2g" | "2g" | "3g" | "4g";

export class ECT extends BaseHeader {
  protected _ect: ECTType;

  constructor(ect: ECTType) {
    super();
    this._ect = ect;
  }

  public getECT(): ECTType {
    return this._ect;
  }
  public setECT(ect: ECTType) {
    this._ect = ect;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      ECT: this.build(),
    };
  }

  build(): string {
    return this.getECT().toString();
  }
}
