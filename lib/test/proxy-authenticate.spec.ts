import { ProxyAuthenticate } from "../src/proxy-authenticate.class";

describe("getters and setters", () => {
  it("Sets private to the opposite of public", () => {
    const proxyAuthenticate = new ProxyAuthenticate({});
    proxyAuthenticate.setType("Basic");
    expect(proxyAuthenticate.getType()).toBe("Basic");
    proxyAuthenticate.setRealm("Access to the internal site");
    expect(proxyAuthenticate.getRealm()).toBe("Access to the internal site");
  });
});

describe("header object", () => {
  it("should build a valid proxy authenticate header object without realm property", () => {
    const proxyAuthenticate = new ProxyAuthenticate({
      type: "Basic",
    });
    expect(proxyAuthenticate.getHeadersObject()).toEqual({
      "Proxy-Authenticate": `Basic`,
    });
  });

  it("should build a valid proxy authenticate header object", () => {
    const proxyAuthenticate = new ProxyAuthenticate({
      type: "Basic",
      realm: "Access to the internal site",
    });
    expect(proxyAuthenticate.getHeadersObject()).toEqual({
      "Proxy-Authenticate": `Basic realm="Access to the internal site"`,
    });
  });
});

describe("build", () => {
  it("builds proxy authenticate header without realm property", () => {
    const proxyAuthenticate = new ProxyAuthenticate({
      type: "Basic",
    });

    expect(proxyAuthenticate.build()).toBe("Basic");
  });

  it("builds proxy authenticate header", () => {
    const proxyAuthenticate = new ProxyAuthenticate({
      type: "Basic",
      realm: "Access to the internal site",
    });

    expect(proxyAuthenticate.build()).toBe(
      `Basic realm="Access to the internal site"`
    );
  });
});
