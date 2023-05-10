import { BaseHeader } from "./base-header.class";

// This header syntax is like  Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT

export class LastModified extends BaseHeader {
  protected _lastModified: string;

  constructor(lastModified: string) {
    super();
    this._lastModified = lastModified;
  }

  public getLastModified(): string {
    return this._lastModified;
  }
  public setLastModified(lastModified: string) {
    this._lastModified = lastModified;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Last-Modified": this.build(),
    };
  }

  build(): string {
    return this.getLastModified().toString();
  }
}
