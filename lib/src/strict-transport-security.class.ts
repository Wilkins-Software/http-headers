import { BaseHeader } from "./base-header.class";

export type StrictTrnsportSecurityType =
  | number
  | "includeSubDomains"
  | "preload";

export class StrictTrnsportSecurity extends BaseHeader {
  protected _strict?: string;

  constructor(...strictRes: StrictTrnsportSecurityType[]) {
    super();
    this._strict = strictRes
      .map((item) => (typeof item === "number" ? `max-age=${item}` : item))
      .join("; ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      StrictTrnsportSecurity: this.build(),
    };
  }

  build(): string {
    if (this._strict) return this._strict;
    return "null";
  }

  setStrictTrnsportSecurity(
    ...newStrictTrnsportSecurityRes: StrictTrnsportSecurityType[]
  ) {
    this._strict = newStrictTrnsportSecurityRes
      .map((item) => (typeof item === "number" ? `max-age=${item}` : item))
      .join("; ");
    return this;
  }
}
