import { BaseHeader } from "./base-header.class";

export type SecChUaPlatformType =
  | "Android"
  | "Chrome OS"
  | "Chromium OS"
  | "iOS"
  | "Linux"
  | "macOS"
  | "Windows"
  | "Unknown";

export class SecChUaPlatform extends BaseHeader {
  protected _secChUaPlatform: string;

  constructor(secChUaPlatform: SecChUaPlatformType) {
    super();
    this._secChUaPlatform = secChUaPlatform;
  }

  public getSecChUaPlatform(): string {
    return this._secChUaPlatform;
  }
  public setSecChUaPlatform(secChUaPlatform: SecChUaPlatformType) {
    this._secChUaPlatform = secChUaPlatform;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Sec-CH-UA-Platform": this.build(),
    };
  }

  build(): string {
    return this.getSecChUaPlatform().toString();
  }
}
