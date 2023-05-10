import { BaseHeader } from "./base-header.class";

export class MaxForwards extends BaseHeader {
  protected _maxForwards: number;

  constructor(maxForwards: number) {
    super();
    this._maxForwards = maxForwards;
  }

  public getMaxForwards(): number {
    return this._maxForwards;
  }
  public setMaxForwards(maxForwards: number) {
    this._maxForwards = maxForwards;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Max-Forwards": this.build(),
    };
  }

  build(): string {
    return this.getMaxForwards().toString();
  }
}
