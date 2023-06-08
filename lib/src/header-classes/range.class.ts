import { BaseHeader } from "./base-header.class";

export type RangeType = {
  start: number;
  end: number;
  suffix?: number;
};

export class Range extends BaseHeader {
  protected _range?: string;
  protected _unit?: string;

  constructor(unit: string, ...rangeRes: RangeType[]) {
    super();
    this._unit = unit;
    this._range = rangeRes
      .map((item) =>
        item.suffix
          ? `${item.start}-${item.end}, -${item.suffix}`
          : `${item.start}-${item.end}`
      )
      .join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      Range: this.build(),
    };
  }

  build(): string {
    if (this._range && this._unit) return this._unit + "=" + this._range;
    return "null";
  }

  setRange(unit: string, ...newRangeRes: RangeType[]) {
    this._unit = unit;
    this._range = newRangeRes
      .map((item) =>
        item.suffix
          ? `${item.start}-${item.end}, -${item.suffix}`
          : `${item.start}-${item.end}`
      )
      .join(", ");
    return this;
  }
}
