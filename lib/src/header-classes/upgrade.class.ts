import { BaseHeader } from "./base-header.class";

export type UpgradeType = {
  name: string;
  version?: string;
};

export class Upgrade extends BaseHeader {
  protected _upgrade?: string;

  constructor(...upgradeRes: UpgradeType[]) {
    super();
    this._upgrade = upgradeRes
      .map(
        (upgrade) =>
          `${upgrade.name}${upgrade.version ? `/${upgrade.version}` : ""}`
      )
      .join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      Upgrade: this.build(),
    };
  }

  build(): string {
    if (this._upgrade) return this._upgrade;
    return "null";
  }

  setUpgrade(...newUpgradeRes: UpgradeType[]) {
    this._upgrade = newUpgradeRes
      .map(
        (upgrade) =>
          `${upgrade.name}${upgrade.version ? `/${upgrade.version}` : ""}`
      )
      .join(", ");
    return this;
  }
}
