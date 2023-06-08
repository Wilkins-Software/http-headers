import { BaseHeader } from "./base-header.class";
import * as TimeConverters from "@wilkins-software/time-conversion-helpers";

type MilisecondsConvertible = (timeConverters: typeof TimeConverters) => {
  toMilliseconds: () => number;
};

type PerformanceServerTiming = {
  name: string;
  description?: string;
  duration?: MilisecondsConvertible;
};

export class ServerTiming extends BaseHeader {
  protected _serverTiming: PerformanceServerTiming[];

  constructor(serverTiming: PerformanceServerTiming[]) {
    super();
    this._serverTiming = serverTiming;
  }

  public getServerTiming(): string {
    return this._serverTiming
      .map((timing) => {
        const { name, description, duration } = timing;
        const durationString = duration
          ? `;dur=${duration(TimeConverters).toMilliseconds()}`
          : "";
        const descriptionString = description ? `;desc="${description}"` : "";
        return `${name}${descriptionString}${durationString}`;
      })
      .join(",");
  }

  public setServerTiming(serverTiming: PerformanceServerTiming[]) {
    this._serverTiming = serverTiming;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Server-Timing": this.build(),
    };
  }

  build(): string {
    return this.getServerTiming().toString();
  }
}
