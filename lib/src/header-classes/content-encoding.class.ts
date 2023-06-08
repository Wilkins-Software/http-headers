import { BaseHeader } from "./base-header.class";

export type ContentEncodingType =
  | "gzip"
  | "deflate"
  | "identity"
  | "br"
  | "compress"
  | "exi"
  | "pack200-gzip"
  | string;

export class ContentEncoding extends BaseHeader {
  protected _contentEncoding?: string;

  constructor(...contentEncodingRes: ContentEncodingType[]) {
    super();
    this._contentEncoding = contentEncodingRes.join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Content-Encoding": this.build(),
    };
  }

  build(): string {
    if (this._contentEncoding) return this._contentEncoding;
    return "null";
  }

  setContent(...newContentEncodingRes: ContentEncodingType[]) {
    this._contentEncoding = newContentEncodingRes.join(", ");
    return this;
  }
}
