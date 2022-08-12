import { BaseHeader } from './base-header';

export class Age extends BaseHeader {
  /** _age = <delta-seconds>. Ex. How long has this been in the server cache (in seconds) */
  private _age: number;

  constructor(age: number) {
    super();
    this._age = age;
  }

  public getAge(): number {
    return this._age;
  }
  public setAge(age: number) {
    this._age = age;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      Age: this.build(),
    };
  }

  build(): string {
    return this.getAge().toString();
  }
}
