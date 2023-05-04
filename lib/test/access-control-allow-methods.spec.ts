import { AccessControlAllowMethods } from "../src/access-control-allow-methods.class";

describe("AccessControlAllowMethods", () => {
  it("builds a AccessControlAllowMethods header", () => {
    const methods = new AccessControlAllowMethods("POST", "GET", "OPTIONS");
    expect(methods.build()).toBe("POST, GET, OPTIONS");
    expect(methods.getHeadersObject()).toEqual({
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    });
  });

  it("builds valid setter AccessControlAllowMethods header", () => {
    const methods = new AccessControlAllowMethods();
    methods.setMethod("POST");
    expect(methods.build()).toBe("POST");
    expect(methods.getHeadersObject()).toEqual({
      "Access-Control-Allow-Methods": "POST",
    });
  });

  it("builds a AccessControlAllowMethods header with *", () => {
    const methods = new AccessControlAllowMethods("*");
    expect(methods.build()).toBe("*");
    expect(methods.getHeadersObject()).toEqual({
      "Access-Control-Allow-Methods": "*",
    });
  });
});
