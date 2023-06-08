import { BaseHeader } from "./base-header.class";

export type ContentLanguageType =
  | "en"
  | "fr"
  | "es"
  | "de"
  | "ja"
  | "zh"
  | "it"
  | "pt"
  | "ar"
  | "ru"
  | string;

export class ContentLanguage extends BaseHeader {
  protected _contentLanguage?: string;

  constructor(...contentLanguageRes: ContentLanguageType[]) {
    super();
    this._contentLanguage = contentLanguageRes.join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Content-Language": this.build(),
    };
  }

  build(): string {
    if (this._contentLanguage) return this._contentLanguage;
    return "null";
  }

  setContent(...newContentLanguageRes: ContentLanguageType[]) {
    this._contentLanguage = newContentLanguageRes.join(", ");
    return this;
  }
}
