import { ProxyAuthorization } from "../src/proxy-authorization.class";

describe("getters and setters", () => {
  it("Sets private to the opposite of public", () => {
    const proxyAuthenticate = new ProxyAuthorization({});
    proxyAuthenticate.setType("Basic");
    expect(proxyAuthenticate.getType()).toBe("Basic");
    proxyAuthenticate.setCredentials("YWxhZGRpbjpvcGVuc2VzYW1l");
    expect(proxyAuthenticate.getCredentials()).toBe("YWxhZGRpbjpvcGVuc2VzYW1l");
  });
});

describe("header object", () => {
  it("should build a valid proxy authorization header object without credentials property", () => {
    const proxyAuthenticate = new ProxyAuthorization({
      type: "Basic",
    });
    expect(proxyAuthenticate.getHeadersObject()).toEqual({
      "Proxy-Authorization": `Basic`,
    });
  });

  it("should build a valid proxy authorization header object", () => {
    const proxyAuthenticate = new ProxyAuthorization({
      type: "Basic",
      credentials: "YWxhZGRpbjpvcGVuc2VzYW1l",
    });
    expect(proxyAuthenticate.getHeadersObject()).toEqual({
      "Proxy-Authorization": "Basic YWxhZGRpbjpvcGVuc2VzYW1l",
    });
  });
});

describe("build", () => {
  it("builds proxy authorization header without credentials property", () => {
    const proxyAuthenticate = new ProxyAuthorization({
      type: "Basic",
    });

    expect(proxyAuthenticate.build()).toBe("Basic");
  });

  it("builds proxy authorization header", () => {
    const proxyAuthenticate = new ProxyAuthorization({
      type: "Basic",
      credentials: "YWxhZGRpbjpvcGVuc2VzYW1l",
    });

    expect(proxyAuthenticate.build()).toBe("Basic YWxhZGRpbjpvcGVuc2VzYW1l");
  });
});
