import { BaseHeader } from "./base-header.class";

export class ContentRange extends BaseHeader {
  protected _contentRange: string;
  protected _unit: string;
  protected _range: string | "*";
  protected _size: "null" | number | "*";
  protected _allRange: "null" | boolean;

  constructor() {
    super();
    this._contentRange = "null";
    this._unit = "null";
    this._range = "null";
    this._size = "null";
    this._allRange = "null";
  }

  public getContentRange(): string {
    this._contentRange =
      this._unit +
      (this._allRange === "null"
        ? ""
        : " " + (this._allRange ? "*" : this._range)) +
      (this._size === "null" ? "" : "/" + this._size);
    return this._contentRange;
  }

  public setRange(rangeStart: number, rangeEnd: number) {
    this._range = rangeStart + "-" + rangeEnd;
    return this;
  }

  public setAllRange(all: boolean) {
    // If it is set true, return value like this form "Content-Range: <unit> */<size>"
    this._allRange = all;
  }

  public setUnit(unit: string) {
    this._unit = unit;
    return this;
  }

  public setSize(size: number | "*") {
    this._size = size;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Content-Range": this.build(),
    };
  }

  build(): string {
    return this.getContentRange().toString();
  }
}
