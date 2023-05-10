import { BaseHeader } from "./base-header.class";

export type PermissionsPolicyDirectiveType =
  | "accelerometer"
  | "ambient-light-sensor"
  | "autoplay"
  | "battery"
  | "camera"
  | "display-capture"
  | "document-domain"
  | "encrypted-media"
  | "execution-while-not-rendered"
  | "execution-while-out-of-viewport"
  | "fullscreen"
  | "gamepad"
  | "geolocation"
  | "gyroscope"
  | "hid"
  | "identity-credentials-get"
  | "idle-detection"
  | "local-fonts"
  | "magnetometer"
  | "microphone"
  | "midi"
  | "payment"
  | "picture-in-picture"
  | "publickey-credentials-get"
  | "screen-wake-lock"
  | "serial"
  | "speaker-selection"
  | "usb"
  | "web-share"
  | "xr-spatial-tracking";

export type PermissionsPolicyType = {
  directive: PermissionsPolicyDirectiveType;
  allowlist: string | "*";
};

export class PermissionsPolicy extends BaseHeader {
  protected _permissionsPolicyType?: string;

  constructor(...permissionsPolicyTypeRes: PermissionsPolicyType[]) {
    super();
    this._permissionsPolicyType = permissionsPolicyTypeRes
      .map(
        (item) =>
          `${item.directive}=${
            item.allowlist === "*" ? "*" : `(${item.allowlist})`
          }`
      )
      .join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Permissions-Policy": this.build(),
    };
  }

  build(): string {
    if (this._permissionsPolicyType) return this._permissionsPolicyType;
    return "null";
  }

  setPermissionsPolicy(...newPermissionsPolicyRes: PermissionsPolicyType[]) {
    this._permissionsPolicyType = newPermissionsPolicyRes
      .map(
        (item) =>
          `${item.directive}=${
            item.allowlist === "*" ? "*" : `(${item.allowlist})`
          }`
      )
      .join(", ");
    return this;
  }
}
