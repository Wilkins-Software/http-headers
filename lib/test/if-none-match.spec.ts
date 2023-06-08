import { IfNoneMatch } from "../src/header-classes/if-none-match.class";

describe("IfNoneMatch", () => {
  it("builds a IfNoneMatch header", () => {
    const ifMatch = new IfNoneMatch("67ab43", "54ed21", "7892dd");
    expect(ifMatch.build()).toBe(`67ab43, 54ed21, 7892dd`);
    ifMatch.setIfNoneMatch("*");
    expect(ifMatch.getHeadersObject()).toEqual({
      "If-Match": "*",
    });
  });
});
