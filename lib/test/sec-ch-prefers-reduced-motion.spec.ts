import { SecChPrefersReducedMotion } from "../src/header-classes/sec-ch-prefers-reduced-motion.class";

describe("SecChPrefersReducedMotion", () => {
  it("should build a valid SecChPrefersReducedMotion header", () => {
    const _secCh = new SecChPrefersReducedMotion("reduce");
    expect(_secCh.build()).toBe("reduce");
    _secCh.setSecChPrefersReducedMotion("no-");
    expect(_secCh.getHeadersObject()).toEqual({
      "Sec-CH-Prefers-Reduced-Motion": "no-",
    });
  });
});
