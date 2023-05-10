import { SecFetchMode } from "../src/sec-fetch-mode.class";

describe("SecFetchMode", () => {
  it("builds a SecFetchMode header", () => {
    const mode = new SecFetchMode("navigate");
    expect(mode.build()).toBe("navigate");
    mode.setSecFetchMode("same-origin");
    expect(mode.getHeadersObject()).toEqual({
      "Sec-Fetch-Mode": "same-origin",
    });
  });
});
