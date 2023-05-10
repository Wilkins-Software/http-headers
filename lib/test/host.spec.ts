import { Host } from "../src/host.class";

describe("Host", () => {
  it("builds a Host header", () => {
    const host = new Host("developer.mozilla.org");
    expect(host.build()).toBe("developer.mozilla.org:80");
    expect(host.getHost()).toBe("developer.mozilla.org");
    expect(host.getPort()).toBe("80");
    host.setHost("https://test.com");
    expect(host.getHeadersObject()).toEqual({
      Host: "https://test.com:80",
    });
    host.setPort(443);
    expect(host.build()).toBe("https://test.com:443");
  });
});
