import { AccessControlAllowHeaders } from "../src/access-control-allow-headers.class";

describe("AccessControlAllowHeaders", () => {
  it("builds a AccessControlAllowHeaders header", () => {
    const headers = new AccessControlAllowHeaders(
      "Content-Type",
      "x-requested-with"
    );
    expect(headers.build()).toBe("Content-Type, x-requested-with");
    expect(headers.getHeadersObject()).toEqual({
      "Access-Control-Allow-Headers": "Content-Type, x-requested-with",
    });
  });

  it("builds valid setter AccessControlAllowHeaders header", () => {
    const headers = new AccessControlAllowHeaders();
    headers.setHeader("X-Custom-Header");
    expect(headers.build()).toBe("X-Custom-Header");
    expect(headers.getHeadersObject()).toEqual({
      "Access-Control-Allow-Headers": "X-Custom-Header",
    });
  });

  it("builds a AccessControlAllowHeaders header with *", () => {
    const headers = new AccessControlAllowHeaders("*");
    expect(headers.build()).toBe("*");
    expect(headers.getHeadersObject()).toEqual({
      "Access-Control-Allow-Headers": "*",
    });
  });
});
