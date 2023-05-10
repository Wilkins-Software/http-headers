import { BaseHeader } from "./base-header.class";

export class SecChPrefersReducedMotion extends BaseHeader {
  protected _secChPrefersReducedMotion: string;

  constructor(secChPrefersReducedMotion: "reduce" | "no-" | "preference") {
    super();
    this._secChPrefersReducedMotion = secChPrefersReducedMotion.toString();
  }

  public getSecChPrefersReducedMotion(): string {
    return this._secChPrefersReducedMotion;
  }
  public setSecChPrefersReducedMotion(
    secChPrefersReducedMotion: "reduce" | "no-" | "preference"
  ) {
    this._secChPrefersReducedMotion = secChPrefersReducedMotion.toString();
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Sec-CH-Prefers-Reduced-Motion": this.build(),
    };
  }

  build(): string {
    return this.getSecChPrefersReducedMotion().toString();
  }
}
