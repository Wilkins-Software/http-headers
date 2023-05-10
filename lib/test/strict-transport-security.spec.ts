import { StrictTrnsportSecurity } from "../src/strict-transport-security.class";

describe("StrictTrnsportSecurity", () => {
  it("builds a StrictTrnsportSecurity header", () => {
    const strict = new StrictTrnsportSecurity(
      31536000,
      "includeSubDomains",
      "preload"
    );
    expect(strict.build()).toBe("max-age=31536000; includeSubDomains; preload");
    strict.setStrictTrnsportSecurity(254444444, "includeSubDomains");
    expect(strict.getHeadersObject()).toEqual({
      StrictTrnsportSecurity: "max-age=254444444; includeSubDomains",
    });
  });
});
