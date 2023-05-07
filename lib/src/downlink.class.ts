import { BaseHeader } from "./base-header.class";

export class Downlink extends BaseHeader {
  protected _downlink: number;

  constructor(downlink: number) {
    super();
    this._downlink = downlink;
  }

  public getDownlink(): number {
    return this._downlink;
  }
  public setDownlink(downlink: number) {
    this._downlink = downlink;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      Downlink: this.build(),
    };
  }

  build(): string {
    return this.getDownlink().toString();
  }
}
