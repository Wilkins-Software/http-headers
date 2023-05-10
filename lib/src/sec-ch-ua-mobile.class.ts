import { BaseHeader } from "./base-header.class";

export class SecChUaMobile extends BaseHeader {
  protected _secChUaMobile: string;

  constructor(secChUaMobile: "?0" | "?1") {
    super();
    this._secChUaMobile = secChUaMobile.toString();
  }

  public getSecChUaMobile(): string {
    return this._secChUaMobile;
  }
  public setSecChUaMobile(secChUaMobile: "?0" | "?1") {
    this._secChUaMobile = secChUaMobile.toString();
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Sec-CH-UA-Mobile": this.build(),
    };
  }

  build(): string {
    return this.getSecChUaMobile().toString();
  }
}
