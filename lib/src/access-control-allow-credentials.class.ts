import { BaseHeader } from "./base-header.class";

export class AccessControlAllowCredentials extends BaseHeader {
  protected _crendentials: boolean;

  constructor(crendentials: boolean) {
    super();
    this._crendentials = crendentials;
  }

  public getCredentials(): boolean {
    return this._crendentials;
  }

  public setCredentials(crendentials: boolean) {
    this._crendentials = crendentials;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Access-Control-Allow-Credentials": this.build(),
    };
  }

  build(): string {
    return this.getCredentials().toString();
  }
}
