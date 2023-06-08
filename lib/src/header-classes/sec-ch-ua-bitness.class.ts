import { BaseHeader } from "./base-header.class";

export class SecChUaBitness extends BaseHeader {
  protected _secChUaBitness: string;

  constructor(secChUaBitness: "64" | "32") {
    super();
    this._secChUaBitness = secChUaBitness;
  }

  public getSecChUaBitness(): string {
    return this._secChUaBitness;
  }
  public setSecChUaBitness(secChUaBitness: "64" | "32") {
    this._secChUaBitness = secChUaBitness;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Sec-CH-UA-Bitness": this.build(),
    };
  }

  build(): string {
    return this.getSecChUaBitness().toString();
  }
}
