import { BaseHeader } from "./base-header.class";

export type CriticalCHType =
  | "Content-Security-Policy"
  | "Origin"
  | "Referer"
  | "Sec-Fetch-Dest"
  | "Sec-Fetch-Mode"
  | "Sec-Fetch-Site"
  | "User-Agent"
  | string;

export class CriticalCH extends BaseHeader {
  protected _criticalCH?: string;

  constructor(...criticalCHRes: CriticalCHType[]) {
    super();
    this._criticalCH = criticalCHRes.join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Critical-CH": this.build(),
    };
  }

  build(): string {
    if (this._criticalCH) return this._criticalCH;
    return "null";
  }

  setContent(...newCriticalCHRes: CriticalCHType[]) {
    this._criticalCH = newCriticalCHRes.join(", ");
    return this;
  }
}
