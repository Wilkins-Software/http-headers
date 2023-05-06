import { BaseHeader } from "./base-header.class";

export type CrossOriginEmbedderPolicyType =
  | "unsafe-none"
  | "require-corp"
  | "credentialless";

export class CrossOriginEmbedderPolicy extends BaseHeader {
  protected _policy: CrossOriginEmbedderPolicyType;

  constructor(policy: CrossOriginEmbedderPolicyType) {
    super();
    this._policy = policy;
  }

  public getPolicy(): string {
    return this._policy;
  }
  public setPolicy(policy: CrossOriginEmbedderPolicyType) {
    this._policy = policy;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Cross-Origin-Embedder-Policy": this.build(),
    };
  }

  build(): string {
    return this.getPolicy().toString();
  }
}
