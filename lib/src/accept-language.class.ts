import { BaseHeader } from "./base-header.class";

export type AcceptLanguageType = string;

export type AcceptLanguageResType = boolean | number;
// There are two types of header function input values: boolean and numeric. So if type is boolean and true it will be just returned without quality property. So it actually is equal to 1 or 1.0 as a number type.

export type AcceptLanguageTypeObject =
  | Partial<Record<AcceptLanguageType, AcceptLanguageResType>>
  | "*";

export class AcceptLanguage extends BaseHeader {
  protected _acceptLanguageParam?: AcceptLanguageTypeObject;

  constructor(acceptLanguageParam?: AcceptLanguageTypeObject) {
    super();
    this._acceptLanguageParam = acceptLanguageParam;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Accept-Language": this.build(),
    };
  }

  build(): string {
    if (!this._acceptLanguageParam) {
      return "";
    }

    if (this._acceptLanguageParam === "*") {
      return "*";
    }

    return Object.entries(this._acceptLanguageParam)
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

  setProperty(params: AcceptLanguageType, value: AcceptLanguageResType) {
    if (!this._acceptLanguageParam || this._acceptLanguageParam === "*") {
      this._acceptLanguageParam = {};
    }

    this._acceptLanguageParam[params] = value;
    return this;
  }

  setAllProperty(acceptLanguageParams: AcceptLanguageTypeObject) {
    this._acceptLanguageParam = acceptLanguageParams;
    return this;
  }
}
