import { BaseHeader } from "./base-header.class";

export type NELType = {
  report_to: string;
  max_age: number;
  include_subdomains: boolean;
  success_fraction: number;
  failure_fraction: number;
};

export class NEL extends BaseHeader {
  protected _nel?: string;

  constructor(nelRes: NELType) {
    super();
    this._nel = JSON.stringify(nelRes);
  }

  getHeadersObject(): Record<string, string> {
    return {
      NEL: this.build(),
    };
  }

  build(): string {
    if (this._nel) return this._nel;
    return "null";
  }

  setContent(newNELRes: NELType) {
    this._nel = JSON.stringify(newNELRes);
    return this;
  }
}
