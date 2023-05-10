import { BaseHeader } from "./base-header.class";

export class UpgradeInsecureRequests extends BaseHeader {
  protected _upgrade: number;

  constructor() {
    super();
    this._upgrade = 1;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Upgrade-Insecure-Requests": this.build(),
    };
  }

  build(): string {
    return this._upgrade?.toString();
  }
}
