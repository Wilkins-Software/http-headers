import { BaseHeader } from "./base-header.class";

export type AcceptCHType =
  | "Accept-CH"
  | "Content-DPR"
  | "DPR"
  | "Width"
  | "Viewport-Width"
  | "Downlink"
  | "ECT"
  | "Save-Data"
  | "Device-Memory"
  | "RTT"
  | "Sec-CH-UA"
  | "Sec-CH-UA-Mobile"
  | "Sec-CH-UA-Full-Version"
  | "Sec-CH-UA-Platform";

export type AcceptCHTypeObject = Partial<Record<AcceptCHType, boolean>> | "*";

export class AcceptCH extends BaseHeader {
  protected _acceptCHType?: AcceptCHTypeObject;

  constructor(acceptCHType?: AcceptCHTypeObject) {
    super();
    this._acceptCHType = acceptCHType;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Accept-CH": this.build(),
    };
  }

  build(): string {
    if (!this._acceptCHType) {
      return "";
    }

    if (this._acceptCHType === "*") {
      return "*";
    }

    return Object.entries(this._acceptCHType)
      .reduce((acc, [key, value]) => {
        if (value) {
          return [...acc, key];
        }

        return acc;
      }, [] as string[])
      .join(", ");
  }

  setAcceptCHType(acceptCHType: AcceptCHType, value: boolean) {
    if (!this._acceptCHType || this._acceptCHType === "*") {
      this._acceptCHType = {};
    }

    this._acceptCHType[acceptCHType] = value;
    return this;
  }

  setAcceptCHTypes(acceptCHTypes: AcceptCHTypeObject) {
    this._acceptCHType = acceptCHTypes;
    return this;
  }
}
