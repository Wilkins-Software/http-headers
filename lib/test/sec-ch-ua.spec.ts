import { SecChUa } from "../src/header-classes/sec-ch-ua.class";

describe("SecChUa", () => {
  it("should build a valid SecChUa header", () => {
    const _secCh = new SecChUa(
      {
        brand: "(Not(A:Brand",
        version: 8,
      },
      {
        brand: "Chromium",
        version: 98,
      }
    );
    expect(_secCh.build()).toBe(`"(Not(A:Brand";v="8", "Chromium";v="98"`);
    _secCh.setSecChUa(
      {
        brand: " Not A;Brand",
        version: 99,
      },
      {
        brand: "Chromium",
        version: 96,
      },
      {
        brand: "Google Chrome",
        version: 96,
      }
    );
    expect(_secCh.getHeadersObject()).toEqual({
      "Sec-CH-UA": `" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"`,
    });
  });
});
