import { BaseHeader } from "./base-header.class";

export class AcceptPatch extends BaseHeader {
  protected _acceptPatch: string;

  constructor(acceptPatch: string) {
    super();
    this._acceptPatch = acceptPatch;
  }

  public getAcceptPatch(): string {
    return this._acceptPatch;
  }
  public setAcceptPatch(acceptPatch: string) {
    this._acceptPatch = acceptPatch;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Accept-Patch": this.build(),
    };
  }

  build(): string {
    return this.getAcceptPatch().toString();
  }
}
