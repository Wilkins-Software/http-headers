import { BaseHeader } from "./base-header.class";

// Syntax is like this -> Expect: 100-continue

export class Expect extends BaseHeader {
  constructor() {
    super();
  }
  getHeadersObject(): Record<string, string> {
    return {
      Expect: "100-continue",
    };
  }

  build(): string {
    return "100-continue";
  }
}
