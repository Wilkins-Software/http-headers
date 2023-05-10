import { SecChUaPlatform } from "../src/sec-ch-ua-platform.class";

describe("SecChUaPlatform", () => {
  it("should build a valid SecChUaPlatform header", () => {
    const _secCh = new SecChUaPlatform("Android");
    expect(_secCh.build()).toBe("Android");
    _secCh.setSecChUaPlatform("Chrome OS");
    expect(_secCh.getHeadersObject()).toEqual({
      "Sec-CH-UA-Platform": "Chrome OS",
    });
  });
});
