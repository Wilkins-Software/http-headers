import { compact } from "lodash";
import { BaseHeader } from "./base-header.class";

/**
 * Class implementation of the response directives listed here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
 */
export class KeepAlive extends BaseHeader {
  protected _timeout?: number | undefined;
  protected _max?: number | undefined;

  getTimeOut(): number | undefined {
    return this._timeout;
  }

  setTimeOut(value: number | undefined) {
    this._timeout = value;
    return this;
  }

  getMax(): number | undefined {
    return this._max;
  }

  setMax(value: number | undefined) {
    this._max = value;
    return this;
  }

  build() {
    const directives = {
      timeout: this._timeout,
      max: this._max,
    };

    const headerSegmentArray = Object.entries(directives).reduce<any[]>(
      (acc, [key, value]) => {
        return [...acc, value !== undefined ? `${key}=${value}` : null];
      },
      []
    );

    return compact(headerSegmentArray).join(", ");
  }

  getHeadersObject() {
    return {
      "Keep-Alive": this.build(),
    };
  }

  constructor({
    timeout,
    max,
  }: {
    timeout?: KeepAlive["_timeout"];
    max?: KeepAlive["_max"];
  }) {
    super();
    this.setTimeOut(timeout);
    this.setMax(max);
  }
}
