import { BaseHeader } from "./base-header.class";

export class ServerTiming extends BaseHeader {
  protected _serverTiming: string;

  constructor(serverTiming: string) {
    super();
    this._serverTiming = serverTiming;
  }

  public getServerTiming(): string {
    return this._serverTiming;
  }
  public setServerTiming(serverTiming: string) {
    this._serverTiming = serverTiming;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Server-Timing": this.build(),
    };
  }

  build(): string {
    return this.getServerTiming().toString();
  }
}
