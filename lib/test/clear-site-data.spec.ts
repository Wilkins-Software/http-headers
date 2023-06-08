import { ClearSiteData } from "../src/header-classes/clear-site-data.class";

describe("ClearSiteData", () => {
  it("builds a clear-site-data header", () => {
    const clearSiteData = new ClearSiteData({
      cache: true,
      cookies: true,
      storage: true,
      executionContexts: true,
    });
    expect(clearSiteData.build()).toBe(
      "cache, cookies, storage, executionContexts"
    );
    expect(clearSiteData.getHeadersObject()).toEqual({
      "Clear-Site-Data": "cache, cookies, storage, executionContexts",
    });
  });

  it("builds a clear-site-data header with *", () => {
    const clearSiteData = new ClearSiteData("*");
    expect(clearSiteData.build()).toBe("*");
    expect(clearSiteData.getHeadersObject()).toEqual({
      "Clear-Site-Data": "*",
    });
  });
});
