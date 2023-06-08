import { SecChUaBitness } from "../src/header-classes/sec-ch-ua-bitness.class";

describe("SecChUaBitness", () => {
  it("should build a valid SecChUaBitness header", () => {
    const secCH = new SecChUaBitness("64");
    expect(secCH.build()).toBe("64");
    secCH.setSecChUaBitness("32");
    expect(secCH.getHeadersObject()).toEqual({
      "Sec-CH-UA-Bitness": "32",
    });
  });
});
