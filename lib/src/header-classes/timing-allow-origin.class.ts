import { BaseHeader } from "./base-header.class";

export class TimingAllowOrigin extends BaseHeader {
  protected _timingAllowOrigin: string;

  constructor(timingAllowOrigin: string) {
    super();
    this._timingAllowOrigin = timingAllowOrigin;
  }

  public getTimingAllowOrigin(): string {
    return this._timingAllowOrigin;
  }
  public setTimingAllowOrigin(timingAllowOrigin: string) {
    this._timingAllowOrigin = timingAllowOrigin;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Timing-Allow-Origin": this.build(),
    };
  }

  build(): string {
    return this.getTimingAllowOrigin().toString();
  }
}
