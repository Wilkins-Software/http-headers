import { BaseHeader } from "./base-header.class";

export class ContentLength extends BaseHeader {
  protected _contentLength: number = 0;

  constructor(contentLength: number) {
    super();
    this._contentLength = contentLength;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Content-Length": this.build(),
    };
  }

  build(): string {
    return this._contentLength.toString();
  }

  setLength(newContentLengthRes: number) {
    this._contentLength = newContentLengthRes;
    return this;
  }
}
