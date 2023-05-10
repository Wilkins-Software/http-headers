import { BaseHeader } from "./base-header.class";

export type ViaType = {
  name?: string;
  version?: string;
  host?: string;
  port?: string;
  pseudonym?: string;
};

export class Via extends BaseHeader {
  protected _via?: string;

  constructor(...viaRes: ViaType[]) {
    super();
    this._via = viaRes
      .map(
        (via) =>
          `${via.name ? via.name + "/" : ""}${via.version ? via.version : ""}${
            via.pseudonym ? " " + via.pseudonym : ""
          }${via.host ? " " + via.host : ""}${via.port ? ":" + via.port : ""}`
      )
      .join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      Via: this.build(),
    };
  }

  build(): string {
    if (this._via) return this._via;
    return "null";
  }

  setVia(...newViaRes: ViaType[]) {
    this._via = newViaRes
      .map(
        (via) =>
          `${via.name ? via.name + "/" : ""}${via.version ? via.version : ""}${
            via.pseudonym ? " " + via.pseudonym : ""
          }${via.host ? " " + via.host : ""}${via.port ? ":" + via.port : ""}`
      )
      .join(", ");
    return this;
  }
}
