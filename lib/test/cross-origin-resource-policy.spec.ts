import { CrossOriginResourcePolicy } from "../src/cross-origin-resource-policy.class";

describe("CrossOriginResourcePolicy", () => {
  it("should build a valid CrossOriginResourcePolicy header", () => {
    const policy = new CrossOriginResourcePolicy("cross-origin");
    expect(policy.build()).toBe("cross-origin");
    policy.setPolicy("same-origin");
    expect(policy.getHeadersObject()).toEqual({
      "Cross-Origin-Resource-Policy": "same-origin",
    });
  });
});
