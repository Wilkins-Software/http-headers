import { BaseHeader } from "./base-header.class";

export class Vary extends BaseHeader {
  protected vary?: string;

  constructor(...userAgentRes: string[]) {
    super();
    this.vary = userAgentRes.join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      Vary: this.build(),
    };
  }

  build(): string {
    if (this.vary) return this.vary;
    return "null";
  }

  setVary(...newVaryRes: string[]) {
    this.vary = newVaryRes.join(", ");
    return this;
  }
}
