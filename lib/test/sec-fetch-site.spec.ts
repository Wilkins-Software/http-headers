import { SecFetchSite } from "../src/header-classes/sec-fetch-site.class";

describe("SecFetchSite", () => {
  it("builds a SecFetchSite header", () => {
    const site = new SecFetchSite("same-origin");
    expect(site.build()).toBe("same-origin");
    site.setSecFetchSite("none");
    expect(site.getHeadersObject()).toEqual({
      "Sec-Fetch-Site": "none",
    });
  });
});
