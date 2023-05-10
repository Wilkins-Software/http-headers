import { SecChUaFullVersionList } from "../src/sec-ch-ua-full-version-list.class";

describe("SecChUaFullVersionList", () => {
  it("should build a valid SecChUaFullVersionList header", () => {
    const _secCh = new SecChUaFullVersionList(
      {
        brand: "(Not(A:Brand",
        version: 8,
      },
      {
        brand: "Chromium",
        version: 98,
      }
    );
    expect(_secCh.build()).toBe(`"(Not(A:Brand";v="8", "Chromium";v="98"`);
    _secCh.setSecChUaFullVersionList(
      {
        brand: " Not A;Brand",
        version: 99,
      },
      {
        brand: "Chromium",
        version: 96,
      },
      {
        brand: "Google Chrome",
        version: 96,
      }
    );
    expect(_secCh.getHeadersObject()).toEqual({
      "Sec-CH-UA-Full-Version-List": `" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"`,
    });
  });
});
