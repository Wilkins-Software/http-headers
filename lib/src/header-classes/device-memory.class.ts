import { BaseHeader } from "./base-header.class";

export class DeviceMemory extends BaseHeader {
  protected _deviceMemory: number;

  constructor(deviceMemory: number) {
    super();
    this._deviceMemory = deviceMemory;
  }

  public getDeviceMemory(): number {
    return this._deviceMemory;
  }
  public setDeviceMemory(deviceMemory: number) {
    this._deviceMemory = deviceMemory;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Device-Memory": this.build(),
    };
  }

  build(): string {
    return this.getDeviceMemory().toString();
  }
}
