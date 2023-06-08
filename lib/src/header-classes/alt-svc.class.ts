import { BaseHeader } from "./base-header.class";

export class AltSvc extends BaseHeader {
  protected _altsvc: string;
  protected _protocalId: string;
  protected _authority: string;
  protected _ma: number;
  protected _persist: number;
  protected _clear: string;

  constructor() {
    super();
    this._altsvc = "null";
    this._protocalId = "null";
    this._authority = "null";
    this._ma = 0;
    this._persist = 0;
    this._clear = "null";
  }

  public getAltSvc(): string {
    this._altsvc =
      this._clear === "clear"
        ? this._clear
        : (this._protocalId === "null" || this._authority === "null"
            ? ""
            : this._protocalId + `="` + this._authority + `";`) +
          (this._ma === 0 ? "" : " ma=" + this._ma + ";") +
          (this._persist === 0 ? "" : " persist=" + this._persist.toString());
    return this._altsvc;
  }

  public setClear(status: boolean) {
    if (status) {
      this._altsvc = "null";
      this._protocalId = "null";
      this._authority = "null";
      this._ma = 0;
      this._persist = 0;
      this._clear = "null";
      this._clear = "clear";
      return this;
    }
    this._clear = "null";
    return this;
  }

  public setProtocalIdAuthority(id: string, auth: string) {
    this._protocalId = id;
    this._authority = auth;
    return this;
  }

  public setMaxAge(age: number) {
    this._ma = age;
    return this;
  }

  public setPersist(persist: number) {
    this._persist = persist;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Alt-Svc": this.build(),
    };
  }

  build(): string {
    return this.getAltSvc().toString();
  }
}
