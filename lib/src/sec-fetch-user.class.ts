import { BaseHeader } from "./base-header.class";

export class SecFetchUser extends BaseHeader {
  protected _secFetchUser: string;

  constructor() {
    super();
    this._secFetchUser = "?1";
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Sec-Fetch-User": this.build(),
    };
  }

  build(): string {
    return this._secFetchUser;
  }
}
