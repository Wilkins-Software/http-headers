import { BaseHeader } from "./base-header.class";

export class SourceMap extends BaseHeader {
  protected _sourceMap: string;

  constructor(sourceMap: string) {
    super();
    this._sourceMap = sourceMap;
  }

  public getSourceMap(): string {
    return this._sourceMap;
  }
  public setSourceMap(sourceMap: string) {
    this._sourceMap = sourceMap;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      SourceMap: this.build(),
    };
  }

  build(): string {
    return this.getSourceMap().toString();
  }
}
