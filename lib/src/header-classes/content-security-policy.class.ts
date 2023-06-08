import { BaseHeader } from "./base-header.class";
export class ContentSecurityPolicy extends BaseHeader {
  protected _contentSecurityPolicy?: string;

  constructor(...contentSecurityPolicyRes: string[]) {
    super();
    this._contentSecurityPolicy = contentSecurityPolicyRes.join("; ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Content-Security-Policy": this.build(),
    };
  }

  build(): string {
    if (this._contentSecurityPolicy) return this._contentSecurityPolicy;
    return "null";
  }

  setPolicy(...newContentSecurityPolicyRes: string[]) {
    this._contentSecurityPolicy = newContentSecurityPolicyRes.join(", ");
    return this;
  }
}
