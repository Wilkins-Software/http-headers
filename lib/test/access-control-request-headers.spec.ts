import { AccessControlRequestHeaders } from "../src/access-control-request-headers.class";

describe("AccessControlRequestHeaders", () => {
  it("builds a AccessControlRequestHeaders header", () => {
    const header = new AccessControlRequestHeaders(
      "X-PINGOTHER",
      "Content-Type"
    );
    expect(header.build()).toBe("X-PINGOTHER, Content-Type");
    expect(header.getHeadersObject()).toEqual({
      "Access-Control-Request-Headers": "X-PINGOTHER, Content-Type",
    });
  });

  it("builds valid setter AccessControlRequestHeaders header", () => {
    const header = new AccessControlRequestHeaders();
    header.setHeaders("Content-Type");
    expect(header.build()).toBe("Content-Type");
    expect(header.getHeadersObject()).toEqual({
      "Access-Control-Request-Headers": "Content-Type",
    });
  });
});
