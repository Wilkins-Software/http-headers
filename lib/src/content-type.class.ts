import { BaseHeader } from "./base-header.class";

export class ContentType extends BaseHeader {
  /** _ContentType = <delta-seconds>. Ex. How long has this been in the server cache (in seconds) */
  protected _ContentType: string;

  constructor(ContentType: string) {
    super();
    this._ContentType = ContentType;
  }

  public getContentType(): string {
    return this._ContentType;
  }
  public setMimeType(ContentType: string) {
    this._ContentType = ContentType;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      ContentType: this.build(),
    };
  }

  build(): string {
    return this.getContentType().toString();
  }
}
