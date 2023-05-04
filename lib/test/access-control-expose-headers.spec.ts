import { AccessControlExposeHeaders } from "../src/access-control-expose-headers.class";

describe("AccessControlExposeHeaders", () => {
  it("builds a AccessControlExposeHeaders header", () => {
    const header = new AccessControlExposeHeaders(
      "Content-Encoding",
      "Kuma-Revision"
    );
    expect(header.build()).toBe("Content-Encoding, Kuma-Revision");
    expect(header.getHeadersObject()).toEqual({
      "Access-Control-Expose-Headers": "Content-Encoding, Kuma-Revision",
    });
  });

  it("builds valid setter AccessControlExposeHeaders header", () => {
    const header = new AccessControlExposeHeaders();
    header.setHeaders("null");
    expect(header.build()).toBe("null");
    expect(header.getHeadersObject()).toEqual({
      "Access-Control-Expose-Headers": "null",
    });
  });

  it("builds a AccessControlExposeHeaders header with *", () => {
    const header = new AccessControlExposeHeaders("*");
    expect(header.build()).toBe("*");
    expect(header.getHeadersObject()).toEqual({
      "Access-Control-Expose-Headers": "*",
    });
  });
});
