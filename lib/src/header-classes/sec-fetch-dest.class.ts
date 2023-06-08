import { BaseHeader } from "./base-header.class";

export type SecFetchDestType =
  | "audio"
  | "audioworklet"
  | "document"
  | "embed"
  | "empty"
  | "font"
  | "frame"
  | "iframe"
  | "image"
  | "manifest"
  | "object"
  | "paintworklet"
  | "report"
  | "script"
  | "serviceworker"
  | "sharedworker"
  | "style"
  | "track"
  | "video"
  | "worker"
  | "xslt";

export class SecFetchDest extends BaseHeader {
  protected _secFetchDest: string;

  constructor(secFetchDest: SecFetchDestType) {
    super();
    this._secFetchDest = secFetchDest;
  }

  public getSecFetchDest(): string {
    return this._secFetchDest;
  }
  public setSecFetchDest(secFetchDest: SecFetchDestType) {
    this._secFetchDest = secFetchDest;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Sec-Fetch-Dest": this.build(),
    };
  }

  build(): string {
    return this.getSecFetchDest().toString();
  }
}
