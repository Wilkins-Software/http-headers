import { AccessControlMaxAge } from "../src/access-control-max-age.class";

describe("AccessControlMaxAge", () => {
  it("should build a valid AccessControlMaxAge header", () => {
    const maxAge = new AccessControlMaxAge(600);
    expect(maxAge.build()).toBe("600");
    expect(maxAge.getHeadersObject()).toEqual({
      "Access-Control-Max-Age": "600",
    });
  });

  it("should set a valid AccessControlMaxAge header", () => {
    const maxAge = new AccessControlMaxAge(500);
    expect(maxAge.setAccessControlMaxAge(600).build()).toBe("600");
  });
});
