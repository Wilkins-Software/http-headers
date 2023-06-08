import { BaseHeader } from "./base-header.class";

export class ContentLength extends BaseHeader {
  protected _contentLength?: number;

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
    return this._contentLength ? this._contentLength.toString() : "null";
  }

  setLength(newContentLength: number) {
    this._contentLength = newContentLength;
    return this;
  }
}
