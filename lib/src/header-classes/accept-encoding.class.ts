import { BaseHeader } from "./base-header.class";

export type AcceptEncodingType =
  | "gzip"
  | "compress"
  | "deflate"
  | "br"
  | "identity";

export type AcceptEncodingResType = boolean | number;

export type AcceptEncodingTypeObject =
  | Partial<Record<AcceptEncodingType, AcceptEncodingResType>>
  | "*";

export class AcceptEncoding extends BaseHeader {
  protected _acceptEncodingParam?: AcceptEncodingTypeObject;

  constructor(acceptEncodingParam?: AcceptEncodingTypeObject) {
    super();
    this._acceptEncodingParam = acceptEncodingParam;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Accept-Encoding": this.build(),
    };
  }

  build(): string {
    if (!this._acceptEncodingParam) {
      return "";
    }

    if (this._acceptEncodingParam === "*") {
      return "*";
    }

    return Object.entries(this._acceptEncodingParam)
      .reduce((acc, [key, value]) => {
        if (typeof value === "boolean") {
          return [...acc, key];
        } else if (typeof value === "number") {
          return [...acc, key + `;q=${value}`];
        }
        return acc;
      }, [] as string[])
      .join(", ");
  }

  setProperty(params: AcceptEncodingType, value: AcceptEncodingResType) {
    if (!this._acceptEncodingParam || this._acceptEncodingParam === "*") {
      this._acceptEncodingParam = {};
    }

    this._acceptEncodingParam[params] = value;
    return this;
  }

  setAllProperty(acceptEncodingParams: AcceptEncodingTypeObject) {
    this._acceptEncodingParam = acceptEncodingParams;
    return this;
  }
}
