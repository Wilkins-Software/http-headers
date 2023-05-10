import { BaseHeader } from "./base-header.class";

export type CrossOriginResourcePolicyType =
  | "same-site"
  | "same-origin"
  | "cross-origin";

export class CrossOriginResourcePolicy extends BaseHeader {
  protected _policy: CrossOriginResourcePolicyType;

  constructor(policy: CrossOriginResourcePolicyType) {
    super();
    this._policy = policy;
  }

  public getPolicy(): string {
    return this._policy;
  }
  public setPolicy(policy: CrossOriginResourcePolicyType) {
    this._policy = policy;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Cross-Origin-Resource-Policy": this.build(),
    };
  }

  build(): string {
    return this.getPolicy().toString();
  }
}
