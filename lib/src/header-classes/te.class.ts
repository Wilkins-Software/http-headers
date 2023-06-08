import { BaseHeader } from "./base-header.class";

export type TeType = "compress" | "deflate" | "gzip" | "trailers";

export type TeTypeObject = Partial<Record<TeType, boolean>> | "*";

export class Te extends BaseHeader {
  protected _teType?: TeTypeObject;
  protected _teQ?: number;

  constructor(teType?: TeTypeObject, teQ?: number) {
    super();
    this._teType = teType;
    this._teQ = teQ;
  }

  getHeadersObject(): Record<string, string> {
    return {
      TE: this.build(),
    };
  }

  build(): string {
    if (!this._teType) {
      return "";
    }

    if (this._teType === "*") {
      return "*";
    }

    return `${Object.entries(this._teType)
      .reduce((acc, [key, value]) => {
        if (value) {
          return [...acc, key];
        }

        return acc;
      }, [] as string[])
      .join(", ")}${this._teQ === undefined ? "" : `;q=${this._teQ}`}`;
  }

  setTeQ(teQ: number) {
    this._teQ = teQ;
  }

  setTeType(teType: TeType, value: boolean) {
    if (!this._teType || this._teType === "*") {
      this._teType = {};
    }

    this._teType[teType] = value;
    return this;
  }

  setTeTypes(teTypes: TeTypeObject) {
    this._teType = teTypes;
    return this;
  }
}
