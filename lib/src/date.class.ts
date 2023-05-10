import { BaseHeader } from "./base-header.class";

// This header syntax is like  Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT

export class Date extends BaseHeader {
  protected _date: string;

  constructor(date: string) {
    super();
    this._date = date;
  }

  public getDate(): string {
    return this._date;
  }
  public setDate(date: string) {
    this._date = date;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      Date: this.build(),
    };
  }

  build(): string {
    return this.getDate().toString();
  }
}
