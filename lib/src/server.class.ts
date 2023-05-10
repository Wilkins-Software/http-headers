import { BaseHeader } from "./base-header.class";

export class Server extends BaseHeader {
  protected _server: string;

  constructor(server: string) {
    super();
    this._server = server;
  }

  public getServer(): string {
    return this._server;
  }
  public setServer(server: string) {
    this._server = server;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      Server: this.build(),
    };
  }

  build(): string {
    return this.getServer().toString();
  }
}
