import { BaseHeader } from "./base-header.class";

export class SaveData extends BaseHeader {
  protected _saveData: string;

  constructor(saveData: "on" | "off") {
    super();
    this._saveData = saveData.toString();
  }

  public getSaveData(): string {
    return this._saveData;
  }
  public setSaveData(saveData: "on" | "off") {
    this._saveData = saveData.toString();
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Save-Data": this.build(),
    };
  }

  build(): string {
    return this.getSaveData().toString();
  }
}
