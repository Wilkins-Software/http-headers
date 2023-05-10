import { BaseHeader } from "./base-header.class";

//  Syntax is like this
//     ETag: W/"<etag_value>"
//     ETag: "<etag_value>"

export class ETag extends BaseHeader {
  protected _eTag: string;

  constructor(eTag: string) {
    super();
    this._eTag = eTag;
  }

  public getETag(): string {
    return this._eTag;
  }
  public setETag(eTag: string) {
    this._eTag = eTag;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      ETag: this.build(),
    };
  }

  build(): string {
    return this.getETag().toString();
  }
}
