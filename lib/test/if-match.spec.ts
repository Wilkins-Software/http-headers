import { IfMatch } from "../src/if-match.class";

describe("IfMatch", () => {
  it("builds a IfMatch header", () => {
    const ifMatch = new IfMatch("67ab43", "54ed21", "7892dd");
    expect(ifMatch.build()).toBe(`"67ab43", "54ed21", "7892dd"`);
    ifMatch.setIfMatch("*");
    expect(ifMatch.getHeadersObject()).toEqual({
      "If-Match": "*",
    });
  });
});
