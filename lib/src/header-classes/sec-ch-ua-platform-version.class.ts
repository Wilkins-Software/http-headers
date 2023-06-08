import { BaseHeader } from "./base-header.class";

export class SecChUaPlatformVersion extends BaseHeader {
  protected _secChUaPlatformVersion: string;

  constructor(secChUaPlatformVersion: string) {
    super();
    this._secChUaPlatformVersion = secChUaPlatformVersion;
  }

  public getSecChUaPlatformVersion(): string {
    return this._secChUaPlatformVersion;
  }
  public setSecChUaPlatformVersion(secChUaPlatformVersion: string) {
    this._secChUaPlatformVersion = secChUaPlatformVersion;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Sec-CH-UA-Platform-Version": this.build(),
    };
  }

  build(): string {
    return this.getSecChUaPlatformVersion().toString();
  }
}
