import { SecGpc } from "../src/sec-gpc.class";

describe("SecGpc", () => {
  it("builds a SecGpc header", () => {
    const site = new SecGpc();
    expect(site.build()).toBe("1");
    expect(site.getHeadersObject()).toEqual({
      "Sec-GPC": "1",
    });
  });
});
