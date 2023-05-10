import { SecChUaPlatformVersion } from "../src/sec-ch-ua-platform-version.class";

describe("SecChUaPlatformVersion", () => {
  it("builds a SecChUaPlatformVersion header", () => {
    const version = new SecChUaPlatformVersion("11.0.0");
    expect(version.build()).toBe("11.0.0");
    version.setSecChUaPlatformVersion("10.0.0");
    expect(version.getHeadersObject()).toEqual({
      "Sec-CH-UA-Platform-Version": "10.0.0",
    });
  });
});
