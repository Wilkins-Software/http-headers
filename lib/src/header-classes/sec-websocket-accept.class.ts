import { BaseHeader } from "./base-header.class";

export class SecWebsocketAccept extends BaseHeader {
  protected _secWebsocketAccept: string;

  constructor(secWebsocketAccept: string) {
    super();
    this._secWebsocketAccept = secWebsocketAccept;
  }

  public getSecWebsocketAccept(): string {
    return this._secWebsocketAccept;
  }
  public setSecWebsocketAccept(secWebsocketAccept: string) {
    this._secWebsocketAccept = secWebsocketAccept;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Sec-WebSocket-Accept": this.build(),
    };
  }

  build(): string {
    return this.getSecWebsocketAccept().toString();
  }
}
