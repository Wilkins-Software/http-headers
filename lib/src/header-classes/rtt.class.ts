import { BaseHeader } from "./base-header.class";

export class RTT extends BaseHeader {
  protected _rTT: string;

  constructor(rTT: number) {
    super();
    this._rTT = rTT.toString();
  }

  public getRTT(): string {
    return this._rTT;
  }
  public setRTT(rTT: number) {
    this._rTT = rTT.toString();
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      RTT: this.build(),
    };
  }

  build(): string {
    return this.getRTT().toString();
  }
}
