import { BaseHeader } from "./base-header.class";

export class AcceptCHLifetime extends BaseHeader {
  protected _acceptCHLifetime: number;

  constructor(acceptCHLifetime: number) {
    super();
    this._acceptCHLifetime = acceptCHLifetime;
  }

  public getAcceptCHLifetime(): number {
    return this._acceptCHLifetime;
  }

  public setAcceptCHLifetime(acceptCHLifetime: number) {
    this._acceptCHLifetime = acceptCHLifetime;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Accept-CH-Lifetime": this.build(),
    };
  }

  build(): string {
    return this.getAcceptCHLifetime().toString();
  }
}
