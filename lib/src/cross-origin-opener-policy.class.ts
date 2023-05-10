import { BaseHeader } from "./base-header.class";

export type CrossOriginOpenerPolicyType =
  | "unsafe-none"
  | "same-origin-allow-popups"
  | "same-origin"
  | "require-corp";

export class CrossOriginOpenerPolicy extends BaseHeader {
  protected _policy: CrossOriginOpenerPolicyType;

  constructor(policy: CrossOriginOpenerPolicyType) {
    super();
    this._policy = policy;
  }

  public getPolicy(): string {
    return this._policy;
  }
  public setPolicy(policy: CrossOriginOpenerPolicyType) {
    this._policy = policy;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Cross-Origin-Opener-Policy": this.build(),
    };
  }

  build(): string {
    return this.getPolicy().toString();
  }
}
