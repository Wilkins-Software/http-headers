import { BaseHeader } from "./base-header.class";

export class IfNoneMatch extends BaseHeader {
  protected _ifNoneMatch?: string;

  constructor(...ifNoneMatchRes: string[]) {
    super();
    this._ifNoneMatch = ifNoneMatchRes.join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      "If-Match": this.build(),
    };
  }

  build(): string {
    if (this._ifNoneMatch) return this._ifNoneMatch;
    return "null";
  }

  setIfNoneMatch(...newIfNoneMatchRes: string[]) {
    this._ifNoneMatch = newIfNoneMatchRes.join(", ");
    return this;
  }
}
