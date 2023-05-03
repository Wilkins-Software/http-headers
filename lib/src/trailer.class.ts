import { BaseHeader } from "./base-header.class";

export class Trailer extends BaseHeader {
  protected _trailerName: string;

  constructor(trailerName: string) {
    super();
    this._trailerName = trailerName;
  }

  public getTrailer(): string {
    return this._trailerName;
  }

  public setTrailer(trailerName: string) {
    this._trailerName = trailerName;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      Trailer: this.build(),
    };
  }

  build(): string {
    return this.getTrailer();
  }
}
