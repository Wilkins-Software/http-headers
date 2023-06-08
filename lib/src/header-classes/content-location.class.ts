import { BaseHeader } from "./base-header.class";

export class ContentLocation extends BaseHeader {
  protected _contentLocation?: string;

  constructor(contentLocation: string) {
    super();
    this._contentLocation = contentLocation;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Content-Location": this.build(),
    };
  }

  build(): string {
    return this._contentLocation ? this._contentLocation.toString() : "null";
  }

  setLocation(newContentLocation: string) {
    this._contentLocation = newContentLocation;
    return this;
  }
}
