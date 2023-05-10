import { ReferrerPolicy } from "../src/referrer-policy.class";

describe("ReferrerPolicy", () => {
  it("should build a valid ReferrerPolicy header", () => {
    const policy = new ReferrerPolicy("origin");
    expect(policy.build()).toBe("origin");
    policy.setReferrerPolicy("origin-when-cross-origin", "same-origin");
    expect(policy.getHeadersObject()).toEqual({
      "Referrer-Policy": "origin-when-cross-origin, same-origin",
    });
  });
});
