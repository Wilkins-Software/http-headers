import { AccessControlAllowOrigin } from "../src/access-control-allow-origin.class";

describe("AccessControlAllowOrigin", () => {
  it("builds a AccessControlAllowOrigin header", () => {
    const origin = new AccessControlAllowOrigin(
      "https://example.com",
      "https://subdomain.example.com"
    );
    expect(origin.build()).toBe(
      "https://example.com, https://subdomain.example.com"
    );
    expect(origin.getHeadersObject()).toEqual({
      "Access-Control-Allow-Origin":
        "https://example.com, https://subdomain.example.com",
    });
  });

  it("builds valid setter AccessControlAllowOrigin header", () => {
    const origin = new AccessControlAllowOrigin();
    origin.setOrigin("null");
    expect(origin.build()).toBe("null");
    expect(origin.getHeadersObject()).toEqual({
      "Access-Control-Allow-Origin": "null",
    });
  });

  it("builds a AccessControlAllowOrigin header with *", () => {
    const origin = new AccessControlAllowOrigin("*");
    expect(origin.build()).toBe("*");
    expect(origin.getHeadersObject()).toEqual({
      "Access-Control-Allow-Origin": "*",
    });
  });
});
