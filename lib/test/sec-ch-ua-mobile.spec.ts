import { SecChUaMobile } from "../src/sec-ch-ua-mobile.class";

describe("SecChUaMobile", () => {
  it("should build a valid SecChUaMobile header", () => {
    const _secCh = new SecChUaMobile("?0");
    expect(_secCh.build()).toBe("?0");
    _secCh.setSecChUaMobile("?1");
    expect(_secCh.getHeadersObject()).toEqual({
      "Sec-CH-UA-Mobile": "?1",
    });
  });
});
