import { BaseHeader } from "./base-header.class";

// Syntax is like -> Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
// # separated by semicolon
// Forwarded: for=192.0.2.60;proto=http;by=203.0.113.43
// # Values from multiple proxy servers can be appended using a comma
// Forwarded: for=192.0.2.43, for=198.51.100.17

export type ForwardedType = {
  key: "by" | "for" | "host" | "proto";
  value: string;
};

export class Forwarded extends BaseHeader {
  protected _forwarded?: string;

  constructor(...forwardedRes: ForwardedType[]) {
    super();
    this._forwarded = forwardedRes
      .map(
        (forward, index, forwardArray) =>
          `${forward.key}=${forward.value}${
            index < forwardArray.length - 1 &&
            forward.key === forwardArray[index + 1].key
              ? ", "
              : ";"
          }`
      )
      .join("")
      .slice(0, -1);
  }

  getHeadersObject(): Record<string, string> {
    return {
      Forwarded: this.build(),
    };
  }

  build(): string {
    if (this._forwarded) return this._forwarded;
    return "null";
  }

  setForwarded(...newForwardedRes: ForwardedType[]) {
    this._forwarded = newForwardedRes
      .map(
        (forward, index, forwardArray) =>
          `${forward.key}=${forward.value}${
            index < forwardArray.length - 1 &&
            forward.key === forwardArray[index + 1].key
              ? ", "
              : ";"
          }`
      )
      .join("")
      .slice(0, -1);
    return this;
  }
}
