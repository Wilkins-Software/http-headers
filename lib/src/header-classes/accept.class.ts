import { BaseHeader } from "./base-header.class";

export class Accept extends BaseHeader {
  protected _accept: string;

  constructor(accept: string) {
    super();
    this._accept = accept;
  }

  public getAccept(): string {
    return this._accept;
  }

  public setAccept(accept: string) {
    this._accept = accept;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      Accept: this.build(),
    };
  }

  build(): string {
    return this.getAccept().toString();
  }
}
