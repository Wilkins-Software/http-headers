import { BaseHeader } from "./base-header.class";

// From: <email>

export class From extends BaseHeader {
  protected _from: string;

  constructor(from: string) {
    super();
    this._from = from;
  }

  public getFrom(): string {
    return this._from;
  }
  public setFrom(from: string) {
    this._from = from;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      From: this.build(),
    };
  }

  build(): string {
    return this.getFrom().toString();
  }
}
