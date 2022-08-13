import { BaseHeader } from './base-header.class';
import * as TimeConverters from '@wilkins-software/time-conversion-helpers';
export class Age extends BaseHeader {
  /** _age = <delta-seconds>. Ex. How long has this been in the server cache (in seconds) */
  protected _age: number;

  constructor(
    age:
      | number
      | ((builder: typeof TimeConverters) => { toSeconds: () => number })
  ) {
    super();
    if (typeof age === 'function') {
      this._age = age(TimeConverters).toSeconds();
    } else {
      this._age = age;
    }
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
