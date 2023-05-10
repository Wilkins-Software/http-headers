import { BaseHeader } from "./base-header.class";

export type XFrameOptionsType = "DENY" | "SAMEORIGIN" | "ALLOW-FROM origin";

export class XFrameOptions extends BaseHeader {
  protected _options?: string;

  constructor(optionsRes: XFrameOptionsType) {
    super();
    this._options = optionsRes;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "X-Frame-Options": this.build(),
    };
  }

  build(): string {
    if (this._options) return this._options;
    return "null";
  }

  setXFrameOptions(newXFrameOptionsRes: XFrameOptionsType) {
    this._options = newXFrameOptionsRes;
    return this;
  }
}
