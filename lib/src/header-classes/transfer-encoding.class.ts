import { BaseHeader } from "./base-header.class";

export type TransferEncodingType = "chunked" | "compress" | "deflate" | "gzip";

export type TransferEncodingTypeObject =
  | Partial<Record<TransferEncodingType, boolean>>
  | "*";

export class TransferEncoding extends BaseHeader {
  protected _transferEncodingType?: TransferEncodingTypeObject;

  constructor(transferEncodingType?: TransferEncodingTypeObject) {
    super();
    this._transferEncodingType = transferEncodingType;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Transfer-Encoding": this.build(),
    };
  }

  build(): string {
    if (!this._transferEncodingType) {
      return "";
    }

    if (this._transferEncodingType === "*") {
      return "*";
    }

    return `${Object.entries(this._transferEncodingType)
      .reduce((acc, [key, value]) => {
        if (value) {
          return [...acc, key];
        }

        return acc;
      }, [] as string[])
      .join(", ")}`;
  }

  setTransferEncodingType(
    transferEncodingType: TransferEncodingType,
    value: boolean
  ) {
    if (!this._transferEncodingType || this._transferEncodingType === "*") {
      this._transferEncodingType = {};
    }

    this._transferEncodingType[transferEncodingType] = value;
    return this;
  }

  setTransferEncodingTypes(transferEncodingTypes: TransferEncodingTypeObject) {
    this._transferEncodingType = transferEncodingTypes;
    return this;
  }
}
