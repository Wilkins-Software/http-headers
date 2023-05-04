import { AccessControlAllowCredentials } from "../src/access-control-allow-credentials.class";

describe("AccessControlAllowCredentials", () => {
  it("should build a valid AccessControlAllowCredentials header", () => {
    const credentials = new AccessControlAllowCredentials(true);
    expect(credentials.build()).toBe("true");
    expect(credentials.getHeadersObject()).toEqual({
      "Access-Control-Allow-Credentials": "true",
    });
  });

  it("should set a valid AccessControlAllowCredentials header", () => {
    const credentials = new AccessControlAllowCredentials(false);
    expect(credentials.setCredentials(true).build()).toBe("true");
  });
});
