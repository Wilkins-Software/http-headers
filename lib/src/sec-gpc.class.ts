import { BaseHeader } from "./base-header.class";

export class SecGpc extends BaseHeader {
  protected _secGpc: string;

  constructor() {
    super();
    this._secGpc = "1";
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Sec-GPC": this.build(),
    };
  }

  build(): string {
    return this._secGpc;
  }
}
