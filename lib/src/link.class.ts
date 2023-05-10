import { BaseHeader } from "./base-header.class";

// Syntax is like -> Link: <uri-reference>; param1=value1; param2="value2"
// The angle brackets < and > are used to wrap the URI reference, which is a common convention to indicate that it is a single entity.

export type LinkType = {
  name: string;
  value: string;
};

export type LinkResType = {
  uri: string;
  param: LinkType[];
};

export class Link extends BaseHeader {
  protected _link?: string;

  constructor(...linkRes: LinkResType[]) {
    super();
    this._link = linkRes
      .map(
        (link) =>
          `<${link.uri}>; ${link.param
            .map((param) => `${param.name}="${param.value}"`)
            .join("; ")}`
      )
      .join(", ");
  }

  getHeadersObject(): Record<string, string> {
    return {
      Link: this.build(),
    };
  }

  build(): string {
    if (this._link) return this._link;
    return "null";
  }

  setLink(...newLinkRes: LinkResType[]) {
    this._link = newLinkRes
      .map(
        (link) =>
          `<${link.uri}>; ${link.param
            .map((param) => `${param.name}="${param.value}"`)
            .join("; ")}`
      )
      .join(", ");
    return this;
  }
}
