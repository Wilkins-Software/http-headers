import { BaseHeader } from "./base-header.class";

export class Location extends BaseHeader {
  protected _location: string;

  constructor(location: string) {
    super();
    this._location = location;
  }

  public getLocation(): string {
    return this._location;
  }
  public setLocation(location: string) {
    this._location = location;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      Location: this.build(),
    };
  }

  build(): string {
    return this.getLocation().toString();
  }
}
