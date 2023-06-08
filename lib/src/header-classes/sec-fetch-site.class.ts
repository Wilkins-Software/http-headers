import { BaseHeader } from "./base-header.class";

export type SecFetchSiteType =
  | "cross-site"
  | "same-origin"
  | "same-site"
  | "none";

export class SecFetchSite extends BaseHeader {
  protected _secFetchSite: string;

  constructor(secFetchSite: SecFetchSiteType) {
    super();
    this._secFetchSite = secFetchSite;
  }

  public getSecFetchSite(): string {
    return this._secFetchSite;
  }
  public setSecFetchSite(secFetchSite: SecFetchSiteType) {
    this._secFetchSite = secFetchSite;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Sec-Fetch-Site": this.build(),
    };
  }

  build(): string {
    return this.getSecFetchSite().toString();
  }
}
