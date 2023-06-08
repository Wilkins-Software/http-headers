import { CrossOriginOpenerPolicy } from "../src/header-classes/cross-origin-opener-policy.class";

describe("CrossOriginOpenerPolicy", () => {
  it("should build a valid CrossOriginOpenerPolicy header", () => {
    const policy = new CrossOriginOpenerPolicy("unsafe-none");
    expect(policy.build()).toBe("unsafe-none");
    policy.setPolicy("same-origin");
    expect(policy.getHeadersObject()).toEqual({
      "Cross-Origin-Opener-Policy": "same-origin",
    });
  });
});
