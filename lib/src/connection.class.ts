import { BaseHeader } from "./base-header.class";

export class Connection extends BaseHeader {
  protected _connection: string;

  constructor(connection: string) {
    super();
    this._connection = connection;
  }

  public getConnection(): string {
    return this._connection;
  }
  public setConnection(connection: string) {
    this._connection = connection;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      Connection: this.build(),
    };
  }

  build(): string {
    return this.getConnection().toString();
  }
}
