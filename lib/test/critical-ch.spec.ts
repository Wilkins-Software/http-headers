import { CriticalCH } from "../src/critical-ch.class";

describe("CriticalCH", () => {
  it("builds a CriticalCH header", () => {
    const criticalCH = new CriticalCH("Sec-Fetch-Mode", "Sec-Fetch-Site");
    expect(criticalCH.build()).toBe("Sec-Fetch-Mode, Sec-Fetch-Site");
    criticalCH.setContent(
      "Content-Security-Policy",
      "Origin",
      "Referer",
      "Sec-Fetch-Dest",
      "Sec-Fetch-Mode",
      "Sec-Fetch-Site",
      "User-Agent"
    );
    expect(criticalCH.getHeadersObject()).toEqual({
      "Critical-CH":
        "Content-Security-Policy, Origin, Referer, Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site, User-Agent",
    });
  });
});
