import { BaseHeader } from "./base-header.class";

export class EarlyData extends BaseHeader {
  constructor() {
    super();
  }
  getHeadersObject(): Record<string, string> {
    return {
      "Early-Data": "1",
    };
  }

  build(): string {
    return "1";
  }
}
