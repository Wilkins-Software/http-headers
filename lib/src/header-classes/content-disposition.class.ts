import { BaseHeader } from "./base-header.class";

export type DispositionType = "inline" | "attachment" | "form-data";

export class ContentDisposition extends BaseHeader {
  protected _contentdisposition: string;
  protected _dispositionType: string;
  protected _dispositionName: string;
  protected _dispositionFileName: string;

  constructor() {
    super();
    this._contentdisposition = "null";
    this._dispositionType = "null";
    this._dispositionName = "null";
    this._dispositionFileName = "null";
  }

  public getContentDisposition(): string {
    this._contentdisposition = (
      (this._dispositionType === "null" ? "" : this._dispositionType + `;`) +
      (this._dispositionName === "null"
        ? ""
        : ` name="` + this._dispositionName + `";`) +
      (this._dispositionFileName === "null"
        ? ""
        : ` filename="` + this._dispositionFileName + `";`)
    ).slice(0, -1);
    return this._contentdisposition;
  }

  public setType(type: DispositionType) {
    this._dispositionType = type;
    return this;
  }

  public setName(name: string) {
    this._dispositionName = name;
    return this;
  }

  public setFileName(filename: string) {
    this._dispositionFileName = filename;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Content-Disposition": this.build(),
    };
  }

  build(): string {
    return this.getContentDisposition().toString();
  }
}
