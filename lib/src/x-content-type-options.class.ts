import { BaseHeader } from "./base-header.class";

export class XContentTypeOptions extends BaseHeader {
  protected _option: string;

  constructor() {
    super();
    this._option = "nosniff";
  }

  getHeadersObject(): Record<string, string> {
    return {
      "X-Content-Type-Options": this.build(),
    };
  }

  build(): string {
    return this._option;
  }
}
