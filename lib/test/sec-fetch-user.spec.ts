import { SecFetchUser } from "../src/header-classes/sec-fetch-user.class";

describe("SecFetchUser", () => {
  it("builds a SecFetchUser header", () => {
    const site = new SecFetchUser();
    expect(site.build()).toBe("?1");
    expect(site.getHeadersObject()).toEqual({
      "Sec-Fetch-User": "?1",
    });
  });
});
