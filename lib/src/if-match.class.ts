import { BaseHeader } from "./base-header.class";

export class IfMatch extends BaseHeader {
  protected _ifMatch?: string;

  constructor(...ifMatchRes: string[]) {
    super();
    this._ifMatch = ifMatchRes.map((item) => `"${item}"`).join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      "If-Match": this.build(),
    };
  }

  build(): string {
    if (this._ifMatch) return this._ifMatch;
    return "null";
  }

  setIfMatch(...newIfMatchRes: string[]) {
    this._ifMatch = newIfMatchRes.join(", ");
    return this;
  }
}
