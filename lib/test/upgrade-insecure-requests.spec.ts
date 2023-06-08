import { UpgradeInsecureRequests } from "../src/header-classes/upgrade-insecure-requests.class";

describe("UpgradeInsecureRequests", () => {
  it("builds a UpgradeInsecureRequests header", () => {
    const cookie = new UpgradeInsecureRequests();
    expect(cookie.build()).toBe("1");
    expect(cookie.getHeadersObject()).toEqual({
      "Upgrade-Insecure-Requests": "1",
    });
  });
});
