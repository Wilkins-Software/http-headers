import { BaseHeader } from "./base-header.class";

//Origin port number is 80

export class Host extends BaseHeader {
  protected _host: string;
  protected _port: string;

  constructor(host: string) {
    super();
    this._host = host;
    this._port = "80";
  }

  public getHost(): string {
    return this._host;
  }

  public getPort(): string {
    return this._port;
  }

  public setPort(port: number) {
    this._port = port.toString();
    return this;
  }

  public setHost(host: string) {
    this._host = host;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      Host: this.build(),
    };
  }

  build(): string {
    return this.getHost().toString() + ":" + this.getPort().toString();
  }
}
