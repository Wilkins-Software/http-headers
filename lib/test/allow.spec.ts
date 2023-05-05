import { Allow } from "../src/allow.class";

describe("Allow", () => {
  it("builds a Allow header", () => {
    const allow = new Allow("POST", "GET", "OPTIONS");
    expect(allow.build()).toBe("POST, GET, OPTIONS");
    expect(allow.getHeadersObject()).toEqual({
      Allow: "POST, GET, OPTIONS",
    });
  });

  it("builds valid setter Allow header", () => {
    const allow = new Allow();
    allow.setMethod("POST");
    expect(allow.build()).toBe("POST");
    expect(allow.getHeadersObject()).toEqual({
      Allow: "POST",
    });
  });
});
