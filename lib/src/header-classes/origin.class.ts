import { BaseHeader } from "./base-header.class";

export class Origin extends BaseHeader {
  protected _origin?: string;

  constructor(originRes: string) {
    super();
    this._origin = originRes;
  }

  getHeadersObject(): Record<string, string> {
    return {
      Origin: this.build(),
    };
  }

  build(): string {
    if (this._origin) return this._origin;
    return "null";
  }

  setOrigin(newOriginRes: string) {
    this._origin = newOriginRes;
    return this;
  }
}
