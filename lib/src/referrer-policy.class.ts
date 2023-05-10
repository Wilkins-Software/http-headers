import { BaseHeader } from "./base-header.class";

export type ReferrerPolicyType =
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";

export class ReferrerPolicy extends BaseHeader {
  protected _policy: string;

  constructor(...policy: ReferrerPolicyType[]) {
    super();
    this._policy = policy.join(", ");
  }

  public getReferrerPolicy(): string {
    return this._policy;
  }
  public setReferrerPolicy(...policy: ReferrerPolicyType[]) {
    this._policy = policy.join(", ");
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Referrer-Policy": this.build(),
    };
  }

  build(): string {
    return this.getReferrerPolicy().toString();
  }
}
