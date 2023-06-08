import { SecChUaArch } from "../src/header-classes/sec-ch-ua-arch.class";

describe("SecChUaArch", () => {
  it("should build a valid SecChUaArch header", () => {
    const _secCh = new SecChUaArch("x86");
    expect(_secCh.build()).toBe("x86");
    _secCh.setSecChUaArch("[arm64-v8a, armeabi-v7a, armeabi]");
    expect(_secCh.getHeadersObject()).toEqual({
      "Sec-CH-UA-Arch": `[arm64-v8a, armeabi-v7a, armeabi]`,
    });
  });
});
