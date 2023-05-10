import { BaseHeader } from "./base-header.class";

export type SecFetchModeType =
  | "cors"
  | "navigate"
  | "no-cors"
  | "same-origin"
  | "websocket";

export class SecFetchMode extends BaseHeader {
  protected _secFetchMode: string;

  constructor(secFetchMode: SecFetchModeType) {
    super();
    this._secFetchMode = secFetchMode;
  }

  public getSecFetchMode(): string {
    return this._secFetchMode;
  }
  public setSecFetchMode(secFetchMode: SecFetchModeType) {
    this._secFetchMode = secFetchMode;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Sec-Fetch-Mode": this.build(),
    };
  }

  build(): string {
    return this.getSecFetchMode().toString();
  }
}
