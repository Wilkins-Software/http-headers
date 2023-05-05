import { AccessControlRequestMethods } from "../src/access-control-request-method.class";

describe("AccessControlRequestMethods", () => {
  it("builds a AccessControlRequestMethods header", () => {
    const methods = new AccessControlRequestMethods("POST", "GET", "OPTIONS");
    expect(methods.build()).toBe("POST, GET, OPTIONS");
    expect(methods.getHeadersObject()).toEqual({
      "Access-Control-Request-Method": "POST, GET, OPTIONS",
    });
  });

  it("builds valid setter AccessControlRequestMethods header", () => {
    const methods = new AccessControlRequestMethods();
    methods.setMethod("POST");
    expect(methods.build()).toBe("POST");
    expect(methods.getHeadersObject()).toEqual({
      "Access-Control-Request-Method": "POST",
    });
  });

  it("builds a AccessControlRequestMethods header with *", () => {
    const methods = new AccessControlRequestMethods("*");
    expect(methods.build()).toBe("*");
    expect(methods.getHeadersObject()).toEqual({
      "Access-Control-Request-Method": "*",
    });
  });
});
